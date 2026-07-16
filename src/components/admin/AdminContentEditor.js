"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

function formatPageName(pageName) {
  return pageName
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function groupRowsByPage(rows) {
  return rows.reduce((groups, row) => {
    const pageName = row.page || "uncategorized";

    if (!groups[pageName]) {
      groups[pageName] = [];
    }

    groups[pageName].push(row);
    return groups;
  }, {});
}

// AdminContentEditor is a Client Component because it needs browser state:
// loading rows, editing textarea values, and saving updates without reloading.
export default function AdminContentEditor() {
  const [contentRows, setContentRows] = useState([]);
  const [editedValues, setEditedValues] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [saveStatusByPage, setSaveStatusByPage] = useState({});

  const rowsGroupedByPage = useMemo(() => groupRowsByPage(contentRows), [contentRows]);

  useEffect(() => {
    async function fetchContentRows() {
      setErrorMessage("");
      setIsLoading(true);

      const supabase = createClient();

      // Select every content row. Ordering keeps the admin form predictable.
      const { data, error } = await supabase
        .from("site_content")
        .select("id, page, section_key, label, value, updated_at")
        .order("page", { ascending: true })
        .order("section_key", { ascending: true });

      if (error) {
        setErrorMessage("Could not load content sections. Please try again.");
        setIsLoading(false);
        return;
      }

      const rows = data || [];
      setContentRows(rows);

      // Store textarea values by row id so each field can be edited independently.
      const startingValues = {};
      rows.forEach((row) => {
        startingValues[row.id] = row.value || "";
      });

      setEditedValues(startingValues);
      setIsLoading(false);
    }

    fetchContentRows();
  }, []);

  function updateTextareaValue(rowId, nextValue) {
    setEditedValues((currentValues) => ({
      ...currentValues,
      [rowId]: nextValue,
    }));
  }

  async function savePageSection(pageName, rowsForPage) {
    setSaveStatusByPage((currentStatus) => ({
      ...currentStatus,
      [pageName]: { type: "saving", message: "Saving..." },
    }));

    const supabase = createClient();

    try {
      // Update every row in this page section by matching its id.
      const updateRequests = rowsForPage.map((row) =>
        supabase
          .from("site_content")
          .update({
            value: editedValues[row.id] || "",
            updated_at: new Date().toISOString(),
          })
          .eq("id", row.id),
      );

      const results = await Promise.all(updateRequests);
      const failedUpdate = results.find((result) => result.error);

      if (failedUpdate) {
        throw failedUpdate.error;
      }

      // Keep local row data in sync with the saved textarea values.
      setContentRows((currentRows) =>
        currentRows.map((row) => {
          if (row.page !== pageName) {
            return row;
          }

          return {
            ...row,
            value: editedValues[row.id] || "",
            updated_at: new Date().toISOString(),
          };
        }),
      );

      setSaveStatusByPage((currentStatus) => ({
        ...currentStatus,
        [pageName]: { type: "success", message: "Saved!" },
      }));

      setTimeout(() => {
        setSaveStatusByPage((currentStatus) => ({
          ...currentStatus,
          [pageName]: null,
        }));
      }, 2500);
    } catch {
      setSaveStatusByPage((currentStatus) => ({
        ...currentStatus,
        [pageName]: {
          type: "error",
          message: "Something went wrong while saving. Please try again.",
        },
      }));
    }
  }

  if (isLoading) {
    return (
      <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-stone-600">Loading content sections...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className="rounded-3xl border border-red-200 bg-red-50 p-8 shadow-sm">
        <p className="font-medium text-red-700">{errorMessage}</p>
      </section>
    );
  }

  if (contentRows.length === 0) {
    return (
      <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-stone-900">Content editor</h1>
        <p className="mt-4 leading-7 text-stone-600">
          No content sections yet — add some rows in Supabase to get started.
        </p>
      </section>
    );
  }

  return (
    <div className="grid gap-8">
      <header>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-stone-500">
          Dashboard
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-stone-900">Content editor</h1>
        <p className="mt-4 max-w-2xl leading-7 text-stone-600">
          Edit text from the site_content table. Each section saves its own page rows.
        </p>
      </header>

      {Object.entries(rowsGroupedByPage).map(([pageName, rowsForPage]) => {
        const saveStatus = saveStatusByPage[pageName];
        const isSaving = saveStatus?.type === "saving";

        return (
          <section
            className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8"
            key={pageName}
          >
            <div className="flex flex-col gap-4 border-b border-stone-200 pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
                  Page
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-stone-900">
                  {formatPageName(pageName)}
                </h2>
              </div>

              <button
                className="rounded-full bg-stone-900 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSaving}
                onClick={() => savePageSection(pageName, rowsForPage)}
                type="button"
              >
                {isSaving ? "Saving..." : "Save"}
              </button>
            </div>

            <div className="mt-6 grid gap-6">
              {rowsForPage.map((row) => (
                <label className="grid gap-2" key={row.id}>
                  <span className="text-sm font-semibold text-stone-700">{row.label}</span>
                  <textarea
                    className="min-h-32 rounded-2xl border border-stone-300 bg-white px-4 py-3 text-base leading-7 text-stone-900 outline-none transition focus:border-stone-600 focus:ring-2 focus:ring-stone-200"
                    onChange={(event) => updateTextareaValue(row.id, event.target.value)}
                    value={editedValues[row.id] || ""}
                  />
                </label>
              ))}
            </div>

            {saveStatus && (
              <p
                className={`mt-5 rounded-2xl px-4 py-3 text-sm font-medium ${
                  saveStatus.type === "error"
                    ? "border border-red-200 bg-red-50 text-red-700"
                    : "border border-emerald-200 bg-emerald-50 text-emerald-700"
                }`}
              >
                {saveStatus.message}
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}

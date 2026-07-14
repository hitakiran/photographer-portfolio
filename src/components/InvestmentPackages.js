"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// InvestmentPackages is a Client Component because the tabs change the
// selected package category and read the URL hash, like /investment#couples.
export default function InvestmentPackages({ categories }) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);

  useEffect(() => {
    function selectCategoryFromHash() {
      const hashId = window.location.hash.replace("#", "");
      const matchingCategory = categories.find((category) => category.id === hashId);

      if (matchingCategory) {
        setActiveCategoryId(matchingCategory.id);
      }
    }

    selectCategoryFromHash();
    window.addEventListener("hashchange", selectCategoryFromHash);

    return () => window.removeEventListener("hashchange", selectCategoryFromHash);
  }, [categories]);

  function chooseCategory(categoryId) {
    setActiveCategoryId(categoryId);
  }

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) || categories[0];

  return (
    <section className="investment-packages-section" aria-labelledby="investment-packages-heading">
      <div className="investment-tabs" role="tablist" aria-label="Choose package category">
        {categories.map((category) => (
          <a
            aria-selected={activeCategory.id === category.id}
            className={activeCategory.id === category.id ? "is-active" : ""}
            href={`#${category.id}`}
            key={category.id}
            onClick={() => chooseCategory(category.id)}
            role="tab"
          >
            {category.name}
          </a>
        ))}
      </div>

      {/* This id lets direct links like /investment#wedding land on this category. */}
      <div className="investment-category-panel" id={activeCategory.id}>
        <p className="section-eyebrow">Packages</p>
        <h2 id="investment-packages-heading">{activeCategory.name}</h2>
        <p>{activeCategory.intro}</p>

        <div className="investment-package-grid">
          {activeCategory.packages.map((packageItem) => (
            <article className="investment-package-card" key={packageItem.id}>
              <div>
                <p className="investment-package-label">{activeCategory.name}</p>
                <h3>{packageItem.name}</h3>
                <strong>{packageItem.price}</strong>
              </div>

              <ul>
                {packageItem.includes.map((includedItem) => (
                  <li key={includedItem}>{includedItem}</li>
                ))}
              </ul>

              <Link className="text-button" href="/#contact">
                Book This Package
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

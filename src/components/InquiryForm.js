"use client";

import { useState } from "react";

// These are placeholder Zoom times for now. Later, Supabase can replace
// this array with real availability from Carla's calendar.
const meetingOptions = [
  { id: "chat-aug-04-10", label: "August 4", time: "10:00 AM" },
  { id: "chat-aug-04-6", label: "August 4", time: "6:00 PM" },
  { id: "chat-aug-06-11", label: "August 6", time: "11:00 AM" },
  { id: "chat-aug-08-5", label: "August 8", time: "5:00 PM" },
];

// InquiryForm is a Client Component because it shows/hides fields based on
// the visitor's choices.
export default function InquiryForm({ categories }) {
  const [sessionType, setSessionType] = useState(categories[0].id);
  const [selectedPackage, setSelectedPackage] = useState(categories[0].packages[0].id);
  const [dateInput, setDateInput] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);
  const [foundMe, setFoundMe] = useState("Instagram");

  const activeCategory =
    categories.find((category) => category.id === sessionType) || categories[0];

  function handleSessionChange(event) {
    const nextSessionType = event.target.value;
    const nextCategory =
      categories.find((category) => category.id === nextSessionType) || categories[0];

    setSessionType(nextSessionType);
    setSelectedPackage(nextCategory.packages[0].id);
  }

  function addDesiredDate() {
    // Do nothing if the date is blank or already selected.
    if (!dateInput || selectedDates.includes(dateInput)) {
      return;
    }

    setSelectedDates([...selectedDates, dateInput]);
    setDateInput("");
  }

  function removeDesiredDate(dateToRemove) {
    setSelectedDates(selectedDates.filter((date) => date !== dateToRemove));
  }

  function handleSubmit(event) {
    // This prevents the browser from refreshing the page.
    // Real submit logic can be added later when Supabase or email is connected.
    event.preventDefault();
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="inquiry-form-grid">
        <label>
          <span>First Name(s)</span>
          <input name="firstNames" type="text" />
        </label>

        <label>
          <span>Last Name(s)</span>
          <input name="lastNames" type="text" />
        </label>

        <label>
          <span>Email</span>
          <input name="email" type="email" />
        </label>

        <label>
          <span>Phone</span>
          <input name="phone" type="tel" />
        </label>
      </div>

      <fieldset className="inquiry-fieldset">
        <legend>What session type are you inquiring about?</legend>
        <select name="sessionType" value={sessionType} onChange={handleSessionChange}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.formLabel || category.name}
            </option>
          ))}
        </select>

        {/* This package dropdown changes when the visitor changes the session type. */}
        <label className="inquiry-followup">
          <span>Package of interest</span>
          <select
            name="package"
            value={selectedPackage}
            onChange={(event) => setSelectedPackage(event.target.value)}
          >
            {activeCategory.packages.map((packageItem) => (
              <option key={packageItem.id} value={packageItem.id}>
                {packageItem.name}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      <fieldset className="inquiry-fieldset">
        <legend>Social Media</legend>
        <p className="inquiry-helper">Optional handles are helpful, but not required.</p>
        <div className="inquiry-form-grid">
          <label>
            <span>Instagram</span>
            <input name="instagram" placeholder="@username" type="text" />
          </label>

          <label>
            <span>TikTok</span>
            <input name="tiktok" placeholder="@username" type="text" />
          </label>

          <label>
            <span>Facebook</span>
            <input name="facebook" placeholder="Profile name" type="text" />
          </label>
        </div>
      </fieldset>

      <fieldset className="inquiry-fieldset">
        <legend>Date desired for photoshoot, are you flexible?</legend>
        <div className="inquiry-date-row">
          <input
            aria-label="Choose a desired photoshoot date"
            type="date"
            value={dateInput}
            onChange={(event) => setDateInput(event.target.value)}
          />
          <button className="inquiry-small-button" type="button" onClick={addDesiredDate}>
            Add Date
          </button>
        </div>

        {selectedDates.length > 0 && (
          <div className="selected-date-list" aria-label="Selected desired dates">
            {selectedDates.map((date) => (
              <button key={date} type="button" onClick={() => removeDesiredDate(date)}>
                {date} ×
              </button>
            ))}
          </div>
        )}

        <label className="inquiry-followup">
          <span>Additional date notes</span>
          <textarea name="dateNotes" rows="3" />
        </label>
      </fieldset>

      <fieldset className="inquiry-fieldset">
        <legend>Would you prefer morning or evening availability?</legend>
        <div className="option-row">
          <label>
            <input name="availability" type="radio" value="morning" />
            <span>Morning (AM)</span>
          </label>

          <label>
            <input name="availability" type="radio" value="evening" />
            <span>Evening (PM)</span>
          </label>
        </div>

        <label className="inquiry-followup">
          <span>Preferred time</span>
          <input name="preferredTime" placeholder="Example: around 6:00 PM" type="text" />
        </label>
      </fieldset>

      <label>
        <span>Where?</span>
        <input name="location" placeholder="City, venue, or general location" type="text" />
      </label>

      <fieldset className="inquiry-fieldset">
        <legend>Pre-Shoot Meeting with Carla: Select a date for a 15-min Zoom chat</legend>
        <div className="meeting-options">
          {meetingOptions.map((meeting) => (
            <label key={meeting.id}>
              <input name="meetingSlot" type="radio" value={meeting.id} />
              <span>
                <strong>{meeting.label}</strong>
                {meeting.time}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label>
        <span>
          Tell me about yourself and the vision for the project! If you are inquiring for a
          couples session, tell me a little about your relationship too!
        </span>
        <textarea name="vision" rows="7" />
      </label>

      <label>
        <span>Please link your Pinterest board here so I can see your inspiration!</span>
        <input name="pinterest" placeholder="https://..." type="url" />
      </label>

      <fieldset className="inquiry-fieldset">
        <legend>Where did you find me?</legend>
        <select name="foundMe" value={foundMe} onChange={(event) => setFoundMe(event.target.value)}>
          <option>Instagram</option>
          <option>TikTok</option>
          <option>Facebook</option>
          <option>Word of Mouth</option>
          <option>Other</option>
        </select>

        {foundMe === "Other" && (
          <label className="inquiry-followup">
            <span>Tell me where</span>
            <input name="foundMeOther" type="text" />
          </label>
        )}
      </fieldset>

      <button className="text-button inquiry-submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

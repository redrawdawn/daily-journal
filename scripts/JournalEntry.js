import { formatDate } from "./helpers.js"

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            ${formatDate(entry.date)}:</br>
             Mood: ${entry.mood}</br>
             <strong>${entry.concept}</strong></br>
              <div class="entry">${entry.entry}</div>
        </section>
    `
}
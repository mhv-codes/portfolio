"use strict";

function coveragePercentage(total, covered) {
  if (!Number.isSafeInteger(total) || !Number.isSafeInteger(covered) ||
      total < 1 || covered < 0 || covered > total) {
    throw new RangeError("Enter whole-number counts with covered rows between zero and the total.");
  }
  return 100 * (covered / total);
}

if (typeof module !== "undefined") module.exports = { coveragePercentage };

if (typeof document !== "undefined") {
  const form = document.querySelector("#coverage");
  const result = document.querySelector("#result");
  const formatter = new Intl.NumberFormat("en", { maximumFractionDigits: 2, minimumFractionDigits: 2 });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      const total = form.elements.namedItem("total").valueAsNumber;
      const covered = form.elements.namedItem("covered").valueAsNumber;
      result.textContent = `${formatter.format(coveragePercentage(total, covered))}% of rows have GA4 coverage.`;
    } catch (error) {
      result.textContent = error.message;
    }
  });
}

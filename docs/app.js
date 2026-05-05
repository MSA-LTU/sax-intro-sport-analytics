const intentContent = {
  coding: {
    title: "Start with SAX101-01.",
    copy: "You will begin with rows, columns, files, and a small sports dataset before writing your first Python functions."
  },
  sport: {
    title: "Start with SAX101-01.",
    copy: "You will connect familiar sport questions to data basics, then build toward summaries and visual outputs."
  },
  study: {
    title: "Start with SAX101-01.",
    copy: "You will get a low-pressure preview of how sport analytics study feels before exploring the Master of Sport Analytics pathway."
  }
};

const buttons = document.querySelectorAll("[data-intent]");
const title = document.querySelector("[data-recommendation-title]");
const copy = document.querySelector("[data-recommendation-copy]");

function setIntent(intent) {
  const content = intentContent[intent] || intentContent.coding;
  document.body.dataset.intent = intent;
  if (title) title.textContent = content.title;
  if (copy) copy.textContent = content.copy;

  buttons.forEach((button) => {
    const isActive = button.dataset.intent === intent;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("ltuSportAnalyticsIntent", intent);
  } catch {
    // Browsers can block localStorage in private contexts; the interaction still works for this visit.
  }
}

let savedIntent = "coding";
try {
  savedIntent = localStorage.getItem("ltuSportAnalyticsIntent") || "coding";
} catch {
  savedIntent = "coding";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setIntent(button.dataset.intent));
});

if (buttons.length) {
  setIntent(savedIntent);
}

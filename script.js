document.documentElement.classList.add("is-ready");

document.querySelectorAll("[data-copy]").forEach((button) => {
  const initialText = button.textContent;

  button.addEventListener("click", async () => {
    const value = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      button.textContent = "Номер скопирован";
    } catch {
      button.textContent = value;
    }

    window.setTimeout(() => {
      button.textContent = initialText;
    }, 2200);
  });
});

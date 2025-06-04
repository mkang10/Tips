function setProgress(percent) {
  const fill = document.getElementById("progress-fill");
  const text = document.getElementById("progress-text");
  const carton = fill.querySelector(".milk-carton");
  const title = document.getElementById("progress-title");

  fill.style.width = percent + "%";
  carton.style.right = `calc(-24px + ${percent}%)`;
  text.textContent = percent + "%";

  if (percent === 100) {
    title.textContent = "Bof Đã Được Uống Sữa Bò 🐄😋";
  } else {
    title.textContent = "🥛 Hành Trình Uống Sữa Bò";
  }
}

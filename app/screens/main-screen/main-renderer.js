const CPU_USED_TEXT = document.getElementById("used_cpu");
const INNER_BAR = document.getElementById("inner_bar");

async function getCpuUsage() {
  const usage = await mainBridge.cpuUsage();
  const usedOverall = usage.currentLoad;

  updatePercentage(usedOverall);
}

setInterval(getCpuUsage, 1000);

function updatePercentage(percentage = 0) {
  const perText = `${percentage.toFixed(1)}%`;
  CPU_USED_TEXT.innerText = perText;
  INNER_BAR.style.width = perText;
}

//#region Close App & Minimize Button Actions

const MINIMIZE_BTN = document.getElementById("minimize");
const CLOSE_BTN = document.getElementById("close_app");

MINIMIZE_BTN.addEventListener("click", () =>
  window.mainBridge.window.minimize()
);
CLOSE_BTN.addEventListener("click", () => console.log(window.mainBridge.window.close()));

//#endregion

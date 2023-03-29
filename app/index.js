const { app, BrowserWindow } = require("electron");
const mainWindowIpc = require("./backend/main/main-ipc");
const { createMainWindow } = require("./windows/main-window");
require("electron-reload")(__dirname);

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

mainWindowIpc();

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

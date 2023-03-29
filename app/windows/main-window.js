const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Main Window",
    width: 1024,
    height: 768,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "../backend/main/main-preload.js"),
    },
  });

  mainWindow.loadFile(
    path.join(__dirname, "../screens/main-screen/main-screen.html")
  );
  mainWindow.on("ready-to-show", mainWindow.show);

  ipcMain.on("app/minimize", () => mainWindow.minimize());
  ipcMain.on("app/close", () => app.quit());
};

module.exports = { createMainWindow };

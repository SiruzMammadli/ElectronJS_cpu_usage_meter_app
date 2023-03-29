const { ipcMain } = require("electron");
const { currentLoad } = require("systeminformation");



function mainWindowIpc() {
  ipcMain.handle("cpu/get", async function (_, data) {
    const usage = await currentLoad();
    return usage;
  });
}

module.exports = mainWindowIpc;

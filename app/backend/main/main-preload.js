const { ipcRenderer, contextBridge } = require("electron");

const mainBridge = {
  cpuUsage: (data) => ipcRenderer.invoke("cpu/get", data),
  window: {
    close: () => ipcRenderer.send("app/close"),
    minimize: () => ipcRenderer.send("app/minimize"),
  },
};

contextBridge.exposeInMainWorld("mainBridge", mainBridge);

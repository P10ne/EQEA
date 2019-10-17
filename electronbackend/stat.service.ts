import { ipcMain, BrowserWindow, screen, Menu, MenuItem, webContents } from 'electron';

export default class ElStatService {
  statWin;

  init() {
    ipcMain.on('openStat', (event) => {
      this.statWin = new BrowserWindow({
        x: 0,
        y: 0,
        width: 700,
        height: 900,
        webPreferences: {
          nodeIntegration: true,
        },
        title: 'Результаты оценки'
      });
      this.statWin.webContents.openDevTools();
      this.statWin.loadURL('http://localhost:4200#/stat');
    });

    ipcMain.on('initStat', (event) => {
      const menu = new Menu();
      menu.append(new MenuItem({
        label: 'Отчет',
        submenu: [
          {
            label: 'Загрузить', click() {setTimeout(() => {event.reply('statLoaded', 'json data'); }, 800); }
          },
          {
            label: 'Сохранить', click() {setTimeout(() => {event.reply('statSaved'); }, 800); }
          }
        ]
      }));
      this.statWin.setMenu(menu);
    });
  }
}

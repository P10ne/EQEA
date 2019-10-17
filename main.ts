import { app, BrowserWindow, screen, Menu, MenuItem, webContents } from 'electron';
import * as path from 'path';
import * as url from 'url';

import ElStatService from './electronbackend/stat.service';

let mainWin, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

function createWindow() {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  mainWin = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true,
    },
    title: 'Расчет последствий землетрясения'
  });

  mainWin.removeMenu();

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    mainWin.loadURL('http://localhost:4200');
  } else {
    mainWin.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  if (serve) {
    mainWin.webContents.openDevTools();
  }

  mainWin.on('closed', () => {
    mainWin = null;
  });
}

try {

  app.on('ready', createWindow);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (mainWin === null) {
      createWindow();
    }
  });

  init();

} catch (e) {

}

function init() {
  const statService = new ElStatService();
  statService.init();
}

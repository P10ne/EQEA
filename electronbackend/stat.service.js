"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var ElStatService = /** @class */ (function () {
    function ElStatService() {
    }
    ElStatService.prototype.init = function () {
        var _this = this;
        electron_1.ipcMain.on('openStat', function (event) {
            _this.statWin = new electron_1.BrowserWindow({
                x: 0,
                y: 0,
                width: 700,
                height: 900,
                webPreferences: {
                    nodeIntegration: true,
                },
                title: 'Результаты оценки'
            });
            _this.statWin.webContents.openDevTools();
            _this.statWin.loadURL('http://localhost:4200#/stat');
        });
        electron_1.ipcMain.on('initStat', function (event) {
            var menu = new electron_1.Menu();
            menu.append(new electron_1.MenuItem({
                label: 'Отчет',
                submenu: [
                    {
                        label: 'Загрузить', click: function () { setTimeout(function () { event.reply('statLoaded', 'json data'); }, 800); }
                    },
                    {
                        label: 'Сохранить', click: function () { setTimeout(function () { event.reply('statSaved'); }, 800); }
                    }
                ]
            }));
            _this.statWin.setMenu(menu);
        });
    };
    return ElStatService;
}());
exports.default = ElStatService;
//# sourceMappingURL=stat.service.js.map
const { app, BrowserWindow } = require('electron');
let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 800,
		webPreferences: {
			nodeIntegration: true
		}
	});

	mainWindow.loadURL('https://translate.google.com.br');

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function () {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});
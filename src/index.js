const { app, BrowserWindow, dialog } = require('electron')

app.whenReady().then(() => {
  const options = {
    type: 'warning',
    buttons: ['OK'],
    title: 'Roblox',
    message: "Your computer's graphics card is not compatible with Roblox's minimum system requirements.",
    detail: 'Visit https://www.roblox.com/drivers for more information.',
  }

  dialog.showMessageBox(null, options).then(result => {
    if (result.response === 0) {
      console.log('OK clicked');
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
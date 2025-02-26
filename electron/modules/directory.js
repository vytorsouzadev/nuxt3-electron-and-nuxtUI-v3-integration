const { ipcMain } = require('electron')
const fs = require('fs/promises')
const path = require('path')

function initializeDirectoryModule() {
  ipcMain.handle('directory:list', async (event, dirPath) => {
    try {
      const items = await fs.readdir(dirPath, { withFileTypes: true })
      
      return items.map(item => ({
        name: item.name,
        path: path.join(dirPath, item.name),
        type: item.isDirectory() ? 'directory' : 'file',
        size: 0, // You can implement file size reading here
        modifiedAt: null // You can implement last modified date here
      }))
    } catch (error) {
      console.error('Error reading directory:', error)
      throw error
    }
  })
}

module.exports = {
  initializeDirectoryModule
}

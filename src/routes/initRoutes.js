import fs from 'fs'
const path = require('path')
const fsPromises = fs.promises

function jsFileFilter (file, index, files) {
  if (file.includes('.js') && !file.includes('initRoutes.js')) {
    return true
  }
}

async function getRoutes (files = []) {
  try {
    const fileList = await fsPromises.readdir(__dirname)
    await Promise.all(fileList.map(async (file) => {
      const filePath = path.join(__dirname, file)
      const stat = await fsPromises.stat(filePath)
      if (stat.isDirectory()) {
        await getRoutes(files)
      } else {
        files.push(file)
      }
    }))
    return files.filter(jsFileFilter)
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default function initRoutes (app) {
  getRoutes().then((routes) => {
    routes.map(route => {
      const routeModule = require('./'.concat(route))
      routeModule.default(app)
    })
  }).catch((err) => {
    console.error(err)
    throw err
  })
}

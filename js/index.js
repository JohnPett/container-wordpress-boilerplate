// COMPILER
await Bun.build({
  entrypoints: ['./js/index.js'],
  outdir: './',
  minify: true
})

// MODULES
import { header } from './modules/header.js'

const setupModules = (className, include) => {
  return [...document.getElementsByClassName(className)].map(el => {
    const module = include(el)
    module.init()
    return module
  })
}

const initModules = () => {
  setupModules('header', header)
}

const initSite = () => {
  initModules()
}

if (document.addEventListener) document.addEventListener('DOMContentLoaded', initSite)
else window.attachEvent('onload', initSite)

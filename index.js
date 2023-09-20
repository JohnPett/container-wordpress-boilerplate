// js/modules/header.js
function header() {
  function init() {
    console.log("init header");
  }
  return { init };
}

// js/index.js
await Bun.build({
  entrypoints: ["./js/index.js"],
  outdir: "./",
  minify: true
});
var setupModules = (className, include) => {
  return [...document.getElementsByClassName(className)].map((el) => {
    const module = include(el);
    module.init();
    return module;
  });
};
var initModules = () => {
  setupModules("header", header);
};
var initSite = () => {
  initModules();
};
if (document.addEventListener)
  document.addEventListener("DOMContentLoaded", initSite);
else
  window.attachEvent("onload", initSite);

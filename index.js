// js/modules/header.js
function header() {
  function init() {
    console.log("init header");
  }
  return { init };
}

// js/index.js
var setupModules = (className, include) => {
  return [...document.getElementsByClassName(className)].map((el) => {
    const module = include(el);
    module.init();
    return module;
  });
};
var initSite = () => {
  setupModules("header", header);
};
if (document.addEventListener)
  document.addEventListener("DOMContentLoaded", initSite);
else
  window.attachEvent("onload", initSite);
const DOMNodeCollection = require("./dom_node_collection.js");

function $l(arg) { // "lite" version of jQuery's $ function. hence the "l"
  // debugger;
  if (typeof arg === "string") { // Selector-style
    const nodeList = document.querySelectorAll(arg); // array-like object
    const nodeArr = Array.from(nodeList); // array of nodes
    return new DOMNodeCollection(nodeArr);
  } else if (arg instanceof HTMLElement) { // Wrapper-style?
    const htmlElement = [arg];
    return new DOMNodeCollection(htmlElement);
  }
}



window.$l = $l;

document.addEventListener("DOMContentLoaded", (e) => {
  // debugger;
  const $testLi = $("#ele-1");

  window.$testLi = $testLi
});

function debugFunc() {
  $("div").append($testLi);
}

window.debugFunc = debugFunc;

// e.g. $l(".class")
// $("#id")

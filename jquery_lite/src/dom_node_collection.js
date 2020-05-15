//dom node collection

class DOMNodeCollection {
  constructor (htmlElements) {
    // debugger;
    this.htmlElements = htmlElements;
  }

  addClass(className) {
    for (let i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].classList.add(className);
    }

    return this;
  }

  removeClass(className) {
    for (let i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].classList.remove(className);
    }

    return this;
  }

  toggleClass(className) {
    for (let i = 0; i < this.htmlElements.length; i++) {
      if (this.htmlElements[i].classList.contains(className)) {
        this.htmlElements[i].classList.remove(className);
      } else {
        this.htmlElements[i].classList.add(className);
      }
    }

    return this;
  }

  html(string) {
    console.log(typeof string);
    if (string === undefined) {
      return this.htmlElements[0].innerHTML;
    } else if (typeof string === "string") {
      for (let i = 0; i < this.htmlElements.length; i++) {
        this.htmlElements[i].innerHTML = string;
      } 
    } else { 
      alert("Pysch! That's not a valid argument!");
    }
  }

  empty () {
    this.html("");
  }

  append(...args) {
    for (let i = 0; i < args.length; i++) {
      if (!((typeof args[i] === "string") || (args[i] instanceof HTMLElement) || (args[i] instanceof DOMNodeCollection))) {
        alert("The argument has to be an DOMNodeCollection, an HTMLElement, or a string representation of HTML!")
      }
  
      if (args[i] instanceof DOMNodeCollection) {
        for (let j = 0; j < args[i].htmlElements.length; j++) {
          this.appendHelper(args[i].htmlElements[j]);
        }
      } else {
        let ele = args[i];
        
        if (typeof args[i] === "string") {
          const wrapper = document.createElement("div");
          wrapper.innerHTML = args[i];
          ele = wrapper.firstChild;
        }

        this.appendHelper(ele);
      }
    }
  }

  appendHelper(ele) { // ele must be an HTMLElement
    this.htmlElements[this.htmlElements.length - 1].appendChild(ele);

    if (this.htmlElements.length > 1) {
      for (let i = 0; i < this.htmlElements.length - 1; i++) {
        this.htmlElements[i].appendChild(ele.cloneNode(true));
      }
    }
  }

  attr(attribute, value) {
    if (value === undefined) {
      return this.htmlElements[0].getAttribute(attribute);
    } else {
      
    }

  }



}

module.exports = DOMNodeCollection;
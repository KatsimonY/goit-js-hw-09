const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let n=null;function o(){return r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){n=setInterval(o,1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled",!0),e.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.f59f5a40.js.map

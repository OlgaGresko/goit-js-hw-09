const t=document.querySelector("body"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a;function n(){let e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.setAttribute("style",`background-color: ${e};`)}e.addEventListener("click",(function(){n(),a=setInterval(n,1e3),e.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.e789323f.js.map
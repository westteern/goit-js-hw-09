var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");i.Notify.init({position:"center-top"});const a=document.querySelector(".form"),r={};function l(e,t){const n=Math.random()>.3;new Promise(((o,i)=>{const a={position:e,delay:t};n?o(a):i(a)})).then((({position:e,delay:t})=>{setTimeout((()=>i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)),t)})).catch((({position:e,delay:t})=>{setTimeout((()=>i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)),t)})).finally((()=>a.reset()))}a.addEventListener("input",(function(e){Number(e.target.value)<0&&(i.Notify.failure("The value cannot be negative"),e.target.value="");!function(e){switch(e.target.name){case"delay":r.delay=Number(e.target.value);break;case"step":r.step=Number(e.target.value);break;case"amount":r.amount=Number(e.target.value)}}(e)})),a.addEventListener("submit",(function(e){e.preventDefault(),r.positon=1;let t=r.delay;for(let e=0;e<r.amount;e+=1)l(r.positon,t),r.positon+=1,t+=r.step}));
//# sourceMappingURL=03-promises.5395bfce.js.map
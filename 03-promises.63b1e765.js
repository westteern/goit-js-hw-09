var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");i.Notify.init({position:"center-top"});const r=document.querySelector(".form"),a=document.querySelector("button"),u={};function l(e,t){const o=Math.random()>.3;new Promise(((n,i)=>{const r={position:e,delay:t};o?n(r):i(r)})).then((({position:e,delay:t})=>{setTimeout((()=>i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)),t)})).catch((({position:e,delay:t})=>{setTimeout((()=>i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)),t)}))}r.addEventListener("input",(function(e){Number(e.target.value)<0&&(i.Notify.failure("The value cannot be negative"),e.target.value="");!function(e){switch(e.target.name){case"delay":u.delay=Number(e.target.value);break;case"step":u.step=Number(e.target.value);break;case"amount":u.amount=Number(e.target.value)}}(e)})),a.addEventListener("click",(function(e){e.preventDefault(),u.positon=1;let t=u.delay;for(let e=0;e<u.amount;e+=1)l(u.positon,t),u.positon+=1,t+=u.step}));
//# sourceMappingURL=03-promises.63b1e765.js.map

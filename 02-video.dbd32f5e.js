!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){o[e]=r},r.parcelRequired7c6=n);var l=n("dCfNN"),i=document.querySelector("iframe"),a=new Vimeo.Player(i);null===localStorage.getItem("videoplayer-current-time")&&localStorage.setItem("videoplayer-current-time",0);a.on("timeupdate",e(l)((function(e){var r=e.seconds;localStorage.setItem("videoplayer-current-time",r)}),1e3));var d=localStorage.getItem("videoplayer-current-time");a.setCurrentTime(d)}();
//# sourceMappingURL=02-video.dbd32f5e.js.map
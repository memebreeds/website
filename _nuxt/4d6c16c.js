(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{368:function(t,e,n){"use strict";n.r(e);n(69);var o={props:["delay"],data:function(){return{imageIndex:Math.floor(5e3*Math.random())}},created:function(){var t=this,e=+this.delay;e||(e=0),setTimeout((function(){setInterval(t.randomImage,3e3)}),e)},methods:{randomImage:function(){this.imageIndex=Math.floor(100*Math.random())}}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticStyle:{"max-height":"150px"},attrs:{src:"/img/collection/1/small/"+t.imageIndex+".png"}})}),[],!1,null,null,null);e.default=component.exports}}]);
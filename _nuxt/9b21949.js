(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{363:function(t,r,e){"use strict";e.r(r);var n={props:["nft","attributes"],data:function(){return{}},computed:{traitCounts:function(){return this.$traits.traits}},methods:{}},o=e(21),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("img",{attrs:{src:"/img/collection/1/"+t.nft.image}})]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"title"},[t._v("\n      "+t._s(t.nft.name)+"\n    ")]),t._v(" "),e("p",{staticClass:"block"},[t._v("\n      "+t._s(t.nft.description)+"\n    ")]),t._v(" "),t.nft.attributes.length?e("div",[e("div",{staticClass:"subtitle"},[t._v("\n        Attributes\n      ")]),t._v(" "),e("div",{staticClass:"columns is-multiline"},t._l(t.nft.attributes,(function(r){return e("div",{key:r.trait_type,staticClass:"column is-half"},[e("div",{staticClass:"has-background-grey-lighter p-2"},[e("h4",{staticClass:"subtitle is-6"},[t._v("\n              "+t._s(r.trait_type)+"\n              "),t.attributes&&t.attributes[r.trait_type]?e("span",{staticClass:"tag ml-1 mt-1 is-pulled-right subtitle is-7",class:{"is-danger has-tooltip-top has-tooltip-arrow":t.traitCounts[r.trait_type]&&t.traitCounts[r.trait_type][r.value].rarity>5,"is-warning has-tooltip-top has-tooltip-arrow":t.traitCounts[r.trait_type]&&t.traitCounts[r.trait_type][r.value].rarity>1,"is-secondary has-tooltip-top has-tooltip-arrow":t.traitCounts[r.trait_type]&&t.traitCounts[r.trait_type][r.value].rarity>.5&&t.traitCounts[r.trait_type][r.value].rarity<=1,"is-info has-tooltip-top has-tooltip-arrow":t.traitCounts[r.trait_type]&&t.traitCounts[r.trait_type][r.value].rarity>.3&&t.traitCounts[r.trait_type][r.value].rarity<=.5,"is-secondary is-light has-tooltip-top has-tooltip-arrow":t.traitCounts[r.trait_type]&&t.traitCounts[r.trait_type][r.value].rarity>.15&&t.traitCounts[r.trait_type][r.value].rarity<=.3},attrs:{"data-tooltip":t.traitCounts[r.trait_type]&&"Common"!==t.$traits.getRarityName(t.traitCounts[r.trait_type][r.value].rarity)?t.$traits.getRarityName(t.traitCounts[r.trait_type][r.value].rarity):null}},[t._v("\n                "+t._s(+(t.attributes[r.trait_type].options[r.value]/Object.values(t.attributes[r.trait_type].options).reduce((function(a,b){return a+b}))*100).toFixed(2))+"%\n              ")]):t._e()]),t._v(" "),e("h4",{staticClass:"title is-6"},[t._v("\n              "+t._s(r.value)+"\n            ")])])])})),0)]):t._e(),t._v(" "),e("div",{staticClass:"mt-5"},[e("nuxt-link",{staticClass:"button is-fullwidth is-secondary",attrs:{to:"/mint"}},[t._v("\n        Buy your own Memebreed\n      ")])],1)])])}),[],!1,null,null,null);r.default=component.exports}}]);
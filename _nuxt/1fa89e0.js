(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{363:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return l}));var o=function(t,n){return"number"==typeof t?(1e-9*t).toLocaleString("en-US",n?{minimumFractionDigits:4}:{maximumFractionDigits:9}):"..."},l=function(t){var rect=t.getBoundingClientRect();return rect.top>=0&&rect.left>=0&&rect.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&rect.right<=(window.innerWidth||document.documentElement.clientWidth)}},381:function(t,n,e){"use strict";e.r(n);var o=e(363),l={computed:{publicKey:function(){return this.$sol?this.$sol.publicKey:null},balance:function(){return this.$sol&&"number"==typeof this.$sol.balance&&Object(o.a)(this.$sol&&this.$sol.balance,!0)}},mounted:function(){this.publicKey||(this.$sol.loginModal=!0)}},c=e(20),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"section"},[e("div",{staticClass:"container is-max-desktop"},[e("h1",{staticClass:"title meme-text"},[t._v("\n      MEMEBREEDER\n    ")]),t._v(" "),t._m(0),t._v(" "),t.publicKey?e("div",[e("div",{staticClass:"title mt-4 blockchain-address"},[t._v("\n        "+t._s(t.publicKey)+"\n      ")]),t._v(" "),e("div",[t._v("\n        Balance: "+t._s(t.balance)+" SOL\n      ")])]):e("div",[e("a",{attrs:{href:""},on:{click:function(n){n.preventDefault(),t.$sol.loginModal=!0}}},[t._v("Connect your Solana Wallet")]),t._v(" to continue\n    ")]),t._v(" "),t.publicKey?e("div",{staticClass:"has-text-centered mt-6"},[e("a",{staticClass:"button is-danger is-inverted",attrs:{href:""},on:{click:function(n){return n.preventDefault(),t.$sol.logout.apply(null,arguments)}}},[t._v("Logout")])]):t._e()])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h2",{staticClass:"subtitle"},[t._v("\n      Pay "),e("b",[t._v("0.8 SOL")]),t._v(" to mint your unique Memebreed\n    ")])}],!1,null,null,null);n.default=component.exports}}]);
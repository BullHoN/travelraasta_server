(this.webpackJsonphome_page=this.webpackJsonphome_page||[]).push([[3],{33:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},34:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return c}))},35:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return function(){var t,n=r(e);if(c()){var o=r(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return a(this,t)}}n.d(t,"a",(function(){return i}))},36:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return c}))},39:function(e,t,n){"use strict";n.r(t);var r=n(33),c=n(34),o=n(36),a=n(35),i=n(0),u=n.n(i),l=n(1),s=function(e){Object(o.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).handleClick=function(t){window.scrollTo({top:0,left:0,behavior:"smooth"}),e.props.history.push("/".concat(t))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{id:"activty_section"},u.a.createElement("div",{className:"container center"},u.a.createElement("h2",null,"What do you want to do ?"),u.a.createElement("div",{id:"search-icons"},u.a.createElement("div",{"data-route":"flight",className:"search-icon",onClick:function(){return e.handleClick("flights")}},u.a.createElement("img",{src:"/images/service1.png",alt:"flights"}),u.a.createElement("h5",null,"Flights")),u.a.createElement("div",{"data-route":"tour",className:"search-icon",onClick:function(){return e.handleClick("tours")}},u.a.createElement("img",{src:"/images/service2.png",alt:"Tour"}),u.a.createElement("h5",null,"Tour")),u.a.createElement("div",{"data-route":"hotels",className:"search-icon",onClick:function(){return e.handleClick("hotels")}},u.a.createElement("img",{src:"/images/service3.png",alt:"Hotels"}),u.a.createElement("h5",null,"Hotels")),u.a.createElement("div",{"data-route":"events",className:"search-icon",onClick:function(){return e.handleClick("events")}},u.a.createElement("img",{src:"/images/service4.png",alt:"Events"}),u.a.createElement("h5",null,"Events")),u.a.createElement("div",{"data-route":"bus",className:"search-icon",onClick:function(){return e.handleClick("bus")}},u.a.createElement("img",{src:"/images/service5.png",alt:"Bus"}),u.a.createElement("h5",null,"Bus")),u.a.createElement("div",{"data-route":"guide",className:"search-icon",onClick:function(){return e.handleClick("guide")}},u.a.createElement("img",{src:"/images/service6.png",alt:"Guide"}),u.a.createElement("h5",null,"Guide")))))}}]),n}(i.Component);t.default=Object(l.f)(s)}}]);
//# sourceMappingURL=3.f72c4f53.chunk.js.map
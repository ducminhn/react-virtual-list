webpackJsonp([1],{0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a=n(24),r=i(a),o=n(25),l=n(79),s=i(l);n(176);var u=function(e){var t=e.virtual,n=e.itemHeight;return r.default.createElement("ul",{className:"media-list list-group",style:t.style},t.items.map(function(e){return r.default.createElement("li",{key:"item"+e.id,className:"list-group-item",style:{height:n}},r.default.createElement("div",{className:"media-left"},r.default.createElement("img",{className:"media-object",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4="})),r.default.createElement("div",{className:"media-body"},r.default.createElement("h4",{className:"media-heading"},e.title),r.default.createElement("p",null,e.text)))}))},c=(0,s.default)(u);(0,o.render)(r.default.createElement(c,null),document.getElementById("app"))},79:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(24),u=i(s),c=n(171),f=i(c),m=function(e){return{id:e,title:"Media heading #"+(e+1),text:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."}},d=function(e){return function(t){function n(){a(this,n);for(var t=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this)),i=1e5,o=[],l=0;l<i;l++)o[l]=m(l);var s={itemHeight:100,itemCount:i,items:o,contained:!1,containerHeight:250,itemBuffer:0};return t.state=s,t.update=t.update.bind(t),t.MyVirtualList=(0,f.default)()(e),t}return o(n,t),l(n,[{key:"update",value:function(){console.log("update");for(var t=[],n=parseInt(this.refs.itemCount.value,10),i=0;i<n;i++)t[i]=m(i);var a=this.refs.contained.checked,r={itemHeight:parseInt(this.refs.itemHeight.value,10),itemCount:n,items:t,contained:a,container:this.refs.container,containerHeight:parseInt(this.refs.containerHeight.value,10),itemBuffer:parseInt(this.refs.itemBuffer.value,10)};if(r.contained!==this.state.contained){var o={container:r.contained?r.container:window};this.MyVirtualList=(0,f.default)(o)(e)}this.setState(r)}},{key:"render",value:function(){var e=this.MyVirtualList;return u.default.createElement("div",null,u.default.createElement("div",{role:"form",className:"form-horizontal"},u.default.createElement("div",{className:"form-group"},u.default.createElement("label",{className:"col-xs-6 col-sm-2",htmlFor:"contained"},"Contained"),u.default.createElement("div",{className:"col-xs-6 col-sm-4"},u.default.createElement("input",{onChange:this.update,className:"form-control",type:"checkbox",checked:this.state.contained,id:"contained",ref:"contained"})),u.default.createElement("label",{className:"col-xs-6 col-sm-2",htmlFor:"containerHeight"},"Container Height"),u.default.createElement("div",{className:"col-xs-6 col-sm-4"},u.default.createElement("input",{onChange:this.update,className:"form-control",type:"number",min:"0",max:"10000",value:this.state.containerHeight,id:"containerHeight",ref:"containerHeight"}))),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",{className:"col-xs-6 col-sm-2",htmlFor:"itemHeight"},"Item Height"),u.default.createElement("div",{className:"col-xs-6 col-sm-4"},u.default.createElement("input",{onChange:this.update,className:"form-control",type:"number",min:"0",value:this.state.itemHeight,id:"itemHeight",ref:"itemHeight"})),u.default.createElement("label",{className:"col-xs-6 col-sm-2",htmlFor:"itemCount"},"Item Count"),u.default.createElement("div",{className:"col-xs-6 col-sm-4"},u.default.createElement("input",{onChange:this.update,className:"form-control",type:"number",min:"0",value:this.state.itemCount,id:"itemCount",ref:"itemCount"}))),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",{className:"col-xs-6 col-sm-2",htmlFor:"scrollDelay"},"Item Buffer"),u.default.createElement("div",{className:"col-xs-6 col-sm-4"},u.default.createElement("input",{onChange:this.update,className:"form-control",type:"number",min:"0",value:this.state.itemBuffer,id:"itemBuffer",ref:"itemBuffer"})))),u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-xs-12",id:"container",ref:"container",style:this.state.contained?{overflow:"scroll",height:this.state.containerHeight}:{}},u.default.createElement(e,{items:this.state.items,itemBuffer:this.state.itemBuffer,itemHeight:this.state.itemHeight}))))}}]),n}(s.PureComponent)};t.default=d},171:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(24),c=i(u),f=n(25),m=i(f),d=n(173),h=i(d),p=n(174),v=i(p),b=function(e){return function(t){var n,i;return i=n=function(n){function i(t){a(this,i);var n=r(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,t));return n.options=l({container:"undefined"!=typeof window?window:void 0},e),n.state={firstItemIndex:0,lastItemIndex:-1},e&&e.initialState&&(n.state=l({},n.state,e.initialState)),n.refreshState=n.refreshState.bind(n),window&&"requestAnimationFrame"in window&&(n.refreshState=(0,v.default)(n.refreshState)),n}return o(i,n),s(i,[{key:"setStateIfNeeded",value:function(e,t,n,i,a){var r=(0,h.default)(e,t,n,i,a);void 0===r||r.firstItemIndex===this.state.firstItemIndex&&r.lastItemIndex===this.state.lastItemIndex||this.setState(r)}},{key:"refreshState",value:function(){var e=this.props,t=e.itemHeight,n=e.items,i=e.itemBuffer;this.setStateIfNeeded(this.domNode,this.options.container,n,t,i)}},{key:"componentDidMount",value:function(){this.domNode=m.default.findDOMNode(this),this.refreshState(),this.options.container.addEventListener("scroll",this.refreshState),this.options.container.addEventListener("resize",this.refreshState)}},{key:"componentWillUnmount",value:function(){this.options.container.removeEventListener("scroll",this.refreshState),this.options.container.removeEventListener("resize",this.refreshState)}},{key:"componentWillReceiveProps",value:function(e){var t=e.itemHeight,n=e.items,i=e.itemBuffer;this.setStateIfNeeded(this.domNode,this.options.container,n,t,i)}},{key:"render",value:function(){var e=this.state,n=e.firstItemIndex,i=e.lastItemIndex,a=this.props,r=a.items,o=a.itemHeight,s=i>-1?r.slice(n,i+1):[],u=r.length*o,f=n*o,m={items:s,style:{height:u,paddingTop:f}};return c.default.createElement(t,l({},this.props,{virtual:m}))}}]),i}(u.PureComponent),n.propTypes={items:u.PropTypes.array.isRequired,itemHeight:u.PropTypes.number.isRequired,itemBuffer:u.PropTypes.number},n.defaultProps={itemBuffer:0},i}};t.default=b},172:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e.pageYOffset?e.pageYOffset:e.document?e.document.documentElement&&e.document.documentElement.scrollTop?e.document.documentElement.scrollTop:e.document.body&&e.document.body.scrollTop?e.document.body.scrollTop:0:e.scrollY||e.scrollTop||0};t.default=n},173:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(175),r=i(a),o=n(172),l=i(o),s=function(e,t,n,i,a){if(t&&i&&n&&0!==n.length){var o=t.innerHeight,s=t.clientHeight,u=o||s;if(u){var c=(0,l.default)(t),f=c+u,m=(0,r.default)(e)-(0,r.default)(t),d=i*n.length,h=Math.max(0,c-m),p=Math.max(0,Math.min(d,f-m)),v=Math.max(0,Math.floor(h/i)-a),b=Math.min(n.length,Math.ceil(p/i)+a)-1;return{firstItemIndex:v,lastItemIndex:b}}}};t.default=s},174:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.default=function(e){var t=!1;return function(){t||(t=!0,window.requestAnimationFrame(function(){e.apply(void 0,n),t=!1}))}}},175:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(t){return"undefined"!=typeof t&&t?(t.offsetTop||0)+e(t.offsetParent):0};t.default=n},176:function(e,t,n){e.exports=n.p+"index.html"}});
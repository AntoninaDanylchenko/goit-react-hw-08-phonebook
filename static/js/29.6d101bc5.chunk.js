(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[29],{8398:function(e,t,n){"use strict";n(2791);var r=n(2007),o=n.n(r),a=n(890),i=n(184),u=function(e){var t=e.title,n=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{variant:"h4",gutterBottom:!0,color:"#494D5F",sx:{textAlign:"center"},children:t}),n]})};u.prototype={title:o().string},t.Z=u},6029:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(2791),o=n(9434),a=n(3634),i="NOT_FOUND";var u=function(e,t){return e===t};function c(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,o=void 0===r?u:r,a=n.maxSize,c=void 0===a?1:a,s=n.resultEqualityCheck,l=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(o),f=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:i},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var o=n[r];return r>0&&(n.splice(r,1),n.unshift(o)),o.value}return i}return{get:r,put:function(t,o){r(t)===i&&(n.unshift({key:t,value:o}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,l);function p(){var t=f.get(arguments);if(t===i){if(t=e.apply(null,arguments),s){var n=f.getEntries(),r=n.find((function(e){return s(e.value,t)}));r&&(t=r.value)}f.put(arguments,t)}return t}return p.clearCache=function(){return f.clear()},p}function s(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var a,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,f=l.memoizeOptions,p=void 0===f?n:f,d=Array.isArray(p)?p:[p],h=s(r),v=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(d)),y=e((function(){for(var e=[],t=h.length,n=0;n<t;n++)e.push(h[n].apply(null,arguments));return a=v.apply(null,e)}));return Object.assign(y,{resultFunc:c,memoizedResultFunc:v,dependencies:h,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),y};return o}var f=l(c),p=function(e){return e.contacts.items},d=function(e){return e.filter},h=function(e){return e.contacts.isLoading},v=function(e){return e.contacts.error},y=f([p,d],(function(e,t){return t?e.filter((function(e){return e.name.toLowerCase().includes(t)})):e})),m=n(3771),x=n(4808),b=n(184),g=function(){var e=(0,o.I0)(),t=(0,o.v9)(d);return(0,b.jsx)(m.Fy,{sx:{width:"48ch",mr:"auto",ml:"auto"},label:"Find contacts by name",id:"standard-search",type:"search",variant:"standard",name:"filterContact",value:t,onChange:function(t){return n=t.target.value,void e((0,x.K)(n.toLowerCase()));var n},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",autoComplete:"off"})},C=n(9439),j=n(4554),w=function(){var e=(0,r.useState)(""),t=(0,C.Z)(e,2),n=t[0],i=t[1],u=(0,r.useState)(""),c=(0,C.Z)(u,2),s=c[0],l=c[1],f=(0,o.v9)(p),d=(0,o.I0)(),h=function(){i(""),l("")};return(0,b.jsxs)(j.Z,{component:"form",sx:{width:"48ch",display:"flex",flexDirection:"column",justifyContent:"center",mb:"32px",ml:"auto",mr:"auto"},onSubmit:function(e){e.preventDefault(),f.filter((function(e){return e.name.toLowerCase()===n.toLowerCase()})).length?alert("".concat(n," is already in contacts")):d((0,a.uK)({name:n,number:s})),h()},children:[(0,b.jsx)(m.Fy,{label:"Name",id:"standard-search",variant:"standard",type:"text",name:"name",value:n,onChange:function(e){return i(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,b.jsx)(m.Fy,{label:"Number",id:"standard-search",variant:"standard",type:"tel",name:"phone",value:s,onChange:function(e){return l(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,b.jsx)(m.Eo,{sx:{width:"18ch",ml:"auto",mr:"auto"},type:"submit",bgColor:"rgba(132, 88, 179, 0.5)",textColor:"#fff",children:"Add contact"})]})},k=n(8398),_=n(493),A=n(5021),Z=n(890),E=function(){var e=(0,o.v9)(y),t=(0,o.I0)();return(0,b.jsx)(_.Z,{sx:{ml:"auto",mr:"auto",width:"48ch"},children:e.map((function(e){var n=e.id,r=e.name,o=e.number;return(0,b.jsxs)(A.ZP,{sx:{display:"flex",justifyContent:"space-between",p:0,mb:"16px",width:"100%"},children:[(0,b.jsxs)(Z.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[r,": ",(0,b.jsx)("span",{children:o})]}),(0,b.jsx)(m.Eo,{sx:{width:"8ch",fontSize:"12px"},type:"button",bgColor:"rgba(132, 88, 179, 0.5)",textColor:"#fff",onClick:function(){return function(e){t((0,a.GK)(e))}(n)},children:"Delete"})]},n)}))})},O=function(){var e=(0,o.I0)(),t=(0,o.v9)(h),n=(0,o.v9)(v);return(0,r.useEffect)((function(){e((0,a.NJ)())}),[e]),(0,b.jsxs)(j.Z,{sx:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,b.jsx)(k.Z,{title:"Phonebook",style:{border:"1px solid #494D5F"},children:(0,b.jsx)(w,{})}),t&&!n&&(0,b.jsx)("b",{children:"Request in progress..."}),(0,b.jsxs)(k.Z,{title:"Contacts",children:[(0,b.jsx)(g,{}),(0,b.jsx)(E,{})]})]})}},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=29.6d101bc5.chunk.js.map
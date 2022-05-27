this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var r,i,l=t[0],a=t[1],u=t[2],b=0,p=[];b<l.length;b++)i=l[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var a=n[l];0!==c[a]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={18:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=a;return o.push([394,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.compose},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(8);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},11:function(e,t){e.exports=window.wp.primitives},117:function(e,t,n){"use strict";var r=n(0),c=n(5),o=n(10),i=n(1);n(152),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:n,onChange:o,heading:l,instanceId:a}=e;const u="h"+n;return Object(r.createElement)(u,{className:t},Object(r.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+a},Object(i.__)("Block title","woocommerce")),Object(r.createElement)(c.PlainText,{id:"block-title-"+a,className:"wc-block-editor-components-title",value:l,onChange:o}))})},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);const c=()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)(t=>{e(()=>{throw t})},[])}},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(17),c=n(9),o=n(0),i=n(48),l=n(120);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:u={},shouldSelect:s=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),p=Object(i.a)(u),d=Object(i.a)(a),m=Object(l.a)(),f=Object(c.useSelect)(e=>{if(!s)return null;const c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,p,d],i=c.getCollectionError(...o);if(i){if(!(i instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");m(i)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}},[t,n,d,p,s]);return null!==f&&(b.current=f),b.current}},126:function(e,t){},13:function(e,t){e.exports=window.wp.blocks},140:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),i=n.n(o),l=n(30);n(179),t.a=e=>{let{className:t,disabled:n,label:
/* translators: Submit button text for filters. */
o=Object(c.__)("Go","woocommerce"),onClick:a,screenReaderLabel:u=Object(c.__)("Apply filter","woocommerce")}=e;return Object(r.createElement)("button",{type:"submit",className:i()("wc-block-filter-submit-button","wc-block-components-filter-submit-button",t),disabled:n,onClick:a},Object(r.createElement)(l.a,{label:o,screenReaderLabel:u}))}},152:function(e,t){},17:function(e,t){e.exports=window.wc.wcBlocksData},179:function(e,t){},18:function(e,t){e.exports=window.wp.url},2:function(e,t){e.exports=window.wc.wcSettings},23:function(e,t,n){"use strict";n.d(t,"o",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"l",(function(){return l})),n.d(t,"n",(function(){return a})),n.d(t,"j",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"i",(function(){return w})),n.d(t,"b",(function(){return _}));var r,c=n(2);const o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",l=o.pluginUrl+"build/",a=o.buildPhase,u=null===(r=c.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,s=c.STORE_PAGES.checkout.id,b=c.STORE_PAGES.checkout.permalink,p=c.STORE_PAGES.privacy.permalink,d=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),m=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),f=c.STORE_PAGES.cart.permalink,g=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),O=Object(c.getSetting)("allowedCountries",{}),w=Object(c.getSetting)("shippingStates",{}),_=Object(c.getSetting)("allowedStates",{})},25:function(e,t){e.exports=window.wp.isShallowEqual},26:function(e,t){e.exports=window.wc.priceFormat},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),c=n(257),o=n(7),i=n(48),l=n(76),a=n(121),u=n(49);const s=e=>{let{queryAttribute:t,queryPrices:n,queryStock:s,queryState:b}=e,p=Object(u.a)();p+="-collection-data";const[d]=Object(l.a)(p),[m,f]=Object(l.b)("calculate_attribute_counts",[],p),[g,O]=Object(l.b)("calculate_price_range",null,p),[w,_]=Object(l.b)("calculate_stock_status_counts",null,p),j=Object(i.a)(t||{}),h=Object(i.a)(n),v=Object(i.a)(s);Object(r.useEffect)(()=>{"object"==typeof j&&Object.keys(j).length&&(m.find(e=>e.taxonomy===j.taxonomy)||f([...m,j]))},[j,m,f]),Object(r.useEffect)(()=>{g!==h&&void 0!==h&&O(h)},[h,O,g]),Object(r.useEffect)(()=>{w!==v&&void 0!==v&&_(v)},[v,_,w]);const[k,E]=Object(r.useState)(!1),[y]=Object(c.a)(k,200);k||E(!0);const x=Object(r.useMemo)(()=>(e=>{const t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(d),[d]);return Object(a.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...b,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...x},shouldSelect:y})}},3:function(e,t){e.exports=window.wp.components},30:function(e,t,n){"use strict";var r=n(0),c=n(4),o=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:i,wrapperProps:l={}}=e;const a=null!=n,u=null!=c;return!a&&u?(t=i||"span",l={...l,className:o()(l.className,"screen-reader-text")},Object(r.createElement)(t,l,c)):(t=i||r.Fragment,a&&u&&n!==c?Object(r.createElement)(t,l,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,l,n))}},36:function(e,t,n){"use strict";var r=n(6),c=n.n(r),o=n(0),i=n(122),l=n(4),a=n.n(l);n(126);const u=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:r,onValueChange:l,displayType:s="text",...b}=e;const p="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(p))return null;const d=p/10**r.minorUnit;if(!Number.isFinite(d))return null;const m=a()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f={...b,...u(r),value:void 0,currency:void 0,onValueChange:void 0},g=l?e=>{const t=+e.value*10**r.minorUnit;l(t)}:()=>{};return Object(o.createElement)(i.a,c()({className:m,displayType:s},f,{value:d,onValueChange:g}))}},394:function(e,t,n){e.exports=n(471)},395:function(e,t){},396:function(e,t){},397:function(e,t){},471:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),o=n(0),i=n(1),l=n(13),a=n(4),u=n.n(a),s=n(109),b=n(522),p=n(68),d=n(5),m=n(2),f=n(23),g=n(98),O=n(117),w=n(217),_=n(3),j=n(105),h=n(76),v=n(278),k=n(36),E=n(57);n(397);const y=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[o,i]=e;const l=e=>Number.isFinite(e);return l(o)||(o=t||0),l(i)||(i=n||r),l(t)&&t>o&&(o=t),l(n)&&n<=o&&(o=n-r),l(t)&&t>=i&&(i=t+r),l(n)&&n<i&&(i=n),!c&&o>=i&&(o=i-r),c&&i<=o&&(i=o+r),[o,i]};var x=n(140);const S=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r<=t/10**n&&r>0}},C=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:r}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c>=t/10**r&&c<n/10**r}};var N=e=>{let{minPrice:t,maxPrice:n,minConstraint:r,maxConstraint:c,onChange:l=(()=>{}),step:a,currency:s,showInputFields:b=!0,showFilterButton:p=!1,isLoading:d=!1,onSubmit:m=(()=>{})}=e;const f=Object(o.useRef)(null),g=Object(o.useRef)(null),O=a||10*10**s.minorUnit,[w,_]=Object(o.useState)(t),[j,h]=Object(o.useState)(n);Object(o.useEffect)(()=>{_(t)},[t]),Object(o.useEffect)(()=>{h(n)},[n]);const v=Object(o.useMemo)(()=>isFinite(r)&&isFinite(c),[r,c]),N=Object(o.useMemo)(()=>isFinite(t)&&isFinite(n)&&v?{"--low":Math.round((t-r)/(c-r)*100)-.5+"%","--high":Math.round((n-r)/(c-r)*100)+.5+"%"}:{"--low":"0%","--high":"100%"},[t,n,r,c,v]),F=Object(o.useCallback)(e=>{if(d||!v||!f.current||!g.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=f.current.offsetWidth,o=+f.current.value,i=g.current.offsetWidth,l=+g.current.value,a=r*(o/c),u=i*(l/c);Math.abs(n-a)>Math.abs(n-u)?(f.current.style.zIndex="20",g.current.style.zIndex="21"):(f.current.style.zIndex="21",g.current.style.zIndex="20")},[d,c,v]),P=Object(o.useCallback)(e=>{const o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=+e.target.value,a=o?[Math.round(i/O)*O,n]:[t,Math.round(i/O)*O],u=y(a,r,c,O,o);l(u)},[l,t,n,r,c,O]),T=Object(o.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(w>=j){const e=y([0,j],null,null,O,t);return l([parseInt(e[0],10),parseInt(e[1],10)])}const n=y([w,j],null,null,O,t);l(n)},[l,O,w,j]),R=u()("wc-block-price-filter","wc-block-components-price-slider",b&&"wc-block-price-filter--has-input-fields",b&&"wc-block-components-price-slider--has-input-fields",p&&"wc-block-price-filter--has-filter-button",p&&"wc-block-components-price-slider--has-filter-button",d&&"is-loading",!v&&"is-disabled"),L=Object(E.a)(f.current)?f.current.ownerDocument.activeElement:void 0,V=L&&L===f.current?O:1,A=L&&L===g.current?O:1,B=String(w/10**s.minorUnit),U=String(j/10**s.minorUnit);return Object(o.createElement)("div",{className:R},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-wrapper wc-block-components-price-slider__range-input-wrapper",onMouseMove:F,onFocus:F},v&&Object(o.createElement)("div",{"aria-hidden":b},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:N}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(i.__)("Filter products by minimum price","woocommerce"),"aria-valuetext":B,value:Number.isFinite(t)?t:r,onChange:P,step:V,min:r,max:c,ref:f,disabled:d,tabIndex:b?-1:0}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(i.__)("Filter products by maximum price","woocommerce"),"aria-valuetext":U,value:Number.isFinite(n)?n:c,onChange:P,step:A,min:r,max:c,ref:g,disabled:d,tabIndex:b?-1:0}))),Object(o.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},b&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(k.a,{currency:s,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min","aria-label":Object(i.__)("Filter products by minimum price","woocommerce"),allowNegative:!1,isAllowed:C({minConstraint:r,minorUnit:s.minorUnit,currentMaxValue:j}),onValueChange:e=>{e!==w&&_(e)},onBlur:T,disabled:d||!v,value:w}),Object(o.createElement)(k.a,{currency:s,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max","aria-label":Object(i.__)("Filter products by maximum price","woocommerce"),isAllowed:S({maxConstraint:c,minorUnit:s.minorUnit}),onValueChange:e=>{e!==j&&h(e)},onBlur:T,disabled:d||!v,value:j})),!b&&!d&&Number.isFinite(t)&&Number.isFinite(n)&&Object(o.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(i.__)("Price","woocommerce"),":  ",Object(o.createElement)(k.a,{currency:s,value:t})," – ",Object(o.createElement)(k.a,{currency:s,value:n})),p&&Object(o.createElement)(x.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",disabled:d||!v,onClick:m,screenReaderLabel:Object(i.__)("Apply price filter","woocommerce")})))},F=n(119),P=n(26),T=n(18);const R=(e,t,n)=>{const r=10*10**t;let c;"ROUND_UP"===n?c=isNaN(e)?null:Math.ceil(parseFloat(e,10)/r)*r:"ROUND_DOWN"===n&&(c=isNaN(e)?null:Math.floor(parseFloat(e,10)/r)*r);const o=Object(j.a)(c,Number.isFinite);return Number.isFinite(c)?c:o};function L(e){return window?Object(T.getQueryArg)(window.location.href,e):null}n(396);var V=e=>{let{attributes:t,isEditor:n=!1}=e;const r=Object(m.getSetting)("is_rendering_php_template",""),c=L("min_price"),i=L("max_price"),[l,a]=Object(h.b)("min_price",100*Number(c)||null),[u,s]=Object(h.b)("max_price",100*Number(i)||null),[b]=Object(h.a)(),{results:p,isLoading:d}=Object(v.a)({queryPrices:!0,queryState:b}),[f,g]=Object(o.useState)(100*Number(c)||null),[O,w]=Object(o.useState)(100*Number(i)||null),_=Object(P.getCurrencyFromPriceResponse)(p.price_range),{minConstraint:k,maxConstraint:E}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:r}=e;return{minConstraint:R(t,r,"ROUND_DOWN"),maxConstraint:R(n,r,"ROUND_UP")}})({minPrice:p.price_range?p.price_range.min_price:void 0,maxPrice:p.price_range?p.price_range.max_price:void 0,minorUnit:_.minorUnit}),y=Object(o.useCallback)((e,t)=>{const n=t>=Number(E)?void 0:t,c=e<=Number(k)?void 0:e;if(r&&window){const e=function(e,t){const n={};for(const[e,r]of Object.entries(t))r?n[e]=(r/100).toString():delete n[e];const r=Object(T.removeQueryArgs)(e,...Object.keys(t));return Object(T.addQueryArgs)(r,n)}(window.location.href,{min_price:c,max_price:n});window.location.href!==e&&(window.location.href=e)}else a(c),s(n)},[k,E,a,s,r]),x=Object(F.a)(y,500),S=Object(o.useCallback)(e=>{e[0]!==f&&g(e[0]),e[1]!==O&&w(e[1])},[f,O,g,w]);Object(o.useEffect)(()=>{t.showFilterButton||x(f,O)},[f,O,t.showFilterButton,x]);const C=Object(j.a)(l),V=Object(j.a)(u),A=Object(j.a)(k),B=Object(j.a)(E);if(Object(o.useEffect)(()=>{(!Number.isFinite(f)||l!==C&&l!==f||k!==A&&k!==f)&&g(Number.isFinite(l)?l:k),(!Number.isFinite(O)||u!==V&&u!==O||E!==B&&E!==O)&&w(Number.isFinite(u)?u:E)},[f,O,l,u,k,E,A,B,C,V]),!d&&(null===k||null===E||k===E))return null;const U="h"+t.headingLevel;return Object(o.createElement)(o.Fragment,null,!n&&t.heading&&Object(o.createElement)(U,{className:"wc-block-price-filter__title"},t.heading),Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(N,{minConstraint:k,maxConstraint:E,minPrice:f,maxPrice:O,currency:_,showInputFields:t.showInputFields,showFilterButton:t.showFilterButton,onChange:S,onSubmit:()=>y(f,O),isLoading:d})))};n(395),Object(l.registerBlockType)("woocommerce/price-filter",{apiVersion:2,title:Object(i.__)("Filter Products by Price","woocommerce"),icon:{src:Object(o.createElement)(s.a,{icon:b.a,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woocommerce")],description:Object(i.__)("Allow customers to filter the products by choosing a lower or upper price limit. Works in combination with the All Products block.","woocommerce"),supports:{html:!1,multiple:!1,color:{text:!0,background:!1},...Object(p.b)()&&{__experimentalBorder:{radius:!0,color:!0,width:!1}}},example:{},attributes:{showInputFields:{type:"boolean",default:!0},showFilterButton:{type:"boolean",default:!1},heading:{type:"string",default:Object(i.__)("Filter by price","woocommerce")},headingLevel:{type:"number",default:3}},edit:function(e){let{attributes:t,setAttributes:n}=e;const{heading:r,headingLevel:c,showInputFields:l,showFilterButton:a}=t,u=Object(d.useBlockProps)();return Object(o.createElement)("div",u,0===f.o.productCount?Object(o.createElement)(_.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(s.a,{icon:b.a}),label:Object(i.__)("Filter Products by Price","woocommerce"),instructions:Object(i.__)("Display a slider to filter products in your store by price.","woocommerce")},Object(o.createElement)("p",null,Object(i.__)("Products with prices are needed for filtering by price. You haven't created any products yet.","woocommerce")),Object(o.createElement)(_.Button,{className:"wc-block-price-slider__add-product-button",isSecondary:!0,href:Object(m.getAdminLink)("post-new.php?post_type=product")},Object(i.__)("Add new product","woocommerce")+" ",Object(o.createElement)(s.a,{icon:w.a})),Object(o.createElement)(_.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(i.__)("Learn more","woocommerce"))):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(d.InspectorControls,{key:"inspector"},Object(o.createElement)(_.PanelBody,{title:Object(i.__)("Block Settings","woocommerce")},Object(o.createElement)(_.__experimentalToggleGroupControl,{label:Object(i.__)("Price Range","woocommerce"),value:l?"editable":"text",onChange:e=>n({showInputFields:"editable"===e})},Object(o.createElement)(_.__experimentalToggleGroupControlOption,{value:"editable",label:Object(i.__)("Editable","woocommerce")}),Object(o.createElement)(_.__experimentalToggleGroupControlOption,{value:"text",label:Object(i.__)("Text","woocommerce")})),Object(o.createElement)(_.ToggleControl,{label:Object(i.__)("Filter button","woocommerce"),help:a?Object(i.__)("Products will only update when the button is pressed.","woocommerce"):Object(i.__)("Products will update when the slider is moved.","woocommerce"),checked:a,onChange:()=>n({showFilterButton:!a})}),Object(o.createElement)("p",null,Object(i.__)("Heading Level","woocommerce")),Object(o.createElement)(g.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:c,onChange:e=>n({headingLevel:e})}))),Object(o.createElement)(O.a,{className:"wc-block-price-filter__title",headingLevel:c,heading:r,onChange:e=>n({heading:e})}),Object(o.createElement)(_.Disabled,null,Object(o.createElement)(V,{attributes:t,isEditor:!0}))))},save(e){let{attributes:t}=e;const{className:n,showInputFields:r,showFilterButton:i,heading:l,headingLevel:a}=t,s={"data-showinputfields":r,"data-showfilterbutton":i,"data-heading":l,"data-heading-level":a};return Object(o.createElement)("div",c()({},d.useBlockProps.save({className:u()("is-loading",n)}),s),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(25),o=n.n(c);function i(e){const t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)("page"),o=()=>Object(r.useContext)(c);c.Provider},5:function(e,t){e.exports=window.wp.blockEditor},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},68:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return a}));var r=n(13),c=n(23);const o=(e,t)=>{if(c.n>2)return Object(r.registerBlockType)(e,t)},i=(e,t)=>{if(c.n>1)return Object(r.registerBlockType)(e,t)},l=()=>c.n>2,a=()=>c.n>1},7:function(e,t){e.exports=window.lodash},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}));var r=n(17),c=n(9),o=n(0),i=n(25),l=n.n(i),a=n(48),u=n(105),s=n(49);const b=e=>{const t=Object(s.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:i}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{i(e,t)},[e,i])]},p=(e,t,n)=>{const i=Object(s.a)();n=n||i;const l=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:a}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[l,Object(o.useCallback)(t=>{a(n,e,t)},[n,e,a])]},d=(e,t)=>{const n=Object(s.a)();t=t||n;const[r,c]=b(t),i=Object(a.a)(r),p=Object(a.a)(e),d=Object(u.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{l()(d,p)||(c(Object.assign({},i,p)),m.current=!0)},[i,p,d,c]),m.current?[r,c]:[e,c]}},8:function(e,t){e.exports=window.React},9:function(e,t){e.exports=window.wp.data},98:function(e,t,n){"use strict";var r=n(0),c=n(7),o=n(1),i=n(3),l=n(11);function a(e){let{level:t}=e;const n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(r.createElement)(l.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(l.Path,{d:n[t]})):null}class u extends r.Component{createLevelControl(e,t,n){const c=e===t;return{icon:Object(r.createElement)(a,{level:e}),title:Object(o.sprintf)(
/* translators: %s: heading level e.g: "2", "3", "4" */
Object(o.__)("Heading %d","woocommerce"),e),isActive:c,onClick:()=>n(e)}}render(){const{isCollapsed:e=!0,minLevel:t,maxLevel:n,selectedLevel:o,onChange:l}=this.props;return Object(r.createElement)(i.ToolbarGroup,{isCollapsed:e,icon:Object(r.createElement)(a,{level:o}),controls:Object(c.range)(t,n).map(e=>this.createLevelControl(e,o,l))})}}t.a=u}});
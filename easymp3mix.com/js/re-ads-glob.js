(()=>{"use strict";const e=document.currentScript.getAttribute("lang")||null;window.reAds=function(e,t){const r={},n=document.createElement.bind(document),s=e=>{const t=n(e.tagName);return Array.from(e.attributes).forEach((e=>{t.setAttribute(e.nodeName,e.nodeValue)})),Array.from(e.childNodes).forEach((e=>{e.nodeType!==document.ELEMENT_NODE?t.appendChild(e):t.appendChild(s(e))})),t},o=(e,t)=>"generic_html"===e?(({sourceCode:e})=>{const t=n("div");return t.innerHTML=e,Array.from(t.children).map((e=>s(e)))})(t):"image"===e?(({clickUrl:e,srcUrl:t,altText:r,styles:s={}})=>{const o=n("img");return o.src=t,r&&o.setAttribute("alt",r),Object.assign(o.style,{cursor:"pointer"},s),o.addEventListener("click",(()=>{window.open(e)})),[o]})(t):[],i=e=>{if(!r[e])return;const t=r[e].element;for(;t.firstChild;)t.removeChild(t.firstChild)},a=(r,s)=>Promise.resolve().then((()=>(r=>fetch(`${e}/zone/${r}${t?`?lang=${t}`:""}`,{credentials:"include"}).then((e=>e.json())).then((({status:e,data:t,msg:r})=>{if("success"!==e)throw new Error(r);return t})))(r))).then((({type:e,adData:t})=>{const r=o(e,t);if(r.length){const e=(e=>{const t=n("img");return t.src=e,t.style.cssText="position:absolute;width:1px;height:1px",t})(t.pixelUrl);s.element.appendChild(e),r.forEach((e=>s.element.appendChild(e)))}})).catch((e=>{})),d=(e,t,r=5)=>{if("function"!=typeof window.formConvertOn)return void(r>0&&setTimeout((()=>{d(e,t,r-1)}),1e3));const n=t.params.r?Number.parseInt(t.params.r,10):null,s=t.params.e||"start";let o=!1;window.formConvertOn(s,(()=>{if(!o){if(n&&!Number.isNaN(n)){if(((e=>{let t=Number.parseInt(sessionStorage.getItem(`convert.${e}`),10);return Number.isNaN(t)?0:t})(s)-1)%n!=0)return}i(e),o=!0,a(e,t).finally((()=>{o=!1}))}}))};return{addZone:(e,t,n,s)=>{r[e]={element:t,params:n,isPassive:s}},resetZone:i,init:e=>{if(!r[e])return;const t=r[e];switch(t.params&&t.params.h?t.params.h:null){case"onConv":return d(e,t);default:return((e,t)=>a(e,t))(e,t)}}}}("https://dl.zabanit.xyz",e),window.reAdsZones&&Array.isArray(window.reAdsZones)&&(window.reAdsZones.forEach((([e,t,r,n])=>{window.reAds.addZone(e,t,r,n),n||window.reAds.init(e)})),delete window.reAdsZones)})();
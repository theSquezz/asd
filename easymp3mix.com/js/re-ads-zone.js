(()=>{const t=document.currentScript.getAttribute("zone-id"),e=document.currentScript.getAttribute("zone-params"),n=!!document.currentScript.getAttribute("is-passive");!function(){if(!t)return;const r=document.currentScript.parentNode;let i={};if(e)try{i=JSON.parse(e)}catch(t){}window.reAds?(window.reAds.addZone(t,r,i,n),n||window.reAds.init(t)):((t,e,n,r)=>{window.reAdsZones||(window.reAdsZones=[]),window.reAdsZones.push([t,e,n,r])})(t,r,i,n)}()})();
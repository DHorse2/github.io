window.___jsl=window.___jsl||{};
window.___jsl.h=window.___jsl.h||'r;gc/21773286-02b1a9f6';
window.___gpq=[];
window.gapi=window.gapi||{};
window.gapi.plusone=window.gapi.plusone||(function(){
  function f(n){return function(){window.___gpq.push(n,arguments)}}
  return{go:f('go'),render:f('render')}})();
function __bsld(){var p=window.gapi.plusone=window.googleapisv0.plusone;var f;while(f=window.___gpq.shift()){
  p[f]&&p[f].apply(p,window.___gpq.shift())}
if (gadgets.config.get("gwidget")["parsetags"]!=="explicit"){gapi.plusone.go();}}
window['___jsl'] = window['___jsl'] || {};window['___jsl']['u'] = 'https:\/\/apis.google.com\/js\/plusone.js';window['___jsl']['f'] = ['googleapis.client','plusone'];var jsloader=window.jsloader||{};
var gapi=window.gapi||{};
(function(){function m(){return window.___jsl=window.___jsl||{}}function n(a,e,c,d){c=p(c).join(a);d&&d.length>0&&(c+=e+p(d).join(a));return c}function s(a){for(var e={},c=0,d;d=a[c];c++)e[d]=1;return e}function p(a){var e=[],c;for(c in s(a))e.push(c);return e.sort()}function o(a){for(var e=0,c;c=a[e];e++){c=c.split("@");var d=q,b,f=c[0].split("!");b=f[0].split(":");f=f[1]&&f[1].split(":");b=n(":","!",b,f);d[b]=c[1]}}function t(a){return(a=u.match(a))&&a[2]}function v(a){h=e=0;q={};j=[];i=window.console||
window.opera&&window.opera.postError;u=a;if(a=t(x)||t(y)||m().h)a=a.split(";"),e=a[0],e==="s"?(h="https://ssl.gstatic.com/webclient/js",o(a.slice(1))):e==="i"?(h=a[1],o(a.slice(2))):e==="d"?(h=a[1],l=a[2],w=a[3]||"gcjs-3p"):e==="r"?(h="https://ssl.gstatic.com/webclient/js",l=a[1]):e==="f"&&(h=a[1],l=a[2])}var x=/\?([^&#]*&)*jsh=([^&#]*)/,y=/#([^&]*&)*jsh=([^&]*)/,z=/^https:\/\/ssl.gstatic.com\/webclient\/js(\/[a-zA-Z0-9_\-]+)*\/[a-zA-Z0-9_\-\.:!]+\.js$/,e,h,w,l,q,j,i,u;v(document.location.href);jsloader.load=
function(a,o){var c;if(!a||a.length==0)i&&i.warn("Cannot load empty features.");else{var d;d=s(j);for(var b=!0,f=0,g;g=b&&a[f];f++)b=b&&d[g];(d=b)?(d="Cannot load loaded features ["+a.join(",")+"].",i&&i.warn(d)):e==="s"||e==="i"?(d=a,(c=q[n(":","!",d,j)])?c=h+"/"+c+".js":(d="Cannot find features ["+d.join(",")+"], except ["+j.join(",")+"].",i&&i.warn(d),c=void 0)):e==="d"?(d=h+"/"+n(":","!",a,j),d+=".js?container="+w+"&c=2&jsload=0",l&&(d+="&r="+l),c=d):e==="r"||e==="f"?c=h+"/"+l+"/"+n("__","--",
a,j)+".js":(d="Cannot respond for features ["+a.join(",")+"].",i&&i.warn(d))}d=a;b=o;if(c){if(b){if(m().c)throw"Cannot continue until a pending callback completes.";m().c=b;m().o=1}if(e==="s"||e==="r")b=c.match(z);else a:{f=c;if(f.indexOf("http://")==0||f.indexOf("https://")==0||f.indexOf("//")==0)if(b=m().m){g=f.indexOf("//");var k=f.indexOf("/",g+2),r=f.indexOf(":",g+2);r!=-1&&r<k&&(k=r);if(g!=-1&&k!=-1){f=f.substring(g+2,k);g=f.lastIndexOf(b);b=g==0||(b.charAt(0)=="."||f.charAt(g-1)==".")&&f.length-
b.length==g;break a}}b=!1}if(!b)throw"Cannot load url "+c+".";if(window.___gapisync===!0)b=!0;else{b=!1;f=document.getElementsByTagName("meta");for(g=0;k=!b&&f[g];++g)"generator"==k.getAttribute("name")&&"blogger"==k.getAttribute("content")&&(b=!0)}b?document.write('<script src="'+c+'"><\/script>'):(b=document.createElement("script"),b.setAttribute("src",c),document.getElementsByTagName("head")[0].appendChild(b));j=p(j.concat(d))}else b&&b()};jsloader.reinitialize_=function(a){v(a)}})();
gapi.load=function(a,b){jsloader.load(a.split(":"),b)};
gapi.load('googleapis.client:plusone', window['__bsld']);
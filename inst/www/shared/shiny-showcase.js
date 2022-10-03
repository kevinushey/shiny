/*! shiny 1.7.2.9000 | (c) 2012-2022 RStudio, PBC. | License: GPL-3 | file LICENSE */
"use strict";(function(){var en=Object.create;var Me=Object.defineProperty;var rn=Object.getOwnPropertyDescriptor;var tn=Object.getOwnPropertyNames;var nn=Object.getPrototypeOf,on=Object.prototype.hasOwnProperty;var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var an=function(e,r,t,n){if(r&&typeof r=="object"||typeof r=="function")for(var o=tn(r),i=0,u=o.length,l;i<u;i++)l=o[i],!on.call(e,l)&&l!==t&&Me(e,l,{get:function(c){return r[c]}.bind(null,l),enumerable:!(n=rn(r,l))||n.enumerable});return e};var un=function(e,r,t){return t=e!=null?en(nn(e)):{},an(r||!e||!e.__esModule?Me(t,"default",{value:e,enumerable:!0}):t,e)};var g=a(function(Wo,Be){var M=function(e){return e&&e.Math==Math&&e};Be.exports=M(typeof globalThis=="object"&&globalThis)||M(typeof window=="object"&&window)||M(typeof self=="object"&&self)||M(typeof global=="object"&&global)||function(){return this}()||Function("return this")()});var E=a(function(Ho,Le){Le.exports=function(e){try{return!!e()}catch(r){return!0}}});var I=a(function(Go,Fe){var ln=E();Fe.exports=!ln(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})});var He=a(function(We){"use strict";var $e={}.propertyIsEnumerable,Ue=Object.getOwnPropertyDescriptor,cn=Ue&&!$e.call({1:2},1);We.f=cn?function(r){var t=Ue(this,r);return!!t&&t.enumerable}:$e});var ee=a(function(zo,Ge){Ge.exports=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}});var re=a(function(ko,Ke){var fn={}.toString;Ke.exports=function(e){return fn.call(e).slice(8,-1)}});var ke=a(function(Xo,ze){var sn=E(),vn=re(),dn="".split;ze.exports=sn(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return vn(e)=="String"?dn.call(e,""):Object(e)}:Object});var P=a(function(Yo,Xe){Xe.exports=function(e){if(e==null)throw TypeError("Can't call method on "+e);return e}});var B=a(function(Jo,Ye){var pn=ke(),gn=P();Ye.exports=function(e){return pn(gn(e))}});var O=a(function(Zo,Je){Je.exports=function(e){return typeof e=="object"?e!==null:typeof e=="function"}});var te=a(function(Qo,Ze){var L=O();Ze.exports=function(e,r){if(!L(e))return e;var t,n;if(r&&typeof(t=e.toString)=="function"&&!L(n=t.call(e))||typeof(t=e.valueOf)=="function"&&!L(n=t.call(e))||!r&&typeof(t=e.toString)=="function"&&!L(n=t.call(e)))return n;throw TypeError("Can't convert object to primitive value")}});var ne=a(function(Vo,Qe){var hn=P();Qe.exports=function(e){return Object(hn(e))}});var m=a(function(ea,Ve){var yn=ne(),En={}.hasOwnProperty;Ve.exports=Object.hasOwn||function(r,t){return En.call(yn(r),t)}});var tr=a(function(ra,rr){var xn=g(),er=O(),ie=xn.document,mn=er(ie)&&er(ie.createElement);rr.exports=function(e){return mn?ie.createElement(e):{}}});var oe=a(function(ta,nr){var qn=I(),Sn=E(),bn=tr();nr.exports=!qn&&!Sn(function(){return Object.defineProperty(bn("div"),"a",{get:function(){return 7}}).a!=7})});var ae=a(function(or){var wn=I(),In=He(),Pn=ee(),On=B(),Tn=te(),_n=m(),Cn=oe(),ir=Object.getOwnPropertyDescriptor;or.f=wn?ir:function(r,t){if(r=On(r),t=Tn(t,!0),Cn)try{return ir(r,t)}catch(n){}if(_n(r,t))return Pn(!In.f.call(r,t),r[t])}});var T=a(function(ia,ar){var Rn=O();ar.exports=function(e){if(!Rn(e))throw TypeError(String(e)+" is not an object");return e}});var ue=a(function(cr){var An=I(),Nn=oe(),ur=T(),Dn=te(),lr=Object.defineProperty;cr.f=An?lr:function(r,t,n){if(ur(r),t=Dn(t,!0),ur(n),Nn)try{return lr(r,t,n)}catch(o){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(r[t]=n.value),r}});var S=a(function(aa,fr){var jn=I(),Mn=ue(),Bn=ee();fr.exports=jn?function(e,r,t){return Mn.f(e,r,Bn(1,t))}:function(e,r,t){return e[r]=t,e}});var F=a(function(ua,vr){var sr=g(),Ln=S();vr.exports=function(e,r){try{Ln(sr,e,r)}catch(t){sr[e]=r}return r}});var U=a(function(la,pr){var Fn=g(),$n=F(),dr="__core-js_shared__",Un=Fn[dr]||$n(dr,{});pr.exports=Un});var ce=a(function(ca,gr){var le=U(),Wn=Function.toString;typeof le.inspectSource!="function"&&(le.inspectSource=function(e){return Wn.call(e)});gr.exports=le.inspectSource});var Er=a(function(fa,yr){var Hn=g(),Gn=ce(),hr=Hn.WeakMap;yr.exports=typeof hr=="function"&&/native code/.test(Gn(hr))});var mr=a(function(sa,xr){xr.exports=!1});var W=a(function(va,Sr){var Kn=mr(),qr=U();(Sr.exports=function(e,r){return qr[e]||(qr[e]=r!==void 0?r:{})})("versions",[]).push({version:"3.14.0",mode:Kn?"pure":"global",copyright:"\xA9 2021 Denis Pushkarev (zloirock.ru)"})});var fe=a(function(da,br){var zn=0,kn=Math.random();br.exports=function(e){return"Symbol("+String(e===void 0?"":e)+")_"+(++zn+kn).toString(36)}});var Pr=a(function(pa,Ir){var Xn=W(),Yn=fe(),wr=Xn("keys");Ir.exports=function(e){return wr[e]||(wr[e]=Yn(e))}});var se=a(function(ga,Or){Or.exports={}});var Ar=a(function(ha,Rr){var Jn=Er(),Zn=g(),Qn=O(),Vn=S(),ve=m(),de=U(),ei=Pr(),ri=se(),Tr="Object already initialized",ti=Zn.WeakMap,H,_,G,ni=function(e){return G(e)?_(e):H(e,{})},ii=function(e){return function(r){var t;if(!Qn(r)||(t=_(r)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}};Jn||de.state?(x=de.state||(de.state=new ti),_r=x.get,pe=x.has,Cr=x.set,H=function(e,r){if(pe.call(x,e))throw new TypeError(Tr);return r.facade=e,Cr.call(x,e,r),r},_=function(e){return _r.call(x,e)||{}},G=function(e){return pe.call(x,e)}):(q=ei("state"),ri[q]=!0,H=function(e,r){if(ve(e,q))throw new TypeError(Tr);return r.facade=e,Vn(e,q,r),r},_=function(e){return ve(e,q)?e[q]:{}},G=function(e){return ve(e,q)});var x,_r,pe,Cr,q;Rr.exports={set:H,get:_,has:G,enforce:ni,getterFor:ii}});var ge=a(function(ya,jr){var oi=g(),Nr=S(),ai=m(),ui=F(),li=ce(),Dr=Ar(),ci=Dr.get,fi=Dr.enforce,si=String(String).split("String");(jr.exports=function(e,r,t,n){var o=n?!!n.unsafe:!1,i=n?!!n.enumerable:!1,u=n?!!n.noTargetGet:!1,l;if(typeof t=="function"&&(typeof r=="string"&&!ai(t,"name")&&Nr(t,"name",r),l=fi(t),l.source||(l.source=si.join(typeof r=="string"?r:""))),e===oi){i?e[r]=t:ui(r,t);return}else o?!u&&e[r]&&(i=!0):delete e[r];i?e[r]=t:Nr(e,r,t)})(Function.prototype,"toString",function(){return typeof this=="function"&&ci(this).source||li(this)})});var Br=a(function(Ea,Mr){var vi=g();Mr.exports=vi});var Ee=a(function(xa,Fr){var he=Br(),ye=g(),Lr=function(e){return typeof e=="function"?e:void 0};Fr.exports=function(e,r){return arguments.length<2?Lr(he[e])||Lr(ye[e]):he[e]&&he[e][r]||ye[e]&&ye[e][r]}});var C=a(function(ma,$r){var di=Math.ceil,pi=Math.floor;$r.exports=function(e){return isNaN(e=+e)?0:(e>0?pi:di)(e)}});var xe=a(function(qa,Ur){var gi=C(),hi=Math.min;Ur.exports=function(e){return e>0?hi(gi(e),9007199254740991):0}});var Hr=a(function(Sa,Wr){var yi=C(),Ei=Math.max,xi=Math.min;Wr.exports=function(e,r){var t=yi(e);return t<0?Ei(t+r,0):xi(t,r)}});var zr=a(function(ba,Kr){var mi=B(),qi=xe(),Si=Hr(),Gr=function(e){return function(r,t,n){var o=mi(r),i=qi(o.length),u=Si(n,i),l;if(e&&t!=t){for(;i>u;)if(l=o[u++],l!=l)return!0}else for(;i>u;u++)if((e||u in o)&&o[u]===t)return e||u||0;return!e&&-1}};Kr.exports={includes:Gr(!0),indexOf:Gr(!1)}});var Xr=a(function(wa,kr){var me=m(),bi=B(),wi=zr().indexOf,Ii=se();kr.exports=function(e,r){var t=bi(e),n=0,o=[],i;for(i in t)!me(Ii,i)&&me(t,i)&&o.push(i);for(;r.length>n;)me(t,i=r[n++])&&(~wi(o,i)||o.push(i));return o}});var Jr=a(function(Ia,Yr){Yr.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Qr=a(function(Zr){var Pi=Xr(),Oi=Jr(),Ti=Oi.concat("length","prototype");Zr.f=Object.getOwnPropertyNames||function(r){return Pi(r,Ti)}});var et=a(function(Vr){Vr.f=Object.getOwnPropertySymbols});var tt=a(function(Ta,rt){var _i=Ee(),Ci=Qr(),Ri=et(),Ai=T();rt.exports=_i("Reflect","ownKeys")||function(r){var t=Ci.f(Ai(r)),n=Ri.f;return n?t.concat(n(r)):t}});var it=a(function(_a,nt){var Ni=m(),Di=tt(),ji=ae(),Mi=ue();nt.exports=function(e,r){for(var t=Di(r),n=Mi.f,o=ji.f,i=0;i<t.length;i++){var u=t[i];Ni(e,u)||n(e,u,o(r,u))}}});var at=a(function(Ca,ot){var Bi=E(),Li=/#|\.prototype\./,R=function(e,r){var t=$i[Fi(e)];return t==Wi?!0:t==Ui?!1:typeof r=="function"?Bi(r):!!r},Fi=R.normalize=function(e){return String(e).replace(Li,".").toLowerCase()},$i=R.data={},Ui=R.NATIVE="N",Wi=R.POLYFILL="P";ot.exports=R});var lt=a(function(Ra,ut){var qe=g(),Hi=ae().f,Gi=S(),Ki=ge(),zi=F(),ki=it(),Xi=at();ut.exports=function(e,r){var t=e.target,n=e.global,o=e.stat,i,u,l,c,s,v;if(n?u=qe:o?u=qe[t]||zi(t,{}):u=(qe[t]||{}).prototype,u)for(l in r){if(s=r[l],e.noTargetGet?(v=Hi(u,l),c=v&&v.value):c=u[l],i=Xi(n?l:t+(o?".":"#")+l,e.forced),!i&&c!==void 0){if(typeof s==typeof c)continue;ki(s,c)}(e.sham||c&&c.sham)&&Gi(s,"sham",!0),Ki(u,l,s,e)}}});var ft=a(function(Aa,ct){"use strict";var Yi=T();ct.exports=function(){var e=Yi(this),r="";return e.global&&(r+="g"),e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.dotAll&&(r+="s"),e.unicode&&(r+="u"),e.sticky&&(r+="y"),r}});var dt=a(function(Se){"use strict";var st=E();function vt(e,r){return RegExp(e,r)}Se.UNSUPPORTED_Y=st(function(){var e=vt("a","y");return e.lastIndex=2,e.exec("abcd")!=null});Se.BROKEN_CARET=st(function(){var e=vt("^r","gy");return e.lastIndex=2,e.exec("str")!=null})});var z=a(function(Da,yt){"use strict";var Ji=ft(),pt=dt(),Zi=W(),K=RegExp.prototype.exec,Qi=Zi("native-string-replace",String.prototype.replace),gt=K,be=function(){var e=/a/,r=/b*/g;return K.call(e,"a"),K.call(r,"a"),e.lastIndex!==0||r.lastIndex!==0}(),ht=pt.UNSUPPORTED_Y||pt.BROKEN_CARET,we=/()??/.exec("")[1]!==void 0,Vi=be||we||ht;Vi&&(gt=function(r){var t=this,n,o,i,u,l=ht&&t.sticky,c=Ji.call(t),s=t.source,v=0,f=r;return l&&(c=c.replace("y",""),c.indexOf("g")===-1&&(c+="g"),f=String(r).slice(t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&r[t.lastIndex-1]!=="\n")&&(s="(?: "+s+")",f=" "+f,v++),o=new RegExp("^(?:"+s+")",c)),we&&(o=new RegExp("^"+s+"$(?!\\s)",c)),be&&(n=t.lastIndex),i=K.call(l?o:t,f),l?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=t.lastIndex,t.lastIndex+=i[0].length):t.lastIndex=0:be&&i&&(t.lastIndex=t.global?i.index+i[0].length:n),we&&i&&i.length>1&&Qi.call(i[0],o,function(){for(u=1;u<arguments.length-2;u++)arguments[u]===void 0&&(i[u]=void 0)}),i});yt.exports=gt});var Ie=a(function(){"use strict";var eo=lt(),Et=z();eo({target:"RegExp",proto:!0,forced:/./.exec!==Et},{exec:Et})});var mt=a(function(Ba,xt){var ro=Ee();xt.exports=ro("navigator","userAgent")||""});var It=a(function(La,wt){var to=g(),Pe=mt(),qt=to.process,St=qt&&qt.versions,bt=St&&St.v8,y,k;bt?(y=bt.split("."),k=y[0]<4?1:y[0]+y[1]):Pe&&(y=Pe.match(/Edge\/(\d+)/),(!y||y[1]>=74)&&(y=Pe.match(/Chrome\/(\d+)/),y&&(k=y[1])));wt.exports=k&&+k});var Oe=a(function(Fa,Ot){var Pt=It(),no=E();Ot.exports=!!Object.getOwnPropertySymbols&&!no(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Pt&&Pt<41})});var _t=a(function($a,Tt){var io=Oe();Tt.exports=io&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Nt=a(function(Ua,At){var oo=g(),ao=W(),Ct=m(),uo=fe(),Rt=Oe(),lo=_t(),A=ao("wks"),N=oo.Symbol,co=lo?N:N&&N.withoutSetter||uo;At.exports=function(e){return(!Ct(A,e)||!(Rt||typeof A[e]=="string"))&&(Rt&&Ct(N,e)?A[e]=N[e]:A[e]=co("Symbol."+e)),A[e]}});var Ft=a(function(Wa,Lt){"use strict";Ie();var Dt=ge(),fo=z(),X=E(),_e=Nt(),so=S(),vo=_e("species"),Te=RegExp.prototype,po=!X(function(){var e=/./;return e.exec=function(){var r=[];return r.groups={a:"7"},r},"".replace(e,"$<a>")!=="7"}),jt=function(){return"a".replace(/./,"$0")==="$0"}(),Mt=_e("replace"),Bt=function(){return/./[Mt]?/./[Mt]("a","$0")==="":!1}(),go=!X(function(){var e=/(?:)/,r=e.exec;e.exec=function(){return r.apply(this,arguments)};var t="ab".split(e);return t.length!==2||t[0]!=="a"||t[1]!=="b"});Lt.exports=function(e,r,t,n){var o=_e(e),i=!X(function(){var f={};return f[o]=function(){return 7},""[e](f)!=7}),u=i&&!X(function(){var f=!1,d=/a/;return e==="split"&&(d={},d.constructor={},d.constructor[vo]=function(){return d},d.flags="",d[o]=/./[o]),d.exec=function(){return f=!0,null},d[o](""),!f});if(!i||!u||e==="replace"&&!(po&&jt&&!Bt)||e==="split"&&!go){var l=/./[o],c=t(o,""[e],function(f,d,h,D,b){var p=d.exec;return p===fo||p===Te.exec?i&&!b?{done:!0,value:l.call(d,h,D)}:{done:!0,value:f.call(h,d,D)}:{done:!1}},{REPLACE_KEEPS_$0:jt,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Bt}),s=c[0],v=c[1];Dt(String.prototype,e,s),Dt(Te,o,r==2?function(f,d){return v.call(f,this,d)}:function(f){return v.call(f,this)})}n&&so(Te[o],"sham",!0)}});var Wt=a(function(Ha,Ut){var ho=C(),yo=P(),$t=function(e){return function(r,t){var n=String(yo(r)),o=ho(t),i=n.length,u,l;return o<0||o>=i?e?"":void 0:(u=n.charCodeAt(o),u<55296||u>56319||o+1===i||(l=n.charCodeAt(o+1))<56320||l>57343?e?n.charAt(o):u:e?n.slice(o,o+2):(u-55296<<10)+(l-56320)+65536)}};Ut.exports={codeAt:$t(!1),charAt:$t(!0)}});var Gt=a(function(Ga,Ht){"use strict";var Eo=Wt().charAt;Ht.exports=function(e,r,t){return r+(t?Eo(e,r).length:1)}});var zt=a(function(Ka,Kt){var xo=ne(),mo=Math.floor,qo="".replace,So=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,bo=/\$([$&'`]|\d{1,2})/g;Kt.exports=function(e,r,t,n,o,i){var u=t+e.length,l=n.length,c=bo;return o!==void 0&&(o=xo(o),c=So),qo.call(i,c,function(s,v){var f;switch(v.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,t);case"'":return r.slice(u);case"<":f=o[v.slice(1,-1)];break;default:var d=+v;if(d===0)return s;if(d>l){var h=mo(d/10);return h===0?s:h<=l?n[h-1]===void 0?v.charAt(1):n[h-1]+v.charAt(1):s}f=n[d-1]}return f===void 0?"":f})}});var Xt=a(function(za,kt){var wo=re(),Io=z();kt.exports=function(e,r){var t=e.exec;if(typeof t=="function"){var n=t.call(e,r);if(typeof n!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return n}if(wo(e)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return Io.call(e,r)}});var ka=un(Ie());var Po=Ft(),Oo=T(),To=xe(),_o=C(),Co=P(),Ro=Gt(),Ao=zt(),No=Xt(),Do=Math.max,jo=Math.min,Mo=function(e){return e===void 0?e:String(e)};Po("replace",2,function(e,r,t,n){var o=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=n.REPLACE_KEEPS_$0,u=o?"$":"$0";return[function(c,s){var v=Co(this),f=c==null?void 0:c[e];return f!==void 0?f.call(c,v,s):r.call(String(v),c,s)},function(l,c){if(!o&&i||typeof c=="string"&&c.indexOf(u)===-1){var s=t(r,l,this,c);if(s.done)return s.value}var v=Oo(l),f=String(this),d=typeof c=="function";d||(c=String(c));var h=v.global;if(h){var D=v.unicode;v.lastIndex=0}for(var b=[];;){var p=No(v,f);if(p===null||(b.push(p),!h))break;var Vt=String(p[0]);Vt===""&&(v.lastIndex=Ro(f,To(v.lastIndex),D))}for(var Ne="",j=0,Y=0;Y<b.length;Y++){p=b[Y];for(var J=String(p[0]),w=Do(jo(_o(p.index),f.length),0),Z=[],Q=1;Q<p.length;Q++)Z.push(Mo(p[Q]));var V=p.groups;if(d){var De=[J].concat(Z,w,f);V!==void 0&&De.push(V);var je=String(c.apply(void 0,De))}else je=Ao(J,f,w,Z,V,c);w>=j&&(Ne+=f.slice(j,w)+je,j=w+J.length)}return Ne+f.slice(j)}]});var Yt=400;function Ce(e,r){var t=0;if(e.nodeType===3){var n=e.nodeValue.replace(/\n/g,"").length;if(n>=r)return{element:e,offset:r};t+=n}else if(e.nodeType===1&&e.firstChild){var o=Ce(e.firstChild,r);if(o.element!==null)return o;t+=o.offset}return e.nextSibling?Ce(e.nextSibling,r-t):{element:null,offset:t}}function Re(e,r,t){for(var n=0,o=0;o<e.childNodes.length;o++){var i=e.childNodes[o];if(i.nodeType===3){for(var u=/\n/g,l=void 0;(l=u.exec(i.nodeValue))!==null;)if(n++,n===r)return Ce(i,l.index+t+1)}else if(i.nodeType===1){var c=Re(i,r-n,t);if(c.element!==null)return c;n+=c.offset}}return{element:null,offset:n}}function Bo(e,r){if(!!document.createRange){var t=document.getElementById("srcref_"+e);if(!t){t=document.createElement("span"),t.id="srcref_"+e;var n=e,o=document.getElementById(r.replace(/\./g,"_")+"_code");if(!o)return;var i=Re(o,n[0],n[4]),u=Re(o,n[2],n[5]);if(i.element===null||u.element===null)return;var l=document.createRange();i.element.parentNode.nodeName==="SPAN"&&i.element!==u.element?l.setStartBefore(i.element.parentNode):l.setStart(i.element,i.offset),u.element.parentNode.nodeName==="SPAN"&&i.element!==u.element?l.setEndAfter(u.element.parentNode):l.setEnd(u.element,u.offset),l.surroundContents(t)}$(t).stop(!0,!0).effect("highlight",null,1600)}}Shiny&&Shiny.addCustomMessageHandler("showcase-src",function(e){e.srcref&&e.srcfile&&Bo(e.srcref,e.srcfile)});var Ae=!1,Jt=function(r,t){var n=t?Yt:1,o=r?document.getElementById("showcase-sxs-code"):document.getElementById("showcase-code-inline"),i=r?document.getElementById("showcase-code-inline"):document.getElementById("showcase-sxs-code"),u=document.getElementById("showcase-app-metadata");if(u===null){var l=$("#showcase-well");r?l.fadeOut(n):l.fadeIn(n)}$(o).hide(),$(i).fadeOut(n,function(){var c=document.getElementById("showcase-code-tabs");i.removeChild(c),o.appendChild(c),r?Qt():document.getElementById("showcase-code-content").removeAttribute("style"),$(o).fadeIn(n),r||(document.getElementById("showcase-app-container").removeAttribute("style"),t&&$(document.body).animate({scrollTop:$(o).offset().top}));var s=document.getElementById("readme-md");s!==null&&(s.parentElement.removeChild(s),r?(i.appendChild(s),$(i).fadeIn(n)):document.getElementById("showcase-app-metadata").appendChild(s)),document.getElementById("showcase-code-position-toggle").innerHTML=r?'<i class="fa fa-level-down"></i> show below':'<i class="fa fa-level-up"></i> show with app'}),r&&$(document.body).animate({scrollTop:0},n),Ae=r,Zt(r&&t),$(window).trigger("resize")};function Zt(e){var r=960,t=r,n=1,o=document.getElementById("showcase-app-code").offsetWidth;o/2>r?t=o/2:o*.66>r?t=960:(t=o*.66,n=t/r);var i=document.getElementById("showcase-app-container");$(i).animate({width:t+"px",zoom:n*100+"%"},e?Yt:0)}var Lo=function(){Jt(!Ae,!0)},Fo=function(){document.body.offsetWidth>1350&&Jt(!0,!1)};function Qt(){document.getElementById("showcase-code-content").style.height=$(window).height()+"px"}function $o(){var e=document.getElementById("showcase-markdown-content");if(e!==null){var r=e.innerText||e.innerHTML,t=window.Showdown.converter;document.getElementById("readme-md").innerHTML=new t().makeHtml(r)}}$(window).resize(function(){Ae&&(Zt(!1),Qt())});window.toggleCodePosition=Lo;$(window).on("load",Fo);$(window).on("load",$o);window.hljs&&window.hljs.initHighlightingOnLoad();})();
//# sourceMappingURL=shiny-showcase.js.map

(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{197:function(e,t,n){var content=n(206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(80).default)("9a76ed60",content,!0,{sourceMap:!1})},198:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return w}));n(35);var r=n(14),l=n(111),o=n(112);n(36),n(199),n(201),n(45),n(23),n(44),n(15),n(30),n(47),n(31),n(46),n(78);function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw l}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var h=function(){function e(){Object(l.a)(this,e);var t=Array(81).fill(0).map((function(e,i){return 0})).map((function(e,i){return new w(Math.trunc(i/9),i%9,3*Math.trunc(i/27)+Math.trunc(i%9/3),e)}));this.rows=t.reduce((function(p,e,i,a){return p[Math.trunc(i/9)].push(e),p}),Array.from(new Array(9),(function(){return new Array}))).map((function(e,i){return new v(i,e)})),this.cols=t.reduce((function(p,e,i,a){return p[i%9].push(e),p}),Array.from(new Array(9),(function(){return new Array}))).map((function(e,i){return new v(i,e)})),this.blocks=t.reduce((function(p,e,i,a){return p[3*Math.trunc(i/27)+Math.trunc(i%9/3)].push(e),p}),Array.from(new Array(9),(function(){return new Array}))).map((function(e,i){return new v(i,e)}))}return Object(o.a)(e,[{key:"code",get:function(){return this.rows.map((function(e){return e.cells.map((function(e){return e.value})).reduce((function(p,e){return 10*p+e}),0)})).reduce((function(p,e){for(var i=6,t=[];i-- >0;)t.unshift(31&e),e>>>=5;return p+function(e){return e.reduce((function(p,e){return p+d.charAt(e)}),"")}(t)}),"")},set:function(e){var t,n=c(Array.from(e).reduce((function(p,e,i){return p[Math.trunc(i/6)]+=e,p}),Array(9).fill("")).map((function(e){return function(e){return Array.from(e).map((function(e){return d.indexOf(e)}))}(e)})).map((function(e){return e.reduce((function(p,e){return(p<<5)+e}),0)})).map((function(e){return console.log(e),e})).map((function(e){return("00000000"+e).slice(-9)})).map((function(e){return Array.from(e).map((function(s){return parseInt(s,10)}))})).entries());try{for(n.s();!(t=n.n()).done;){var l,o=Object(r.a)(t.value,2),i=o[0],f=c(o[1].entries());try{for(f.s();!(l=f.n()).done;){var h=Object(r.a)(l.value,2),v=h[0],w=h[1],m=this.rows[i].cells[v];m.value=w,m.locked=w>0}}catch(e){f.e(e)}finally{f.f()}}}catch(e){n.e(e)}finally{n.f()}}}]),e}(),d="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456";var v=function(){function e(t,n){Object(l.a)(this,e),this.num=t,this.cells=n}return Object(o.a)(e,[{key:Symbol.iterator,value:function(){var i=0,e=this.cells;return{next:function(){return i<e.length?{done:!1,value:e[i++]}:{done:!0,value:null}}}}}]),e}(),w=function e(t,col,n,r){Object(l.a)(this,e),this.row=t,this.col=col,this.block=n,this.value=r,this.locked=!0,this.key="".concat(t,"-").concat(col)}},199:function(e,t,n){var r=n(2),l=n(200),o=n(110);r({target:"Array",proto:!0},{fill:l}),o("fill")},200:function(e,t,n){"use strict";var r=n(19),l=n(81),o=n(13);e.exports=function(e){for(var t=r(this),n=o(t.length),c=arguments.length,f=l(c>1?arguments[1]:void 0,n),h=c>2?arguments[2]:void 0,d=void 0===h?n:l(h,n);d>f;)t[f++]=e;return t}},201:function(e,t,n){var r=n(2),l=Math.ceil,o=Math.floor;r({target:"Math",stat:!0},{trunc:function(e){return(e>0?o:l)(e)}})},202:function(e,t,n){"use strict";var r=n(8),l=n(4),o=n(82),c=n(12),f=n(10),h=n(34),d=n(155),v=n(54),w=n(5),m=n(56),y=n(55).f,x=n(24).f,k=n(11).f,A=n(203).trim,S="Number",I=l.Number,C=I.prototype,_=h(m(C))==S,E=function(e){var t,n,r,l,o,c,f,code,h=v(e,!1);if("string"==typeof h&&h.length>2)if(43===(t=(h=A(h)).charCodeAt(0))||45===t){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(h.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+h}for(c=(o=h.slice(2)).length,f=0;f<c;f++)if((code=o.charCodeAt(f))<48||code>l)return NaN;return parseInt(o,r)}return+h};if(o(S,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var M,N=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof N&&(_?w((function(){C.valueOf.call(n)})):h(n)!=S)?d(new I(E(t)),n,N):E(t)},z=r?y(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),$=0;z.length>$;$++)f(I,M=z[$])&&!f(N,M)&&k(N,M,x(I,M));N.prototype=C,C.constructor=N,c(l,S,N)}},203:function(e,t,n){var r=n(16),l="["+n(204)+"]",o=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),f=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},204:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},205:function(e,t,n){"use strict";n(197)},206:function(e,t,n){var r=n(79)((function(i){return i[1]}));r.push([e.i,"svg{\n  background-color:#fff\n}",""]),e.exports=r},208:function(e,t,n){"use strict";n.r(t);n(202),n(15);var r=n(1),l=n(198),o=new l.a(-1,-1,-1,-1),c=r.a.extend({props:{selectedCell:{type:l.a,default:o,required:!0},code:{type:String},edit:{type:Boolean,default:!1},boxSize:{type:[Number,String],default:90},storokeWidth:{type:[Number,String],default:1}},data:function(){var e=new l.b;return this.code&&(e.code=this.code),{value:e}},computed:{selected:function(){return this.selectedCell.col>=0&&this.selectedCell.row>=0}},created:function(){window.addEventListener("keydown",this.onKeyDown)},destroyed:function(){window.removeEventListener("keydown",this.onKeyDown)},methods:{exportImage:function(){var e=this,img=new Image;return new Promise((function(t,n){img.addEventListener("load",(function(e){var canvas=document.createElement("canvas");canvas.width=1200,canvas.height=675;var r=canvas.getContext("2d");r&&(r.globalAlpha=0,r.clearRect(0,0,canvas.width,canvas.height),r.globalAlpha=1,r.drawImage(img,272.5,10,655,655),canvas.toBlob((function(e){e?t(e):n("error")}),"image/png"))}),{once:!0}),img.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(e.$refs.svgImage.innerHTML)}))},selectCell:function(e){this.$emit("select",e)},onKeyDown:function(e){var t=this;if(this.selected)switch(e.key){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":if(!this.edit&&this.selectedCell.locked)return;parseInt(e.key)===this.selectedCell.value?this.$emit("valueInput",0):this.$emit("valueInput",parseInt(e.key));break;case"0":case"Delete":if(!this.edit&&this.selectedCell.locked)return;this.$emit("valueInput",0);break;case"Escape":this.$emit("select",o),e.preventDefault();break;case"ArrowUp":case"k":if(!this.selected)return void this.$emit("select",this.value.rows[0].cells[0]);this.$emit("select",this.value.rows[Math.max(this.selectedCell.row-1,0)].cells[this.selectedCell.col]);break;case"ArrowDown":case"j":if(!this.selected)return void this.$emit("select",this.value.rows[0].cells[0]);this.$emit("select",this.value.rows[Math.min(this.selectedCell.row+1,this.value.rows.length-1)].cells[this.selectedCell.col]);break;case"ArrowRight":case"l":if(!this.selected)return void this.$emit("select",this.value.rows[0].cells[0]);this.$emit("select",this.value.cols[Math.min(this.selectedCell.col+1,this.value.cols.length-1)].cells[this.selectedCell.row]);break;case"ArrowLeft":case"h":if(!this.selected)return void this.$emit("select",this.value.rows[0].cells[0]);this.$emit("select",this.value.cols[Math.max(this.selectedCell.col-1,0)].cells[this.selectedCell.row]);break;case"i":this.exportImage().then((function(e){return t.$emit("exportImage",e)}));break;case"e":var code=this.value.code,n=!this.edit;this.$emit("toggleEdit",code,n);break;case"s":this.exportImage().then((function(e){return t.$emit("share",t.value.code,e)}));default:console.log(e)}}}}),f=(n(205),n(42)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"svgImage"},[n("svg",{attrs:{viewBox:"0 0 820 820",xmlns:"http://www.w3.org/2000/svg"}},[n("style",[e._v("\n      text {\n        pointer-events: none;\n      }\n\n      rect {\n        fill: white;\n      }\n\n      g.selected-row rect,\n      g.selected-col rect {\n        fill: #e2e7ed;\n      }\n\n      g:not(.edit).locked text {\n        fill: #cfcfcf;\n      }\n\n      g.selected-value text {\n        fill: #ff0000 !important;\n      }\n\n      g.selected rect {\n        fill: #bec6d4;\n      }\n\n      #row-lines line:first-child,\n      #row-lines line:last-child,\n      #row-lines line:nth-child(3n + 1),\n      #col-lines line:first-child,\n      #col-lines line:last-child,\n      #col-lines line:nth-child(3n + 1) {\n        stroke: black;\n        stroke-linecap: round;\n        stroke-width: 10;\n      }\n    ")]),e._v(" "),e._l(e.value.rows,(function(t,i){return n("g",{key:i},e._l(t,(function(t,r){return n("g",{key:9*i+r,staticClass:"cell",class:{selected:t==e.selectedCell,"selected-row":t.row==e.selectedCell.row,"selected-col":t.col==e.selectedCell.col,"selected-block":t.block==e.selectedCell.block,"selected-value":t.value==e.selectedCell.value,locked:t.locked,edit:e.edit}},[n("rect",{attrs:{x:e.boxSize*r+5,y:e.boxSize*i+5,width:e.boxSize,height:e.boxSize,fill:"transparent"},on:{mouseover:function(n){return e.selectCell(t)}}}),e._v(" "),t.value>0?n("text",{attrs:{tabindex:"-1",focusable:"false",x:e.boxSize*r+e.boxSize/2+5,y:e.boxSize*i+e.boxSize/2+20,"font-size":"48",stroke:"black","stroke-width":"0.5","text-anchor":"middle"}},[e._v("\n          "+e._s(t.value)+"\n        ")]):e._e()])})),0)})),e._v(" "),n("g",{attrs:{id:"row-lines"}},[e._l(e.value.rows,(function(t,i){return n("line",{key:"line-row-"+i,attrs:{x1:5,y1:e.boxSize*i+5,x2:e.boxSize*e.value.rows.length+5,y2:e.boxSize*i+5,stroke:"black","stroke-width":"0.5"}})})),e._v(" "),n("line",{attrs:{x1:5,y1:e.boxSize*e.value.cols.length+5,x2:e.boxSize*e.value.rows.length+5,y2:e.boxSize*e.value.cols.length+5,stroke:"black"}})],2),e._v(" "),n("g",{attrs:{id:"col-lines"}},[e._l(e.value.cols,(function(t,i){return n("line",{key:"line-col-"+i,attrs:{x1:e.boxSize*i+5,y1:5,x2:e.boxSize*i+5,y2:e.boxSize*e.value.cols.length+5,stroke:"black","stroke-width":"0.5"}})})),e._v(" "),n("line",{attrs:{x1:e.boxSize*e.value.rows.length+5,y1:5,x2:e.boxSize*e.value.rows.length+5,y2:e.boxSize*e.value.cols.length+5,stroke:"black","stroke-width":"0.5"}})],2)],2)])}),[],!1,null,null,null);t.default=component.exports}}]);
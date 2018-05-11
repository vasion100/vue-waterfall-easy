webpackJsonp([1],{Et1k:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),a={name:"vue-waterfall-easy",props:{width:{type:Number},height:{type:Number},reachBottomDistance:{type:Number,default:0},loadingDotCount:{type:Number,default:3},loadingDotStyle:{type:Object,default:null},gap:{type:Number,default:20},maxCols:{type:Number,default:5},imgsArr:{type:Array,required:!0,default:[]},imgWidth:{type:Number,default:240},linkRange:{type:String,default:"card"},loadingTimeOut:{type:Number,default:500}},data:function(){return{msg:"this is from vue-waterfall-easy.vue",isMobile:!!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),isPreloading:!0,isPreloading_c:!0,imgsArr_c:[],loadedCount:0,cols:NaN,imgBoxEls:null,beginIndex:0,colsHeightArr:[],LoadingTimer:null,isFirstLoad:!0}},computed:{colWidth:function(){return this.imgWidth+this.gap},imgWidth_c:function(){return this.isMobile?window.innerWidth/2-this.gap:this.imgWidth},hasLoadingSlot:function(){return!!this.$scopedSlots.loading}},mounted:function(){var t=this;this.loadingMiddle(),this.preload(),this.cols=this.calcuCols(),this.$on("preloaded",function(){t.isFirstLoad=!1,t.imgsArr_c=t.imgsArr.concat([]),t.$nextTick(function(){t.isPreloading=!1,t.imgBoxEls=t.$el.getElementsByClassName("img-box"),t.waterfall()})}),this.isMobile||this.width||this.response(),this.scroll()},watch:{isPreloading:function(t,i){var e=this;t?setTimeout(function(){e.isPreloading&&(e.isPreloading_c=!0)},this.loadingTimeOut):this.isPreloading_c=!1},imgsArr:function(t,i){t.length!==i.length&&this.preload()}},methods:{preload:function(t,i){var e=this;this.imgsArr.forEach(function(t,i){if(!(i<e.loadedCount)){var s=new Image;s.src=t.src,s.onload=s.onerror=function(t){e.loadedCount++,"load"==t.type&&e.$set(e.imgsArr[i],"height",Math.round(e.imgWidth_c/(s.width/s.height))),e.loadedCount==e.imgsArr.length&&e.$emit("preloaded")}}})},calcuCols:function(){var t=this.width?this.width:window.innerWidth,i=parseInt(t/this.colWidth);return i=0===i?1:i,this.isMobile?2:i>this.maxCols?this.maxCols:i},waterfall:function(){this.$el.querySelector(".vue-waterfall-easy-scroll");var t,i,e=this.isMobile?this.imgBoxEls[0].offsetWidth:this.colWidth;0==this.beginIndex&&(this.colsHeightArr=[]);for(var s=this.beginIndex;s<this.imgsArr.length;s++){if(s<this.cols){var a=this.imgBoxEls[s].offsetHeight;this.colsHeightArr.push(a),t=0,i=s*e}else{var l=Math.min.apply(null,this.colsHeightArr),r=this.colsHeightArr.indexOf(l);t=l,i=r*e,this.colsHeightArr[r]=l+this.imgBoxEls[s].offsetHeight}this.imgBoxEls[s].style.left=i+"px",this.imgBoxEls[s].style.top=t+"px"}this.beginIndex=this.imgsArr.length},response:function(){var t=this;window.addEventListener("resize",function(){var i=t.cols;t.cols=t.calcuCols(),i!==t.cols&&(t.beginIndex=0,t.waterfall())})},scroll:function(){var t=this,i=this.$el.querySelector(".vue-waterfall-easy-scroll");i.addEventListener("scroll",function(){if(!t.isPreloading){var e=Math.min.apply(null,t.colsHeightArr);i.scrollTop+i.offsetHeight>e-t.reachBottomDistance&&(t.isPreloading=!0,t.$emit("scrollReachBottom"))}})},loadingMiddle:function(){var t=this.$el.querySelector(".vue-waterfall-easy-scroll"),i=t.offsetWidth-t.clientWidth;this.$el.querySelector(".loading").style.marginLeft=-i/2+"px"}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vue-waterfall-easy-container",style:{width:t.width&&!t.isMobile?t.width+"px":"",height:t.height?t.height+"px":""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isPreloading_c,expression:"isPreloading_c"}],staticClass:"loading ball-beat",class:{first:t.isFirstLoad}},[t._t("loading",null,{isFirstLoad:t.isFirstLoad}),t._l(t.loadingDotCount,function(i){return t.hasLoadingSlot?t._e():e("div",{staticClass:"dot",style:t.loadingDotStyle})})],2),e("div",{staticClass:"vue-waterfall-easy-scroll"},[e("div",{staticClass:"vue-waterfall-easy",style:t.isMobile?"":{width:t.colWidth*t.cols+"px",left:"50%",marginLeft:-1*t.colWidth*t.cols/2+"px"}},[t._t("waterfall-head"),t._l(t.imgsArr_c,function(i,s){return e("a",{staticClass:"img-box",style:{padding:t.gap/2+"px",width:t.isMobile?"":t.colWidth+"px"},attrs:{href:"card"==t.linkRange?i.href:"javascript:void(0)",target:"_blank"}},[e("div",{staticClass:"img-inner-box"},[e("a",{staticClass:"img-wraper",style:{width:t.imgWidth_c+"px",height:i.height?i.height+"px":""},attrs:{href:"img"==t.linkRange||"card"==t.linkRange?i.href:"javascript:void(0)",target:"_blank"}},[e("img",{attrs:{src:i.src}})]),t._t("default",null,{index:s,value:i})],2)])})],2)])])},staticRenderFns:[]};var r=e("VU/8")(a,l,!1,function(t){e("Et1k")},null,null).exports,n=e("mtWM"),o=e.n(n),d={name:"app",data:function(){return{imgsArr:[],group:0}},components:{vueWaterfallEasy:r},methods:{getData:function(t){var i=this;o.a.get("./static/mock/data.json?group="+this.group).then(function(t){i.imgsArr=i.imgsArr.concat(t.data),0})}},created:function(){this.getData()}},h={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("a",{attrs:{id:"header",href:"https://github.com/lfyfly/vue-waterfall-easy",target:"_blank",title:"github of vue-waterfall-easy "}},[t._v("vue-waterfall-easy")]),e("div",{attrs:{id:"content"}},[e("vue-waterfall-easy",{attrs:{imgsArr:t.imgsArr},on:{scrollReachBottom:t.getData},scopedSlots:t._u([{key:"default",fn:function(i){return e("div",{staticClass:"img-info"},[e("p",{staticClass:"some-info"},[t._v("第"+t._s(i.index+1)+"张图片")]),e("p",{staticClass:"some-info"},[t._v(t._s(i.value.info))])])}}])})],1)])},staticRenderFns:[]};var c=e("VU/8")(d,h,!1,function(t){e("yufV")},null,null).exports,u=e("Gs/g"),g=e.n(u);window.Promise||(window.Promise=g.a),new s.a({el:"#app",template:"<App/>",components:{App:c}})},yufV:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.632a5855f6814fec4a1e.js.map
(()=>{"use strict";var e={8783:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var n=a(5861),r=a(885),o=a(9526),l=a(3292),s=a(4333),i=a(1133),u=a(7132),c=a(8859),d=a(6823),f=a(6707),h=a(4657),g=a.n(h),m=a(1497),p=a(3264),v=a(4637),b=a(9233),j=a(9317),_=a(7557);function x(e){var t=e.label,a=e.theme,n=e.onPress;return"primary"===a?(0,_.jsx)(i.default,{style:[S.buttonContainer,{borderWidth:4,borderColor:"#ffd33d",borderRadius:18}],children:(0,_.jsxs)(v.default,{style:[S.button,{backgroundColor:"#fff"}],onPress:n,children:[(0,_.jsx)(j.default,{name:"picture-o",size:18,color:"#25292e",style:S.buttonIcon}),(0,_.jsx)(b.default,{style:[S.buttonLabel,{color:"#25292e"}],children:t})]})}):(0,_.jsx)(i.default,{style:S.buttonContainer,children:(0,_.jsx)(v.default,{style:S.button,onPress:n,children:(0,_.jsx)(b.default,{style:S.buttonLabel,children:t})})})}var S=s.default.create({buttonContainer:{width:320,height:68,marginHorizontal:20,alignItems:"center",justifyContent:"center",padding:3},button:{borderRadius:10,width:"100%",height:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row"},buttonIcon:{paddingRight:8},buttonLabel:{color:"#fff",fontSize:16}}),y=a(9899);function C(e){var t=e.placeholderImageSource,a=e.selectedImage,n=null!==a?{uri:a}:t;return(0,_.jsx)(y.default,{source:n,style:w.image})}var w=s.default.create({image:{width:320,height:440,borderRadius:18}}),P=a(1498);s.default.create({circleButtonContainer:{width:84,height:84,marginHorizontal:60,borderWidth:4,borderColor:"#ffd33d",borderRadius:42,padding:3},circleButton:{flex:1,justifyContent:"center",alignItems:"center",borderRadius:42,backgroundColor:"#fff"}});function I(e){var t=e.icon,a=e.label,n=e.onPress;return(0,_.jsxs)(v.default,{style:Y.iconButton,onPress:n,children:[(0,_.jsx)(P.default,{name:t,size:24,color:"#fff"}),(0,_.jsx)(b.default,{style:Y.iconButtonLabel,children:a})]})}var Y=s.default.create({iconButton:{justifyContent:"center",alignItems:"center",width:84,height:84},iconButtonLabel:{color:"#fff",marginTop:12}}),z=a(196);function k(e){var t=e.isVisible,a=e.children,n=e.onClose,l=(0,o.useState)(""),s=(0,r.default)(l,2);s[0],s[1];return(0,_.jsx)(z.default,{animationType:"slide",transparent:!0,visible:t,children:(0,_.jsxs)(i.default,{style:X.modalContent,children:[(0,_.jsxs)(i.default,{style:X.titleContainer,children:[(0,_.jsx)(b.default,{style:X.title,children:"Choose a sticker"}),(0,_.jsx)(v.default,{onPress:n,children:(0,_.jsx)(P.default,{name:"close",color:"#fff",size:22})})]}),a]})})}var X=s.default.create({modalContent:{height:"25%",width:"100%",backgroundColor:"#25292e",borderTopRightRadius:18,borderTopLeftRadius:18,position:"absolute",bottom:0},titleContainer:{height:"16%",backgroundColor:"#464C55",borderTopRightRadius:10,borderTopLeftRadius:10,paddingHorizontal:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},title:{color:"#fff",fontSize:16,alignItems:"center"},pickerContainer:{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingHorizontal:50,paddingVertical:20}}),T=a(9566);function H(e){var t=e.onSelect,n=e.onCloseModal,l=(0,o.useState)([a(3378),a(3e3),a(9371),a(8337),a(3015),a(1947)]),s=(0,r.default)(l,1)[0];return(0,_.jsx)(T.default,{horizontal:!0,showsHorizontalScrollIndicator:"web"===u.default.OS,data:s,contentContainerStyle:R.listContainer,renderItem:function(e){var a=e.item,r=e.index;return(0,_.jsx)(v.default,{onPress:function(){t(a),n()},children:(0,_.jsx)(y.default,{source:a,style:R.image},r)})}})}var R=s.default.create({listContainer:{borderTopRightRadius:10,borderTopLeftRadius:10,paddingHorizontal:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},image:{width:100,height:100,marginRight:20}}),O=a(3425),A=a(4755),D=a(2520),G=a(8602),E=a(5456),U=O.default(y.default),L=(O.default(b.default),O.default(i.default));function V(e){var t=e.imageSize,a=e.stickerSource,n=(0,A.useSharedValue)(0),r=(0,A.useSharedValue)(0),o=(0,A.useSharedValue)(t),l=(0,D.useAnimatedGestureHandler)({onActive:function(){var e=function(){o.value&&(o.value=2*o.value)};return e._closure={scaleImage:o},e.asString="function _f(){const{scaleImage}=jsThis._closure;{if(scaleImage.value){scaleImage.value=scaleImage.value*2;}}}",e.__workletHash=342659889844,e.__location="/Users/tamargeller/Documents/Yale/Intellectual_Property/PhotoCredz/PhotoCredz/components/EmojiSticker.js (24:18)",e}()}),s=(0,G.useAnimatedStyle)(function(){var e=function(){return{width:(0,E.withSpring)(o.value),height:(0,E.withSpring)(o.value)}};return e._closure={withSpring:E.withSpring,scaleImage:o},e.asString="function _f(){const{withSpring,scaleImage}=jsThis._closure;{return{width:withSpring(scaleImage.value),height:withSpring(scaleImage.value)};}}",e.__workletHash=0x9fe8e634445,e.__location="/Users/tamargeller/Documents/Yale/Intellectual_Property/PhotoCredz/PhotoCredz/components/EmojiSticker.js (30:40)",e.__optimalization=2,e}()),i=(0,D.useAnimatedGestureHandler)({onStart:function(){var e=function(e,t){t.translateX=n.value,t.translateY=r.value};return e._closure={translateX:n,translateY:r},e.asString="function _f(event,context){const{translateX,translateY}=jsThis._closure;{context.translateX=translateX.value;context.translateY=translateY.value;}}",e.__workletHash=2875373018069,e.__location="/Users/tamargeller/Documents/Yale/Intellectual_Property/PhotoCredz/PhotoCredz/components/EmojiSticker.js (38:17)",e}(),onActive:function(){var e=function(e,t){n.value=e.translationX+t.translateX,r.value=e.translationY+t.translateY};return e._closure={translateX:n,translateY:r},e.asString="function _f(event,context){const{translateX,translateY}=jsThis._closure;{translateX.value=event.translationX+context.translateX;translateY.value=event.translationY+context.translateY;}}",e.__workletHash=0xe4a3f7019b4,e.__location="/Users/tamargeller/Documents/Yale/Intellectual_Property/PhotoCredz/PhotoCredz/components/EmojiSticker.js (42:18)",e}()}),u=(0,G.useAnimatedStyle)(function(){var e=function(){return{transform:[{translateX:n.value},{translateY:r.value}]}};return e._closure={translateX:n,translateY:r},e.asString="function _f(){const{translateX,translateY}=jsThis._closure;{return{transform:[{translateX:translateX.value},{translateY:translateY.value}]};}}",e.__workletHash=1150289231681,e.__location="/Users/tamargeller/Documents/Yale/Intellectual_Property/PhotoCredz/PhotoCredz/components/EmojiSticker.js (47:44)",e.__optimalization=3,e}());return(0,_.jsx)(d.PanGestureHandler,{onGestureEvent:i,children:(0,_.jsx)(L,{style:[u,{top:-350}],children:(0,_.jsx)(d.TapGestureHandler,{onGestureEvent:l,numberOfTaps:2,children:(0,_.jsx)(U,{source:a,resizeMode:"contain",style:[s,{width:t,height:t}]})})})})}O.default(y.default);var B=O.default(b.default),M=O.default(i.default);function q(e){var t=e.imageSize,a=e.creditSource,n=(0,A.useSharedValue)(0),r=(0,A.useSharedValue)(0),o=(0,A.useSharedValue)(t),l=(0,D.useAnimatedGestureHandler)({onActive:function(){var e=function(){o.value&&(o.value=2*o.value)};return e._closure={scaleImage:o},e.asString="function _f(){const{scaleImage}=jsThis._closure;{if(scaleImage.value){scaleImage.value=scaleImage.value*2;}}}",e.__workletHash=342659889844,e.__location="/Users/tamargeller/Documents/Yale/Intellectual_Property/PhotoCredz/PhotoCredz/components/CreditSticker.js (24:18)",e}()}),s=((0,G.useAnimatedStyle)(function(){var e=function(){return{width:(0,E.withSpring)(o.value),height:(0,E.withSpring)(o.value)}};return e._closure={withSpring:E.withSpring,scaleImage:o},e.asString="function _f(){const{withSpring,scaleImage}=jsThis._closure;{return{width:withSpring(scaleImage.value),height:withSpring(scaleImage.value)};}}",e.__workletHash=0x9fe8e634445,e.__location="/Users/tamargeller/Documents/Yale/Intellectual_Property/PhotoCredz/PhotoCredz/components/CreditSticker.js (30:40)",e.__optimalization=2,e}()),(0,D.useAnimatedGestureHandler)({onStart:function(){var e=function(e,t){t.translateX=n.value,t.translateY=r.value};return e._closure={translateX:n,translateY:r},e.asString="function _f(event,context){const{translateX,translateY}=jsThis._closure;{context.translateX=translateX.value;context.translateY=translateY.value;}}",e.__workletHash=2875373018069,e.__location="/Users/tamargeller/Documents/Yale/Intellectual_Property/PhotoCredz/PhotoCredz/components/CreditSticker.js (38:17)",e}(),onActive:function(){var e=function(e,t){n.value=e.translationX+t.translateX,r.value=e.translationY+t.translateY};return e._closure={translateX:n,translateY:r},e.asString="function _f(event,context){const{translateX,translateY}=jsThis._closure;{translateX.value=event.translationX+context.translateX;translateY.value=event.translationY+context.translateY;}}",e.__workletHash=0xe4a3f7019b4,e.__location="/Users/tamargeller/Documents/Yale/Intellectual_Property/PhotoCredz/PhotoCredz/components/CreditSticker.js (42:18)",e}()})),i=(0,G.useAnimatedStyle)(function(){var e=function(){return{transform:[{translateX:n.value},{translateY:r.value}]}};return e._closure={translateX:n,translateY:r},e.asString="function _f(){const{translateX,translateY}=jsThis._closure;{return{transform:[{translateX:translateX.value},{translateY:translateY.value}]};}}",e.__workletHash=1150289231681,e.__location="/Users/tamargeller/Documents/Yale/Intellectual_Property/PhotoCredz/PhotoCredz/components/CreditSticker.js (47:44)",e.__optimalization=3,e}());return(0,_.jsx)(d.PanGestureHandler,{onGestureEvent:s,children:(0,_.jsx)(M,{style:[i,{top:-350}],children:(0,_.jsx)(d.TapGestureHandler,{onGestureEvent:l,numberOfTaps:2,children:(0,_.jsxs)(B,{children:["PhotoCredz: ",a]})})})})}var W=a(6720);function F(){var e=(0,o.useState)(""),t=(0,r.default)(e,2),a=t[0],s=t[1],h=(0,o.useState)(null),v=(0,r.default)(h,2),b=v[0],j=v[1],S=(0,o.useState)(null),y=(0,r.default)(S,2),w=y[0],P=y[1],Y=(0,o.useState)(!1),z=(0,r.default)(Y,2),X=z[0],T=z[1],R=(0,o.useState)(!1),O=(0,r.default)(R,2),A=O[0],D=O[1],G=p.usePermissions(),E=(0,r.default)(G,2),U=E[0],L=E[1],B=(0,o.useRef)(),M=function(){var e=(0,n.default)((function*(){var e=yield m.launchImageLibraryAsync({allowsEditing:!0,quality:1});e.canceled?alert("You did not select any image."):(P(e.assets[0].uri),D(!0))}));return function(){return e.apply(this,arguments)}}(),F=function(){T(!1)},K=function(){var e=(0,n.default)((function*(){if("web"!==u.default.OS)try{var e=yield(0,f.captureRef)(B,{height:440,quality:1});yield p.saveToLibraryAsync(e),e&&alert("Saved!")}catch(n){console.log(n)}else try{var t=yield g().toJpeg(B.current,{quality:.95,width:320,height:440}),a=document.createElement("a");a.download="sticker-smash.jpeg",a.href=t,a.click()}catch(n){console.log(n)}}));return function(){return e.apply(this,arguments)}}();return null===U&&L(),(0,_.jsxs)(d.GestureHandlerRootView,{style:J.container,children:[(0,_.jsx)(i.default,{style:J.imageContainer,children:(0,_.jsxs)(i.default,{ref:B,collapsable:!1,children:[(0,_.jsx)(C,{placeholderImageSource:W,selectedImage:w}),null!==a?(0,_.jsx)(V,{imageSize:40,stickerSource:a}):null,null!==b?(0,_.jsx)(q,{imageSize:40,creditSource:b}):null]})}),A?(0,_.jsx)(i.default,{style:J.optionsContainer,children:(0,_.jsxs)(i.default,{style:J.optionsRow,children:[(0,_.jsx)(I,{icon:"refresh",label:"Reset",onPress:function(){j(null),s(null),D(!1)}}),(0,_.jsx)(I,{icon:"brush",label:"Add Sticker",onPress:function(){T(!0)}}),(0,_.jsx)(I,{icon:"edit",label:"Add Credit",onPress:function(){c.default.prompt("Who took the photo?","Please enter the name:",(function(e){return j(e)}),void 0)}}),(0,_.jsx)(I,{icon:"save-alt",label:"Save",onPress:K})]})}):(0,_.jsxs)(i.default,{style:J.footerContainer,children:[(0,_.jsx)(x,{theme:"primary",label:"Choose a photo",onPress:M}),(0,_.jsx)(x,{label:"Use this photo",onPress:function(){return D(!0)}})]}),(0,_.jsx)(k,{isVisible:X,onClose:F,children:(0,_.jsx)(H,{onSelect:s,onCloseModal:F})}),(0,_.jsx)(l.default,{style:"light"})]})}var J=s.default.create({container:{flex:1,backgroundColor:"#25292e",alignItems:"center"},imageContainer:{flex:1,paddingTop:58},image:{width:320,height:440,borderRadius:18},footerContainer:{flex:1/3,alignItems:"center"},optionsContainer:{position:"absolute",bottom:80},optionsRow:{alignItems:"center",flexDirection:"row"}})},6720:(e,t,a)=>{e.exports=a.p+"static/media/background-image.979cd8651f1550fd8cf0.png"},3378:(e,t,a)=>{e.exports=a.p+"static/media/emoji1.7df01aeee9beb5aa5910.png"},3e3:(e,t,a)=>{e.exports=a.p+"static/media/emoji2.5685d9a22d6660f57a1b.png"},9371:(e,t,a)=>{e.exports=a.p+"static/media/emoji3.d02b4d8049c9306be207.png"},8337:(e,t,a)=>{e.exports=a.p+"static/media/emoji4.9f86a388736b1b9772eb.png"},3015:(e,t,a)=>{e.exports=a.p+"static/media/emoji5.3ca0d7e3697bb4f720c7.png"},1947:(e,t,a)=>{e.exports=a.p+"static/media/emoji6.e2cad3fa2dc59d64cc4e.png"}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,(()=>{var e=[];a.O=(t,n,r,o)=>{if(!n){var l=1/0;for(c=0;c<e.length;c++){for(var[n,r,o]=e[c],s=!0,i=0;i<n.length;i++)(!1&o||l>=o)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(s=!1,o<l&&(l=o));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]}})(),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/PhotoCredz/",(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[l,s,i]=n,u=0;if(l.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var c=i(a)}for(t&&t(n);u<l.length;u++)o=l[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=a.O(void 0,[449],(()=>a(9484)));n=a.O(n)})();
//# sourceMappingURL=main.a35e8884.js.map
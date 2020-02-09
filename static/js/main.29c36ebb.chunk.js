(this.webpackJsonpchem=this.webpackJsonpchem||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a,l=n(0),r=n.n(l),u=n(3),o=n.n(u),c=(n(9),n(1)),i=function(e){return r.a.createElement("div",{className:e.className+" scale1-1"},r.a.createElement("button",{className:"buttonView",onClick:e.handleClick},e.name))},m=function(e){return r.a.createElement(i,{name:e.name,className:e.className,handleClick:function(){return e.handleClick(e.name)}})},s=new(window.AudioContext||window.webkitAudioContext);!function(e){e.START="START",e.TRUE_SHOT="TRUE_SHOT",e.FALSE_SHOT="FALSE_SHOT",e.BEST_RESULTS="BEST_RESULTS"}(a||(a={}));var E=Object.create(null);Object.entries({START:"/chem/sounds/162485__kastenfrosch__space.mp3",TRUE_SHOT:"/chem/sounds/135510__chriddof__space-bloop.mp3",FALSE_SHOT:"/chem/sounds/432761__xpoki__lazershot.mp3",BEST_RESULTS:"/chem/sounds/477552__abacagi__explosion-sfx.mp3"}).forEach((function(e){var t,n,a=Object(c.a)(e,2),l=a[0],r=a[1];E[l]=(t=r,n=s,new Promise((function(e,a){if(t)if(n){var l=new XMLHttpRequest;l.open("GET",t),l.responseType="arraybuffer",l.onload=function(){var t=l.response;n.decodeAudioData(t,(function(t){e(t)}))},l.onerror=function(){a("An error occurred.")},l.send()}else a("Missing audio context!");else a("Missing url!")})))}));var d=function(e){E[e].then((function(e){var t=s.createBufferSource();t.buffer=e,t.connect(s.destination),t.start()}))},f={"\u041a\u0438\u0441\u043b\u043e\u0442\u0430":"buttonPosition1","\u0421\u043e\u043b\u044c":"buttonPosition2","\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435":"buttonPosition3","\u041e\u043a\u0441\u0438\u0434":"buttonPosition4"},b=function(e){var t=Object(l.useState)("zero"),n=Object(c.a)(t,2),u=n[0],o=n[1],i=Object(l.useState)(!1),s=Object(c.a)(i,2),E=s[0],b=s[1],v=e.stepNumber;Object(l.useEffect)((function(){var t=setTimeout((function(){o("zero+"),console.log('setState("zero+"); ')}),50),n=setTimeout((function(){e.handleFinishEvent({name:e.formula.name,type:e.formula.type,answer:void 0}),console.log("useEffect finish timeout ")}),e.mainAnimationDuration);return function(){clearTimeout(t),clearTimeout(n),console.log("useEffect clearTimeouts ")}}),[e]);var p,y,O,x,h,S,g,k=Object(l.useCallback)((function(t){if("zero+"===u){o(t);var n=e.formula.type===t,l={name:e.formula.name,type:e.formula.type,answer:t};d(n?a.TRUE_SHOT:a.FALSE_SHOT),n||setTimeout((function(){return o("zero+false")}),e.clickAnimationDuration+100),setTimeout((function(){e.handleFinishEvent(l)}),(e.clickAnimationDuration+100)*(n?1:2))}}),[e,u]);switch(u){case"zero":p="startPosition",1===v?(y="endPosition",O="endPosition",x="endPosition",h="endPosition",S="startPosition",g="startPosition"):(y="buttonPosition1 transition-true",O="buttonPosition2 transition-true",x="buttonPosition3 transition-true",h="buttonPosition4 transition-true",S="score transition-true",g="check-number transition-true");break;case"zero+":case"zero+false":p="endPosition endPositionTransition",y="buttonPosition1 transition-true",O="buttonPosition2 transition-true",x="buttonPosition3 transition-true",h="buttonPosition4 transition-true",S="score transition-true",g="check-number transition-true";break;default:p="".concat(f[u]," ").concat(e.formula.type===u?" transition-true":" transition-false"),y="buttonPosition1",O="buttonPosition2",x="buttonPosition3",h="buttonPosition4",S="score transition-true",g="check-number transition-true",console.log("state =  ",u),console.log("formulaPositionClass =  ",p)}return r.a.createElement("div",{className:"main main2-background-size"},r.a.createElement("div",{className:S},e.score),r.a.createElement("div",{className:g,onClick:e.handleStopEvent},"".concat(e.stepNumber," / ").concat(e.checksTotal)),r.a.createElement(m,{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",className:y,handleClick:k}),r.a.createElement(m,{name:"\u0421\u043e\u043b\u044c",className:O,handleClick:k}),r.a.createElement(m,{name:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",className:x,handleClick:k}),r.a.createElement(m,{name:"\u041e\u043a\u0441\u0438\u0434",className:h,handleClick:k}),r.a.createElement("div",{className:p},r.a.createElement("button",{className:"formulaView",onClick:function(){return b(!0)}},r.a.createElement("div",null,e.formula.formula),E&&r.a.createElement("div",{className:"formula-hint"},e.formula.text))))};var v={"\u0423\u0440\u043e\u0432\u0435\u043d\u044c 1":[{name:"\u0430\u0437\u043e\u0442\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"HNO",r.a.createElement("sub",null,"3"))},{name:"\u0430\u0437\u043e\u0442\u0438\u0441\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"\u041dNO",r.a.createElement("sub",null,"2"))},{name:"\u0444\u0442\u043e\u0440\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f (\u043f\u043b\u0430\u0432\u0438\u043a\u043e\u0432\u0430\u044f ) \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"HF")},{name:"\u0431\u043e\u0440\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"\u041d",r.a.createElement("sub",null,"3"),"\u0412\u041e",r.a.createElement("sub",null,"3"))},{name:"\u0445\u043b\u043e\u0440\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"HCl")},{name:"\u0443\u043a\u0441\u0443\u0441\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"\u0421\u041d",r.a.createElement("sub",null,"3"),"\u0421\u041e\u041e\u041d")},{name:"\u0431\u0440\u043e\u043c\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"HBr")},{name:"\u043c\u0443\u0440\u0430\u0432\u044c\u0438\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"\u041d\u0421\u041e\u041e\u041d")},{name:"\u0438\u043e\u0434\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"HI")},{name:"\u0441\u0438\u043d\u0438\u043b\u044c\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430 \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"\u041d\u0421N")},{name:"\u0441\u0435\u0440\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"H",r.a.createElement("sub",null,"2"),"SO",r.a.createElement("sub",null,"4"))},{name:"\u0434\u0438\u0445\u0440\u043e\u043c\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"\u041d",r.a.createElement("sub",null,"2"),"\u0421r",r.a.createElement("sub",null,"2"),"O",r.a.createElement("sub",null,"7"))},{name:"\u0441\u0435\u0440\u043d\u0438\u0441\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"H",r.a.createElement("sub",null,"2"),"SO",r.a.createElement("sub",null,"3"))},{name:"\u0445\u043b\u043e\u0440\u043d\u043e\u0432\u0430\u0442\u0438\u0441\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"\u041d\u0421lO")},{name:"\u0441\u0435\u0440\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"H",r.a.createElement("sub",null,"2"),"S")},{name:"\u0445\u043b\u043e\u0440\u043d\u043e\u0432\u0430\u0442\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"HClO",r.a.createElement("sub",null,"3"))},{name:"\u043c\u044b\u0448\u044c\u044f\u043a\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"H",r.a.createElement("sub",null,"3"),"AsO",r.a.createElement("sub",null,"4"))},{name:"\u0443\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"H",r.a.createElement("sub",null,"2"),"CO",r.a.createElement("sub",null,"3"))},{name:"\u0441\u0435\u043b\u0435\u043d\u043e\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"H",r.a.createElement("sub",null,"2"),"SO",r.a.createElement("sub",null,"4"))},{name:"\u043a\u0440\u0435\u043c\u043d\u0438\u0435\u0432\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"H",r.a.createElement("sub",null,"2"),"SiO",r.a.createElement("sub",null,"3"))},{name:"\u0441\u0435\u043b\u0435\u043d\u043e\u0432\u043e\u0434\u043e\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"H",r.a.createElement("sub",null,"2"),"S\u0435")},{name:"\u0444\u043e\u0441\u0444\u043e\u0440\u043d\u0430\u044f (\u043e\u0440\u0442\u043e\u0444\u043e\u0441\u0444\u043e\u0440\u043d\u0430\u044f) \u043a\u0438\u0441\u043b\u043e\u0442\u0430",text:"",type:"\u041a\u0438\u0441\u043b\u043e\u0442\u0430",formula:r.a.createElement("div",null,"H",r.a.createElement("sub",null,"3"),"PO",r.a.createElement("sub",null,"4"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043b\u0438\u0442\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"LiOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043d\u0430\u0442\u0440\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"NaOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043a\u0430\u043b\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"KOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0440\u0443\u0431\u0438\u0434\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"RbOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043b\u0438\u0442\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"LiOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0446\u0435\u0437\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"CsOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0435\u0434\u0438(I)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"CuOH")},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043a\u0430\u043b\u044c\u0446\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Ca(OH)",r.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0435\u0434\u0438(II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Cu(OH)",r.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0436\u0435\u043b\u0435\u0437\u0430(II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Fe(OH)",r.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0431\u0430\u0440\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Ba(OH)",r.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043a\u043e\u0431\u0430\u043b\u044c\u0442\u0430(II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Co(OH)",r.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043d\u0438\u043a\u0435\u043b\u044f (II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Ni(OH)",r.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0441\u0432\u0438\u043d\u0446\u0430 (II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Pb(OH)",r.a.createElement("sub",null,"2"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0436\u0435\u043b\u0435\u0437\u0430(III)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Fe(OH)",r.a.createElement("sub",null,"3"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Al(OH)",r.a.createElement("sub",null,"3"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0446\u0438\u043d\u043a\u0430",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Zn(OH)",r.a.createElement("sub",null,"2"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0431\u0435\u0440\u0438\u043b\u043b\u0438\u044f",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Be(OH)",r.a.createElement("sub",null,"2"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0445\u0440\u043e\u043c\u0430(III)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Cr(OH)",r.a.createElement("sub",null,"3"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0430\u0440\u0433\u0430\u043d\u0446\u0430 (IV)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Mn(OH)",r.a.createElement("sub",null,"4"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 c\u0432\u0438\u043d\u0446\u0430 (IV)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Pb(OH)",r.a.createElement("sub",null,"4"))},{name:"\u0433\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u043c\u0430\u0440\u0433\u0430\u043d\u0446\u0430 (II)",text:"",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"Mn(OH)",r.a.createElement("sub",null,"2"))},{name:"\u0441\u0443\u043b\u044c\u0444\u0430\u0442 \u043d\u0430\u0442\u0440\u0438\u044f",text:"",type:"\u0421\u043e\u043b\u044c",formula:r.a.createElement("div",null,"Na",r.a.createElement("sub",null,"2"),"SO",r.a.createElement("sub",null,"4"))},{name:"\u0445\u043b\u043e\u0440\u0438\u0434 \u043c\u0435\u0434\u0438 (II)",text:"",type:"\u0421\u043e\u043b\u044c",formula:r.a.createElement("div",null,"CuCl",r.a.createElement("sub",null,"2"))},{name:"\u043a\u0430\u0440\u0431\u043e\u043d\u0430\u0442 \u043a\u0430\u043b\u0438\u044f",text:"",type:"\u0421\u043e\u043b\u044c",formula:r.a.createElement("div",null,"\u041a",r.a.createElement("sub",null,"2"),"CO",r.a.createElement("sub",null,"3"))},{name:"\u0441\u0438\u043b\u0438\u043a\u0430\u0442 \u0431\u0430\u0440\u0438\u044f",text:"",type:"\u0421\u043e\u043b\u044c",formula:r.a.createElement("div",null,"\u0412\u0430SiO",r.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"SO",r.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"P",r.a.createElement("sub",null,"2"),"O",r.a.createElement("sub",null,"5"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"CO",r.a.createElement("sub",null,"2"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"N",r.a.createElement("sub",null,"2"),"O",r.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"Cl",r.a.createElement("sub",null,"2"),"O",r.a.createElement("sub",null,"7"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"WO",r.a.createElement("sub",null,"3"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"SiO",r.a.createElement("sub",null,"2"))},{name:"\u041a\u0438\u0441\u043b\u043e\u0442\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"Mn",r.a.createElement("sub",null,"2"),"O",r.a.createElement("sub",null,"7"))},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"CuO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"Na",r.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"Li",r.a.createElement("sub",null,"2"),"O")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"BaO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"CoO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"FeO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"SrO")},{name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"Cu",r.a.createElement("sub",null,"2"),"O")},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"ZnO")},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"BeO")},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"Al",r.a.createElement("sub",null,"2"),"O",r.a.createElement("sub",null,"3"))},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"Fe",r.a.createElement("sub",null,"2"),"O",r.a.createElement("sub",null,"3"))},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"PbO",r.a.createElement("sub",null,"2"))},{name:"\u0430\u043c\u0444\u043e\u0442\u0435\u0440\u043d\u044b\u0439 \u043e\u043a\u0441\u0438\u0434",text:"",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"MnO",r.a.createElement("sub",null,"2"))},{name:"\u0413\u0438\u0434\u0440\u043e\u043a\u0441\u0438\u0434 \u0430\u043c\u043c\u043e\u043d\u0438\u044f",text:"\u0421\u0443\u043b\u044c\u0444\u0438\u0434 \u0430\u043c\u043c\u043e\u043d\u0438\u044f",type:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435",formula:r.a.createElement("div",null,"NH",r.a.createElement("sub",null,"4"),"OH")},{name:"C\u0443\u043b\u044c\u0444\u0438\u0442 \u043d\u0430\u0442\u0440\u0438\u044f",text:"C\u0443\u043b\u044c\u0444\u0438\u0442 \u043d\u0430\u0442\u0440\u0438\u044f",type:"\u0421\u043e\u043b\u044c",formula:r.a.createElement("div",null,"Na",r.a.createElement("sub",null,"2"),"SO",r.a.createElement("sub",null,"3"))},{name:"\u0412\u043e\u0434\u0430 (\u043e\u043a\u0441\u0438\u0434 \u0432\u043e\u0434\u043e\u0440\u043e\u0434\u0430)",text:"\u0412\u043e\u0434\u0430",type:"\u041e\u043a\u0441\u0438\u0434",formula:r.a.createElement("div",null,"H",r.a.createElement("sub",null,"2"),"O")}]},p=Object.keys(v),y=function(e){return JSON.parse(localStorage.getItem(e)||"[]")},O=function(){return r.a.createElement("div",{className:"main main1-background-size"},p.map((function(e,t){return r.a.createElement("div",{key:e},r.a.createElement("div",null,"BestResultsScreen ",e),y(p[t]).map((function(e){return r.a.createElement("div",{className:"display-flex",key:e.date},r.a.createElement("div",{className:"record-score"},e.score),r.a.createElement("div",{className:"record-date"},new Date(e.date).toLocaleDateString()," ",new Date(e.date).toLocaleTimeString()))})))})))},x=function(){return r.a.createElement("div",{key:"\u0421\u0442\u0430\u0440\u0442",className:"main main1-background-size"},r.a.createElement("div",null,"ErrosScreen"))},h=function(){var e=Object(l.useState)({stepNumber:0,score:0,gradeClass:p[0]}),t=Object(c.a)(e,2),n=t[0],u=n.stepNumber,o=n.score,m=n.gradeClass,s=t[1],E=Object(l.useState)(v[m]),f=Object(c.a)(E,2),h=f[0],S=f[1],g=Object(l.useState)(!1),k=Object(c.a)(g,2),C=k[0],N=k[1];Object(l.useEffect)((function(){var e=document.documentElement;e.style.setProperty("--main-animation-duration",10..toFixed(2)+"s"),e.style.setProperty("--click-animation-duration",1..toFixed(2)+"s");var t=setTimeout((function(){return N(!0)}),50);return function(){clearTimeout(t)}}),[]);var H=Object(l.useCallback)((function(e){var t=function(e){var t=e.map((function(e){return[Math.random(),e]}));return t.sort((function(e,t){return e[0]-t[0]})),t.map((function(e){return e[1]}))}(v[e]);S(t),s({stepNumber:1,score:0,gradeClass:e}),d(a.START)}),[]),P=Object(l.useCallback)((function(e){var t=e.name,n=e.type,a=e.answer;console.log("handleFinishEvent name = ",t),console.log("handleFinishEvent type = ",n),console.log("handleFinishEvent answer = ",a);var l,r="".concat(t,"/").concat(a),c=parseInt(localStorage.getItem(r)||"0",10);void 0===a?(l=o,localStorage.setItem(r,"".concat(c+1))):n===a?l=o+2:(l=o-1,localStorage.setItem(r,"".concat(c+1)));var i=u>=10||u>=h.length;if(s({stepNumber:i?-1:u+1,score:l,gradeClass:m}),i){var E=y(m);E.push({date:Date.now(),score:l}),E.sort((function(e,t){return t.score-e.score})),E=E.slice(0,5),localStorage.setItem(m,JSON.stringify(E))}}),[u,h.length,m,o]);switch(u){case 0:return r.a.createElement("div",{className:"main main1-background-size"},p.map((function(e,t){return r.a.createElement(i,{key:e,name:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443 ".concat(e),className:C?"buttonPositionPlay".concat(t+1," transition-true"):"startPosition",handleClick:function(){return H(e)}})})),r.a.createElement(i,{name:"\u041b\u0443\u0447\u0448\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",className:C?"buttonPositionShowRecords transition-true":"startPosition",handleClick:function(){s({stepNumber:-2,score:0,gradeClass:m}),d(a.BEST_RESULTS)}}),r.a.createElement(i,{name:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b",className:C?"buttonPositionShowWrongShots transition-true":"startPosition",handleClick:function(){return s({stepNumber:-3,score:0,gradeClass:m})}}));case-1:return r.a.createElement("div",{className:"main main1-background-size"},r.a.createElement("div",{className:C?"buttonPositionPlay result transition-true":"startPosition result"},"\u0418\u0442\u043e\u0433\u043e: ".concat(o)),r.a.createElement(i,{name:"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d",className:C?"buttonPositionShowRecords  transition-true":"startPosition",handleClick:function(){return s({stepNumber:0,score:0,gradeClass:m})}}));case-2:return r.a.createElement("div",{onClick:function(){return s({stepNumber:0,score:0,gradeClass:m})}},r.a.createElement(O,null));case-3:return r.a.createElement("div",{onClick:function(){return s({stepNumber:0,score:0,gradeClass:m})}},r.a.createElement(x,null));default:return r.a.createElement(b,{key:u,stepNumber:u,checksTotal:10,clickAnimationDuration:1e3,formula:h[u-1],handleFinishEvent:P,handleStopEvent:function(){return s({stepNumber:0,score:0,gradeClass:m})},mainAnimationDuration:1e4,score:o})}},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/chem",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/chem","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
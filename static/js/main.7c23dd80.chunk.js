(this["webpackJsonpbus-app"]=this["webpackJsonpbus-app"]||[]).push([[0],{282:function(e,t,a){e.exports=a.p+"static/media/bus.dd3bc86f.svg"},295:function(e,t,a){e.exports=a(522)},300:function(e,t,a){},468:function(e,t,a){},522:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(15),r=a.n(i),l=(a(300),a(129)),c=a(265),u=a(49),d=a(141),s=a(140),p=a(110),m=(a(468),a(139)),h=a(548),g=a(550),f=a(552),v=a(553),b=a(144),S=a(563),E=a(555),M=a(572),y=a(557),w=a(559),x=a(554),V=a(556),O=a(558),T=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},bar:{zIndex:e.zIndex.drawer+1},drawer:{width:250,flexShrink:0}}}));function j(){var e=T(),t=o.a.useState(!1),a=Object(m.a)(t,2),n=a[0],i=a[1];return o.a.createElement("div",null,o.a.createElement(g.a,{position:"static",className:e.bar},o.a.createElement(f.a,null,o.a.createElement(v.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return i(!n)}},o.a.createElement(x.a,null)),o.a.createElement(b.a,{variant:"h6",className:e.title},"Bus App"))),o.a.createElement(S.a,{anchor:"left",open:n,onClose:function(){return i(!1)},className:e.drawer},o.a.createElement("div",{role:"presentation",className:e.list},o.a.createElement(E.a,null,o.a.createElement(M.a,{button:!0,onClick:function(){return i(!1)}},o.a.createElement(V.a,null)),o.a.createElement(M.a,{button:!0},o.a.createElement(y.a,null," ",o.a.createElement(O.a,null)," "),o.a.createElement(w.a,null," Bus Map "))))))}var P=a(285),k=a(560),C=a(561),D=a(562),R=a(567),L=a(571),J=a(569),_=a(570),A=a(566),B=a(568),N=Object(h.a)((function(e){return{drawer:{flexShrink:0}}}));function I(e){var t,a,n,i=N(),r=o.a.useState(!1),l=Object(m.a)(r,2),c=l[0],u=l[1],d=e.data.length>10?e.data.splice(e.data.length-11,e.data.length-1):e.data;e.data.length>0&&(a=Math.max.apply(Math,e.data.map((function(e){return e.averageSpeed}))),t=Math.min.apply(Math,e.data.map((function(e){return e.averageSpeed}))),n=(a-t)/5);var s={fill:function(e){var t="blue";return e.datum.averageSpeed>0&&e.datum.averageSpeed<=n&&(t="red"),e.datum.averageSpeed>n&&e.datum.averageSpeed<=2*n&&(t="orange"),e.datum.averageSpeed>2*n&&e.datum.averageSpeed<=3*n&&(t="yellow"),e.datum.averageSpeed>3*n&&e.datum.averageSpeed<=4*n&&(t="green"),t},strokeWidth:0};return o.a.createElement(k.a,{container:!0,direction:"column",alignItems:"center",style:{position:"fixed",bottom:"0vh"}},o.a.createElement(C.a,{onClick:function(){return u(!0)},color:"primary"},"Show Graph"),o.a.createElement(S.a,{anchor:"bottom",open:c,onClose:function(){return u(!1)},className:i.drawer},o.a.createElement(k.a,{item:!0,container:!0,direction:"column",alignItems:"center"},o.a.createElement(v.a,{onClick:function(){return u(!1)},color:"primary"},o.a.createElement(D.a,null)),o.a.createElement("div",null,e.data.length>0&&e.data[0].distance>0&&o.a.createElement(R.a,{width:800,padding:{left:250,bottom:50,top:50},domainPadding:{x:100},theme:L.a.material},o.a.createElement(J.a,{text:"Time spent between stops for line "+d[0].LineRef,x:350,y:10,textAnchor:"middle"}),o.a.createElement(_.a,{dependentAxis:!0,style:{tickLabels:{letterSpacing:"1px",fontSize:9,marginBlock:"20px"}}}),o.a.createElement(_.a,{tickFormat:function(e){return"".concat(Math.ceil(60*e)," min")}}),o.a.createElement(A.a,{data:d,x:"duration",y:"stopName",style:{data:{stroke:"#c43a31"},parent:{border:"1px solid #ccc"}}})),e.data.length>0&&e.data[0].distance>0&&o.a.createElement(R.a,{width:800,padding:{left:250,right:50,bottom:50,top:50},domainPadding:{x:100},theme:L.a.material},o.a.createElement(J.a,{text:"Average Speed between Stops for line "+d[0].LineRef,x:350,y:10,textAnchor:"middle"}),o.a.createElement(_.a,{dependentAxis:!0,tickFormat:function(e){return"".concat(e,"mph")}}),o.a.createElement(_.a,{style:{tickLabels:{letterSpacing:"1px",fontSize:9,marginBlock:"20px"}}}),o.a.createElement(B.a,{horizontal:!0,data:d,labels:function(e){var t=e.datum;return"".concat(t.averageSpeed)},style:{data:Object(P.a)({},s)},y:"averageSpeed",x:"stopName"}))),e.data.length>0&&0===e.data[0].distance&&o.a.createElement(b.a,{variant:"h6"},"Not enough data to show graph."),o.a.createElement("br",null))))}var W=a(282),U=a.n(W),z=a(186),F=a.n(z),K=a(283),G=a(284),H=a.n(G),Z=Object({NODE_ENV:"production",PUBLIC_URL:"/bus-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BUS,$=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return a}(o.a.Component);$.getPositions=Object(K.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"Content-Type":"application/json"},a=[],e.next=4,H.a.get("https://api.511.org/transit/VehicleMonitoring?api_key="+Z+"&agency=AC",{},{headers:t}).then((function(e){a=e.data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity})).catch((function(e){console.log("@Error@",e)}));case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));var q,Q=a(520).InfoBox,X=Object(p.withScriptjs)(Object(p.withGoogleMap)((function(e){return o.a.createElement(p.GoogleMap,{defaultZoom:9,defaultCenter:{lat:37.737,lng:-122.235}},e.isMarkerShown&&o.a.createElement(p.Marker,{position:{lat:e.lat,lng:e.lng},icon:{url:U.a,scaledSize:new window.google.maps.Size(40,40)}}),o.a.createElement(Q,{defaultPosition:new window.google.maps.LatLng(e.lat,e.lng),options:{closeBoxURL:"",enableEventPropagation:!0}},o.a.createElement("div",{style:{backgroundColor:"white",opacity:.75,padding:"12px"}},o.a.createElement("div",{style:{fontSize:"16px",fontColor:"#08233B"}},e.bus&&o.a.createElement("p",null,"Last Updated: ",new Date(e.bus.RecordedAtTime).toLocaleTimeString("it-IT"),o.a.createElement("br",null),"Line:",e.bus.MonitoredVehicleJourney.LineRef,o.a.createElement("br",null),e.bus.MonitoredVehicleJourney.PublishedLineName,o.a.createElement("br",null)," From ",e.bus.MonitoredVehicleJourney.OriginName," to ",e.bus.MonitoredVehicleJourney.DestinationName,o.a.createElement("br",null)," Next stop: ",e.nextStop)))))}))),Y=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e))._isMounted=!1,n.getPositions=function(){$.getPositions().then((function(e){n.updateBusInfo(e)}),(function(e){console.log(e)}))},n.updateBusInfo=function(e){if(e&&n._isMounted){var t=n.searchBusObject(e);if(t){var a="";t.MonitoredVehicleJourney.MonitoredCall&&(a=t.MonitoredVehicleJourney.MonitoredCall.StopPointName!==n.state.nextStop?t.MonitoredVehicleJourney.MonitoredCall.StopPointName:n.state.nextStop),""!==a&&n.updateAverageSpeed(t,a),n.setState({bus:t,nextStop:a,longitude:parseFloat(t.MonitoredVehicleJourney.VehicleLocation.Longitude),latitude:parseFloat(t.MonitoredVehicleJourney.VehicleLocation.Latitude),timestamp:t.RecordedAtTime})}}},n.searchBusObject=function(e){for(var t=n.state.bus,a=0;a<e.length;a++){var o=e[a];if(null===t){if(o.MonitoredVehicleJourney&&o.MonitoredVehicleJourney.MonitoredCall&&o.MonitoredVehicleJourney.MonitoredCall.StopPointName&&""!==o.MonitoredVehicleJourney.VehicleRef)return o}else{if(o.MonitoredVehicleJourney&&o.MonitoredVehicleJourney.VehicleRef===n.state.bus.MonitoredVehicleJourney.VehicleRef)return o;a===e.length-1&&null!==t&&(a=0,t=null)}}return null},n.updateAverageSpeed=function(e,t){var a=n.state,o=a.bus,i=a.latitude,r=a.longitude,l=a.nextStop,c=a.averageSpeedMapping,u=c.length-1,d=c;if(o&&o.MonitoredVehicleJourney.VehicleRef!==e.MonitoredVehicleJourney.VehicleRef&&(d=[]),u>=0&&o.MonitoredVehicleJourney.VehicleRef===e.MonitoredVehicleJourney.VehicleRef){var s=d.pop(),p=parseFloat(e.MonitoredVehicleJourney.VehicleLocation.Longitude),m=parseFloat(e.MonitoredVehicleJourney.VehicleLocation.Latitude);l!==t?s.distance=n.calculateDistance(i,r,m,p):s.distance+=n.calculateDistance(i,r,m,p),s.endTime=e.RecordedAtTime,s.duration=n.calculateTimeDifference(s.startTime,s.endTime),s.averageSpeed=n.calculateSpeed(s.distance,s.duration),d.push(s)}if(u<0||l!==t){var h={};h.LineRef=e.MonitoredVehicleJourney.LineRef,h.VehicleRef=e.MonitoredVehicleJourney.VehicleRef,h.stopName=t,h.averageSpeed=0,h.distance=0,h.duration=0,h.startTime=e.RecordedAtTime,h.endTime=e.RecordedAtTime,d.push(h)}n.setState({averageSpeedMapping:d})},n.calculateDistance=function(e,t,a,n){if(e===a&&t===n)return 0;var o=Math.PI*e/180,i=Math.PI*a/180,r=t-n,l=Math.PI*r/180,c=Math.sin(o)*Math.sin(i)+Math.cos(o)*Math.cos(i)*Math.cos(l);return c>1&&(c=1),c=60*(c=180*(c=Math.acos(c))/Math.PI)*1.1515},n.calculateTimeDifference=function(e,t){var a=new Date(e),n=new Date(t);return Date.parse(n)>Date.parse(a)?(Date.parse(n)-Date.parse(a))/1e3/3600:0},n.calculateSpeed=function(e,t){return t>0?+(e/t).toFixed(1):0},n.state={bus:null,longitude:-121.88633,latitude:37.338207,timestamp:"",nextStop:"",averageSpeedMapping:[]},n.getPositions=n.getPositions.bind(Object(u.a)(n)),n.updateBusInfo=n.updateBusInfo.bind(Object(u.a)(n)),n.updateAverageSpeed=n.updateAverageSpeed.bind(Object(u.a)(n)),n.searchBusObject=n.searchBusObject.bind(Object(u.a)(n)),n.calculateDistance=n.calculateDistance.bind(Object(u.a)(n)),n.calculateTimeDifference=n.calculateTimeDifference.bind(Object(u.a)(n)),n.calculateSpeed=n.calculateSpeed.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.getPositions();try{q=setInterval(this.getPositions,6e4)}catch(e){console.log(e)}}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,clearInterval(q)}},{key:"render",value:function(){var e=this.state,t=e.longitude,a=e.latitude,n=e.bus,i=e.nextStop,r=e.averageSpeedMapping,l=Object({NODE_ENV:"production",PUBLIC_URL:"/bus-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MAP;return o.a.createElement("div",{style:{width:"100vw",height:"100vh"}},o.a.createElement(j,null),o.a.createElement("div",{style:{width:"100vw",height:"80vh"}},o.a.createElement(X,{key:a+" "+t+" "+i,bus:n,lat:a,lng:t,nextStop:i,isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="+l,loadingElement:o.a.createElement("div",{style:{height:"80vh"}}),containerElement:o.a.createElement("div",{style:{height:"80vh"}}),mapElement:o.a.createElement("div",{style:{height:"80vh"}})}),o.a.createElement(I,{data:r})))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[295,1,2]]]);
//# sourceMappingURL=main.7c23dd80.chunk.js.map
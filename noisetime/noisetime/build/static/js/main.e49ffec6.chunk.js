(this.webpackJsonpnoisetime=this.webpackJsonpnoisetime||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n(8),s=n(3),o=n(10),l=n(9),r=n(1),c=n(0),d=n.n(c),h=n(16),u=n.n(h),j=n(12),b=n.n(j),p=n(21),O=(n(13),n(17)),g=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={playing:!1,loaded:!1,loop:!0,mute:!1,volume:.15,seek:0,isSeeking:!1},i.handleToggle=i.handleToggle.bind(Object(s.a)(i)),i.handleOnLoad=i.handleOnLoad.bind(Object(s.a)(i)),i.handleOnEnd=i.handleOnEnd.bind(Object(s.a)(i)),i.handleOnPlay=i.handleOnPlay.bind(Object(s.a)(i)),i.handleStop=i.handleStop.bind(Object(s.a)(i)),i.renderSeekPos=i.renderSeekPos.bind(Object(s.a)(i)),i.handleLoopToggle=i.handleLoopToggle.bind(Object(s.a)(i)),i.handleMuteToggle=i.handleMuteToggle.bind(Object(s.a)(i)),i.handleMouseDownSeek=i.handleMouseDownSeek.bind(Object(s.a)(i)),i.handleMouseUpSeek=i.handleMouseUpSeek.bind(Object(s.a)(i)),i.handleSeekingChange=i.handleSeekingChange.bind(Object(s.a)(i)),i}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){this.clearRAF()}},{key:"handleToggle",value:function(){this.setState({playing:!this.state.playing})}},{key:"handleOnLoad",value:function(){this.setState({loaded:!0,duration:this.player.duration()})}},{key:"handleOnPlay",value:function(){this.setState({playing:!0}),this.renderSeekPos()}},{key:"handleOnEnd",value:function(){this.setState({playing:!1}),this.clearRAF()}},{key:"handleStop",value:function(){this.player.stop(),this.setState({playing:!1}),this.renderSeekPos()}},{key:"handleLoopToggle",value:function(){this.setState({loop:!this.state.loop})}},{key:"handleMuteToggle",value:function(){this.setState({mute:!this.state.mute})}},{key:"handleMouseDownSeek",value:function(){this.setState({isSeeking:!0})}},{key:"handleMouseUpSeek",value:function(e){this.setState({isSeeking:!1}),this.player.seek(e.target.value)}},{key:"handleSeekingChange",value:function(e){this.setState({seek:parseFloat(e.target.value)})}},{key:"renderSeekPos",value:function(){this.state.isSeeking||this.setState({seek:this.player.seek()}),this.state.playing&&(this._raf=b()(this.renderSeekPos))}},{key:"clearRAF",value:function(){b.a.cancel(this._raf)}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"noise-control",children:[Object(r.jsx)(u.a,{src:["noise.mp3"],playing:this.state.playing,onLoad:this.handleOnLoad,onPlay:this.handleOnPlay,onEnd:this.handleOnEnd,loop:this.state.loop,mute:this.state.mute,volume:this.state.volume,ref:function(t){return e.player=t}}),this.state.loaded&&Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"volume my-2",children:Object(r.jsxs)("label",{children:["Volume:",Object(r.jsx)("input",{class:"form-control-range input-lg",type:"range",min:"0",max:"1",step:".01",value:this.state.volume,onChange:function(t){return e.setState({volume:parseFloat(t.target.value)})}})]})}),Object(r.jsx)(p.a,{variant:"outline-primary",size:"lg",onClick:this.handleToggle,children:this.state.playing?"Stop Noise":"Start Noise"})]}),!this.state.loaded&&Object(r.jsx)(O.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"})]})}}]),n}(d.a.Component);t.default=g},38:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n.n(i),o=n(15),l=n.n(o),r=(n(27),n(7)),c=n(8),d=n(10),h=n(9),u=n(28).default,j=(n(37),n(18)),b=n(19),p=n(20),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.ipify.org/?format=json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,i=e.items;return t?Object(a.jsxs)("div",{children:["Error: ",t.message]}):n?Object(a.jsxs)("div",{className:"mt-4",children:["Your IP is ",i.ip]}):Object(a.jsx)("div",{children:"Loading..."})}}]),n}(s.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.countapi.xyz/hit/noisify/visits").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,i=e.items;return t?Object(a.jsxs)("div",{children:["Error: ",t.message]}):n?Object(a.jsxs)("div",{className:"mt-5",children:["Noisify has succesfully launched ",i.value," times in history."]}):Object(a.jsx)("div",{children:"Loading..."})}}]),n}(s.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsx)(j.a,{className:"bg-dark text-light",fluid:!0,children:Object(a.jsx)(b.a,{children:Object(a.jsxs)(p.a,{className:"text-center",children:[Object(a.jsx)("h1",{className:"title my-3",children:"Noisify"}),Object(a.jsx)(u,{className:"mt-3 mb-3"}),Object(a.jsx)(O,{}),Object(a.jsx)(g,{}),Object(a.jsxs)("p",{className:"mt-3",children:["A deep work tool made by ",Object(a.jsx)("a",{href:"https://focalise.ie",children:"Focalise"})]})]})})})}}]),n}(s.a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),m()}},[[38,1,2]]]);
//# sourceMappingURL=main.e49ffec6.chunk.js.map
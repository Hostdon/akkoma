(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{680:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return j});var i,o,n,r=a(1),c=a(7),s=a(0),d=a(2),l=a(3),b=a.n(l),m=a(5),u=a.n(m),f=a(24),h=a(6),p=a(10),j=Object(h.g)((n=o=function(o){function e(){for(var t,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return t=o.call.apply(o,[this].concat(a))||this,Object(d.a)(Object(s.a)(Object(s.a)(t)),"state",{loading:!1,oembed:null}),Object(d.a)(Object(s.a)(Object(s.a)(t)),"setIframeRef",function(e){t.iframe=e}),Object(d.a)(Object(s.a)(Object(s.a)(t)),"handleTextareaClick",function(e){e.target.select()}),t}Object(c.a)(e,o);var t=e.prototype;return t.componentDidMount=function(){var a=this,e=this.props.url;this.setState({loading:!0}),Object(p.a)().post("/api/web/embed",{url:e}).then(function(e){a.setState({loading:!1,oembed:e.data});var t=a.iframe.contentWindow.document;t.open(),t.write(e.data.html),t.close(),t.body.style.margin=0,a.iframe.width=t.body.scrollWidth,a.iframe.height=t.body.scrollHeight}).catch(function(e){a.props.onError(e)})},t.render=function(){var e=this.state.oembed;return Object(r.a)("div",{className:"modal-root__modal embed-modal"},void 0,Object(r.a)("h4",{},void 0,Object(r.a)(h.b,{id:"status.embed",defaultMessage:"Embed"})),Object(r.a)("div",{className:"embed-modal__container"},void 0,Object(r.a)("p",{className:"hint"},void 0,Object(r.a)(h.b,{id:"embed.instructions",defaultMessage:"Embed this status on your website by copying the code below."})),Object(r.a)("input",{type:"text",className:"embed-modal__html",readOnly:!0,value:e&&e.html||"",onClick:this.handleTextareaClick}),Object(r.a)("p",{className:"hint"},void 0,Object(r.a)(h.b,{id:"embed.preview",defaultMessage:"Here is what it will look like:"})),b.a.createElement("iframe",{className:"embed-modal__iframe",frameBorder:"0",ref:this.setIframeRef,sandbox:"allow-same-origin",title:"preview"})))},e}(f.a),Object(d.a)(o,"propTypes",{url:u.a.string.isRequired,onClose:u.a.func.isRequired,onError:u.a.func.isRequired,intl:u.a.object.isRequired}),i=n))||i}}]);
//# sourceMappingURL=embed_modal.js.map
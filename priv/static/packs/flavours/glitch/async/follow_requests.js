(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{712:function(e,t,a){"use strict";a.r(t);var c,o,n,i,r,s,u=a(1),l=a(6),d=a(0),j=a(2),b=(a(3),a(20)),p=a(5),O=a.n(p),f=a(26),h=a.n(f),v=a(288),m=a(295),_=a(639),g=a(643),w=a(166),q=a(319),z=a(100),R=a(101),y=a(46),M=a(7),N=a(24),S=Object(M.f)({authorize:{id:"follow_request.authorize",defaultMessage:"Authorize"},reject:{id:"follow_request.reject",defaultMessage:"Reject"}}),k=Object(M.g)((n=o=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.intl,a=e.account,c=e.onAuthorize,o=e.onReject,n={__html:a.get("note_emojified")};return Object(u.a)("div",{className:"account-authorize__wrapper"},void 0,Object(u.a)("div",{className:"account-authorize"},void 0,Object(u.a)(q.a,{href:a.get("url"),to:"/accounts/"+a.get("id"),className:"detailed-status__display-name"},void 0,Object(u.a)("div",{className:"account-authorize__avatar"},void 0,Object(u.a)(z.a,{account:a,size:48})),Object(u.a)(R.a,{account:a})),Object(u.a)("div",{className:"account__header__content",dangerouslySetInnerHTML:n})),Object(u.a)("div",{className:"account--panel"},void 0,Object(u.a)("div",{className:"account--panel__button"},void 0,Object(u.a)(y.a,{title:t.formatMessage(S.authorize),icon:"check",onClick:c})),Object(u.a)("div",{className:"account--panel__button"},void 0,Object(u.a)(y.a,{title:t.formatMessage(S.reject),icon:"times",onClick:o}))))},t}(N.a),Object(j.a)(o,"propTypes",{account:h.a.map.isRequired,onAuthorize:O.a.func.isRequired,onReject:O.a.func.isRequired,intl:O.a.object.isRequired}),c=n))||c,A=a(14),I=Object(b.connect)(function(){var a=Object(w.d)();return function(e,t){return{account:a(e,t.id)}}},function(e,t){var a=t.id;return{onAuthorize:function(){e(Object(A.z)(a))},onReject:function(){e(Object(A.Q)(a))}}})(k);a.d(t,"default",function(){return T});var H=Object(M.f)({heading:{id:"column.follow_requests",defaultMessage:"Follow requests"}}),T=Object(b.connect)(function(e){return{accountIds:e.getIn(["user_lists","follow_requests","items"])}})(i=Object(M.g)((s=r=function(o){function e(){for(var a,e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return a=o.call.apply(o,[this].concat(t))||this,Object(j.a)(Object(d.a)(Object(d.a)(a)),"handleScroll",function(e){var t=e.target;t.scrollTop===t.scrollHeight-t.clientHeight&&a.props.dispatch(Object(A.D)())}),Object(j.a)(Object(d.a)(Object(d.a)(a)),"shouldUpdateScroll",function(e,t){var a=t.location;return!(((e||{}).location||{}).state||{}).mastodonModalOpen&&!(a.state&&a.state.mastodonModalOpen)}),a}Object(l.a)(e,o);var t=e.prototype;return t.componentWillMount=function(){this.props.dispatch(Object(A.H)())},t.render=function(){var e=this.props,t=e.intl,a=e.accountIds;return a?Object(u.a)(_.a,{name:"follow-requests",icon:"users",heading:t.formatMessage(H.heading)},void 0,Object(u.a)(g.a,{}),Object(u.a)(m.a,{scrollKey:"follow_requests",shouldUpdateScroll:this.shouldUpdateScroll},void 0,Object(u.a)("div",{className:"scrollable",onScroll:this.handleScroll},void 0,a.map(function(e){return Object(u.a)(I,{id:e},e)})))):Object(u.a)(_.a,{name:"follow-requests"},void 0,Object(u.a)(v.a,{}))},e}(N.a),Object(j.a)(r,"propTypes",{params:O.a.object.isRequired,dispatch:O.a.func.isRequired,accountIds:h.a.list,intl:O.a.object.isRequired}),i=s))||i)||i}}]);
//# sourceMappingURL=follow_requests.js.map
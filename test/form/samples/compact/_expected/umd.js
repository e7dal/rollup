(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f(require('external')):typeof define==='function'&&define.amd?define(['external'],f):(g=g||self,g.foo=f(g.x));}(this,(function(x){'use strict';function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e:{'default':e}}var x__default=/*#__PURE__*/_interopDefault(x);var self=/*#__PURE__*/Object.freeze({__proto__:null,[Symbol.toStringTag]:'Module',get default(){return foo}});console.log(self);
function foo () {
	console.log( x__default['default'] );
}
// trailing comment
return foo;})));
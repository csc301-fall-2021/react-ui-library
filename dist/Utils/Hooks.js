"use strict";var _react=require("react");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useTransition=void 0;function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}var useTransition=function(){var a=!!(0<arguments.length&&arguments[0]!==void 0)&&arguments[0],b=1<arguments.length?arguments[1]:void 0,c=2<arguments.length?arguments[2]:void 0,d=(0,_react.useState)(!0),e=_slicedToArray(d,2),f=e[0],g=e[1],h=(0,_react.useRef)(a),i=(0,_react.useCallback)(function(a){f&&(g(!1),window.setTimeout(function(){h.current=a,g(!0)},a?b:c))},[h.current,b,c]);return[h.current,i,f]};exports.useTransition=useTransition;
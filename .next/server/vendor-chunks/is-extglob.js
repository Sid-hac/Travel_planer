"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-extglob";
exports.ids = ["vendor-chunks/is-extglob"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-extglob/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-extglob/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("/*!\n * is-extglob <https://github.com/jonschlinkert/is-extglob>\n *\n * Copyright (c) 2014-2016, Jon Schlinkert.\n * Licensed under the MIT License.\n */ \nmodule.exports = function isExtglob(str) {\n    if (typeof str !== \"string\" || str === \"\") {\n        return false;\n    }\n    var match;\n    while(match = /(\\\\).|([@?!+*]\\(.*\\))/g.exec(str)){\n        if (match[2]) return true;\n        str = str.slice(match.index + match[0].length);\n    }\n    return false;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtZXh0Z2xvYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQztBQUVEQSxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsVUFBVUMsR0FBRztJQUNyQyxJQUFJLE9BQU9BLFFBQVEsWUFBWUEsUUFBUSxJQUFJO1FBQ3pDLE9BQU87SUFDVDtJQUVBLElBQUlDO0lBQ0osTUFBUUEsUUFBUSx5QkFBeUJDLElBQUksQ0FBQ0YsS0FBTztRQUNuRCxJQUFJQyxLQUFLLENBQUMsRUFBRSxFQUFFLE9BQU87UUFDckJELE1BQU1BLElBQUlHLEtBQUssQ0FBQ0YsTUFBTUcsS0FBSyxHQUFHSCxLQUFLLENBQUMsRUFBRSxDQUFDSSxNQUFNO0lBQy9DO0lBRUEsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhdmVsX3BsYW5lci8uL25vZGVfbW9kdWxlcy9pcy1leHRnbG9iL2luZGV4LmpzPzBmYmQiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBpcy1leHRnbG9iIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1leHRnbG9iPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE2LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRXh0Z2xvYihzdHIpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnIHx8IHN0ciA9PT0gJycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbWF0Y2g7XG4gIHdoaWxlICgobWF0Y2ggPSAvKFxcXFwpLnwoW0A/ISsqXVxcKC4qXFwpKS9nLmV4ZWMoc3RyKSkpIHtcbiAgICBpZiAobWF0Y2hbMl0pIHJldHVybiB0cnVlO1xuICAgIHN0ciA9IHN0ci5zbGljZShtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJpc0V4dGdsb2IiLCJzdHIiLCJtYXRjaCIsImV4ZWMiLCJzbGljZSIsImluZGV4IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-extglob/index.js\n");

/***/ })

};
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/standard-as-callback";
exports.ids = ["vendor-chunks/standard-as-callback"];
exports.modules = {

/***/ "(rsc)/./node_modules/standard-as-callback/built/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/standard-as-callback/built/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst utils_1 = __webpack_require__(/*! ./utils */ \"(rsc)/./node_modules/standard-as-callback/built/utils.js\");\nfunction throwLater(e) {\n    setTimeout(function() {\n        throw e;\n    }, 0);\n}\nfunction asCallback(promise, nodeback, options) {\n    if (typeof nodeback === \"function\") {\n        promise.then((val)=>{\n            let ret;\n            if (options !== undefined && Object(options).spread && Array.isArray(val)) {\n                ret = utils_1.tryCatch(nodeback).apply(undefined, [\n                    null\n                ].concat(val));\n            } else {\n                ret = val === undefined ? utils_1.tryCatch(nodeback)(null) : utils_1.tryCatch(nodeback)(null, val);\n            }\n            if (ret === utils_1.errorObj) {\n                throwLater(ret.e);\n            }\n        }, (cause)=>{\n            if (!cause) {\n                const newReason = new Error(cause + \"\");\n                Object.assign(newReason, {\n                    cause\n                });\n                cause = newReason;\n            }\n            const ret = utils_1.tryCatch(nodeback)(cause);\n            if (ret === utils_1.errorObj) {\n                throwLater(ret.e);\n            }\n        });\n    }\n    return promise;\n}\nexports[\"default\"] = asCallback;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc3RhbmRhcmQtYXMtY2FsbGJhY2svYnVpbHQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0QsTUFBTUMsVUFBVUMsbUJBQU9BLENBQUMseUVBQVM7QUFDakMsU0FBU0MsV0FBV0MsQ0FBQztJQUNqQkMsV0FBVztRQUNQLE1BQU1EO0lBQ1YsR0FBRztBQUNQO0FBQ0EsU0FBU0UsV0FBV0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE9BQU87SUFDMUMsSUFBSSxPQUFPRCxhQUFhLFlBQVk7UUFDaENELFFBQVFHLElBQUksQ0FBQyxDQUFDQztZQUNWLElBQUlDO1lBQ0osSUFBSUgsWUFBWUksYUFDWmhCLE9BQU9ZLFNBQVNLLE1BQU0sSUFDdEJDLE1BQU1DLE9BQU8sQ0FBQ0wsTUFBTTtnQkFDcEJDLE1BQU1YLFFBQVFnQixRQUFRLENBQUNULFVBQVVVLEtBQUssQ0FBQ0wsV0FBVztvQkFBQztpQkFBSyxDQUFDTSxNQUFNLENBQUNSO1lBQ3BFLE9BQ0s7Z0JBQ0RDLE1BQ0lELFFBQVFFLFlBQ0ZaLFFBQVFnQixRQUFRLENBQUNULFVBQVUsUUFDM0JQLFFBQVFnQixRQUFRLENBQUNULFVBQVUsTUFBTUc7WUFDL0M7WUFDQSxJQUFJQyxRQUFRWCxRQUFRbUIsUUFBUSxFQUFFO2dCQUMxQmpCLFdBQVdTLElBQUlSLENBQUM7WUFDcEI7UUFDSixHQUFHLENBQUNpQjtZQUNBLElBQUksQ0FBQ0EsT0FBTztnQkFDUixNQUFNQyxZQUFZLElBQUlDLE1BQU1GLFFBQVE7Z0JBQ3BDeEIsT0FBTzJCLE1BQU0sQ0FBQ0YsV0FBVztvQkFBRUQ7Z0JBQU07Z0JBQ2pDQSxRQUFRQztZQUNaO1lBQ0EsTUFBTVYsTUFBTVgsUUFBUWdCLFFBQVEsQ0FBQ1QsVUFBVWE7WUFDdkMsSUFBSVQsUUFBUVgsUUFBUW1CLFFBQVEsRUFBRTtnQkFDMUJqQixXQUFXUyxJQUFJUixDQUFDO1lBQ3BCO1FBQ0o7SUFDSjtJQUNBLE9BQU9HO0FBQ1g7QUFDQVIsa0JBQWUsR0FBR08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmF2ZWxfcGxhbmVyLy4vbm9kZV9tb2R1bGVzL3N0YW5kYXJkLWFzLWNhbGxiYWNrL2J1aWx0L2luZGV4LmpzP2EwNjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5mdW5jdGlvbiB0aHJvd0xhdGVyKGUpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9LCAwKTtcbn1cbmZ1bmN0aW9uIGFzQ2FsbGJhY2socHJvbWlzZSwgbm9kZWJhY2ssIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG5vZGViYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIGxldCByZXQ7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0KG9wdGlvbnMpLnNwcmVhZCAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgICAgIHJldCA9IHV0aWxzXzEudHJ5Q2F0Y2gobm9kZWJhY2spLmFwcGx5KHVuZGVmaW5lZCwgW251bGxdLmNvbmNhdCh2YWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldCA9XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzXzEudHJ5Q2F0Y2gobm9kZWJhY2spKG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHV0aWxzXzEudHJ5Q2F0Y2gobm9kZWJhY2spKG51bGwsIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmV0ID09PSB1dGlsc18xLmVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dMYXRlcihyZXQuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChjYXVzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjYXVzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JlYXNvbiA9IG5ldyBFcnJvcihjYXVzZSArIFwiXCIpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3UmVhc29uLCB7IGNhdXNlIH0pO1xuICAgICAgICAgICAgICAgIGNhdXNlID0gbmV3UmVhc29uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmV0ID0gdXRpbHNfMS50cnlDYXRjaChub2RlYmFjaykoY2F1c2UpO1xuICAgICAgICAgICAgaWYgKHJldCA9PT0gdXRpbHNfMS5lcnJvck9iaikge1xuICAgICAgICAgICAgICAgIHRocm93TGF0ZXIocmV0LmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBhc0NhbGxiYWNrO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwidXRpbHNfMSIsInJlcXVpcmUiLCJ0aHJvd0xhdGVyIiwiZSIsInNldFRpbWVvdXQiLCJhc0NhbGxiYWNrIiwicHJvbWlzZSIsIm5vZGViYWNrIiwib3B0aW9ucyIsInRoZW4iLCJ2YWwiLCJyZXQiLCJ1bmRlZmluZWQiLCJzcHJlYWQiLCJBcnJheSIsImlzQXJyYXkiLCJ0cnlDYXRjaCIsImFwcGx5IiwiY29uY2F0IiwiZXJyb3JPYmoiLCJjYXVzZSIsIm5ld1JlYXNvbiIsIkVycm9yIiwiYXNzaWduIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/standard-as-callback/built/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/standard-as-callback/built/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/standard-as-callback/built/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.tryCatch = exports.errorObj = void 0;\n//Try catch is not supported in optimizing\n//compiler, so it is isolated\nexports.errorObj = {\n    e: {}\n};\nlet tryCatchTarget;\nfunction tryCatcher(err, val) {\n    try {\n        const target = tryCatchTarget;\n        tryCatchTarget = null;\n        return target.apply(this, arguments);\n    } catch (e) {\n        exports.errorObj.e = e;\n        return exports.errorObj;\n    }\n}\nfunction tryCatch(fn) {\n    tryCatchTarget = fn;\n    return tryCatcher;\n}\nexports.tryCatch = tryCatch;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc3RhbmRhcmQtYXMtY2FsbGJhY2svYnVpbHQvdXRpbHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0RELGdCQUFnQixHQUFHQSxnQkFBZ0IsR0FBRyxLQUFLO0FBQzNDLDBDQUEwQztBQUMxQyw2QkFBNkI7QUFDN0JBLGdCQUFnQixHQUFHO0lBQUVJLEdBQUcsQ0FBQztBQUFFO0FBQzNCLElBQUlDO0FBQ0osU0FBU0MsV0FBV0MsR0FBRyxFQUFFQyxHQUFHO0lBQ3hCLElBQUk7UUFDQSxNQUFNQyxTQUFTSjtRQUNmQSxpQkFBaUI7UUFDakIsT0FBT0ksT0FBT0MsS0FBSyxDQUFDLElBQUksRUFBRUM7SUFDOUIsRUFDQSxPQUFPUCxHQUFHO1FBQ05KLGtCQUFrQixHQUFHSTtRQUNyQixPQUFPSixRQUFRRyxRQUFRO0lBQzNCO0FBQ0o7QUFDQSxTQUFTRCxTQUFTVSxFQUFFO0lBQ2hCUCxpQkFBaUJPO0lBQ2pCLE9BQU9OO0FBQ1g7QUFDQU4sZ0JBQWdCLEdBQUdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhdmVsX3BsYW5lci8uL25vZGVfbW9kdWxlcy9zdGFuZGFyZC1hcy1jYWxsYmFjay9idWlsdC91dGlscy5qcz81ZTViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50cnlDYXRjaCA9IGV4cG9ydHMuZXJyb3JPYmogPSB2b2lkIDA7XG4vL1RyeSBjYXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIG9wdGltaXppbmdcbi8vY29tcGlsZXIsIHNvIGl0IGlzIGlzb2xhdGVkXG5leHBvcnRzLmVycm9yT2JqID0geyBlOiB7fSB9O1xubGV0IHRyeUNhdGNoVGFyZ2V0O1xuZnVuY3Rpb24gdHJ5Q2F0Y2hlcihlcnIsIHZhbCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRyeUNhdGNoVGFyZ2V0O1xuICAgICAgICB0cnlDYXRjaFRhcmdldCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZXhwb3J0cy5lcnJvck9iai5lID0gZTtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuZXJyb3JPYmo7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJ5Q2F0Y2goZm4pIHtcbiAgICB0cnlDYXRjaFRhcmdldCA9IGZuO1xuICAgIHJldHVybiB0cnlDYXRjaGVyO1xufVxuZXhwb3J0cy50cnlDYXRjaCA9IHRyeUNhdGNoO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwidHJ5Q2F0Y2giLCJlcnJvck9iaiIsImUiLCJ0cnlDYXRjaFRhcmdldCIsInRyeUNhdGNoZXIiLCJlcnIiLCJ2YWwiLCJ0YXJnZXQiLCJhcHBseSIsImFyZ3VtZW50cyIsImZuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/standard-as-callback/built/utils.js\n");

/***/ })

};
;
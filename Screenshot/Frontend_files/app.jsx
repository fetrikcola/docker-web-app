import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=2cd4cff3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/app.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=2cd4cff3"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import __vite__cjsImport4_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=4fc57c06"; const ReactDOM = __vite__cjsImport4_reactDom_client.__esModule ? __vite__cjsImport4_reactDom_client.default : __vite__cjsImport4_reactDom_client;
import __vite__cjsImport5_react from "/node_modules/.vite/deps/react.js?v=2cd4cff3"; const useEffect = __vite__cjsImport5_react["useEffect"]; const useState = __vite__cjsImport5_react["useState"];
function App() {
  _s();
  const [message, setMessage] = useState("Loading...");
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("Fetching data...");
    fetch("/api/hello").then((res) => {
      console.log("Response status:", res.status);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    }).then((data) => {
      console.log("Data received:", data);
      setMessage(data.message);
    }).catch((err) => {
      console.error("Fetch error:", err);
      setError(err.message);
      setMessage("Fetch failed: " + err.message);
    });
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { style: { padding: "20px", fontFamily: "Arial" }, children: [
    /* @__PURE__ */ jsxDEV("h1", { children: message }, void 0, false, {
      fileName: "/app/app.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ jsxDEV("p", { style: { color: "red" }, children: [
      "Error: ",
      error
    ] }, void 0, true, {
      fileName: "/app/app.jsx",
      lineNumber: 54,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "/app/app.jsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
_s(App, "/2k3vVOjzUJnBldr0NEEelb7Z5Q=");
_c = App;
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "/app/app.jsx",
  lineNumber: 59,
  columnNumber: 61
}, this));
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/app.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/app.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUNNOzs7Ozs7Ozs7Ozs7Ozs7OztBQWpDTixPQUFPQSxXQUFXO0FBQ2xCLE9BQU9DLGNBQWM7QUFDckIsU0FBU0MsV0FBV0MsZ0JBQWdCO0FBRXBDLFNBQVNDLE1BQU07QUFBQUMsS0FBQTtBQUNiLFFBQU0sQ0FBQ0MsU0FBU0MsVUFBVSxJQUFJSixTQUFTLFlBQVk7QUFDbkQsUUFBTSxDQUFDSyxPQUFPQyxRQUFRLElBQUlOLFNBQVMsSUFBSTtBQUV2Q0QsWUFBVSxNQUFNO0FBQ2RRLFlBQVFDLElBQUksa0JBQWtCO0FBRzlCQyxVQUFNLFlBQVksRUFDZkMsS0FBSyxDQUFDQyxRQUFRO0FBQ2JKLGNBQVFDLElBQUksb0JBQW9CRyxJQUFJQyxNQUFNO0FBQzFDLFVBQUksQ0FBQ0QsSUFBSUUsSUFBSTtBQUNYLGNBQU0sSUFBSUMsTUFBTSx1QkFBdUJILElBQUlDLE1BQU0sRUFBRTtBQUFBLE1BQ3JEO0FBQ0EsYUFBT0QsSUFBSUksS0FBSztBQUFBLElBQ2xCLENBQUMsRUFDQUwsS0FBSyxDQUFDTSxTQUFTO0FBQ2RULGNBQVFDLElBQUksa0JBQWtCUSxJQUFJO0FBQ2xDWixpQkFBV1ksS0FBS2IsT0FBTztBQUFBLElBQ3pCLENBQUMsRUFDQWMsTUFBTSxDQUFDQyxRQUFRO0FBQ2RYLGNBQVFGLE1BQU0sZ0JBQWdCYSxHQUFHO0FBQ2pDWixlQUFTWSxJQUFJZixPQUFPO0FBQ3BCQyxpQkFBVyxtQkFBbUJjLElBQUlmLE9BQU87QUFBQSxJQUMzQyxDQUFDO0FBQUEsRUFDTCxHQUFHLEVBQUU7QUFFTCxTQUNFLHVCQUFDLFNBQUksT0FBTyxFQUFFZ0IsU0FBUyxRQUFRQyxZQUFZLFFBQVEsR0FDakQ7QUFBQSwyQkFBQyxRQUFJakIscUJBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFhO0FBQUEsSUFDWkUsU0FBUyx1QkFBQyxPQUFFLE9BQU8sRUFBRWdCLE9BQU8sTUFBTSxHQUFHO0FBQUE7QUFBQSxNQUFRaEI7QUFBQUEsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEwQztBQUFBLE9BRnREO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHQTtBQUVKO0FBQUNILEdBakNRRCxLQUFHO0FBQUFxQixLQUFIckI7QUFtQ1RILFNBQVN5QixXQUFXQyxTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQyxPQUFPLHVCQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLENBQUc7QUFBRSxJQUFBSjtBQUFBSyxhQUFBTCxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwIiwiX3MiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImVycm9yIiwic2V0RXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJwYWRkaW5nIiwiZm9udEZhbWlseSIsImNvbG9yIiwiX2MiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJhcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnTG9hZGluZy4uLicpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgZGF0YS4uLicpO1xyXG4gICAgXHJcbiAgICAvLyBQRU5USU5HOiBHdW5ha2FuIC9hcGkvaGVsbG8gKHByb3h5KSBidWthbiBsb2NhbGhvc3Q6NTAwMFxyXG4gICAgZmV0Y2goJy9hcGkvaGVsbG8nKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN0YXR1czonLCByZXMuc3RhdHVzKTtcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgcmVjZWl2ZWQ6JywgZGF0YSk7XHJcbiAgICAgICAgc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZldGNoIGVycm9yOicsIGVycik7XHJcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHNldE1lc3NhZ2UoJ0ZldGNoIGZhaWxlZDogJyArIGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcsIGZvbnRGYW1pbHk6ICdBcmlhbCcgfX0+XHJcbiAgICAgIDxoMT57bWVzc2FnZX08L2gxPlxyXG4gICAgICB7ZXJyb3IgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PkVycm9yOiB7ZXJyb3J9PC9wPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkucmVuZGVyKDxBcHAgLz4pOyJdLCJmaWxlIjoiL2FwcC9hcHAuanN4In0=
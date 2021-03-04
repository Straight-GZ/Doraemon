// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "\n.main *{ box-sizing: border-box; margin: 0; padding: 0; }\n.main *::after,.main *::before { box-sizing: border-box;}\n.main{\n\t  background: #d4ecf9;\n    min-height: 50vh;\n}\n.hat {\n    position: relative;\n}\n.hat .fly {\n    opacity: 0.6;\n    width: 140px;\n    height: 4px;\n    background: #bd8d22;\n    position: absolute;\n    top: 92px;\n    left: 50%;\n    margin-left: -70px;\n}\n.hat .up {\n    border: 2px solid black;\n    width: 18px;\n    height: 9px;\n    position: absolute;\n    background: #bd8d22;\n    top: 82px;\n    left: 50%;\n    margin-left: -9px;\n    border-radius: 9px 9px 0 0;\n}\n.hat .down {\n    border: 2px solid black;\n    width: 6px;\n    height: 12px;\n    background: #bd8d22;\n    position: absolute;\n    top: 90px;\n    left: 50%;\n    margin-left: -3px;\n    z-index: -1;\n}\n.head {\n    border: 2px solid black;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    background: #35a1c9;\n    position: relative;\n    top: 100px;\n    left: 50%;\n    margin-left: -100px;\n}\n.head .face {\n    background: white;\n    width: 170px;\n    height: 170px;\n    border-radius: 50%;\n    top: 13px;\n    left: 13px;\n    position: relative;\n}\n.head .face .eyes {\n    border: 1px solid black;\n    width: 56px;\n    height: 56px;\n    position: absolute;\n    background: white;\n    border-radius: 50%;\n    z-index: 11;\n}\n.head .face .eyes.right {\n    top: 0;\n    right: 50%;\n}\n.head .face .eyes.right::before {\n    content: \"\";\n    width: 15px;\n    height: 20px;\n    border: 1px solid black;\n    position: absolute;\n    border-radius: 30px/40px;\n    right: 5px;\n    top: 50%;\n    margin-top: -10px;\n    background: black;\n}\n.head .face .eyes.right::after {\n    content: \"\";\n    width: 6px;\n    height: 8px;\n    border: 1px solid black;\n    position: absolute;\n    border-radius: 30px/40px;\n    right: 8px;\n    top: 62%;\n    margin-top: -10px;\n    background: white;\n}\n.head .face .eyes.left {\n    top: 0;\n    left: 50%;\n    position: absolute;\n    overflow: hidden;\n}\n.head .face .eyes.left::before {\n    content: \"\";\n    width: 15px;\n    height: 20px;\n    border: 1px solid black;\n    position: absolute;\n    border-radius: 30px/40px;\n    left: 5px;\n    top: 50%;\n    margin-top: -10px;\n    background: black;\n}\n@keyframes eye {\n    0% {\n        transform: translateY(0px);\n    }\n    25% {\n        transform: translateY(0px);\n    }\n    50% {\n        transform: translateY(-20px);\n    }\n    100% {\n        transform: translateY(-80px);\n    }\n}\n.head .face .eyes.left .y {\n    animation: .8s alternate-reverse eye infinite linear 2s;\n    top: -45px;\n    left: 0;\n    width: 100px;\n    height: 100px;\n    background: white;\n    /*border:1px solid red;*/\n    position: absolute;\n    z-index: 10;\n    /*border-radius:;*/\n}\n.head .face .eyes.left .y .x {\n    z-index: 5;\n    content: \"\";\n    width: 26px;\n    height: 13px;\n    position: absolute;\n    bottom: 0;\n    right: 75%;\n    margin-right: -13px;\n    border: 3px solid black;\n    border-bottom: transparent;\n    border-radius: 13px 13px 0 0;\n    background: white;\n}\n.head .face .eyes.left::after {\n    content: \"\";\n    width: 6px;\n    height: 8px;\n    border: 1px solid black;\n    position: absolute;\n    border-radius: 30px/40px;\n    left: 8px;\n    top: 62%;\n    margin-top: -10px;\n    background: white;\n}\n.head .nose {\n    border: 1px solid #b11635;\n    background: #b11635;\n    width: 38px;\n    height: 38px;\n    position: absolute;\n    border-radius: 50%;\n    right: 50%;\n    margin-right: -19px;\n    top: 46px;\n    z-index: 1;\n}\n.head .nose::after {\n    content: \"\";\n    background: white;\n    width: 12px;\n    height: 12px;\n    position: absolute;\n    border-radius: 50%;\n    top: 5px;\n    left: 8px\n}\n.face .beard {\n    border: 1px solid black;\n    width: 70px;\n    height: 2px;\n    background: black;\n    position: absolute;\n}\n.beard.leftFirst {\n    top: 50px;\n    left: -10px;\n    transform: rotateZ(25deg);\n}\n.beard.leftSec {\n    top: 73px;\n    left: -10px;\n}\n.beard.leftThird {\n    top: 89px;\n    left: -10px;\n    transform: rotateZ(-12deg);\n\n}\n.beard.rightFirst {\n    top: 50px;\n    right: -10px;\n    transform: rotateZ(-25deg);\n}\n.beard.rightSec {\n    top: 73px;\n    right: -10px;\n}\n.beard.rightThird {\n    top: 89px;\n    right: -10px;\n    transform: rotateZ(12deg);\n\n}\n.center {\n    border: 1px solid black;\n    background: black;\n    width: 2px;\n    height: 20px;\n    position: absolute;\n    left: 50%;\n    margin-left: -1px;\n    top: 80px;\n    z-index: 0;\n}\n.head .mouth {\n    /*border:1px solid red;*/\n    width: 130px;\n    height: 65px;\n    position: relative;\n    background: #b11635;\n    top: 100px;\n    left: 50%;\n    margin-left: -65px;\n    border-radius: 0 0 110px 110px;\n    overflow: hidden;\n}\n.head .mouth .tongue .left {\n    width: 60px;\n    height: 60px;\n    background: #ca2533;\n    border-radius: 50%;\n    position: absolute;\n    top: 20px;\n    left: 10px\n}\n.head .mouth .tongue .right {\n    width: 60px;\n    height: 60px;\n    background: #ca2533;\n    border-radius: 50%;\n    position: absolute;\n    top: 20px;\n    right: 10px\n}\n.body {\n    border: 3px solid black;\n    background: #35a1c9;\n    height: 160px;\n    width: 160px;\n    position: absolute;\n    left: 50%;\n    margin-left: -80px;\n    border-radius: 50%;\n    top: 230px;\n    z-index: -2;\n}\n.body .bell .up {\n    border: 1px solid black;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    background: #b11635;\n    position: relative;\n    top: -153px;\n    left: 50%;\n    margin-left: -75px;\n}\n.body .bell .down {\n    border: 1px solid red;\n    width: 30px;\n    height: 30px;\n    background: #f19629;\n    border-radius: 50%;\n    position: absolute;\n    top: 68px;\n    right: 50%;\n    margin-right: -15px;\n}\n.body .bell .down::before {\n    content: \"\";\n    width: 8px;\n    height: 8px;\n    background: black;\n    position: absolute;\n    top: 10px;\n    right: 50%;\n    margin-right: -4px;\n    border-radius: 50%;\n}\n.body .bell .down::after {\n    content: \"\";\n    border: 1px solid black;\n    background: black;\n    width: 14px;\n    height: 1px;\n    position: absolute;\n    left: 50%;\n    margin-left: -7px;\n    top: 20px;\n}\n.belly {\n    width: 110px;\n    height: 80px;\n    border-radius: 110px/80px;\n    position: relative;\n    left: 50%;\n    margin-left: -55px;\n    top: 50px;\n    background: white;\n}\n.belly .bag {\n    border: 3px solid black;\n    width: 60px;\n    height: 30px;\n    position: relative;\n    top: 33px;\n    left: 50%;\n    margin-left: -30px;\n    border-radius: 0 0 110px 110px;\n    overflow: hidden;\n\n}\n.hand {\n    border: 3px solid black;\n    border-radius: 50%;\n    width: 100px;\n    height: 60px;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    top: 225px;\n    background: #35a1c9;\n    z-index: -2;\n}\n.hand.left {\n    transform: translateX(-80px) rotateZ(50deg);\n}\n.hand.left::before {\n    border: 3px solid black;\n    content: \"\";\n    width: 55px;\n    height: 55px;\n    border-radius: 50%;\n    background: white;\n    position: absolute;\n    left: -20px;\n    top: 10px\n}\n.hand.right {\n    transform: translateX(80px) rotateZ(-50deg);\n}\n.hand.right::before {\n    border: 3px solid black;\n    content: \"\";\n    width: 55px;\n    height: 55px;\n    border-radius: 50%;\n    background: white;\n    position: absolute;\n    right: -20px;\n    top: 10px\n}\n.leg {\n    width: 60px;\n    height: 120px;\n    border: 3px solid black;\n    background: white;\n    position: absolute;\n    border-radius: 60px/120px;\n    top: 300px;\n    z-index: -3;\n}\n.leg.right {\n    left: 50%;\n    transform: translateX(-5px);\n}\n.leg.left {\n    right: 50%;\n    transform: translateX(5px);\n}\n@keyframes rotate {\n    0% {\n        transform: rotate3d(0, 1, 0, 0deg);\n    }\n\n    100% {\n        transform: rotate3d(0, 1, 0, 360deg);\n    }\n}\n@keyframes eye {\n    0% {\n        transform: translateY(0px);\n    }\n    25% {\n        transform: translateY(-10px);\n    }\n    100% {\n        transform: translateY(-15px);\n    }\n}\n@keyframes identifier {\n    0% {\n        transform: translateY(-75%);\n    }\n    25% {\n        transform: translateY(-50%);\n    }\n    100% {\n        transform: translateY(25%);\n    }\n}\n.Doraemon {\n    animation: 2s alternate-reverse identifier infinite ease-in;\n}\n.hat .fly {\n    animation-name: rotate;\n    animation-duration: .1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n}\n";
var player = {
  id: undefined,
  time: 100,
  ui: {
    demo1: document.querySelector('#test'),
    demo2: document.querySelector('#test2'),
    btnPause: document.querySelector('#pause'),
    btnPlay: document.querySelector('#play'),
    btnNormal: document.querySelector('#normal'),
    btnSlow: document.querySelector('#slow'),
    btnFast: document.querySelector('#fast')
  },
  n: 1,
  init: function init() {
    player.ui.demo1.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    player.ui.btnPause.onclick = player.pause;
    player.ui.btnPlay.onclick = player.play;
    player.ui.btnNormal.onclick = player.normal;
    player.ui.btnSlow.onclick = player.slow;
    player.ui.btnFast.onclick = player.fast;
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo1.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight;
  },
  play: function play() {
    console.log(11);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{}],"C:/Users/Crystal/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56778" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Crystal/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map
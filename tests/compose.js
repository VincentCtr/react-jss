"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_exth1czgf = function () {
  var path = "/Users/Vincent/Dev/Freelance/react-jss/src/compose.js",
      hash = "944b5636fd61c04e3c6309c6d8f3537dc0a486a1",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/Vincent/Dev/Freelance/react-jss/src/compose.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 22
        },
        end: {
          line: 11,
          column: 47
        }
      },
      "2": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 25
        }
      },
      "3": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 12,
          column: 25
        }
      },
      "4": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 57
        }
      },
      "5": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "6": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "7": {
        start: {
          line: 18,
          column: 24
        },
        end: {
          line: 18,
          column: 36
        }
      },
      "8": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 21,
          column: 7
        }
      },
      "9": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 60
        }
      },
      "10": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 15
          },
          end: {
            line: 9,
            column: 16
          }
        },
        loc: {
          start: {
            line: 9,
            column: 40
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 25
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 25
          }
        }, {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 25
          }
        }],
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }, {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }],
        line: 16
      },
      "2": {
        loc: {
          start: {
            line: 19,
            column: 6
          },
          end: {
            line: 21,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 6
          },
          end: {
            line: 21,
            column: 7
          }
        }, {
          start: {
            line: 19,
            column: 6
          },
          end: {
            line: 21,
            column: 7
          }
        }],
        line: 19
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Adds `composes` property to each top level rule
 * in order to have a composed class name for dynamic style sheets.
 *
 * @param {StyleSheet} staticSheet
 * @param {Object} styles
 * @return {Object|null}
 */
exports["default"] = function (staticSheet, styles) {
  ++cov_exth1czgf.f[0];
  ++cov_exth1czgf.s[0];

  for (var name in styles) {
    var className = (++cov_exth1czgf.s[1], staticSheet.classes[name]);
    ++cov_exth1czgf.s[2];
    if (!className) {
        ++cov_exth1czgf.b[0][0];
        ++cov_exth1czgf.s[3];
        break;
      } else {
      ++cov_exth1czgf.b[0][1];
    }++cov_exth1czgf.s[4];
    styles[name] = _extends({}, styles[name], { composes: className });
  }

  ++cov_exth1czgf.s[5];
  if (styles) {
    ++cov_exth1czgf.b[1][0];
    ++cov_exth1czgf.s[6];

    for (var _name in staticSheet.classes) {
      var _className = (++cov_exth1czgf.s[7], styles[_name]);
      ++cov_exth1czgf.s[8];
      if (!_className) {
        ++cov_exth1czgf.b[2][0];
        ++cov_exth1czgf.s[9];

        styles[_name] = { composes: staticSheet.classes[_name] };
      } else {
        ++cov_exth1czgf.b[2][1];
      }
    }
  } else {
    ++cov_exth1czgf.b[1][1];
  }

  ++cov_exth1czgf.s[10];
  return styles;
};
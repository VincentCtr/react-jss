'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_14ypqqromi = function () {
  var path = '/Users/Vincent/Dev/Freelance/react-jss/src/injectSheet.js',
      hash = '77d7118f4cbdd759ee2a5c85e962dff65ab1462f',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Vincent/Dev/Freelance/react-jss/src/injectSheet.js',
    statementMap: {
      '0': {
        start: {
          line: 16,
          column: 19
        },
        end: {
          line: 16,
          column: 26
        }
      },
      '1': {
        start: {
          line: 18,
          column: 19
        },
        end: {
          line: 18,
          column: 53
        }
      },
      '2': {
        start: {
          line: 18,
          column: 36
        },
        end: {
          line: 18,
          column: 52
        }
      },
      '3': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 30,
          column: 3
        }
      },
      '4': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 34
        }
      },
      '5': {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      '6': {
        start: {
          line: 32,
          column: 16
        },
        end: {
          line: 32,
          column: 65
        }
      },
      '7': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 67
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 18,
            column: 19
          },
          end: {
            line: 18,
            column: 20
          }
        },
        loc: {
          start: {
            line: 18,
            column: 36
          },
          end: {
            line: 18,
            column: 52
          }
        },
        line: 18
      },
      '1': {
        name: 'injectSheet',
        decl: {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 27,
            column: 35
          }
        },
        loc: {
          start: {
            line: 27,
            column: 65
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 27
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 31,
            column: 9
          },
          end: {
            line: 31,
            column: 10
          }
        },
        loc: {
          start: {
            line: 31,
            column: 42
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 31
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 18,
            column: 36
          },
          end: {
            line: 18,
            column: 52
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 18,
            column: 36
          },
          end: {
            line: 18,
            column: 44
          }
        }, {
          start: {
            line: 18,
            column: 48
          },
          end: {
            line: 18,
            column: 52
          }
        }],
        line: 18
      },
      '1': {
        loc: {
          start: {
            line: 27,
            column: 51
          },
          end: {
            line: 27,
            column: 63
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 27,
            column: 61
          },
          end: {
            line: 27,
            column: 63
          }
        }],
        line: 27
      },
      '2': {
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        }, {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        }],
        line: 28
      },
      '3': {
        loc: {
          start: {
            line: 31,
            column: 10
          },
          end: {
            line: 31,
            column: 37
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 31,
            column: 27
          },
          end: {
            line: 31,
            column: 37
          }
        }],
        line: 31
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0],
      '1': [0],
      '2': [0, 0],
      '3': [0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

exports['default'] = injectSheet;

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _createHoc = require('./createHoc');

var _createHoc2 = _interopRequireDefault(_createHoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Global index counter to preserve source order.
 * As we create the style sheet during componentWillMount lifecycle,
 * children are handled after the parents, so the order of style elements would
 * be parent->child. It is a problem though when a parent passes a className
 * which needs to override any childs styles. StyleSheet of the child has a higher
 * specificity, because of the source order.
 * So our solution is to render sheets them in the reverse order child->sheet, so
 * that parent has a higher specificity.
 *
 * @type {Number}
 */
var indexCounter = (++cov_14ypqqromi.s[0], -100000);

++cov_14ypqqromi.s[1];
var NoRenderer = function NoRenderer(_ref) {
  var children = _ref.children;
  ++cov_14ypqqromi.f[0];
  ++cov_14ypqqromi.s[2];
  return (++cov_14ypqqromi.b[0][0], children) || (++cov_14ypqqromi.b[0][1], null);
};

/**
 * HOC creator function that wrapps the user component.
 *
 * `injectSheet(styles, [options])(Component)`
 *
 * @api public
 */
function injectSheet(stylesOrSheet) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++cov_14ypqqromi.b[1][0], {});
  ++cov_14ypqqromi.f[1];
  ++cov_14ypqqromi.s[3];

  if (options.index === undefined) {
    ++cov_14ypqqromi.b[2][0];
    ++cov_14ypqqromi.s[4];

    options.index = indexCounter++;
  } else {
    ++cov_14ypqqromi.b[2][1];
  }
  ++cov_14ypqqromi.s[5];
  return function () {
    var InnerComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (++cov_14ypqqromi.b[3][0], NoRenderer);
    ++cov_14ypqqromi.f[2];

    var Jss = (++cov_14ypqqromi.s[6], (0, _createHoc2['default'])(stylesOrSheet, InnerComponent, options));
    ++cov_14ypqqromi.s[7];
    return (0, _hoistNonReactStatics2['default'])(Jss, InnerComponent, { inner: true });
  };
}
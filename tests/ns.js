'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1e1fczwlwd = function () {
  var path = '/Users/Vincent/Dev/Freelance/react-jss/src/ns.js',
      hash = 'e1909436359515e5f3ebb3732b76793189baa660',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Vincent/Dev/Freelance/react-jss/src/ns.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 4,
          column: 53
        }
      },
      '1': {
        start: {
          line: 5,
          column: 30
        },
        end: {
          line: 5,
          column: 64
        }
      },
      '2': {
        start: {
          line: 6,
          column: 24
        },
        end: {
          line: 6,
          column: 58
        }
      },
      '3': {
        start: {
          line: 7,
          column: 28
        },
        end: {
          line: 7,
          column: 62
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

/**
 * Namespaces to avoid conflicts on the context.
 */
var jss = exports.jss = (++cov_1e1fczwlwd.s[0], '64a55d578f856d258dc345b094a2a2b3');
var sheetsRegistry = exports.sheetsRegistry = (++cov_1e1fczwlwd.s[1], 'd4bd0baacbc52bbd48bbb9eb24344ecd');
var managers = exports.managers = (++cov_1e1fczwlwd.s[2], 'b768b78919504fba9de2c03545c5cd3a');
var sheetOptions = exports.sheetOptions = (++cov_1e1fczwlwd.s[3], '6fc570d6bd61383819d0f9e7407c452d');
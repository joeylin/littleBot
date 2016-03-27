'use strict';

var unirest = require('unirest'),
    Q = require('q');

var API_ASK = 'http://www.tuling123.com/openapi/api';
var API_KEY = 'b9a3397f4b9d3f4a36b399612185c015';
var RESPONSE_TYPE = {
  100000: 'text',
  200000: 'url',
  301000: 'novel',
  302000: 'news',
  304000: 'app',
  305000: 'train',
  306000: 'plane',
  307000: 'groupon',
  308000: 'coupon',
  309000: 'hotel',
  310000: 'lottery',
  311000: 'price',
  312000: 'restaurant'
}

exports.ask = function (info) {
  if (!API_KEY) {
    throw new Error('Please init with api key first');
  }
  var deferred = Q.defer();
  var query = {
    'key': API_KEY,
    'info': info
  }
  unirest.get(API_ASK)
  .query(query)
  .headers({'Accept': 'application/json'})
  .end(function (response) {
      if (response.ok) {
        var result = JSON.parse(response.body);
        result.type = RESPONSE_TYPE[result.code];
        if (result.type) {
          deferred.resolve(result);
        } else {
          deferred.reject('unknown code,' + response.body.code);
        }
      } else {
        deferred.reject(response.error);
      }
  });

  return deferred.promise;
};

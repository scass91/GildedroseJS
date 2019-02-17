var OPTIONS = (function() {

  var private = {
    "MIN_SALE_DATE" : 0,
    "MAX_QUALITY" : 50,
    "MIN_QUALITY" : 0,
    "SULFURAS_QUALITY" : 80
    };

  return {
    get: function(name) { return private[name]; }
  };

})();

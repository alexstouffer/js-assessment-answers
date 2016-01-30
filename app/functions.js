exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
      return fn.call(obj);
  },

  functionFunction : function(str) {
      var param = str + ", ";
      return function(str){
            return param + str;
      }
  },

  makeClosures : function(arr, fn) {
    return arr.filter(function(index){
      return fn(index);
    });
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};

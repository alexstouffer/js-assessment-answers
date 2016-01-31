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
    var funcs = [];
    //innerFunc will return a function where the code block will call fn parameter on each item in the array.
    for (var i = 0; i < arr.length; i++){
      var val = arr[i];
      funcs.push(function() {
        return fn(val);
      });
    }
    return funcs;
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

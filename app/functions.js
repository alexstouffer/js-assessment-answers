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
    arr.forEach(function(item){
      funcs.push(function() {
        return fn(item);
      });
    })
    return funcs;
  },

  partial : function(fn, str1, str2) {
      var x = fn.bind(null, str1);
      var y = x.bind(null, str2);
      return y;
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

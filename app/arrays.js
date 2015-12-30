exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      for(var i = 0; i < arr.length; i++){
          var result = [];
          if(arr[i] == item){
              result.push(i);
              return result;
          } else if(i == arr.length){
              return -1;
          }
      }
      
  },

  sum : function(arr) {

  },

  remove : function(arr, item) {

  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};

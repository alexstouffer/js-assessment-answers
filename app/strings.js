exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      var count = 0;
      strArr = str.split('');
      strArr.filter(function(item){
         if(item > amount){
             item.pop();
         } 
      });
      str.join('');
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
      return str.split('').reverse().join('');
  }
};

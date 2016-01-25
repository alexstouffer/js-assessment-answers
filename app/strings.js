exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
      var splitted = str.split('');
      var reversed = splitted.reverse();
      var joined = reversed.join('');
      return joined;
  }
};

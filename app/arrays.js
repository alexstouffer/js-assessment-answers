exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {
  //I made the mistake of declaring my variable inside the for loop as well as my return statement. I avoided multiple else if statements by initializing var result with a value of -1(not found).
  indexOf : function(arr, item) {
      var result = -1;
      for(var i = 0; i < arr.length; i++){
          if(arr[i] == item){
              result = i;
          }
      }
      return result;
  },
  //Wanted to take advantage of a callback function and knew I could use Array.prototype.reduce() to make a sum. Initially tried declaring the variable inside the the reduce funtion, but was not able to return a value other than undefined. Best practices are to declare variables at the top of a function.
  sum : function(arr) {
    var total = arr.reduce(function(a, b){
      return a + b;
    });
    return total;
  },
  //Like indexOf(), we want to loop through the array until we find the value we want to remove. However, we can use Array.prototype.filter() to loop through an array. We already have an item parameter given to us, but we create the value parameter in the anonymous callback function to compare against the item. We return the value in var result, because the values are being placed into a new array, and that result is returned as a whole. Filter does not mutate the original array.
  remove : function(arr, item) {
    var result = arr.filter(function(value){
      return value !== item;
    });
    return result;
  },
  //Splice will mutate the original array, and it's exactly what the next test calls for. Without subtracting from our index before proceeding through our for loop, we'll skip over the next value in the array.
  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if (arr[i] == item){
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
     arr.splice(index, 0, item);
     return arr;
  },

  count : function(arr, item) {
    var result = arr.filter(function(index){
      if(index == item){
        return index
      }
    })
    return result.length;
  },

  duplicates : function(arr) {
  //I'll sort the array
  arr.sort();
  
  //Then I create a placeholder array, and a for loop that checks two conditions. First, if the index value is equal to the previous value. Second, that the index value is not equal to the last value in the results array.
    var results = [];
    var previousValue;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == previousValue && arr[i] !== results[results.length - 1]){
        results.push(arr[i]);
      }
      previousValue = arr[i];
    }
    return results;
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++){
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    //This function wants us to return a list rather than a count of all occurances. The result array will list the index of each occurance
    var result = [];
    for(var i = 0; i < arr.length; i++){
      if (target == arr[i]){
        result.push(i);
      }
    }
    return result;
  }
};

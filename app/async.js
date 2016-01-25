exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject){
      if(value) resolve(value);
      reject("Error");
    }); 
  },

  manipulateRemoteData : function(url) {
      return new Promise(function(resolve, reject) {
        //Do XHR
        var request = new XMLHttpRequest();
        request.open('GET', url);
        
        request.onload = function() {
          //This is called even on 404
          //So check the status
          if (request.status == 200) {
            var obj = JSON.parse(request.response)
            if(obj.hasOwnProperty("people") && Array.isArray(obj.people)){
              var result = obj.people.map(function(person){
                  return person.name;
                }).sort()
              resolve(result);
            } else {
              reject(Error("An error has occurred."))
            }
            
          }
          else {
            reject(Error(request.statusText));
          }
        };
        
        //Handle Network Errors
        request.onerror = function() {
          reject(Error("Network Error"));
        };
        
        //Make the request
        request.send();
      });
    }
};

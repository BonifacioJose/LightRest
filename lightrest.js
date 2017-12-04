window.Rest = (function () {  
  function encodeQueryData(data) {
   let ret = [];
   for (let dataItem in data) {
     const key = encodeURIComponent(dataItem);
     const value = data[dataItem];
     if (value instanceof Array) {
       for (let i in value) {
         ret.push(key + '=' + encodeURIComponent(value[i]));            
       }
     } else {
       ret.push(key + '=' + encodeURIComponent(value));       
     }
   }
   return ret.join('&');
  }
  
  function mountUrl(url, urlParameters) {
    const fullUrl = url + (urlParameters ? '?' + encodeQueryData(urlParameters) : '');
    return fullUrl;
  }
  
  function mountHeaders(request, headers) {
    for (const property in headers) {
      if (headers.hasOwnProperty(property)) {
        request.setRequestHeader(property, headers[property]);
      }
    }
  }
  
  function doRequest(method, options) {
      let promise = new Promise(function(resolve, reject) {      
        let request = new XMLHttpRequest();
        options.async = (options.async === undefined) ? true : options.async;
        request.open(method, mountUrl(options.url, options.urlParameters), options.async);
        mountHeaders(request, options.headers);

        request.onload = function() {
          if (this.status >= 200 && this.status < 400) {
            resolve(JSON.parse(this.response));
          } else {
            reject(new Error(request.responseText));
          }
        }

        request.onerror = function() {
          reject(new Error(request.responseText));
        }

        request.send(options.data);
      }) 
      return promise;
  }

  const functions = {
    get: function (options) {
      return doRequest('GET', options);
    },
    
    post: function (options) {
      return doRequest('POST', options);
    },
    
    put: function (options) {
      return doRequest('PUT', options);
    },
    
    delete: function (options) {
      return doRequest('DELETE', options);
    },
  }

  return functions;
}())
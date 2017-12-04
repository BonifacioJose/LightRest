# LightRest
LightRest is a http client for JavaScript focused on be as simple and thin (1kb) as possible.

The main purpose behind LightRest is to offer the most easy and simple "plug-and-play" experience for http calls.

Features:
- No configuration or setup needed. Just plag-and-play;
- Built around XMLHttpRequest API, so has a huge browser support (TODO: browser support list);
- Async by default (but you can make sync calls, if you want to);
- Easy and straight-forward API;
- Has support for query parameters, headers and data;
- Uses Promise

Supported http methods:
- GET | Rest.get(options);
- POST | Rest.post(options);
- PUT | Rest.put(options);
- DELETE | Rest.delete(options);

TODO:
- Support for file upload;


How to use:
Download the min file (https://goo.gl/PUKjy4), place in any folder of your project and import it with the <script> tag:
        
    <script src="/lightrest.min.js"></script>
        

Calling function:

GET:

        let get = function () {
          Rest.get({
            url: "https://jsonplaceholder.typicode.com/posts",
            urlParameters: {id: [1,2,3,4,5]}
          }).then(function (result) {
            console.log(result);
          });
        }

        get();
        
POST:

      let post = function () {
        Rest.post({
          url: "https://jsonplaceholder.typicode.com/posts",
          data: {id: 2017, name: "John Doe"}
        }).then(function (result) {
          console.log(result);
        });
      }
      
      post();
      
Options object:

        {
          url: String,
          urlParameters: Object,
          headers: Object,
          data: Object,
          async: boolean
        }

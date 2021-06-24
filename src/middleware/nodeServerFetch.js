export function fetchNode(method, url){
   return fetch(url, {
      method,
      headers:{ 'Content-type' : 'application/json' }
   }).then(response => response.json())
     .then(result => result)
}
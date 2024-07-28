async function request(method, url, data) {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

    if (data) {
        options.headers = {
            'Content-Type': 'application/json',
        };

        options.body = JSON.stringify(data);
    }
}

   const response = await fetch(url, options);
   const result = await response.json();

   if (!response.ok) {
       throw result;
   }


   if (response.status === 204) {
       return response;
   }
   
   

   return result;   
}

export default request;


const get = request.bind(null, 'GET'); 
const post = request.bind(null, 'POST'); 
const put = request.bind(null, 'PUT'); 
const del = request.bind(null, 'DELETE'); 


export { get, post, put, del };
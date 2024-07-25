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

   if (!response.ok) {
       throw new Error(`Could not fetch ${url}, status: ${response.status}`);
   }

   if (response.status === 204) {
       return response;
   }

   const result = await response.json();
   return result;   
}

export default request;


const get = request.bind(null, 'GET'); 
const post = request.bind(null, 'POST'); 
const put = request.bind(null, 'PUT'); 
const del = request.bind(null, 'DELETE'); 


export { get, post, put, del };
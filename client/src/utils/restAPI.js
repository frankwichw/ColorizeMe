export function PostData(type, userData) {
    console.log(userData);
    let BaseURL = 'http://localhost:3000/api/newuser';
    //let BaseURL = 'http://localhost/socialapi/';
    
    return new Promise((resolve, reject) =>{
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => {
            // response.json()
            return response;
        })
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
        reject(error);
        });
    
    });
};
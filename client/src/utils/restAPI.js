import API from "./API";

export function PostData(type, userData) {
    // console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    var user = localStorage.getItem('userData');
    console.log(user);
    let BaseURL = 'http://localhost:3000/api/';
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
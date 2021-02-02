export function getServerResponse(username, password) {
    return new Promise((resolve, reject) => {
        fetch(serverPath, {
            method: reqMethod,
            body: JSON.stringify({
                username,
                password
            })
        }).then(response => {
            response.json().then(data => {
                resolve(data);
            });
        }).catch(err => {
            reject(err);
        });
    });
}

const serverPath = 'https://zwzt-zadanie.netlify.app/api/login';
const reqMethod = 'POST';

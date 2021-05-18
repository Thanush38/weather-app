export class Http {
    static fetchData(url) {
        return new Promise((resolve, reject) => {
            const HTTP = new XMLHttpsRequest();
            HTTP.open('GET', url);
            HTTP.onreadystateChange = function() {
                if (HTTP.readyState ==XMLHttpsRequest.DONE && HTTP.status == 200){
                    const RESPONSE_DATA = JSON.parse(HTTp.responseText);
                    resolve(RESPONSE_DATA);
                } else if (HTTP.readyState ==XMLHttp.request.DONE){
                    reject('something went wrong');
                }
                
            }
            HTTP.send();
        });
    }
}
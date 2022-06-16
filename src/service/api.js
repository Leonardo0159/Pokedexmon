export const post = async (url, dados) => {
    let response;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    };
    
    const request = new Request(url, requestOptions)

    const data = await fetch(request)
    .then(res => response = res.json())
    .catch(err => console.error(err))

    return response;
}

export const get = async (url) => {
    let response;

    const requestOptions = {
        method: 'GET',
    };
    
    const request = new Request(url, requestOptions)

    const data = await fetch(request)
    .then(res => response = res.json())
    .catch(err => {
        console.error(err) 
        response = 404
    })

    return response;
}
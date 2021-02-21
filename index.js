const fetch = require('node-fetch');
const http = require('http');

const getUser = async id => {
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let data = await res.json();
        return data;
    } catch (error) {
        throw new Error('Failed to load data from "https://jsonplaceholder.typicode.com/"');
    } 
}

const main = async () => {
    try {
        let user = await getUser(1);
        return user;
    } catch (error) {
        throw new Error('Failed to load user data.');
    }
    
}

 http.createServer(function (req, res) {
    main().then(user => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<strong>Id</strong>: ${user.id}<br><strong>Name</strong>: ${user.name}`);
        res.end();
    });
}).listen(8000);

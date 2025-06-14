import http from 'http';
import { v4 } from 'uuid';

const port = 3000;
const grades = []

const server = http.createServer((request, response) => {
    const {method, url} = request;
    let body = '';

    request.on('data', chunk => {
        body += chunk.toString();
    });
    
    request.on('end', () => {
        if (url === '/grades' && method === 'GET') {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(grades));
        } else if (url === '/grades' && method === 'POST') {
            const {student, subject, grade} = JSON.parse(body);
            const newGrade = {id: v4(), student, subject, grade};
            grades.push(newGrade);
            response.writeHead(201, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(newGrade));
        } else {
            response.writeHead(404, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({message: 'Route not Found'}));
        }
    });
    
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
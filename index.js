// username, password | Users table
// organization | Organizations table
// boards | Boards table
// issues | Issues table
import express from 'express';

const users = [{
    id: 1,
    username: 'sai',
    password: '123'
},
{
    id: 2,
    username: 'ram',
    password: '123'
}]
const organizations = [{
    id: 1,
    title: 'microsoft',
    description: 'microsoft is a technology company',
    admin : "1",
    members : [2]
}, {
    id: 2,
    title: 'google',
    description: 'google is a technology company',
    admin : "1",
    members : []
}]
const boards = [{
    id: 1,
    title:"Microsoft Board",
    organizationId: 1
}]
const issues = [{
    id: 1,
    title: 'Issue 1',
    boardId: 1
}]   


const app = express();
// app.use(express.json());



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
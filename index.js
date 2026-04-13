// username, password | Users table
// organization | Organizations table
// boards | Boards table
// issues | Issues table
const express = require('express');
let USER_ID = 1;
let ORG_ID = 1;
let BOARD_ID = 1;
let ISSUE_ID = 1;

const USERS = [{
    id: 1,
    username: 'sai',
    password: '123'
},
{
    id: 2,
    username: 'ram',
    password: '123'
}]
const ORGANIZATIONS = [{
    id: 1,
    title: 'microsoft',
    description: 'microsoft is a technology company',
    admin : "1",
    members : [2]
}, {
    id: 2,
    title: 'sai org',
    description: 'experimenting',
    admin : "2",
    members : []
}]
const BOARDS = [{
    id: 1,
    title:"Microsoft Board",
    organizationId: 1
}]
const ISSUES = [{
    id: 1,
    title: 'Issue 1',
    boardId: 1,
    state: 'IN_PROGRESS' //NEXT_UP, IN_PROGRESS, DONE, ARCHIVED 
},{
    id: 2,
    title: 'Issue 2',
    boardId: 1,
    state: 'DONE'
}]   


const app = express();
// app.use(express.json());
// create
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find(user => user.username === username);
    if (userExists) {
        return res.status(411).json({ message: 'Username already exists' });
    }
    USERS.push({
        username,
        password,
        id: USER_ID++
    });
    res.json({ message: 'User created successfully' });

});

app.post('/signin', (req, res) => {
});

app.post('/organization', (req, res) => {
});

app.post('/add-member-to-organization', (req, res) => {
});

app.post('/board', (req, res) => {
});

app.post('/issue', (req, res) => {
});

// read
// backend.trello.com/boards?organizationId=1
app.get('/boards', (req, res) => {
});

app.get('/issues', (req, res) => {
});


app.get('/members', (req, res) => {
});

// update
app.put('/issues', (req, res) => {
});

// delete
app.delete('/members', (req, res) => {



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
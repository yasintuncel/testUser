const express = require('express');

const app = express();
const port = 9000;

const users = [
    { username: 'yasin', password: '123456', name: 'Yasin TUNCEL' },
    { username: 'test', password: '123456', name: 'Normal User' },
];
app.use(express.json());
// POST route to handle login
app.post('/auth', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    const userExists = !!user;
    console.log('login request: ', req.body)
    if (!userExists) {
        res.json({ success: false, user: null });
    } else {
        const { password, ...userWithoutPassword } = user;
        res.json({ success: true, user: userWithoutPassword });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
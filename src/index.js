import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import userRepo from './utils/userRepository.js';

const app = express();

const publicPath = path.resolve('src', 'public');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('src/public'));

app.use('/', express.static(publicPath));

app.use(express.json());

app.engine('hbs', engine({ extname: 'hbs', defaultLayout: false }));

app.set('view engine', 'hbs');

app.set('views', 'src/views');

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/api/users', async (req, res) => {
    const [result] = await userRepo.getUser();
    res.send({
        data: result,
    });
});

app.post('/api/users', async (req, res) => {
    const request = req.body;

    const result = await userRepo.postUser();
    res.send({
        data: { ...request },
    });
});

app.listen(8000, () => {
    console.log('Server port 8000');
});

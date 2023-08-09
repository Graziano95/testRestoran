const express = require('express');
const mongoose = require('mongoose');

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Ошибка подключения к базе данных:'));
db.once('open', () => {
  console.log('Подключено к базе данных MongoDB');
});

// Определение схемы и модели данных
const mySchema = new mongoose.Schema({
  name: String,
  date: Date,
  time: String,
  persons: Number,
  tel: String
});

const MyModel = mongoose.model('MyModel', mySchema);

// Создание и запуск сервера Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/обработчик', (req, res) => {
  const { name, date, time, persons, tel } = req.body;

  const newData = new MyModel({
    name,
    date,
    time,
    persons,
    tel
  });

  newData.save((err, savedData) => {
    if (err) {
      console.error(err);
      res.status(500).send('Произошла ошибка при сохранении данных');
    } else {
      console.log(savedData);
      res.send('Данные успешно сохранены');
    }
  });
});

app.listen(8080, () => {
  console.log('Сервер запущен на порту 8080');
});
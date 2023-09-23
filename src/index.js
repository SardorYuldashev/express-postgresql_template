const express = require('express');
const cors = require('cors');
const config = require('./shared/config');
const handleError = require("./shared/errors/handle");
const usersRoute = require('./modules/users/_api');
const { NotFoundError } = require('./shared/errors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(usersRoute);

app.use('*', () => {
  throw new NotFoundError("Mavjud bo'lmagan yo'l");
});

app.use(handleError);

const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda run bo'ldi`);
});
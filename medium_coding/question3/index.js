const express = require('express');

const port = 8000;
const app = {express,JSON}

app.listen(port, () => {
  console.log(`:${port}`);
});
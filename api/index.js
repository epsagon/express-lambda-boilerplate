const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API up and running...' });
});

module.exports = router;

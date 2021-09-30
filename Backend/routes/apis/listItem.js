const express = require('express');
const items = require('../../models/items');

const router =express.Router();

router.get('/items', (req, res) => {
    items.find()
      .then(items => res.json(items))
      .catch(err => res.status(404).json({ noItemsfound: 'No items found' }));
  });

  module.exports = router;
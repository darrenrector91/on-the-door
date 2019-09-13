const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Define our Schema (our Document template)
var ProductSchema = new Schema({
  product_id: Number,
  quanity: Number,
  name: String,
  bring_home_date: Date,
  storage_location: String,
  expiration_date: Date,
  food_type: String,
  food_status: String,
  bring_home_status: String
});
// Define our Model
// mongoose.model( name of the collection, schema definition)
let Product = mongoose.model('Product', ProductSchema);

// PUT route
router.put('/:id', (req, res) => {
  let productId = req.params.id;
  let productToUpdate = req.body;
  // update in collection
  Product.findByIdAndUpdate(
    { _id: productId },
    { $set: productToUpdate },
    (error, updatedDocument) => {
      if (error) {
        console.log('error on remove: ', error);
        res.sendStatus(500);
      } else {
        console.log('Document before it was updated!: ', updatedDocument);
        res.sendStatus(200);
      }
    }
  );
});

module.exports = router;

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  categoryId: {    // camelCase recommended
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  restaurantId: {  // camelCase recommended
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  toping: [{
    type: Schema.Types.ObjectId,
    ref: 'Topping'
  }]
}, {
  timestamps: true
});

const Item = model('Item', ItemSchema);
export default Item;

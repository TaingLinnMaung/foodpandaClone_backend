import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ToppingSchema = new Schema({
  topping_id: {
    type: Schema.Types.ObjectId,
    ref: 'Topping',
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    min: 1,
  }
}, { _id: false });

const ItemSchema = new Schema({
  item_id: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    min: 1,
  },
  remark: {
    type: String,
    trim: true,
  },
  topping: [ToppingSchema]
}, { _id: false });

const CartSchema = new Schema({
  items: {
    type: [ItemSchema],
    default: []
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'], // example statuses
    default: 'pending',
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
  timestamps: true
});

const Cart = model('Cart', CartSchema);
export default Cart;

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ToppingSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  }
}, {
  timestamps: true
});

const Topping = model('Topping', ToppingSchema);
export default Topping;

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  logo: {
    type: String,  // URL or path to the logo image
    trim: true,
  },
  logoPublic_id:{
    type:String,
    trim:true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  address: {
    type: String,
    trim: true,
  }
}, {
  timestamps: true
});

const Restaurant = model('Restaurant', RestaurantSchema);
export default Restaurant;


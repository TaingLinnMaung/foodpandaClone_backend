import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  restaurant_id: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  }
}, {
  timestamps: true
});

const Category = model('Category', CategorySchema);
export default Category;

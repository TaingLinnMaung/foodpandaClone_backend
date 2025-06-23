import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
      type: String,
      trim: true,
    },
}, {
  timestamps: true
});

const Category = model('Category', CategorySchema);
export default Category;

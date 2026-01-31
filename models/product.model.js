import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String, // cloudinary url
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    default: 0,
  },
  tags: [{
    type: String,
  }],
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export const Product = model('Product', productSchema);
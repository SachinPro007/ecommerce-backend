import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'seller'],
    default: 'user',
  },
  avatar: {
    type: String, // cloudinary url
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  favouriteProducts: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
  }],

  cartProducts: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      default: 1,
    },
  }],

  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order',
  }],
});

export const User = model('User', userSchema);
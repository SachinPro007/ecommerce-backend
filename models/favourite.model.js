import {Schema, model} from 'mongoose';


const favouriteSchema = new Schema({
  itemId: {type: Schema.Types.ObjectId, ref: 'Item', required: true},
});



export const Favourite = model('Favourite', favouriteSchema);
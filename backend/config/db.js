import mongoose from 'mongoose';


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://krisaTomato:krisaTomato123@cluster0.rvxj04q.mongodb.net/food-del').then(()=>console.log('DB Connected'));
};
const users = require('./data/users');
const User = require('./models/userModel');
const connectDB = require('./config/db');
connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await User.insertMany(users);
        // creat seeder for product
        // await User.insertMany(users);
        console.log('Data imported success !');
    } catch (error) {
        console.log('Data imported failed !');
    }
}
importData();
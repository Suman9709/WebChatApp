const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const userRoutes = require('./Routes/userRoutes')
const cors = require('cors')
const chatRoutes = require('./Routes/chatRoutes')
const messageRoutes = require('./Routes/messageRoutes')
const { notFound, errorHandler } = require("./middleware/errorMiddleware");



const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000
app.use(
    cors({
      origin: "*",
    })
  );
dotenv.config();
app.use(express.json());

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("server got disconnected: ", error.message);

    }

}
connectDb();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/user', userRoutes)
app.use('/chat', chatRoutes)
app.use('/message', messageRoutes)

app.use(notFound);
app.use(errorHandler);




app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
})

import mongoose, {Connection} from "mongoose";

const connectionString: string = 'mongodb://127.0.0.1/my_database';

mongoose.connect(connectionString, ()=>{
  console.log("Database Connected")
})

const db: Connection = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Connection Error'))
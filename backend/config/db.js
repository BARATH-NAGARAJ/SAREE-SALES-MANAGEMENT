/*import mongoose from "mongoose";

const connectDB = async ()=>{
    (await mongoose.connect('mongodb://anusria304:user123@ac-0rrv54a-shard-00-00.nbpsoyw.mongodb.net:27017,ac-0rrv54a-shard-00-01.nbpsoyw.mongodb.net:27017,ac-0rrv54a-shard-00-02.nbpsoyw.mongodb.net:27017/anusria304?ssl=true&replicaSet=atlas-12zcu3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')).then(()=>console.log("DB Connected"))

}

export { connectDB };
*/
import mongoose from "mongoose";
import 'dotenv/config.js';

const connectDB = async () => {
    await mongoose.connect('mongodb://anusria304:user123@ac-0rrv54a-shard-00-00.nbpsoyw.mongodb.net:27017,ac-0rrv54a-shard-00-01.nbpsoyw.mongodb.net:27017,ac-0rrv54a-shard-00-02.nbpsoyw.mongodb.net:27017/anusria304?ssl=true&replicaSet=atlas-12zcu3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("DB Connected"))
    .catch((err) => console.error("DB Connection Error:", err));
};

export { connectDB };

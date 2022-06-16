import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";


const userAPI = async (req, res) => {
  const { db } = await connectToDatabase(); 
  if (req.method === 'GET') {
    try {
      const users = await db
      .collection("employee")
      .find({})
      .toArray();

      res.json(users);
      
    } catch (error) {
      console.log(error)
    }
    
  }
}

export default userAPI;
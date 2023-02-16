import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  //connect to database
  const client = await MongoClient.connect(
    "mongodb+srv://Sirojiddin:2YuYVEEjyo0TT0ux@cluster0.qnzyw6o.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}

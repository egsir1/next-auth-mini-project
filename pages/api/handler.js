// import { MongoClient } from "mongodb";
// import { hash } from "bcrypt";
// import Hash from "@/components/Lib/hash";

// export async function Connection() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://Sam:KRU0MxQWOhnt6Wcz@my-blog.nzaxqc0.mongodb.net/?retryWrites=true&w=majority"
//   );
//   return client;
// }

// async function SignUp(req, res) {
//   if (req.method === "POST") {
//     const { email, password } = req.body;
//     console.log(email, password);

//     if (
//       !email ||
//       !email.includes("@") ||
//       !password ||
//       password.trim().length < 7
//     ) {
//       return res.status(422).json({ message: "Invalid user Input!" });
//     }

//     const clients = await Connection();
//     const dbb = clients.db();
//     const user = await dbb.collection("users").findOne({ email: email });
//     if (user) {
//       res.status(422).json("bizda error boz");
//     }

//     const hashedPassword = await Hash(password);

//     const client = await Connection();
//     const db = client.db();
//     const result = await db
//       .collection("users")
//       .insertOne({ email: email, password: hashedPassword });

//     console.log(result);
//     res.status(201).json("hi");
//     client.close();
//   }
// }

// export default SignUp;

// import { isValidate } from "@/components/Lib/hash";
// import { MongoClient } from "mongodb";
// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
// import { Connection } from "./handler";

// export default NextAuth({
//   session: {
//     jwt: true,
//   },
//   providers: [
//     Providers.Credentials({
//       async authorize(credentials) {
//         const client = await Connection();
//         const db = client.db();
//         const user = await db
//           .collection("users")
//           .findOne({ email: credentials.email });

//         if (!user) {
//           throw new Error("eroor no user");
//         }
//         const isValid = await isValidate(credentials.password, user.password);
//         if (!isValid) {
//           throw new Error("eroor no password");
//         }
//       },
//     }),
//   ],
// });

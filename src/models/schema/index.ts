// import mongoose from 'mongoose'

// const { Schema } = mongoose

// const blogSchema = new Schema({
//     title: String, // String is shorthand for {type: String}
//     author: String,
//     body: String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//         votes: Number,
//         favs: Number,
//     },
// })

// const Users = new Schema ({
//     id       : String,
//     email    : String,
//     name     : String,
//     password : String,
//     authToken: String,
//     type      : {type: String},
//     createdAt :{ type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now }
// }){

//   }

//   model TechStack {
//     name      String   @id @map("_id") @db.ObjectId
//     docs      String?
//     exp       Int?
//     createdAt DateTime @default(now())
//     updatedAt DateTime @default(now()) @updatedAt

//     @@map("techstack")
//   }

//   model Projects {
//     id            Int      @id @map("_id")
//     title         String
//     description   String?
//     techStackUsed String?
//     tenure        String?
//     createdAt     DateTime @default(now())
//     updatedAt     DateTime @default(now()) @updatedAt

//     @@map("projects")
//   }

//   model TechStackInProjects {
//     techstack String   @id @map("_id")
//     projectId Int
//     createdAt DateTime @default(now())
//     updatedAt DateTime @default(now()) @updatedAt

//     @@index([projectId, techstack])
//     @@map("techstackinprojects")
//   }

//   model Blogs {
//     id        Int      @id @map("_id")
//     title     String
//     subtitle  String?
//     content   String?
//     images    String[]
//     createdAt DateTime @default(now())
//     updatedAt DateTime @default(now()) @updatedAt

//     @@map("blogs")
//   }

//   model Experience {
//     id        Int      @id @map("_id")
//     title     String
//     subtitle  String?
//     desc      String?
//     createdAt DateTime @default(now())
//     updatedAt DateTime @default(now()) @updatedAt
//   }

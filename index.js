import express from "express";
import bodyParser from "body-parser";
// import router from "./routes/post";
import postsRouter from "./routes/posts.js";

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/posts", postsRouter);

//Write your code here//

// //CHALLENGE 1: GET All posts
// app.get("/posts", (req, res) => {
//   res.json(posts);
// });

// //CHALLENGE 2: GET a specific post by id
// app.get("/posts/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const post = posts.find((post) => post.id === postId);
//   if (post) res.json(post);
//   res.status(404).json({ error: 404, message: "Post not found" });
// });

// //CHALLENGE 3: POST a new post
// app.post("/posts", (req, res) => {
//   const newPost = {
//     id: lastId + 1,
//     title: req.body.title,
//     content: req.body.content,
//     author: req.body.author,
//     date: new Date().toISOString(),
//   };
//   lastId++;
//   posts.push(newPost);
//   res.status(201).json(newPost);
// });

// //CHALLENGE 4: PATCH a post when you just want to update one parameter
// app.patch("/posts/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const post = posts.find((p) => p.id === postId);
//   if (!post) return res.status(404).json({ message: "Post not found" });

//   if (req.body.title) post.title = req.body.title;
//   if (req.body.content) post.content = req.body.content;
//   if (req.body.author) post.author = req.body.author;

//   res.json(post);
// });

// //CHALLENGE 5: DELETE a specific post by providing the post id.
// app.delete("/posts/:id", (req, res) => {
//   const postId = req.params.id;
//   const postIndex = posts.findIndex((post) => post.id == postId);
//   posts.splice(postIndex, 1);
// });

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});

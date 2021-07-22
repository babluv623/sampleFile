// import React, { useState,useEffect } from "react";
// import axios from "axios";

// const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
// const userUrl = "https://jsonplaceholder.typicode.com/users";
// const url = "https://jsonplaceholder.typicode.com/posts";

// const Post =()=> {
//     const [userPost, setUserPost] = useState([]);
//     const [comments, setComments] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [posts, setPosts] = useState([]);
//     const [userId, setUserId] = useState("");
//     const [title, setTitle] = useState("");
//     const [body, setBody] = useState("");
//     const [id, setId] = useState("");
//     const [postId, setPostId] = useState("");

//   //get users'posts

//   const getUsers = async () => {
//     const { data } = await axios.get(userUrl);
//       setUsers(data);
//     console.log(data);
//   };

//  const getComments = async () => {
//     const { data } = await axios.get(commentsUrl);
//      setComments(data);
//     console.log(data);
//   };

//   //    get data
//   useEffect(()=> {
//     getPosts();
//     getUsers();
//     getComments();
//   },[posts,comments,users])
//   const getPosts = async () => {
//     const { data } = await axios.get(url);
//       setPosts(data);
//     console.log(data);
//   };

//   // post data
//   const createPost = async () => {
//     const { data } = await axios.post(url, {
//       userId: userId ,
//       body: body,
//       title: title,
//     });
//     const posts = [...posts, data];

//     setPosts( posts );
//       setUserId("");
//       setBody("");
//       setTitle("");
//   };

//   // update data
//   const updatePost = async () => {
//     const { data } = await axios.put(`${url}/${id}`, {
//       userId: userId,
//       body: body,
//       title:title,
//     });
//     const posts = [...posts];
//     const postIndex = posts.findIndex((post) => post.id ===id);
//     console.log(postIndex);
//     posts[postIndex] = data;
//     setPosts(posts);
//      setUserId("");
//       setBody("");
//       setTitle("");
//       setId("");
//   };

//   // delete data4

//   const deletePost = async (postId) => {
//     await axios.delete(`${url}/${postId}`);
//     let posts = [...posts];
//     posts = posts.filter((post) => post.id !== postId);
//     setPosts({posts});
//   };

//   const handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.id) {
//       this.updatePost();
//     } else {
//       this.createPost();
//     }

//     // this.setState({ userId: "", title: "", body: "", id: "" });
//     console.log(this.state);
//   };
//   const selectPost = (post) => {
//     this.setState({ ...post });
//     console.log(post);
//   };
//  const handleSelect = ({ target: { value } }) => {
//     const getUserPost = async () => {
//       const { data } = await axios.get(`${url}?userId=${value}`);
//       this.setState({ userPost: data });
//       console.log(data);
//     };
//     getUserPost();
//   };
//   const getComments = async () => {
//     const { data } = await axios.get(
//       `${commentsUrl}?postId=${this.state.postId}`
//     );
//     this.setState({ comments: data });
//     console.log(data);
//   };

//     return (
//       <>
//         <div className="post-item">
//           <form onSubmit={this.handleSubmit}>
//             <div>
//               <h1>Selected User's All Posts</h1>
//               <br />
//               <label htmlFor="">User :</label>
//               <select onChange={this.handleSelect}>
//                 <option value="">select an user</option>
//                 {this.state.users.map((user) => {
//                   return (
//                     <option key={user.id} value={user.id}>
//                       {user.name}
//                     </option>
//                   );
//                 })}
//               </select>
//               <br />
//               <br />
//               <table>
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Title</th>
//                     <th>Body</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.userPost.map((post) => {
//                     return (
//                       <tr key={post.id}>
//                         <td>{post.id}</td>
//                         <td>{post.title}</td>
//                         <td>{post.body}</td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//             <br />
//             <h1>Comments section</h1>
//             <br />
//             <label htmlFor="">Post Id: </label>
//             <input
//               type="text"
//               name="postId"
//               value={this.state.postId}
//               onChange={this.handleChange}
//             />

//             <button onClick={this.getComments}>Get comments</button>
//             <br />
//             <br />

//             <table>
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>PostId</th>
//                   <th>Body</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.comments.map((comment) => {
//                   return (
//                     <tr key={comment.id}>
//                       <td>{comment.id}</td>
//                       <td>{comment.postId}</td>
//                       <td>{comment.body}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>

//             <br />
//             <h1>Blog Posts</h1>
//             <br />
//             {this.state.id && (
//               <div>
//                 <label htmlFor="">Post Id: </label>
//                 <input type="text" name="id" value={this.state.id} disabled />
//               </div>
//             )}

//             <br />
//             <div>
//               <label htmlFor="">User Id: </label>
//               <input
//                 type="text"
//                 name="userId"
//                 value={this.state.userId}
//                 onChange={this.handleChange}
//               />
//             </div>
//             <br />

//             <div>
//               <label htmlFor="">Title: </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={this.state.title}
//                 onChange={this.handleChange}
//               />
//             </div>

//             <br />
//             <div>
//               <label htmlFor="">Body: </label>
//               <input
//                 type="text"
//                 name="body"
//                 value={this.state.body}
//                 onChange={this.handleChange}
//               />
//             </div>
//             <br />
//             <button type="submit">
//               {this.state.id ? "Update " : "Add "}Post
//             </button>
//           </form>
//           <br />
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Body</th>
//                 <th colSpan="2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.posts.map((post) => {
//                 return (
//                   <tr key={post.id}>
//                     <td>{post.id}</td>
//                     <td>{post.title}</td>
//                     <td>{post.body}</td>
//                     <td>
//                       <button
//                         className="btn-primary"
//                         onClick={() => this.selectPost(post)}
//                       >
//                         Edit
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         className="btn-danger"
//                         onClick={() => this.deletePost(post.id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </>
//     );
//   }
// }

// export default Post;

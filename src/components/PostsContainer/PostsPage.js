//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data';

// pass the data from App.js down as props then map through the data
const PostsPage = () => {
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
  {dummyData.map((data,index) => <Post post={data} key={index} />)}
    </div>
  );
};

export default PostsPage;


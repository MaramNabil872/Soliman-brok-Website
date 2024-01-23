import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Content from "../components/Blog/Content.json";
const ContentPage = () => {
 
     
        const params = useParams();
        const itemID = params.id;
        const category = params.category;
        console.log(category);
        const [item, setItem] = useState({
          title: "",
          image: "",
          id: "",
          readMore: "",
        });
      
        useEffect(() => {
          console.log(item);
          switch (category) {
            case "0":
              const post = Content.find((post) => post.id === itemID);
      
              if (typeof post === "object") {
                setItem(post);
              }
              break;
            case "1":
              const post1=Content.find((post1) => post1.id === itemID);
              if (typeof post1 === "object") {
                setItem(post1);
              }
              break;
            case "2":
              const post2 = Content.find((post2) => post2.id === itemID);
              if (typeof post2 === "object") {
                setItem(post2);
              }
              break;
            case "3":
              const post3 =Content.find((post3) => post3.id === itemID);
              if (typeof post3 === "object") {
                setItem(post3);
              }
              break;
          }
        }, [item]);
  return (
    <div> <div>
    <Navbar />
    <div className="container-post ">
      <div className="post-image ">
        <img className="image-border rounded" src={item.image} />
      </div>
      <div className="post-text">
        <div className="post-title">{item.title}</div>
        <div className="post-description">{item.readMore}</div>
      </div>
    </div>
    <Footer />
  </div></div>
  )
}

export default ContentPage
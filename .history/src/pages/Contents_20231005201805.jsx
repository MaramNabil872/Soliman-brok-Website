import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Content = () => {
    type Content = {
        title: string;
        image: string;
        id: string;
        description: string;
      };
      const Content = () => {
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
              const post1 = Content.find((post1) => post1.id === itemID);
              if (typeof post1 === "object") {
                setItem(post1);
              }
              break;
            case "2":
              const post2 =Content.find((post2) => post2.id === itemID);
              if (typeof post2 === "object") {
                setItem(post2);
              }
              break;
            case "3":
              const post3 = Content.find((post3) => post3.id === itemID);
              if (typeof post3 === "object") {
                setItem(post3);
              }
              break;
          }
        }, [item]);
  return (
    <div>Content</div>
  )
}

export default Content
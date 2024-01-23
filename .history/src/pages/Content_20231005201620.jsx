import React from 'react'

const Content = () => {
    type Post = {
        title: string;
        image: string;
        id: string;
        description: string;
      };
      const Post = () => {
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
              const post: any = Posts.basement.find((post) => post.id === itemID);
      
              if (typeof post === "object") {
                setItem(post);
              }
              break;
            case "1":
              const post1 = Posts.fence.find((post1) => post1.id === itemID);
              if (typeof post1 === "object") {
                setItem(post1);
              }
              break;
            case "2":
              const post2 = Posts.deck.find((post2) => post2.id === itemID);
              if (typeof post2 === "object") {
                setItem(post2);
              }
              break;
            case "3":
              const post3 = Posts.other.find((post3) => post3.id === itemID);
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
import { useState , useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  //const [name,setName]= useState('Mario');
  const [isPending,setIsPending]=useState(true);

  useEffect(()=> {
     fetch(' http://localhost:8000/blogs')
     .then(res=>{
         return res.json();
     })
     .then(data =>{
        setBlogs(data);
        setIsPending(false);
     });
  },[]);

  return (
    <div className="home">
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/*right happens only when left is available*/}
    </div>
  );
}
 
export default Home;
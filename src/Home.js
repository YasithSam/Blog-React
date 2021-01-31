<<<<<<< HEAD
=======
import { useEffect, useState } from "react";
>>>>>>> 452ccf8d744692629f6245bb651a5587b8fddfa1
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
<<<<<<< HEAD
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
=======
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, [])
>>>>>>> 452ccf8d744692629f6245bb651a5587b8fddfa1

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
<<<<<<< HEAD
      { blogs && <BlogList blogs={blogs} /> }
=======
      { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
      {/* Right happens only if left is true*/}
>>>>>>> 452ccf8d744692629f6245bb651a5587b8fddfa1
    </div>
  );
}
 
export default Home;
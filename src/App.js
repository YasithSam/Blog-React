import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  const title="Hello welcome to my blog!";
  const likes=50;
  const link="www.google.lk";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <h1>{title}</h1>
        <p>Likes {likes}</p>
        <p>{10}</p>
        <p>{[1,2,3,4,5]}</p> */}
        {/*<p>{Math.random()}</p>*/}
        {/*<a href={link}>Google</a>*/}
      </div>
    </div>
  );
}

export default App;

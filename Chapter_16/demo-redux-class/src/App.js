import logo from './logo.svg';
import './App.css';
import PostList from "./components/PostList";
import PostListHook from "./components/PostListHook";

function App() {
  return (
    <div className="App">
      {/*<PostList />*/}
       <PostListHook />
    </div>
  );
}

export default App;

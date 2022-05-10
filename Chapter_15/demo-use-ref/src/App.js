import './App.css';
import UseRefBasics from "./components/1-useRef-basics";
import UseRefNoReRender from "./components/2-useRef-no-rerender";
import UseRefForwardRef from "./components/3-useRef-forwardRef";

function App() {
  return (
    <div className="App">
      {/*<UseRefBasics />*/}
      {/*  <UseRefNoReRender />*/}
      <UseRefForwardRef />
    </div>
  );
}

export default App;

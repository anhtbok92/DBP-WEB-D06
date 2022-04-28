import logo from './logo.svg';
import './App.css';
import ConditionRendering from "./components/condition-rendering";
import FormReact from "./components/form-react";
import FormikReact from "./components/formik-react";

function App() {
  return (
    <div className="App">
      {/*<ConditionRendering />*/}
      {/*  <FormReact />*/}
        <FormikReact />
    </div>
  );
}

export default App;

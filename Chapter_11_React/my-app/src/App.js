import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React in web fullstack
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by Nguyen Tuan Anh
        </a>
        <ClassComponent name={'Nguyen Tuan Anh'} age={30} />
        <FunctionalComponent
            name={'Phan Van Thin'}
            age={24}
            university={'Dai hoc bach khoa'}
            family={['Thanh vien 1', 'Thanh vien 2', 'Thanh vien 3']}
        />
      </header>
    </div>
  );
}

export default App;

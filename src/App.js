import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App"> 
      <Greet name="Kunal" heroname="Batman"> 
        <p>This is childrem props</p>
      </Greet>
      <Greet name="Sanket" heroname="X-man"> 
        <button>Submit</button>
      </Greet>
      <Greet name="Nikhil" heroname="Shaktiman" />

      <Welcome name="Priyanka" degree="MCA" />
      <Welcome name="Sayali" degree="MBA" />
      <Welcome name="Mohini" degree="BBA" />
    </div>
  );
}

export default App;

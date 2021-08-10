import Fragments from './advComponent/Fragments';
import LifeCycleA from './advComponent/LifeCycleA';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import ParentCompo from './components/ParentCompo';
// import UserGreeting from './components/UserGreeting'; 
// import PersonList from './components/PersonList';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
import BasicForm from './components/BasicForm';

function App() {
  return (
    <div className="App">

      <LifeCycleA />

      {/* React Fragement */}
      <Fragments />

      {/* Form handling */}
      <BasicForm />

      {/* External Styling */}
      {/* <Stylesheet primary={true} /> */}

      {/* Inline Styling */}
      {/* <Inline /> */}
{/* 
      <Greet name="Kunal" heroname="Batman"> 
        <p>This is childrem props</p>
      </Greet>
      <Greet name="Sanket" heroname="X-man"> 
        <button>Submit</button>
      </Greet>
      <Greet name="Nikhil" heroname="Shaktiman" />

      <Welcome name="Priyanka" degree="MCA" />
      <Welcome name="Sayali" degree="MBA" />
      <Welcome name="Mohini" degree="BBA" />     */}

      {/* Event binding */}
      {/* <Message /> */}

      {/* Component communication */}
      {/* <ParentCompo /> */}

      {/* Conditional rendering */}
      {/* <UserGreeting /> */}

      {/* List Remdering */}
      {/* <PersonList /> */}
    </div>
  );
}

export default App;

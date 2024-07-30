import logo from './logo.svg';
import './App.css';

 
function App({name, id, email}) {
  return (
   <h1>Welcome {name} to react, your id is { id}, your email is { email} </h1>
  );
}

export default App;

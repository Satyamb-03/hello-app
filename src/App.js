import logo from './logo.svg';
import './App.css';
import Title from './Title';
import User from './User';
 


let Product={
  Price: '35',
  Brand: 'Osprey'}

  let location={
    City: 'Auckland',
    Suburb: 'CBD'
  }

 // function Greet(props){
   // return(<h2>Welcome {props.name}</h2>);
  //}
 
  function Warning(){
    return (<h3>Beware of the malwares from the spam mail.</h3>)
  }

//function Device(props){
  //return (<h3>Your device is made by {props.name} in the year {props.year}</h3>)
//} 

const user1={
  id:100,
  firstname: 'Satym',
  lastName: 'Bhatt'
}
function App() {
  return (
  // <h1>Welcome {name} to react, your id is { id}, your email is { email} The product is from the brand {Product.Brand} for  ${Product.Price}.
   // It can be picked up from {location.Suburb} in {location.City} </h1>

    <div>
      <Title/>

      <User user={user1}/>
 
 

      <Warning/>
      
      
    </div>
   
  );
  
}

export default App;

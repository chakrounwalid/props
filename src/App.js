
import './App.css';
import Profile from './profile/Profile';
import img from './123.jpg';




function App() {
  const handleName=(A)=>{
    return alert(`hello,${A}`)
  }
  const person={
    fullName: "Walid Chakroun",
    bio: "“I believe in Farming…  I believe in Coding…  I believe I can do it.”",
    profession: "Farmer",
    
  }
  

  return (
    <div className="App">
      
      <Profile person={person} handleName={handleName}>
        <img src={img} style={{width:"250px", borderRadius:"10%",boxShadow:"10px 10px 5px lightgrey"}} alt="image"/>
      </Profile>
      
    </div>
  );
  
}

export default App;

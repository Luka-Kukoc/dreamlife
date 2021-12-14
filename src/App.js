import './App.css';
import Homepage from './pages/Home';
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./components/LoginButton"

function App() {
  
  const { user, isAuthenticated, isLoading } = useAuth0()
  
  if(isLoading){
    return(
      <div><h1>Loading content...</h1></div>
    )
  }
  if(!isAuthenticated){
    return(
      <div>
        <h1>Please Login</h1>
        <LoginButton/>
      </div>
    )
  }


  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;

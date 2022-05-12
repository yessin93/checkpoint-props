import logo from './logo.svg';
import './App.css';
import Myprofile from './Profile/Myprofile';

function App() {
  let fullName="mohamed yessin bouchaala"
  let bio="I'm a web developer and digital marketer"
  let profession="accountant"
  const handleName = (fullName) => {alert(`the user is ${fullName}`)}
  return (
    <div className="App">
    <Myprofile fn={fullName} b={bio} pro={profession} hand={handleName}> 
     <img src='https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2021-10/RS6715_492969113-hig.jpg?itok=W4AjyK_X' alt='funny' img/>
    </Myprofile  >
    </div>
  );
}

export default App;

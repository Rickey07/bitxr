import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RoutesContainer from './Screens/RoutesContainer';
import {Container} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Header/>
      <Container style={{height:"500px"}} className="d-flex align-items-center justify-content-center">
      <RoutesContainer/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;

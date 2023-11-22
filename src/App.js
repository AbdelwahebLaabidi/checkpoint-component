import './App.css';
import Description from './components/Description';
import Price from './components/Price';
import Image from './components/Image';
import Name from './components/Name';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbars from './components/Navbar';


function App() {
  var hi = "Abdelwaheb"
  return (
<div>
  <Navbars/>
  <div className='cards'> 
    <Card style={{ width: '18rem' }}>
      {hi !== '' && <Image/> }
      {/* <Imaeg/> */}
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text><Description/></Card.Text>
        <Card.Text> <Price/> </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <h2>  {hi === "" ? "Hello There !" : `Hello ${hi}`  } </h2>
    
  </div>

</div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Data from './data';
import { Navbar,Nav,NavDropdown,Jumbotron,Button } from 'react-bootstrap';

function Card(props){
  return(
    <div className="col-md-4">
      <img src={`https://jurin2.github.io/shop/images/shoes0${
        props.idx<10 ? "0" + props.idx : props.idx
      }.jpg`}/>  
      <h2>{props.신발.title}</h2>
      <p>{props.신발.content}</p>
    </div>
  );
}

function App() {
  let [shoes,setShoes] = useState(Data);
  return (
    <div className="App">
      {/* Navbars */}
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

      {/* Jumbotron */}
      <Jumbotron className='background'>
        <h1>신발 가게</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">더보기</Button>
        </p>
      </Jumbotron>

      <div className="container">
        <div className="row">
          {
            /* 반복문 */
            shoes.map((item,idx,arr)=>{
              return <Card key={item.id} 신발={item} idx={idx}/>
            })    
   
          }
          <button>3개 더보기</button>
        </div>
      </div>
    </div>
  );
}

export default App;

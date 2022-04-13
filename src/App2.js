import {useState} from 'react';
import './App.css';
import Data from './data';
import {Jumbotron, Navbar,Nav,Button} from 'react-bootstrap';
import {Switch,Route,Link} from 'react-router-dom';

function App() {
  let [shoes,shoseChange]=useState(Data);
  let [viewCnt,viewCntChange] = useState(3);
  return (
    <div className="App">
        <Route exact path="/">
            <h1>시작페이지</h1>
        </Route>
        <Route path="/Detail">
            <h1>상세페이지</h1>
        </Route>
    </div>
  );
}

export default App;

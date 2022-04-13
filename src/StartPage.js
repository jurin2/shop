import Card from './Card';
import {Jumbotron,Button} from 'react-bootstrap';

function StartPage(props){
    return (
      <div>
        <Jumbotron className="background">
          <h1>명품신발 사세요!</h1>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis quasi ea nemo, rerum magnam doloremque eveniet, minus iste soluta animi quisquam quidem! Temporibus maiores doloribus voluptatum nisi cumque reprehenderit?
          </p>
          <p>
            <Button variant="primary">더보기</Button>
          </p>
        </Jumbotron>
  
        <div className="container">
          <div className="row">
            {
              props.shoes.map((item,idx,arr)=>{
                if(idx>=props.viewCnt){
                  return false;
                }else{
                  return <Card 신발={item} index={idx} key={item.id}/>   
                }
              })                   
            }
            <Button variant="btn btn-primary" onClick={
              ()=>{props.viewCntChange(props.viewCnt+3)}
            }>3개 더보기</Button>
          </div>        
        </div>
      </div>
    );
}
export default StartPage;

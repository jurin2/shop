import Card from './Card.js';
import {Link} from 'react-router-dom';

function Detail(props){
    return (
      <div className="container">
        <h2 style={ {textAlign:'center', fontSize:'45px', margin:'50px 0'} }>상품목록</h2>
        <div className="row">  
          {
            props.shoes.map((item,idx,arr)=>{                  
              return(
                <Link to={`/Detail/${item.id}`}>
                  <Card 신발={item} index={idx} key={item.id}/> 
                </Link>   
              );                  
            })                   
          }              
        </div>        
      </div>
    );    
}
export default Detail;
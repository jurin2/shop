import {useParams} from 'react-router-dom';

function DetailPage(props){
    let {id} = useParams();
    return(
        <div className="col-md-4">
          <img src={`https://jurin2.github.io/shop/src/images/shoes0${
            id<10 ? "0" + id : id
          }.jpg`}/>  
          <h2>제품명 : {props.shoes[id].title}</h2>
          <p>제품설명 : {props.shoes[id].content}</p>
          <p>판매가격 : {props.shoes[id].가격}원</p>
        </div>
    );
}

export default DetailPage;
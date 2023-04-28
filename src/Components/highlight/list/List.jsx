import React from "react";
import Video from './../video/Video';
import Article from './../article/Article';
import Popular from "../popular/Popular";
import New from "../new/New";
import Wrapper from "../wrapper/Wrapper";


 function List(props) {
    return props.list.map(item =>                    
                 (item.type==='video') ? 
                    (item.views>1000 ? <Popular><Video {...item} /></Popular>: <New><Video {...item} /></New>)
                  : (item.views>1000 ? <Popular><Article {...item} /></Popular>: (item.views<100 ? (<New><Article {...item} /></New>):<Wrapper><Article {...item} /></Wrapper>))
                );}

export default List;
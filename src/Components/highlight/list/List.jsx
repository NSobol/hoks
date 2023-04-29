import React from "react";
import Video from './../video/Video';
import Article from './../article/Article';
import Popular from "../popular/Popular";
import New from "../new/New";
import Wrapper from "../wrapper/Wrapper";


function List(props) {
	const WrappedVideo = Wrapper(Video);
	const WrappedArticle = Wrapper(Article);

    return props.list.map((item) =>
      item.type === 'video' ? (
        item.views > 1000 ? (
          <Popular>
            <WrappedVideo {...item} />
          </Popular>
        ) : (
          <New>
            <WrappedVideo {...item} />
          </New>
        )
      ) : item.views > 1000 ? (
        <Popular>
          <WrappedArticle {...item} />
        </Popular>
      ) : item.views < 100 ? (
        <New>
          <WrappedArticle {...item} />
        </New>
      ) : (
          <WrappedArticle {...item} />
      )
    );}

export default List;
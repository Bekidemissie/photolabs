import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({topicData}) => {
  return (
    <div className="topic-list__item">
    <span className="topic-link">
        <a href={`/${topicData.slug}`}>{topicData.title}</a>
      </span>
    </div>
  );
};

export default TopicListItem;

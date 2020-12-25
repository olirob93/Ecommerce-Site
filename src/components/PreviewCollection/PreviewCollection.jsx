import React from "react";
import styles from "./PreviewCollection.styles.scss";

const PreviewCollection = ({title, items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.filter((item, idx) => idx < 4).map((item) => {
          return (
            <div>{item.name}</div>
          )
        })}
      </div>
    </div>
  );
};

export default PreviewCollection;

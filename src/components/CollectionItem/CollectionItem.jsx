import React from "react";
import styles from "./CollectionItem.styles.scss";

const CollectionItem = ({id, name, price, imageUrl}) => {
  return (
    <div className='collection-item'>
      <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
      <div>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;

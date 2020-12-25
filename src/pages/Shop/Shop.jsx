import React from "react";
import styles from "./Shop.styles.scss";
import ShopData from './shop.data.js'
import PreviewCollection from "../../components/PreviewCollection";

const Shop = () => {

  const collections = ShopData;

  return (
    <div className='shop-page'>
      {collections.map(({id, ...otherCollectionProps}) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;

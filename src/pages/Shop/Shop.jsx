import React from "react";
import styles from "./Shop.styles.scss";
import CollectionsOverview from '../../components/CollectionsOverview';


const Shop = () => {

  return (
    <div className='shop-page'>
      <CollectionsOverview/>
    </div>
  );
};

export default Shop;

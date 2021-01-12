import React from "react";
import styles from "./Shop.styles.scss";
import PreviewCollection from "../../components/PreviewCollection";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections} from '../../Redux/Shop/shop.selectors'

const Shop = ({ collections }) => {

  return (
    <div className='shop-page'>
      {collections.map(({id, ...otherCollectionProps}) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(Shop);

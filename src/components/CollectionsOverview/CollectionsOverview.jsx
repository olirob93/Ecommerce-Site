import React from "react";
import styles from "./CollectionsOverview.styles.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import PreviewCollection from '../PreviewCollection';
import { selectCollections } from '../../Redux/Shop/shop.selectors';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({id, ...otherCollectionProps}) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);

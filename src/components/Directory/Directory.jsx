import React, {useState} from "react";
import styles from "./Directory.styles.scss";
import MenuItem from '../MenuItem';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../Redux/Directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {

  return (
    <div className='directory-menu'>
      {sections.map(({id, ...otherSectionProps}) => {
        return(
          <MenuItem
            key={id}
            {...otherSectionProps}
          />
        )
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);

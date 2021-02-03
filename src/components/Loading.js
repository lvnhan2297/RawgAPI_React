import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  loading: PropTypes.bool.isRequired
};

const Loading = ({ loading }) => {
  if (!loading) {
    return (
      <div className="loading u-text-center" style={{margin:'2rem 0',opacity:'0'}}>
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div className="loading u-text-center" style={{margin:'2rem 0'}}>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
Loading.propTypes = propTypes;

export default Loading;

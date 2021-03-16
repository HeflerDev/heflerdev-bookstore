import React from 'react';
import PropTypes from 'prop-types';

const BookStatus = ({ completed }) => (
  <>
    <div className="board book-status-container">
      <div className="percentage-circle col-6">
        <div>Perc</div>
      </div>
      <div className="percentage col-6">
        <div>{ completed }</div>
        <div>Completed</div>
      </div>
    </div>
  </>
);

BookStatus.propTypes = {
  completed: PropTypes.string,
};

BookStatus.defaultProps = {
  completed: '0%',
};

export default BookStatus;

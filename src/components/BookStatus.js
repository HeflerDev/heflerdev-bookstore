import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-pie-progressbar';

const BookStatus = ({ completed }) => (
  <>
    <div className="board center book-status-container end">
      <div className="col-12 col-l-3 circle-wrapper">
        <CircularProgressbar
          percentage={completed}
          initialAnimation
        />
      </div>
      <div className="percentage col-l-4">
        <div>{ `${completed}%` }</div>
        <div>Completed</div>
      </div>
    </div>
  </>
);

BookStatus.propTypes = {
  completed: PropTypes.string,
};

BookStatus.defaultProps = {
  completed: 10,
};

export default BookStatus;

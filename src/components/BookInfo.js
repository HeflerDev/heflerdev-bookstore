import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = ({ chapter }) => (
  <>
    <div className="bookinfo-container board">
      <div className="col-4 col-l-12">Current Chapter</div>
      <div className="col-4 col-l-12">{ chapter }</div>
      <button className="col-4 col-l-12" type="button">
        Update Progress
      </button>
    </div>
  </>
);

BookInfo.propTypes = {
  chapter: PropTypes.string,
};

BookInfo.defaultProps = {
  chapter: "Didn't started yet",
};

export default BookInfo;

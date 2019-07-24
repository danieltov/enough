// * ==================== REACT ==================== *//
import React from 'react';
import PropTypes from 'prop-types';

// * ==================== REDUX ==================== *//
import { connect } from 'react-redux';

// * ==================== VIEW COMPONENTS ==================== *//
import Alert from 'react-bootstrap/Alert';

const Notice = ({ notices }) =>
  notices !== null &&
  notices.length > 0 &&
  notices.map(notice => (
    <Alert key={notice.id} variant={notice.noticeType}>
      {notice.msg}
    </Alert>
  ));

Notice.propTypes = {
  notices: PropTypes.array.isRequired
};

// ! Get the notice state
const mapStateToProps = state => ({
  // ! state = our root reducer, so we have access to notice
  notices: state.notice
});

export default connect(mapStateToProps)(Notice);

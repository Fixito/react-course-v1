import PropTypes from 'prop-types';

const testing = (props) => {
  return <div></div>;
};

testing.propTypes = {
  //* raccourcis : ptar -> PropTypes array required
  name: PropTypes.array.isRequired
};

export default testing;

//* rafcp - react function component with PropTypes

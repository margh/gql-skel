import { connect } from 'react-redux';
import { changeBar, setBone } from '../actions';
import SearchBar from '../components/search-bar';
// import fetch from 'isomorphic-fetch';

const mapStateToProps = () => ({ changeBar });
const mapDispatchToProps = (dispatch) => ({
  changeBar: function onBarChange(value) {
    dispatch(setBone(value.toLowerCase()));
    // Always change the bar value
    dispatch(changeBar(value));
  },
});

const searchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default searchBarContainer;

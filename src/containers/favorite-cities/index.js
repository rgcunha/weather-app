import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCities } from '../../modules/weather';
import FavoriteCities from '../../components/favorite-cities';

const mapStateToProps = state => ({
  cities: state.weather.cities,
  isFetching: state.weather.isFetching
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCities
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCities);

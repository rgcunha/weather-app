import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchCitiesSync } from '../../modules/weather'
import FavoriteCities from '../../components/favorite-cities'

const mapStateToProps = state => ({
  cities: state.weather.cities
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCities: fetchCitiesSync
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCities)

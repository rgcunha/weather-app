import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchCities } from '../../modules/weather'
import Cities from '../../components/cities'

const mapStateToProps = state => ({
  cities: state.weather.cities
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCities
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cities)

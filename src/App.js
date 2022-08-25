import axios from 'axios';
import { Component } from 'react';
import './App.css';
import SearchForm from './components/searchForm';
import ShowInfo from './components/showInfo';
import Map from './components/map';
import ErrorClass from './components/errorComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display_name: '',
      latitude: '',
      longitude: '',
      map_Src: '',
      displayInfo: false,
      errorMsg: '',
      displayError: false


    }

  }

  displayLocation = async (e) => {
    e.preventDefault();
    const searchQuery = e.target.cityName.value

    const url = `https://us1.locationiq.com/v1/search.php?key=pk.392f2e5cca96a596c8cb25a72398c624&q=${searchQuery}&format=json`


    try {
      const city = await axios.get(url)


      this.setState({
        display_name: city.data[0].display_name,
        latitude: city.data[0].lat,
        longitude: city.data[0].lon,
        displayInfo: true,
        displayError: false


      })
      this.showMap(city.data[0].lat, city.data[0].lon)

    } catch (error) {

      console.log(error)
      this.setState({
        displayInfo: false,
        displayError: true,
        errorMsg: error.response.status + '' + error.response.data.error
      })
    }


  }


  showMap = (lat, lon) => {
    const mapSr = `https://maps.locationiq.com/v3/staticmap?key=pk.392f2e5cca96a596c8cb25a72398c624&center=${lat},${lon}&zoom=18`
    console.log(mapSr)
    this.setState({
      map_Src: mapSr
    })
  }
  render() {
    return (
      <div className="App" >
        <h1>hello</h1>
        <SearchForm submitHandle={this.displayLocation} />

        {this.state.displayInfo &&
          <>
            <ShowInfo info={this.state}></ShowInfo>
            <Map showMymap={this.state.map_Src} />
          </>
        }
        {this.state.displayError &&
          <ErrorClass error={this.state.errorMsg} />
        }
      </div>
    );

  }

}

export default App;
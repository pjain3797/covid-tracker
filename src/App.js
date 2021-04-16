import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api";
import React from "react";
import coronaImage from './images/image.png';

class App extends React.Component {
  state = {
    data:{},
    country: '',
  }

  async componentDidMount(){
    const fetcheddata = await fetchData();

    this.setState({data: fetcheddata});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    
    this.setState({data : fetchedData, country:country}); 
  }

  render() {
    const {data, country} = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="text"/>
        <Cards data = {data} />
        <CountryPicker handleCountryChange={this.handleCountryChange }/>
        <Charts data={data} country={country}/>
      </div>
    );
  }
}

export default App;

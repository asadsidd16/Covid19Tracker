import React, { Component } from 'react';
import USAMap from "react-usa-map";
import styles from './Maps.module.css';

class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      error:null,
      isLoaded: false,
      items: []
    };
  }


  componentDidMount(){
    fetch("https://disease.sh/v3/covid-19/states")
      .then(res=>res.json())
      .then(
        (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  mapHandler = (event) => {
    alert(event.target.dataset.name);

  };
  
  statesFilling = () => {
    return {
      "NJ": {
        fill: "#CD5C5C",
        clickHandler: (event) => alert("New Jersey | Cases: 437254 | Recovered: 216048")
      },
      "CA": {
        fill: "#8B0000",
        clickHandler: (event) => alert("California | Cases: 1846398 | Recovered: 741319")
      },

      "AK":{
        fill: "#CC0000",
        clickHandler: (event) => alert("Alaska | Cases: 42235 | Recovered: 0")

      },
     "AL":{
      fill: "#B22222",
      clickHandler: (event) => alert("Alabama | Cases: 319904 | Recovered: 183625")
     },
    "AR":{
      fill: "#B22222",
      clickHandler: (event) => alert("Arkansas | Cases: 200114 | Recovered: 173832")
    },
    "AZ":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Arizona | Cases: 448231 | Recovered: 66132")
    },  
    "CO":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Colorado | Cases: 306598 | Recovered: 62788")

    }, 
    "CT":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Connecticut | Cases: 162782 | Recovered: 50390")

    },  
    "DE":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Delaware | Cases: 50136 | Recovered: 0")

    }, 
    "FL":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Florida | Cases: 1193165 | Recovered: 701417")

    }, 
    "GA":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Georgia | Cases: 582300 | Recovered: 329997")

    },  
    "HI":{
      fill: "#ffcccb",
      clickHandler: (event) => alert("Hawaii | Cases: 20015 | Recovered: 13182")
    }, 
    "IA":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Iowa | Cases: 266229 | Recovered: 212380")

    }, 
    "ID":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Idaho | Cases: 129069 | Recovered: 50324")

    }, 
    "IL":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Illinois | Cases: 894376 | Recovered: 560734")

    }, 
    "IN":{
      fill: "#B22222",
      clickHandler: (event) => alert("Indiana | Cases: 457871 | Recovered: 284558")

    }, 
    "KS":{
      fill: "#B22222",
      clickHandler: (event) => alert("Kansas | Cases: 202919 | Recovered: 135526")

    }, 
    "KY":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Kentucky | Cases: 240564 | Recovered: 34517")
    }, 
    "LA":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Louisiana | Cases: 282434 | Recovered: 232725")

    }, 
    "MA":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Massachusetts | Cases: 319270 | Recovered: 226331")

    }, 
    "MD":{
      fill: "#CD5C5C",
      clickHandler: (event) => alert("Maryland | Cases: 248754 | Recovered: 9098")

    }, 
    "ME":{
      fill: "#CD5C5C",
      clickHandler: (event) => alert("Maine | Cases: 18739 | Recovered: 10766")

    }, 
    "MI":{
      fill: "#CD5C5C",
      clickHandler: (event) => alert("Michigan | Cases: 496056 | Recovered: 284731")

    }, 
    "MN":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Minnesota | Cases: 394635 | Recovered: 365620")

    }, 
    "MO":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Missouri | Cases: 388014 | Recovered: 112858")

    }, 
    "MS":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Mississippi | Cases: 192111 | Recovered: 148466")

    }, 
    "MT":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Montana | Cases: 76619 | Recovered: 67271")

    }, 
    "NC":{
      fill: "#CC0000",
      clickHandler: (event) => alert("North Carolina | Cases: 472268 | Recovered: 365273")

    }, 
    "ND":{
      fill: "#CD5C5C",
      clickHandler: (event) => alert("North Dakota | Cases: 89788 | Recovered: 85672")
    }, 
    "NE":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Nebraska | Cases: 155415 | Recovered: 92195")

    }, 
    "NH":{
      fill: "#CC0000",
      clickHandler: (event) => alert("New Hampshire | Cases: 35609 | Recovered: 288234")


    }, 
    "NM":{
      fill: "#B22222",
      clickHandler: (event) => alert("New Mexico | Cases: 128930 | Recovered: 53278")

    }, 
    "NV":{
      fill: "#B22222",
      clickHandler: (event) => alert("Nevada | Cases: 201858 | Recovered: 97878")

    }, 
    "NY":{
      fill: "#CC0000",
      clickHandler: (event) => alert("New York | Cases: 877399 | Recovered: 459891")

    }, 
    "OH":{
      fill: "#B22222",
      clickHandler: (event) => alert("Ohio | Cases: 614429 | Recovered: 440235")

    }, 
    "OK":{
      fill: "#8B0000",
      clickHandler: (event) => alert("Oklahoma | Cases: 255868 | Recovered: 220474")

    }, 
    "OR":{
      fill: "#CD5C5C",
      clickHandler: (event) => alert("Oregon | Cases: 101814 | Recovered: 0")
    }, 
    "PA":{
      fill: "#B22222",
      clickHandler: (event) => alert("Pennsylvania | Cases: 553790 | Recovered: 334578")

    },  
    "RI":{
      fill: "#8B0000",
      clickHandler: (event) => alert("Rhode Island | Cases: 77812 | Recovered: 4761")

    }, 
    "SC":{
      fill: "#CC0000",
      clickHandler: (event) => alert("South Carolina | Cases: 270537 | Recovered: 135084")

    }, 
    "SD":{
      fill: "#CC0000",
      clickHandler: (event) => alert("South Dakota | Cases: 94336 | Recovered: 84490")
    }, 
    "TN":{
      fill: "#8B0000",
      clickHandler: (event) => alert("Tennessee | Cases: 503651 | Recovered: 425264")

    }, 
    "TX":{
      fill: "#8B0000",
      clickHandler: (event) => alert("Texas | Cases: 1586901 | Recovered: 1283039")

    }, 
    "UT":{
      fill: "#B22222",
      clickHandler: (event) => alert("Utah | Cases: 248970 | Recovered: 190873")

    },
    "DC":{
      fill: "#B22222",
      clickHandler: (event) => alert("Washington DC | Cases: 248970 | Recovered: 190873")

    },  
    "VA":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Virginia | Cases: 302972 | Recovered: 27633")

    }, 
    "VI":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Cases: 1846398 | Recovered: 741319 | Deaths: 22594")

    }, 
    "VT":{
      fill: "#ffcccb",
      clickHandler: (event) => alert("Vermont | Cases: 6343 | Recovered: 4062 ")

    }, 
    "WA":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Washington | Cases: 225190 | Recovered: 87987")

    }, 
    "WI":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Wisconsin | Cases: 455351 | Recovered: 412499")

    }, 
    "WV":{
      fill: "#B22222",
      clickHandler: (event) => alert("West Virginia | Cases: 71215 | Recovered: 47844")

    }, 
    "WY":{
      fill: "#CC0000",
      clickHandler: (event) => alert("Wyoming | Cases: 41488 | Recovered: 38620")

    }
    };
  };

  render() {
    var {error, isLoaded} = this.state;
    if(error){
      return <div>Error: {error.message}</div>  
    }
    else if(!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className={styles.container}>
          <h1>USA COVID MAP</h1>
          <p> * Light red states have less cases compared to dark red states</p>
          <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />

        </div>
      );
    }
  }
}

export default App;
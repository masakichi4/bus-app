import React from 'react';
import { GoogleMap,Marker, withScriptjs, withGoogleMap } from 'react-google-maps';
import './App.css';
import TopBar from './topBar.js';
import BottomDrawer from './bottomDrawer.js'
import busIcon from './bus.svg';
import ApiCall from './apiCalls/apiCalls'
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");


let locationUpdateTimer;
// let busLocation;
// let lat = busLocation? busLocation['Latitude']:37.338207;
// let lng = busLocation? busLocation['Longitude']: -121.886330;
const MyMap = withScriptjs(withGoogleMap((props)=>
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{lat: 37.737, lng: -122.235}}
    >
      {props.isMarkerShown && 
        <Marker 
          position={{lat:props.lat, lng:props.lng}}
          icon={{url: busIcon, scaledSize: new window.google.maps.Size(40, 40)}}
        />}
      <InfoBox
        defaultPosition={new window.google.maps.LatLng(props.lat, props.lng)}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `white`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            {props.bus && 
              <p>Last Updated: {(new Date(props.bus['RecordedAtTime'])).toLocaleTimeString('it-IT')}
              <br/>Line:{props.bus['MonitoredVehicleJourney']['LineRef']}
              <br/>{props.bus['MonitoredVehicleJourney']['PublishedLineName']}
              <br/> From {props.bus['MonitoredVehicleJourney']['OriginName']} to {props.bus['MonitoredVehicleJourney']['DestinationName']}
              <br/> Next stop: {props.nextStop}
              </p>}
          </div>
        </div>
      </InfoBox>
    </GoogleMap>
))

class App extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state={
      bus: null,
      longitude: -121.886330,
      latitude: 37.338207,
      timestamp: '',
      nextStop: '',
      averageSpeedMapping: []
    }
    this.getPositions = this.getPositions.bind(this)
    this.updateBusInfo = this.updateBusInfo.bind(this)
    this.updateAverageSpeed = this.updateAverageSpeed.bind(this)
    this.searchBusObject = this.searchBusObject.bind(this)
    this.calculateDistance = this.calculateDistance.bind(this)
    this.calculateTimeDifference = this.calculateTimeDifference.bind(this)
    this.calculateSpeed = this.calculateSpeed.bind(this)
  }

  componentDidMount() {
    this._isMounted = true;
    this.getPositions()
    try { 
      locationUpdateTimer = setInterval(this.getPositions, 1000*60)
    } catch(e) {
        console.log(e);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(locationUpdateTimer)
  }

  // Calls API function
  getPositions = () =>  {
    ApiCall.getPositions()
    .then(
      (v) => {
          this.updateBusInfo(v)
      },
      (err) => {
        console.log(err)
      })
  }

  // Updates the bus object in the state with new values
  updateBusInfo = (busList) => {
    if (busList && this._isMounted) {
      const bus = this.searchBusObject(busList)
      if (bus) {
        let nextStop = ''
        if (bus['MonitoredVehicleJourney']['MonitoredCall'] ) {
          if ( bus['MonitoredVehicleJourney']['MonitoredCall']['StopPointName']!==this.state.nextStop) {
            nextStop = bus['MonitoredVehicleJourney']['MonitoredCall']['StopPointName']
          } else {
            nextStop = this.state.nextStop;
          }
        }
        if (nextStop!=='') {
          this.updateAverageSpeed(bus, nextStop)
        }
        
        this.setState({
          bus,
          nextStop,
          longitude: parseFloat(bus['MonitoredVehicleJourney']['VehicleLocation']['Longitude']),
          latitude: parseFloat(bus['MonitoredVehicleJourney']['VehicleLocation']['Latitude']),
          timestamp: bus['RecordedAtTime']
        }) 
        
      }
    }
  }

  // If current state does not track a bus or the tracked bus cannot be found in the list, 
  // the first bus with monitored vehicle journey & monitored call will be returned.
  searchBusObject = (busList) => {
    let bus = this.state.bus;
    for (let i=0; i< busList.length; i++) {
      let busObj = busList[i]
      if (bus===null) {
        if (busObj['MonitoredVehicleJourney'] && busObj['MonitoredVehicleJourney']['MonitoredCall']
          && busObj['MonitoredVehicleJourney']['MonitoredCall']['StopPointName'] &&
          busObj['MonitoredVehicleJourney']['VehicleRef']!=='') {
          return busObj;
        }
      } else {
        if (busObj['MonitoredVehicleJourney'] && 
          busObj['MonitoredVehicleJourney']['VehicleRef']===this.state.bus['MonitoredVehicleJourney']['VehicleRef']) {
          return busObj;
        }
        if (i===busList.length-1 && bus!==null) {
          i = 0;
          bus = null;
        }
      }
    }
    return null;
  }

  updateAverageSpeed = (nextBus, stopName) => {
    const {bus, latitude, longitude, nextStop, averageSpeedMapping} = this.state;
    const lastIndex = averageSpeedMapping.length-1;
    let mappingArr = averageSpeedMapping;

    if (bus && bus['MonitoredVehicleJourney']['VehicleRef']!== nextBus['MonitoredVehicleJourney']['VehicleRef']) {
      mappingArr = [];
    }
    if (lastIndex>=0 && bus['MonitoredVehicleJourney']['VehicleRef']=== nextBus['MonitoredVehicleJourney']['VehicleRef']){
      let mappingObj = mappingArr.pop();

      const nextLongitude = parseFloat(nextBus['MonitoredVehicleJourney']['VehicleLocation']['Longitude']);
      const nextLatitude = parseFloat(nextBus['MonitoredVehicleJourney']['VehicleLocation']['Latitude']);

      if (nextStop!==stopName) {
        mappingObj.distance = this.calculateDistance(latitude,longitude,nextLatitude,nextLongitude);
      } else {
        mappingObj.distance += this.calculateDistance(latitude,longitude,nextLatitude,nextLongitude);
      }
      mappingObj.endTime = nextBus['RecordedAtTime']
      mappingObj.duration = this.calculateTimeDifference(mappingObj.startTime, mappingObj.endTime);
      mappingObj.averageSpeed = this.calculateSpeed(mappingObj.distance, mappingObj.duration);
       
      mappingArr.push(mappingObj)
    }
    if (lastIndex<0 || nextStop!==stopName) {
      let nextObj = {}
      nextObj.LineRef = nextBus['MonitoredVehicleJourney']['LineRef']
      nextObj.VehicleRef = nextBus['MonitoredVehicleJourney']['VehicleRef']
      nextObj.stopName = stopName
      nextObj.averageSpeed = 0
      nextObj.distance = 0
      nextObj.duration = 0
      nextObj.startTime = nextBus['RecordedAtTime']
      nextObj.endTime = nextBus['RecordedAtTime']
      mappingArr.push(nextObj);
    }
    this.setState({averageSpeedMapping: mappingArr})
  }

  //takes in latitude and longitude of two locations 
  // returns the distance between them in km
    calculateDistance = (lat1, lon1, lat2, lon2) => 
    {
      if ((lat1 === lat2) && (lon1 === lon2)) {
        return 0;
      }
      else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;

        return dist;
      }
    }

    //takes in two timestamps in UTC string
    // returns the difference in hour
    calculateTimeDifference = (start, end) => {
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);
      return Date.parse(endDateObj) > Date.parse(startDateObj)?(Date.parse(endDateObj) - Date.parse(startDateObj)) / 1000 / 3600:0;
    }

    calculateSpeed = (distance, time) => {
      if (time > 0) {
        return +((distance / time).toFixed(1)); 
      }
      return 0;
    }

  render() {
    const {longitude,latitude, bus, nextStop, averageSpeedMapping} = this.state;
    const apiKey = process.env.REACT_APP_MAP


    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <TopBar />
        <div style={{width: '100vw', height: '80vh'}}>
          <MyMap
          key={latitude+" "+longitude+" "+nextStop}
          bus={bus}
          lat={latitude}
          lng={longitude}
          nextStop={nextStop}   
          isMarkerShown
          googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="+apiKey}
          loadingElement={<div style={{height: '80vh'}}/>}
          containerElement={<div style={{height: '80vh'}}/>}
          mapElement={<div style={{height: '80vh'}}/>} />
          <BottomDrawer data={averageSpeedMapping}/>
        </div>
      </div>
    );
  }
}

export default App;

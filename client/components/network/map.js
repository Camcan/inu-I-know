import GoogleMap from 'google-map-react';
import {Component} from 'react';


export default class Map extends Component {
    constructor(props){
        super(props);
    }
    _renderMarkers(markers){
        return (markers) ? markers.map((m)=>{
            m = m.coords;
            return <div lat={m.lat} lng={ m.lng } ></div>
        }) : null;
    }
    render(){
        return <GoogleMap
                bootstrapURLKeys={{ key: "AIzaSyDSNMcRwP_qqavPwKFSvcSqhqE3EcScIVw" }} 
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {this._renderMarkers(this.props.markers)}
            </GoogleMap>
    }
}



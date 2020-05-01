import React from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_BUS
export default class ApiCall extends React.Component {

    static getPositions = async () =>{
        const headers = {
            'Content-Type': 'application/json',
        };

        let v = [];
        await axios.get(
            'http://api.511.org/transit/VehicleMonitoring?api_key='+api_key+'&agency=AC',
            {},
            {headers}
            ).then(response => {
                v = response.data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity;
            })
            .catch(error => {
                console.log("@Error@", error);
            }
        )

        return v;
    }
}
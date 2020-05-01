import React from 'react';
import axios from 'axios';

export default class ApiCall extends React.Component {

    static getPositions = async () =>{
        const headers = {
            'Content-Type': 'application/json',
        };

        let v = [];
        await axios.get(
            'http://api.511.org/transit/VehicleMonitoring?api_key=daa84c98-1b9e-42f3-a24d-175acc05fbe4&agency=AC',
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
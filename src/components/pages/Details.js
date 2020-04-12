import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        title,
                        seat,
                        transmission,
                        doors,
                        fuel,
                        img,
                        text
                    } = data.detailInfo;
                    
                return (
                    <div className="container py-">
                        <div className="row">
                        <div className="col-10 mx-auto text-center my-5">
                                <h1>{title}</h1>
                        </div>
                        </div>
                        <div className="row"> 
                        <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={img} className="img-fluid" alt="product"/>
                        </div>
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <h5 className="text-title mt-2 mb-2">
                                    Seat: {seat}
                                </h5>
                                <h5 className="text-title mt-2 mb-2">
                                    Doors: {doors}
                                </h5>
                                <h5 className="text-title mt-2 mb-2">
                                    Fuel: {fuel}
                                </h5>
                                <h5 className="text-title mt-2 mb-2">
                                    Transmission: {transmission}
                                </h5>
                                <p className="font-weight-bold mt-2 mb-2">
                                Info: 
                                </p>
                                <p className="text-muted">
                                    {text}
                                </p>
                                <Link to="/" className="detail-link">Back to Home>></Link>
                                </div>
                        </div>
                    </div>
                )
                }}
            </InfoConsumer>
        )
    }
}

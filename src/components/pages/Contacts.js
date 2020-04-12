import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contacts extends Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                <div className="well well-sm">
                <h3><storng>Our Location</storng></h3>
                </div>
                <div className="row">
                <div className="col-md-7">
                            <iframe src="https://www.google.com/maps/d/embed?mid=1wDodhh5z_RZRiXYzp_1cVFBnDUXbIkod"
                        style={{
                            border:'0',
                            width:'100%',
                            height:'315px',
                            frameborder: '0'
                        }} allowFullScreen
                        ></iframe>
                </div>
                <div className="col-md-5">
                <h4><strong>Contact Us</strong></h4>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="phone" className="form-control" placeholder="Phone" />
                                </div>
                                <textarea
                                className="form-control"
                                cols="30"
                                rows="3"
                                placeholder="Message"
                                />
                                <Link className="btn btn-outline-primary text-uppercase mt-1">
                                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                    <i className="fab fa-telegram-plane"></i>
                                    &nbsp;Send
                                </Link>
                </form>
                </div>
                </div>
                </div>
            </section>
        )
    }
}

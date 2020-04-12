import React, { Component } from 'react';
import { InfoConsumer } from '../components/context';
import { Link } from 'react-router-dom';

class TermsCard extends Component {
    render() {
        const { id, termsTitle, termsText } = this.props.item;
        return (
            <InfoConsumer>
                { value => (
                    <div className="card container mt-2 mb-3 p-5">
                        <div className="card-body">
                        <h5 key ={id} className="card-title text-uppercase">{termsTitle}</h5>
                        <p className="card-text">{termsText}</p>
                        <Link to="/" className="card-link">Back to Home</Link>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        )
    }
}
export default TermsCard;

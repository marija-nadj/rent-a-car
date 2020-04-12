import React, { Component } from 'react'
import TermsCard from '../TermsCard';
import { InfoConsumer } from '../context';

export default class Terms extends Component {
    render() {
        return (
            <InfoConsumer>
                { value => {
                    return value.terms.map(item => {
                        return <TermsCard key={item.id} item={item}/>
                    })
                }}
            </InfoConsumer>
        )
    }
}

import React, { Component } from 'react';
import { carsInfo, detailInfo, terms } from '../data';

const InfoContex = React.createContext();


class InfoProvider extends Component {
    state = {
        info: carsInfo,
        detailInfo: detailInfo,
        terms: terms
    };

    getItem = id => {
        const item = this.state.info.find(item => item.id == id);
        return item
    }
    handleDetail = id => {
        const item = this.getItem(id);
        this.setState(() => {
            return {
            detailInfo: item
        };
    });
}
    render() {
        return (
                <InfoContex.Provider 
                    value={{
                    info:this.state.info,
                    detailInfo:this.state.detailInfo,
                    terms:this.state.terms,
                    handleDetail:this.handleDetail
                }}>
                    {this.props.children}
                </InfoContex.Provider>
        )
    }
}
const InfoConsumer = InfoContex.Consumer;

export { InfoProvider, InfoConsumer };

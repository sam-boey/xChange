import React from 'react'
import axios from 'axios';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currencies: []
        }
    };

    componentDidMount() {
        axios.get('https://api.exchangeratesapi.io/latest?base=SGD')
            .then(response => {
                console.log(response.data.rates)
                this.setState({ currencies: response.data.rates });
                console.log(this.state);

            })
            .catch(error => console.log(error))
    }

    render() {
        let currencyList = "";
        console.log(this.state.currencies);
        if (this.state.currencies) {
            currencyList = Object.keys(this.state.currencies).map((key, index) => {
                return (
                    <li key={index}> {key}: {this.state.currencies[key]}</li>
                )
            })

        }
        return (
            <div>
        <div className ="currencyList">
            <ul>
            {currencyList}
        </ul>
        </div>
        </div>
        );
    }
}
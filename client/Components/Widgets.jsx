import React from 'react';
import axios from 'axios';

export default class Widgets extends React.Component{
	constructor() {
		super();
		this.state = {loading: true};
	}
	componentDidMount() {
		const that = this;
		axios.get('http://api.openweathermap.org/data/2.5/weather', 
		{
			params: {
				q: "Rochester",
				appid: "3c5d7516670f98c3116a0df530983ae2",
			}
		})
		.then(function (response) {
			that.setState({loading: false, weather: response.data});
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});	
	}
	render(){
		let content = <h1>Loading...</h1>;
		if (!this.state.loading) {
			const weather = this.state.weather;
			const city = weather.name;
			content = <h1>Weather in {city}</h1>;
		}
		return (
			<div className="widget-component">
				{content}
			</div>
		);
	}
}

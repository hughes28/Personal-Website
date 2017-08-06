import React from 'react';
import ReactToggle from 'react-toggle-button';

export default class LongTweetSplit extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getMessage = this.getMessage.bind(this);
		this.state = {message: ""};
	}

	handleChange(event) {
		this.setState({message: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.getMessage();
	}

	getMessage() {
		let message = this.state.message;
		const maxTweetLength = 140;
		const numberOfTweetsRequired = Math.ceil(message.length/maxTweetLength);
		const addedLength = 2*numberOfTweetsRequired.toString().length + 4;
		const result = [];
		let newMessage = "";
		let numberOfTweets = 0;
		let canContinue = true;

		if (message.length > maxTweetLength) {
			while (message.length > maxTweetLength) {
				for (let i = maxTweetLength - 1 - addedLength; i >= 0; i--) {
					if (message[i] === ' ') {
						result.push(message.substring(0,i));
						message = message.slice(i);
						i = maxTweetLength;
						numberOfTweets++;	
						canContinue = false;
						break;
					}
				}
				if (canContinue) {
						result.push(message.substring(0,maxTweetLength-1));
						message = message.slice(maxTweetLength-1);
						numberOfTweets++;
				}
			}

			result.push(message);
			numberOfTweets++;

			for (let j = 0; j<result.length; j++) {
				let tweetPage = j+1;
				result[j] += " (" + tweetPage + "/" + numberOfTweets + ")";
			}

			for (let s in result) {
				newMessage += result[s];
			}

			this.setState({message: newMessage});
		}


	} 

	render() {

		content = this.state.message;

		return (
			<div className = "widget-component">
				<form onSubmit={this.handleSubmit}>
        			<label>
          			Enter tweet:
          				<textarea type="text" onChange={this.handleChange} />
        			</label>
        			<input type="submit" value="Submit" />
      			</form>
      			{content}
			</div>
			
		);
		
	}

}
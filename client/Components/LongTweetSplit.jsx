import React from 'react';
import ReactToggle from 'react-toggle-button';

export default class LongTweetSplit extends React.Component{
	constructor(props){
		super(props);
		
	}

	
	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
        			<label>
          			Enter tweet:
          				<textarea type="text" onChange={this.handleChange} />
        			</label>
        			<input type="submit" value="Submit" />
      			</form>
			</div>
			
		);
		
	}

}
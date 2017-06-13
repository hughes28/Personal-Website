import React from 'react';

export default class Home extends React.Component{
	render(){
		return (
			<div className="home-component">
				<h1 className="home-title-name">John F. Hughes</h1>
				<h2 className="home-subtitle-about">Mad Chemist | Coffee Aficionado | Difference-Maker</h2>
				<ul className="home-social-btns">
               		<li><a href="https://github.com/hughes28"><i className="fa fa-github"></i></a></li>
              		<li><a href="http://www.linkedin.com/in/johnfhughes"><i className="fa fa-linkedin"></i></a></li>
              		<li><a href="./Files/HughesResume.pdf"><i className="fa fa-id-badge"></i></a></li>
           		</ul>
			</div>
		);
	}
}
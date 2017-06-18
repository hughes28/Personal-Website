import React from 'react';
import blipicon from '../Assets/blipicon.png';

export default class Education extends React.Component{
	render(){
		const gradCourses = ["Advanced Carrier Injection Devices", "Evaluation of Microelectronic Manufacturing", "Lithographic Materials and Processes",
								"Microelectromechanical Systems Evaluation", "Microelectronic Fabrication", "Physical Modeling of Semiconductor Devices", 
								"Semiconductor Process Integration", "Thin Films"];
		const gradCourseListItems=[];
		const undergradCourses = ["Analysis of Multiscale Processes", "Fluid Mechanics", "Heat Transfer",
											"Multiple Scale Material Science", "Reaction Engineering"];
		const undergradCourseListItems=[];
		gradCourses.forEach((course, i) => {gradCourseListItems.push(<li key={i}>{course}</li>)});
		undergradCourses.forEach((course, i) => {undergradCourseListItems.push(<li key={i}>{course}</li>)});
		return (
			<div className="education-component">
				<img className="rit-logo" src="http://www.cis.rit.edu/~sxs4643/RIT_logo.png" alt=""/>
				<h1>Education</h1>
				<div className="location-container">
					<img className="blip-icon" src={blipicon} alt=""/>
					<h3>Rochester Institute of Technology - Rochester, NY</h3>
				</div>
				<ul className="education-body">
					<li className="education-entry">
						<div className="education-degree-container">
							<h2>M.Sc, Microelectronic Engineering</h2>
							<div className="education-degree-information">
								<h6>08/2015 - 08/2017</h6>
								<h5>3.81/4.00 GPA</h5>
							</div>
						</div>
						<h4>Thesis Topic: Sensitivity Enhancement of Metal-Oxide Chemical Sensors</h4>
						<ul>
							<li>
								Developed fabrication process consisting of lift-off processing, physical vapor
								deposition (PVD), thermal processing, and other process modules for prototype 
								metal-oxide chemical sensors which sense volatile organic compounds (VOCs).
							</li>
							<li>
								Electrically and thermally simulated future-work devices using Silvaco Atlas and Solidworks,
								respectively.
							</li>
							<li>
								Studied the effects of analyte concentration, metal-oxide thickness, crystalline structure,
								and operational temperature on sensitivity to VOCs.
							</li>
						</ul>
						<h4>Leadership:</h4>
						<ul>
							<li>
								RIT New Student Orientation
							</li>
							<li>
								Alpha Phi Omega
							</li>
							<li>
								Graduate Teaching Assistant
							</li>
						</ul>
						<h4>Relevant Course Work:</h4>
						<ul>{gradCourseListItems}</ul>
					</li>
					<li className="education-entry">
						<div className="education-degree-container">
							<h2>B.Sc, Chemical Engineering</h2>
							<div className="education-degree-information">
								<h6>09/2010 - 05/2015</h6>
								<h5>3.40/4.00 GPA</h5>
							</div>
						</div>
						<h4>Leadership:</h4>
						<ul>
							<li>
								RIT Improv
							</li>
							<li>
								American Institute of Chemical Engineers
							</li>
							<li>
								RIT New Student Orientation
							</li>
						</ul>
						<h4>Relevant Course Work:</h4>
						<ul>{undergradCourseListItems}</ul>
					</li>
				
				</ul>
			</div>
		);
	}
}
import React from 'react';
import NGCSmallLogo from '../Assets/NGCSmallLogo.png';
import HarrisCorporation from '../Assets/HarrisCorporation.png';
import VolvoSmall from '../Assets/VolvoSmall.png';
import URCSmall from '../Assets/URCSmall.png';
import blipicon from '../Assets/blipicon.png';


export default class WorkExperience extends React.Component{
	render(){
		return (
			<div className="experience-component">
				<div className="card-front">
					<h1>
						Northrop Grumman Corporation
						<span>
							<img src={blipicon} alt=""/>
							Baltimore, MD
						</span>
					</h1>
					<div className="card-content">
						<div className="company-logo">
							<img src={NGCSmallLogo} alt=""/>
						</div>
						<div className="company-information">
							<h3>Technical Engineer Intern</h3>
							<h3>05/2016 - 08/2016</h3>
							<h4>
								Completed a technical engineering internship on the Advanced Technology Laboratory Process 			
								Integration team, focused on developing electronics for radar/computational applications.
							</h4>
							<ul>
								<li>
									Obtained and maintained a confidential Department of Defense (DoD) clearance.
								</li>
								<li>
									Characterized emerging silicon and silicon carbide technologies for prototype processes 
									through the use of semiconductor parameter analyzing techniques.
								</li>
								<li>
									Designed experiments to determine optimal processing conditions of chemical-mechanical 
									planarization (CMP) of deep-trench isolation (DTI) integration for microchips.
								</li>
								<li>
									Diagnosed problematic photolithography processing of semiconductor devices through root-cause 
									analysis of wet chemical etching, ion implantation, and thermal processing modules.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card-front">
					<h1>
						Harris Space and Intelligence Systems
						<span>
							<img src={blipicon} alt=""/>
							Rochester, NY
						</span>
					</h1>
					<div className="card-content">
						<div className="company-logo">
							<img src={HarrisCorporation} alt=""/>
						</div>
						<div className="company-information">
							<h3>Manufacturing Engineer Intern</h3>
							<h3>06/2015 - 08/2015</h3>
							<h4>
								Completed a manufacturing engineering internship on the Analytical Instrumentation team, which 
								develops sensitive piezoelectric sensors/detectors for mass spectroscopy units.
							</h4>
							<ul>
								<li>
									Organized process development documents of analytical instrumentation in a PTC Windchill database 
									for product lifecycle management of 12 long-running piezoelectric sensors.
								</li>
								<li>
									Developed design of experiments to determine optimal production of wire assemblies for piezoelectric 
									detectors.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card-front">
					<h1>
						Volvo Group
						<span>
							<img src={blipicon} alt=""/>
							Hagerstown, MD
						</span>
					</h1>
					<div className="card-content">
						<div className="company-logo">
							<img src={VolvoSmall} alt=""/>
						</div>
						<div className="company-information">
							<h3>Manufacturing Engineer Co-op</h3>
							<h3>01/2014 - 07/2014</h3>
							<h4>
								Completed a manufacturing engineering co-op on the Group Trucks Operations (GTO) industrial entity 
								in Hagerstown, which focuses on manufacturing domestic and international diesel engines.
							</h4>
							<ul>
								<li>
									Developed efficient and ergonomic standard operating procedures (SOPs) for the workstation 
									development of Project EVENFLOW, a regeneration of the diesel engine manufacturing line use in Hagerstown’s manufacturing plant.
								</li>
								<li>
									Managed Kaizen project which developed an apparatus to prevent screws/bolts from falling into engines 
									in certain workstations and subsequently causing downtime.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card-front">
					<h1>
						United Refining Company
						<span>
							<img src={blipicon} alt=""/>
							Warren, PA
						</span>
					</h1>
					<div className="card-content">
						<div className="company-logo">
							<img src={URCSmall} alt=""/>
						</div>
						<div  className="company-information">
							<h3>Process Engineer Co-op</h3>
							<h3>03/2013 - 08/2013</h3>
							<h4>
								Completed a process engineering co-op in the Process Engineering department of a small refinery which 
								processes nearly 70,000 barrels of oil per day, seven days a week.
							</h4>
							<ul>
								<li>
									Designed process flow improvement for more efficient asphalt loading operations to loading trucks 
									and trains in the refinery.
								</li>
								<li>
									Characterized light and heavy hydrocarbon compounds with quantitative chemical analysis via 
									titration, conductive, and rheological methods.
								</li>
								<li>
									Analyzed piping and instrumentation diagrams (P&IDs) of flare system exhaust flows for EPA 
									regulatory commission.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		);
	}
}


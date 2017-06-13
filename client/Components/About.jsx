import React from 'react';
import meirl from '../Assets/meirl.jpg';

export default class About extends React.Component{
	render(){
		return (
			<div className="about-component">
				<div className="portrait-container">
					<img src={meirl} alt="portrait"/>
				</div>
				<h1>About Me</h1>
				<div className="about-body">
					<p>
						Hey! My name is John. I am a Master’s student in Microelectronic
						Engineering and also have a Bachelor’s of Science degree in Chemical
						Engineering from the Rochester Institute of Technology.
					</p>
					<p>
						I have always had an interest in science and engineering ever since
						I became president of my high school’s science club. From growing
						rainbow-colored bismuth crystals in piping-hot ceramic crucibles to
						seeing how flip-phones operate after being submerged in liquid
						nitrogen, I’ve always wanted to learn how materials interact with
						their surroundings.
					</p>
					<p>
						My interests of physical sciences and engineering have remained
						even through my graduate studies, though it wasn’t until my third
						year of undergraduate studies where I began my first real programming
						project using MATLAB. Of course, programming was such a foreign concept
						to me and at the time was frustrating, but it began to grow on me over
						the next few years. I have always thought software was one of those
						fields I would never be able to understand because I’ve been so used
						to learning about concepts which are tangible. However, recently, I’ve
						grown to like it to the point of teaching myself the fundamentals of
						programming using Java, JavaScript, Python, and more of MATLAB. In fact,
						this website, along with the help of my friend, has been partially
						developed by me!
					</p>
					<p>
						No matter what field of engineering I may go into, my dream is to use
						my engineering skillset to create innovative solutions to challenging
						issues alongside other engineers who share similar compassion and
						vision for making the world a better place.
					</p>
				</div>
			</div>
		);
	}
}

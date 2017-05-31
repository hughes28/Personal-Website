class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {selectedNavBarItem: "Home"};
		this.navbarListItemClicked = this.navbarListItemClicked.bind(this);
	}
	navbarListItemClicked(item){
		this.setState({selectedNavBarItem: item}) 
	}
	render(){
		let componentToShow;
		switch(this.state.selectedNavBarItem){
			case "Home":
				componentToShow = <Home />;
				break;
			case "About":
				componentToShow = <About />;
				break;
			case "Education":
				componentToShow = <Education />;
				break;
			case "WorkExperience":
				componentToShow = <WorkExperience />;
				break;
			default:
				componentToShow = <Home />;
				break;
		}
		return (
		<div>
			<NavBar navbarListItemClicked={this.navbarListItemClicked} activeComponent={this.state.selectedNavBarItem}/>
			{componentToShow}
		</div>

		);
		// curly braces means evaluating JS in HTML
	}
}

class NavBar extends React.Component{
	render(){
		let topButton = "";
		if (this.props.activeComponent !== "Home") {
			topButton = <button onClick={() => {}} className="navbar-top-button">Top</button>;
		}
		return ( 
			<div className="navbar">
				{topButton}
				<h3 className="navbar-my-name">John F. Hughes</h3>
				<ul className="horizontal-nav-ul">
					<li onClick={() => this.props.navbarListItemClicked("Home")}>Home</li>
					<li onClick={() => this.props.navbarListItemClicked("About")}>About</li>
					<li onClick={() => this.props.navbarListItemClicked("Education")}>Education</li>
					<li onClick={() => this.props.navbarListItemClicked("WorkExperience")}>Work Experience</li>
				</ul>
			</div>


		);
	}
}

class Home extends React.Component{
	render(){
		return (
			<div>
				<h1 className="home-title-name">John F. Hughes</h1>
				<h2 className="home-subtitle-about">Mad Chemist | Coffee Aficionado | Difference-Maker</h2>
				<ul className="horizontal-ul home-social-btns">
               		<li><a href="https://github.com/hughes28"><i className="fa fa-github"></i></a></li>
              		<li><a href="http://www.linkedin.com/in/johnfhughes"><i className="fa fa-linkedin"></i></a></li>
              		<li><a href="./Files/HughesResume.pdf"><i className="fa fa-id-badge"></i></a></li>
           		</ul>
			</div>
		);
	}
}

class About extends React.Component{
	render(){
		return (
			<div>
				<h1>About Me</h1>
				<h3>I am a recent graduate.</h3>
			</div>
		);
	}
}

class Education extends React.Component{
	render(){
		return (
			<div>
				<h1>Education</h1>
				<ul>
					<li><h3>M.Sc, Microelectronic Engineering, RIT</h3></li>
					<li><h3>B.Sc, Chemical Engineering, RIT</h3></li>
				</ul>
			</div>
		);
	}
}

class WorkExperience extends React.Component{
	render(){
		return (
			<div>
				<h1>Work Experience</h1>
				<ul>
					<li>
						<h2>Northrop Grumman Corporation</h2>
						<h3>Technical Engineer Intern</h3>
					</li>
					<li>
						<h2>Harris Space and Intelligence Systems</h2>
						<h3>Manufacturing Engineer Intern</h3>
					</li>
					<li>
						<h2>Volvo Group</h2>
						<h3>Manufacturing Engineer Co-op</h3>
					</li>
					<li>
						<h2>United Refining Company</h2>
						<h3>Process Engineer Co-op</h3>
					</li>
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("App"));
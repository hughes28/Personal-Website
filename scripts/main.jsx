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
			case "Experience":
				componentToShow = <WorkExperience />;
				break;
			default:
				componentToShow = <Home />;
				break;
		}
		return (
		<div>
			<NavBar navbarListItemClicked={this.navbarListItemClicked} activeComponent={this.state.selectedNavBarItem}/>
			<div className="app-body">{componentToShow}</div>
		</div>

		);
		// curly braces means evaluating JS in HTML
	}
}

class NavBar extends React.Component{
	render(){
		let topButton = "";
		if (this.props.activeComponent !== "Home") {
			topButton = <button onClick={() => {}} className="navbar-top-button">JFH</button>;
		}
		return (
			<div className="navbar">
				{topButton}
				<h3 className="navbar-spacer"></h3>
				<ul className="horizontal-nav-ul">
					<NavBarListItem text="Home" componentID="Home" itemClicked={this.props.navbarListItemClicked} currentActiveComponent={this.props.activeComponent}/>
					<NavBarListItem text="About" componentID="About" itemClicked={this.props.navbarListItemClicked} currentActiveComponent={this.props.activeComponent}/>
					<NavBarListItem text="Education" componentID="Education" itemClicked={this.props.navbarListItemClicked} currentActiveComponent={this.props.activeComponent}/>
					<NavBarListItem text="Experience" componentID="Experience" itemClicked={this.props.navbarListItemClicked} currentActiveComponent={this.props.activeComponent}/>
				
				</ul>
			</div>


		);
	}
}

class NavBarListItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	render(){
		let cssClass = "";
		if (this.props.currentActiveComponent === this.props.componentID) {
			cssClass += "active ";
		}
		if (this.state.hover === true) {
			cssClass += "slide-in highlighted ";
		} else if (this.state.hover !== undefined) {
			cssClass += "slide-out normal ";
		}
		return (
			<li 
				onMouseLeave={(e) => this.setState({hover: false})} 
				onMouseEnter={(e) => this.setState({hover: true})}
				onClick={() => this.props.itemClicked(this.props.componentID)}
				className={cssClass}
			>
				{this.props.text}
			</li>
		);
	}
}

class Home extends React.Component{
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

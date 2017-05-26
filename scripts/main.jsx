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
			<NavBar navbarListItemClicked={this.navbarListItemClicked}/>
			{componentToShow}
		</div>

		);
		// curly braces means evaluating JS in HTML
	}
}

class NavBar extends React.Component{
	render(){
		return (
			<div>
				<ul>
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
				<h1>Hello World!</h1>
				<h2>My name is John Hughes.</h2>
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
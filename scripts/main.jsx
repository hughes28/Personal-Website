class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {showHome: true};
		this.navbarListItemClicked = this.navbarListItemClicked.bind(this);
	}
	navbarListItemClicked(){
		this.setState({showHome: !this.state.showHome}) 
	}
	render(){
		let componentToShow;
		if(this.state.showHome === true){
			componentToShow = <Home />;
		} else {
			componentToShow = <About />;
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
					<li>Home</li>
					<li onClick={this.props.navbarListItemClicked}>About</li>
					<li>Education</li>
					<li>Work Experience</li>
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

ReactDOM.render(<App />, document.getElementById("App"));
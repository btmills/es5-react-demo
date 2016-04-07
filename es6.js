import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Message extends Component {

	static propTypes = {
		name: PropTypes.string.isRequired
	};

	render() {
		const name = this.props.name || 'world';

		return (
			<p>Hello, {name}!</p>
		);
	}

}

class App extends Component {

	state = {
		name: ''
	};

	handleChange = (event) => {
		this.setState({
			name: event.target.value
		});
	};

	render() {
		return (
			<div>
				<input
					onChange={this.handleChange}
					placeholder="Name"
					type="text"
					value={this.state.name} />
				<Message name={this.state.name} />
			</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

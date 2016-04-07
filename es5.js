var Message = React.createClass({

	displayName: 'Message',

	render: function () {
		var name = this.props.name || 'world';

		return React.createElement('p', null, 'Hello, ' + name + '!');
	}

});

var App = React.createClass({

	displayName: 'App',

	getInitialState: function () {
		return {
			name: ''
		};
	},

	handleChange: function (event) {
		this.setState({
			name: event.target.value
		});
	},

	render: function () {
		return React.createElement('div', null,
			React.createElement('input', {
				onChange: this.handleChange,
				placeholder: 'Name',
				type: 'text',
				value: this.state.name
			}),
			React.createElement(Message, {
				name: this.state.name
			})
		);
	}

});

ReactDOM.render(
	React.createElement(App),
	document.getElementById('app')
);

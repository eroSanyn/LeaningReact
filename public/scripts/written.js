var commentBox = React.createClass({
	render: function(){
		return (<h1>Hello World!</h1>);
	}
});

ReactDOM.render(
	React.createElement(commentBox),  document.getElementById('content'));
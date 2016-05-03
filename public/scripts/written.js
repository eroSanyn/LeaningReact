var CommentBox = React.createClass({
	displayName: 'CommentBox',
	render: function(){
		return (<h1>Hello World!</h1>);
	}
});

var CommentList = React.createClass({
	render: function(){
		return (
			<div>
			  <CommentBox />
			<div>Maybe here is!</div>
			</div>);
	}
});

ReactDOM.render(
	React.createElement(CommentList, null), 
	document.getElementById('content')
	);
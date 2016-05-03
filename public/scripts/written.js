var CommentBox = React.createClass({
	displayName: 'CommentBox',
	render: function() {
    	return (
     		<div className="commentBox">
	        	<h1>Comments</h1>
		        <CommentList />
		        <CommentForm />
	      	</div>
    );
  }
});

var CommentList = React.createClass({
	render: function(){
		return (
			<div>
			<div>Maybe here is!</div>
			</div>
			);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return (<div>form here</div>);
	}
});

ReactDOM.render(
	React.createElement(CommentBox, null), 
	document.getElementById('content')
	);
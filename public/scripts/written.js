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


var Comment = React.createClass({
	rawMarkup: function() {
    	var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    	return { __html: rawMarkup };
	},

	render: function(){
		return(
				<div className="comment">
				<h2 className="commentAuthor">{this.props.author}</h2>
				  <span dangerouslySetInnerHTML={this.rawMarkup()} />
				</div>
			);
	}
});

var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
			<Comment author="me">A comment is all we need</Comment>
			<Comment author="you">Another comment makes u happy</Comment>
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
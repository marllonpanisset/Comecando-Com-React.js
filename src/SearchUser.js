import React from 'react';
import GitHubUser from './GitHubUser';

class SearchUser extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit (e) {
		e.preventDefault();
		
		GitHubUser.getByUsername(this.refs.username.value).then(function(response) {			
			this.props.updateUser(response.data);
		}.bind(this));

		GitHubUser.getReposByUsername(this.refs.username.value).then(function(response) {
			this.props.updateRepos(response.data);
		}.bind(this));
	}

	render() {
		return (
			<div className="jumbotron">
				<h1>GitHub Info</h1>
				<div className="row">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Username</label>
							<input
								type="text"
								ref="username"
								className="form-control"
								placeholder="Ex: marllonpanisset"
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary">Buscar
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default SearchUser;
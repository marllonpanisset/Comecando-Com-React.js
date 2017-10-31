var axios = require('axios');

var GitHubUser = {
	getByUsername: function (username) {
		return axios.get('https://api.github.com/users/' + username);
	},

	getReposByUsername: function (username) {
		return axios.get('https://api.github.com/users/' + username + '/repos');
	}
};

export default GitHubUser;
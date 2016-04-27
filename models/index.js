module.exports = function() {
	return {
		ProfilePage:require('./users')(),
		LoginPage:require('./login')(),
		DashboardPage:require('./dashboard')(),
		NotFoundPage:require('./notfound')()
	};
};

login = username => 'SELECT user.Id FROM Users user WHERE user.username = "' + username + '"'
createUser = userData => 'INSERT INTO Users (Name, Age, HashPassword, Salt, Username, Email, Phone) Values("' + userData.name + '", "' + userData.age + '", "' + userData.hashPassword + '", "' + userData.salt + '", "' + userData.username + '", "' + userData.email + '", "' + userData.phone + '")'
viewAllEvents = () => "SELECT CompanyName AS 'Company', Location, EventDescription, StartTime, EndTime, Name AS 'Created By' FROM Events AS E INNER JOIN Organizations AS ON E.OrganizationId = O.Id INNER JOIN Users ON E.EventCreatorId = Users.Id;"

module.exports = {
	login: login,
	createUser: createUser,
	viewAllEvents: viewAllEvents
}

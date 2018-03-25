//This is the parameterized queries for the Planet Rocket Calendar.

//User Creation.
//Fields cannot be NULL.
string name, hashPassword, salt, username, email, phone;
int age;
'INSERT INTO Users (Name, Age, HashPassword, Salt, Username, Email, Phone) VALUES(' + name 
+ ', ' + age + ', ' + hashPassword + ', ' + salt + ', ' + username + ', ' + email
+ ', ' + phone + ');';

//Organization Creation.
//Fields Can Be Null.
//nonProfit must be 0, 1, or NULL.  1 = profit, 0 = nonprofit.
string companyName, missionStatement;
int nonProfit;
'INSERT INTO Organizations (CompanyName, MissionStatement, NonProfit) VALUES(' + companyName
 + ', ' + missionStatement + ', ' + nonProfit + ');';

//Authorization Creation.
//Fields cannot be NULL.
int userId = 'SELECT user.Id FROM Users user WHERE user.username = ' + username + ');';

//organization created earlier.
int organizationId;
'INSERT INTO Auth (UserId, OrganizationId) VALUES(' + userId + ', ' + organizationId
 + ');';

//Task Creation.
//task has a max size of 50 chars.
string task;
'INSERT INTO Tasks (' + task + ');';

//Event Creation.
//Only Wage Info, and Recurring can be NULL
//Paid can only be 0, 1, or NULL.  1 = paid.
//For Experience 0 = entry level, other ints = years experience needed.
//For Recurring 1 = one time, 2 = monthly, 3 = weekly
//StartTime and EndTime are unix time.
int startTime, endTime, createdTime, paid, experience, recurring;
int organizationId = 'SELECT OrganizationId FROM Auth WHERE UserId = ' + userId + ';';
string location, wageInfo, eventDescription;
'INSERT INTO Events (Location, WageInfo, StartTime, EndTime, OrganizationId, EventDescription'
+ ', EventCreatorId, CreatedTime, Paid, Experience) VALUES('
+ location + ', ' + wageInfo + ', ' + startTime + ', ' + endTime + ', ' + organizationId
+ ', ' + eventDescription + ', ' + EventCreatorId + ', ' + createdTime + ', ' + paid
+ ', ' + experience + ');';

//Registration Creation
//Fields cannot be NULL
'INSERT INTO Registrations (EventId, UserId) VALUES (' + userId + ', ' + eventId + ');';


//Login Query
int userId = 'SELECT Users.Id FROM Users WHERE username = ' + username + ';';
string salt = 'SELECT Salt FROM Users WHERE Id = ' + userId + ';';
string hashPassword = 'SELECT Username.HashPassword FROM Users WHERE Username = '
+ username + ';';

//Event Query
int startTime, endTime;
'SELECT * FROM Events WHERE Events.StartTime > ' startTime + 'OR Events.EndTime < '
+ endTime + ';';

//EventTask Query
'SELECT * FROM EventTasks WHERE Id = ' + eventId + ';';

//View All Events Query
'SELECT CompanyName AS \'Company\', Location, EventDescription, StartTime, EndTime, Name AS \'Created By\' FROM Events AS E
	INNER JOIN Organizations AS O
		ON E.OrganizationId = O.Id
	INNER JOIN Users
		ON E.EventCreatorId = Users.Id;'
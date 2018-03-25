CREATE TABLE [dbo].Auth
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [UserId] INT NULL, 
    [OrganizationId] INT NULL, 
    [Auth] INT NULL, 
    CONSTRAINT FKUserAuth FOREIGN KEY (UserId) REFERENCES Users(Id),
	CONSTRAINT FKOrganizationsAuth FOREIGN KEY (OrganizationId) REFERENCES Organizations(Id)
)

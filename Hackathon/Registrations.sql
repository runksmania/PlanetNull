CREATE TABLE [dbo].[Registrations]
(
	[RegistrationId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [OrganizationId] INT NOT NULL, 
    [EventId] INT NOT NULL, 
    [UserId] INT NOT NULL, 
    CONSTRAINT FKOrganizationsRegistrations FOREIGN KEY (OrganizationId) REFERENCES Organizations(Id), 
    CONSTRAINT FKEventRegistrations FOREIGN KEY (EventId) REFERENCES [Events](Id), 
    CONSTRAINT FKUserRegistrations FOREIGN KEY (UserId) REFERENCES Users(Id)
)

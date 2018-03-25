CREATE TABLE [dbo].[Events]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Location] TEXT NOT NULL, 
    [JobType] INT NOT NULL, 
    [WageInfo] TEXT NOT NULL, 
    [Experience] INT NOT NULL, 
    [StartTime] INT NOT NULL, 
    [EndTime] INT NOT NULL, 
    [OrganizationId] INT NOT NULL, 
    [EventDescription] TEXT NOT NULL, 
    [CreatedTime] INT NOT NULL, 
    [LastModifiedTime] INT NOT NULL, 
    [EventCreatorId] INT NOT NULL, 
    CONSTRAINT FKEventsOrganizations FOREIGN KEY (OrganizationId) REFERENCES Organizations(Id), 
    CONSTRAINT FKEventsUsers FOREIGN KEY (EventCreatorId) REFERENCES Users(Id) 
)

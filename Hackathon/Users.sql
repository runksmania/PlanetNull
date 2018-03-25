CREATE TABLE [dbo].[Users]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] TEXT NOT NULL, 
    [Age] INT NOT NULL,
    [HashPassword] TEXT NOT NULL,
    [Salt] TEXT NOT NULL 
)

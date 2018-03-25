CREATE TABLE [dbo].[Event Types]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Paid] BIT NOT NULL, 
    [Experience] INT NOT NULL, 
    [Recurring] INT NOT NULL
)

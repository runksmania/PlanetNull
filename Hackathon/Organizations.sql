CREATE TABLE [dbo].[Organizations]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [CompanyName] TEXT NULL, 
    [MissionStatement] TEXT NULL, 
    [NonProfit] BIT NULL,
)

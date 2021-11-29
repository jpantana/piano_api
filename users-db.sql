-- Create new database called 'users'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT [name]
FROM sys.databases
WHERE [name] = N'users'
)
CREATE DATABASE users
GO

USE users
-- Create a table called '[Family]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[DBO].[User]', 'U') IS NOT NULL
DROP TABLE [dbo].[User]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[User]
(
  [UserID] INT IDENTITY NOT NULL PRIMARY KEY,
  -- Primary Key Columnn,
  [FirstName] NVARCHAR(255) NOT NULL,
  [LastName] NVARCHAR(255) NOT NULL,
  [Email] NVARCHAR(max),
  [Password] BINARY(64),
  [Description] NVARCHAR(max),
  [ImageURL] NVARCHAR(max),
  [CreateDate] DATE NOT NULL,
  [ModifyProfileDate] DATE,
  [LastLogin] DATE,
)
GO

USE users
GO


-- CREATE PROCEDURE dbo.USER_LOGIN
--   @lastname NVARCHAR(255),
--   @email NVARCHAR(max),
--   @password NVARCHAR(max)
-- AS
-- BEGIN

--   SET NOCOUNT ON

--   DECLARE @userID INT

--   IF EXISTS (SELECT TOP 1
--     UserID
--   FROM [dbo].[User]
--   WHERE LastName=@lastname
--     AND Email = @email
--   )
--     BEGIN
--     SET @userID=(SELECT UserID
--     FROM [dbo].[User]
--     WHERE LLastName=@lastname AND PasswordHash=HASHBYTES('SHA2_512', @password+CAST(Salt AS NVARCHAR(36))))

--     IF(@userID IS NULL)
--           SET @responseMessage='Incorrect password'
--     ELSE
--       SET @responseMessage='User successfully logged in'
--   END
--     ELSE
--       SET @responseMessage='Invalid login'
-- END
-- GO

CREATE PROCEDURE dbo.USER_CREATE
  @firstname NVARCHAR(255) = null,
  @lastname NVARCHAR(255) = null,
  @email NVARCHAR(max),
  @password NVARCHAR(max),
  @Description NVARCHAR(max),
  @imageURL NVARCHAR(max)
AS
BEGIN

  SET NOCOUNT ON

  DECLARE @userID INT, @responseMessage NVARCHAR(max);

  IF EXISTS (SELECT TOP 1
    UserID
  FROM [dbo].[User]
  WHERE LastName=@lastname
    AND Email = @email
  )
      BEGIN
    SET @responseMessage='There is already an account associated with this email.'
  END
    ELSE
      BEGIN
    INSERT INTO [user]
      ([FirstName], [LastName], [Email], [Password], [Description], [ImageURL], [CreateDate])
    VALUES
      (@firstname, @lastname, @email, HASHBYTES('SHA2_512', @password), @description, @imageURL, GETDATE())

    SET @responseMessage='User successfully created'
  END
END
GO

-- --seed data...

exec [dbo].[USER_CREATE]
  @firstname = 'J',
  @lastname = 'P',
  @email = 'j@p.com',
  @password = 'password#',
  @description = 'Muster the Roherim',
  @imageURL = ''

SELECT *
FROM [user]
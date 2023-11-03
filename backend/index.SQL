CREATE TABLE NOTES2 (
    note_id VARCHAR(200),
    title VARCHAR(200),
    description VARCHAR(200),
    content VARCHAR (300),
    created_at DATETIME DEFAULT GETDATE(),
    modified_at  DATETIME DEFAULT GETDATE()

)


CREATE PROCEDURE addNote
    @Title NVARCHAR(255),
    @Description NVARCHAR(255),
    @Content NVARCHAR(MAX)
AS
BEGIN

    INSERT INTO Notes (Title, Description, Content)
    VALUES (@Title, @Description, @Content);
END;



CREATE PROCEDURE FetchAllNotes
AS
BEGIN
    
    SELECT * FROM Notes;
END;

CREATE TABLE persons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstname TEXT,
      lastname TEXT,
      displayname TEXT,
      email TEXT,
      sex TEXT,
      birthdate TEXT,
      zodiacsign TEXT
    );

INSERT into persons (firstname, lastname, sex) values ('SOnja', 'Rogner', 'Female');
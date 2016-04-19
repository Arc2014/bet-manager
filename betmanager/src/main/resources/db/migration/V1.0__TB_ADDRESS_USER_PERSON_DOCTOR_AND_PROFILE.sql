CREATE TABLE IF NOT EXISTS profile (
  id INTEGER PRIMARY KEY AUTO_INCREMENT ,
  name varchar(255) not null
);

INSERT INTO profile(name) VALUES ('ADM');
INSERT INTO profile(name) VALUES ('USER');

CREATE TABLE IF NOT EXISTS address (
  id INTEGER PRIMARY KEY AUTO_INCREMENT ,
  street VARCHAR(255) not null,
  zip_code VARCHAR(10),
  city VARCHAR (255) not null,
  state VARCHAR(2) not null,
  number VARCHAR(10) not null,
  complement VARCHAR(20),
  reference VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS person (
  id INTEGER PRIMARY KEY AUTO_INCREMENT ,
  name varchar(255) not null,
  email varchar(30),
  phone varchar(20),
  cpf CHAR (11),
  gender VARCHAR (20),
  rg VARCHAR (20),
  birth_date DATE,
  creation_date TIMESTAMP,
  id_address INTEGER,
  CONSTRAINT fk_id_person_anddress FOREIGN KEY (id_address) REFERENCES address(id)
);

CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY AUTO_INCREMENT ,
  login varchar(20) not null,
  password varchar(50) not null,
  id_person INTEGER,
  CONSTRAINT fk_id_person_user FOREIGN KEY (id_person) REFERENCES person(id)
);

INSERT INTO person
   (id, name)
VALUES
    (12345, 'Administrador');

INSERT INTO user
   (login, password, id_person)
VALUES
    ('admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 12345);

CREATE TABLE IF NOT EXISTS user_profile (
  id INTEGER PRIMARY KEY AUTO_INCREMENT ,
  id_user INTEGER,
  id_profile INTEGER,
  CONSTRAINT fk_id_user_profile FOREIGN KEY (id_user) REFERENCES user(id),
  CONSTRAINT fk_id_profile_user FOREIGN KEY (id_profile) REFERENCES profile(id)
);

INSERT INTO user_profile
   (id_user, id_profile)
VALUES
    (
      (SELECT id FROM user  WHERE login = 'admin'),
      (SELECT id FROM profile WHERE name = 'ADM')
    );

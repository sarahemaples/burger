-- create burgers database
CREATE database burgers_db;
USE burgers_db;

-- create new table burgers
CREATE table burgers (
    id int auto_increment,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);
CREATE DATABASE moneymatters;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(128) NOT NULL,
    user_email VARCHAR(128) NOT NULL,
    user_password VARCHAR(128) NOT NULL,
    account_balance INTEGER
);

INSERT INTO users (user_name, user_email, user_password) VALUES('charlie', 'charlieiarboleda@gmail.com', 'test123456');

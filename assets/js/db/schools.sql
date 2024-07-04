-- SQL script to create and populate the database
CREATE DATABASE IF NOT EXISTS schools_db;

USE schools_db;

CREATE TABLE IF NOT EXISTS high_schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    province ENUM('Eastern Cape', 'Northern Cape', 'Free State', 'North West') NOT NULL,
    city VARCHAR(255),
    address VARCHAR(255)
);

INSERT INTO high_schools (name, province, city, address) VALUES
('School A', 'Eastern Cape', 'City A', 'Address A'),
('School B', 'Northern Cape', 'City B', 'Address B'),
('School C', 'Free State', 'City C', 'Address C'),
('School D', 'North West', 'City D', 'Address D');

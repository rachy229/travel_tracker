
CREATE TABLE "trip" (
"id" SERIAL PRIMARY KEY,
"location" VARCHAR(80),
"start_date" DATE NOT NULL,
"end_date" DATE NOT NULL
);

CREATE TABLE "hike" (
"id" SERIAL PRIMARY KEY,
"date" DATE NOT NULL,
"place" VARCHAR(100),
"details" VARCHAR(450),
"completed" BOOLEAN DEFAULT FALSE,
"trip_id" INT REFERENCES "trip");

CREATE TABLE "lodging" (
"id" SERIAL PRIMARY KEY,
"date" DATE NOT NULL,
"place" VARCHAR(100),
"details" VARCHAR(450),
"latitude" INT,
"longitude" INT,
"trip_id" INT REFERENCES "trip");

CREATE TABLE "flight" (
"id" SERIAL PRIMARY KEY,
"date" DATE NOT NULL,
"airline" VARCHAR(50),
"departure_time" TIME WITH TIME ZONE,
"arrival_time" TIME WITH TIME ZONE,
"flight_number" INT,
"trip_id" INT REFERENCES "trip");

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "clearance" INT DEFAULT 1
);
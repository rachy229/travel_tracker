
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
"trip_id" INT REFERENCES "trip" ON DELETE CASCADE);

CREATE TABLE "lodging" (
"id" SERIAL PRIMARY KEY,
"date" DATE NOT NULL,
"place" VARCHAR(100),
"details" VARCHAR(450),
"latitude" DECIMAL,
"longitude" DECIMAL,
"trip_id" INT REFERENCES "trip" ON DELETE CASCADE);

CREATE TABLE "flight" (
"id" SERIAL PRIMARY KEY,
"date" DATE NOT NULL,
"airline" VARCHAR(50),
"departure_time" TIME,
"arrival_time" TIME,
"flight_number" VARCHAR(20),
"trip_id" INT REFERENCES "trip" ON DELETE CASCADE);

CREATE TABLE "other" (
"id" SERIAL PRIMARY KEY,
"date" DATE,
"place" VARCHAR(80),
"details" VARCHAR(200),
"trip_id" SERIAL REFERENCES "trip" ON DELETE CASCADE);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "clearance" INT DEFAULT 1
);


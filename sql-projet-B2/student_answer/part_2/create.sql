CREATE TABLE genre (
    genre_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE keyword (
    keyword_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE language (
    language_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(10) NOT NULL
);

CREATE TABLE movie (
    movie_id INT AUTO_INCREMENT PRIMARY KEY,
    adult BOOLEAN,
    budget INT,
    original_language VARCHAR,
    original_title VARCHAR,
    overview VARCHAR,
    popularity REAL,
    status VARCHAR,
    title VARCHAR(255) NOT NULL,
    vote_average REAL,
    vote_count INT
    
);

CREATE TABLE departement (
    departement_id INT AUTO_INCREMENT PRIMARY KEY,
    departement_name VARCHAR(100) NOT NULL
);

CREATE TABLE production_company (
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    origin_country VARCHAR(100)
);

CREATE TABLE gender (
    gender_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE person (
    person_id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR,
    lastName VARCHAR,
    birthDate VARCHAR,
    popularity REAL
    gender_id INT,
    FOREIGN KEY (gender_id) REFERENCES gender(gender_id)
);

CREATE TABLE movie_genre (
    movie_id INT NOT NULL,
    genre_id INT NOT NULL,
    PRIMARY KEY (movie_id, genre_id),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id) ON DELETE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES genre(genre_id) ON DELETE CASCADE
);

CREATE TABLE movie_keyword (
    movie_id INT NOT NULL,
    keyword_id INT NOT NULL,
    PRIMARY KEY (movie_id, keyword_id),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id) ON DELETE CASCADE,
    FOREIGN KEY (keyword_id) REFERENCES keyword(keyword_id) ON DELETE CASCADE
);

CREATE TABLE movie_language (
    movie_id INT NOT NULL,
    language_id INT NOT NULL,
    PRIMARY KEY (movie_id, language_id),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE
);

CREATE TABLE movie_company (
    movie_id INT NOT NULL,
    company_id INT NOT NULL,
    PRIMARY KEY (movie_id, company_id),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id) ON DELETE CASCADE,
    FOREIGN KEY (company_id) REFERENCES production_company(company_id) ON DELETE CASCADE
);

CREATE TABLE movie_cast (
    movie_cast_id INT,
    movie_id INT NOT NULL,
    gender_id INT NOT NULL,
    person_id INT NOT NULL,
    character_name VARCHAR(255) NOT NULL,
    cast_order INT,
    PRIMARY KEY (movie_cast_id),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id) ON DELETE CASCADE,
    FOREIGN KEY (person_id) REFERENCES person(person_id) ON DELETE CASCADE
);

CREATE TABLE movie_crew (
    movie_id INT NOT NULL,
    person_id INT NOT NULL,
    departement_id INT NOT NULL,
    job VARCHAR(100) NOT NULL,
    PRIMARY KEY (movie_id, person_id, departement_id),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id) ON DELETE CASCADE,
    FOREIGN KEY (person_id) REFERENCES person(person_id) ON DELETE CASCADE,
    FOREIGN KEY (departement_id) REFERENCES departement(departement_id) ON DELETE CASCADE
);

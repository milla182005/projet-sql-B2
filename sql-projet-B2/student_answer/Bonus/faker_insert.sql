-- Insérer des données dans la table genre
INSERT INTO genre (name) VALUES
('Action'), ('Comedy'), ('Drama'), ('Horror'), ('Romance'),
('Thriller'), ('Sci-Fi'), ('Fantasy'), ('Documentary'), ('Animation'),
('Adventure'), ('Mystery'), ('Biography'), ('Crime'), ('Music');

-- Insérer des données dans la table language
INSERT INTO language (name) VALUES
('English'), ('French'), ('Spanish'), ('German'), ('Japanese'), 
('Chinese'), ('Italian'), ('Portuguese'), ('Russian'), ('Korean');

-- Insérer des données dans la table keyword
INSERT INTO keyword (name) VALUES
('Adventure'), ('Sci-Fi'), ('Thriller'), ('Fantasy'), ('Mystery'),
('Love'), ('Crime'), ('Family'), ('Friendship'), ('Space'), 
('Superhero'), ('War'), ('Magic'), ('Journey'), ('Alien');

-- Insérer des données dans la table department
INSERT INTO departement (name) VALUES
('Directing'), ('Writing'), ('Production'), ('Camera'), ('Editing'), 
('Art'), ('Costume & Make-Up'), ('Sound'), ('Visual Effects');

-- Insérer des données dans la table production_company
INSERT INTO production_company (name, country) VALUES
('Universal Pictures', 'United States'), ('Warner Bros.', 'United States'), 
('20th Century Fox', 'United States'), ('Paramount Pictures', 'United States'),
('Sony Pictures', 'United States'), ('Walt Disney Pictures', 'United States'),
('Metro-Goldwyn-Mayer', 'United States'), ('DreamWorks', 'United States'),
('Lionsgate', 'United States'), ('Studio Ghibli', 'Japan'),
('Canal+', 'France'), ('EuropaCorp', 'France'), 
('Constantin Film', 'Germany'), ('Toho', 'Japan'), ('CJ Entertainment', 'South Korea');

-- Insérer des données dans la table gender
INSERT INTO gender (name) VALUES ('Male'), ('Female'), ('Non-Binary');

-- Insérer des données dans la table person
INSERT INTO person (name, gender_id, birth_date, biography) VALUES
('John Doe', 1, '1985-04-12', 'A talented actor known for various roles in action movies.'),
('Jane Smith', 2, '1990-09-25', 'Award-winning director and producer in the horror genre.'),
('Alice Brown', 2, '1975-11-10', 'Editor with a keen eye for detail in documentaries.'),
('Bob White', 1, '1963-01-03', 'Veteran sound designer with extensive experience.'),
('Charlie Green', 1, '1980-08-20', 'Experienced cinematographer with expertise in thrillers');

-- Générer des films fictifs pour la table movie
INSERT INTO movie (title, release_date, budget, revenue, runtime, overview, tagline) VALUES
('The Great Adventure', '2018-07-20', 20000000, 500000000, 120, 'An epic journey across unknown lands.', 'Discover the impossible.'),
('Space Odyssey', '2019-05-15', 80000000, 1000000000, 150, 'A thrilling adventure through space and time.', 'To the stars and beyond.'),
('Love Unbound', '2021-02-14', 10000000, 90000000, 90, 'A romantic story that knows no limits.', 'Boundless love.'),
('Alien Encounter', '2020-10-31', 50000000, 800000000, 140, 'Humans meet aliens in an unexpected encounter.', 'We are not alone.'),
('Mystery of the Deep', '2017-04-21', 15000000, 250000000, 100, 'A mystery set in the depths of the ocean.', 'What lies beneath.');

-- Créer des associations entre films et genres
INSERT INTO movie_genre (movie_id, genre_id) VALUES
(1, 1), (1, 11), (2, 7), (3, 5), (4, 7), (4, 4), (5, 12);

-- Associer des mots-clés à des films
INSERT INTO movie_keyword (movie_id, keyword_id) VALUES
(1, 1), (1, 10), (2, 10), (2, 15), (3, 6), (4, 14), (5, 12);

-- Associer des langues aux films
INSERT INTO movie_language (movie_id, language_id) VALUES
(1, 1), (1, 2), (2, 1), (2, 3), (3, 2), (4, 1), (5, 4);

-- Associer des compagnies de production aux films
INSERT INTO movie_company (movie_id, production_company_id) VALUES
(1, 1), (2, 5), (3, 6), (4, 8), (5, 3);

INSERT INTO movie_cast (movie_id, person_id, character_name, cast_order) VALUES
(1, 1, 'Hero', 1), (1, 2, 'Villain', 2), (2, 3, 'Captain', 1), (3, 4, 'Romantic Lead', 1), (4, 5, 'Alien Commander', 1);

INSERT INTO movie_crew (movie_id, person_id, departement_id, job_title) VALUES
(1, 1, 1, 'Director'), (1, 2, 3, 'Producer'), (2, 3, 2, 'Screenwriter'), (3, 4, 5, 'Editor'), (4, 5, 4, 'Cinematographer');


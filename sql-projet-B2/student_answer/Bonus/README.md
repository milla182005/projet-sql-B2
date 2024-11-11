# Remplissage de Base de Données pour `movie_db`

Ce script SQL permet de remplir la base de données `movie_db` avec des données fictives cohérentes.

## Prérequis

- MySQL en cours d'exécution avec une base de données `movie_db`.
- Les tables doivent être créées avec les structures correspondant à chaque table référencée (voir script de création des tables).

## Utilisation

1. Assurez-vous que la base de données `movie_db` est configurée et que les tables ont été créées.
2. Importez le script `faker_insert.sql` dans MySQL pour remplir les tables :

```bash
mysql -u root -p movie_db < faker_insert.sql

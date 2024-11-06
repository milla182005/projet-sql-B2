const q2 = `SELECT name AS 'Pokemon', 
                   printf('%d m', height) AS 'Taille', 
                   printf('%d kg', weight) AS 'Poids'
            FROM pokemon
            WHERE height = (SELECT height FROM pokemon WHERE pokemon_id = 542)
            ORDER BY weight ASC;
`;

module.exports = q2;

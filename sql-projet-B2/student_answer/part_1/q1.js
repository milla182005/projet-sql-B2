const q1 = `SELECT pokedex_number AS  'N°' 
                   name AS 'Pokemon'
                   description AS 'Description'
            FROM pokemon
            WHERE LENGTH(description) < 75
            ORDER BY pokedex_number ASC;`;

module.exports = q1;

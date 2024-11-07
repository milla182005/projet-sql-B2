const q7 = `SELECT 
    pokemon.pokedex_number AS 'N°',
    pokemon.name AS 'Nom du pokemon',
    t1.name AS 'Type 1',
    COALESCE(t2.name, 'N/A') AS 'Type 2'
FROM 
    pokemon 
JOIN 
    pokemon_type pt1 ON pokemon.pokemon_id = pt1.pokemon_id AND pt1.slot = 1
JOIN 
    type t1 ON pt1.type_id = t1.type_id
LEFT JOIN 
    pokemon_type pt2 ON pokemon.pokemon_id = pt2.pokemon_id AND pt2.slot = 2
LEFT JOIN 
    type t2 ON pt2.type_id = t2.type_id
ORDER BY 
    pokemon.pokedex_number ASC;
`;

module.exports = q7;
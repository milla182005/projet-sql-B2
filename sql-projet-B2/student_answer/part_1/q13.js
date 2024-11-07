const q13 = `SELECT 
    pokemon.name AS 'Nom du pokemon',
    COUNT(pokemon_move.move_id) AS 'Nombre capacité avec le même type'
FROM 
    pokemon
JOIN 
    pokemon_type ON pokemon.pokemon_id = pokemon_type.pokemon_id
JOIN 
    move ON move.type_id = pokemon_type.type_id  
JOIN 
    pokemon_move ON pokemon.pokemon_id = pokemon_move.pokemon_id AND pokemon_move.move_id = move.move_id
GROUP BY 
    pokemon.pokemon_id
ORDER BY 
    COUNT(pokemon_move.move_id) DESC,  
    pokemon.name ASC  
LIMIT 10;  
`;

module.exports = q13;

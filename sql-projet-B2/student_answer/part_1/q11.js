const q11 = `SELECT 
    pokemon.name AS 'Pokemon', 
    COUNT(pokemon_move.move_id) AS 'Nombre de capacités'
FROM 
    pokemon
LEFT JOIN 
    pokemon_move ON pokemon.pokemon_id = pokemon_move.pokemon_id
GROUP BY 
    pokemon.pokemon_id
ORDER BY 
    COUNT(pokemon_move.move_id) DESC

`;

module.exports = q11;

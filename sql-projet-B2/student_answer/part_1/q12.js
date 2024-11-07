const q12 = `SELECT 
    pokemon.pokedex_number AS 'N°',
    pokemon.name AS 'Nom du pokemon',
    ability.name AS 'Nom du talent'
FROM 
    pokemon
JOIN 
    pokemon_type ON pokemon.pokemon_id = pokemon_type.pokemon_id
JOIN 
    type ON pokemon_type.type_id = type.type_id
JOIN 
    pokemon_ability ON pokemon.pokemon_id = pokemon_ability.pokemon_id
JOIN 
    ability ON pokemon_ability.ability_id = ability.ability_id
WHERE 
    type.name = 'Acier'
  
`;

module.exports = q12;

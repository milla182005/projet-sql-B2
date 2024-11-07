const q15 = `SELECT 
    t.name AS 'Type',
    
    
    (
        SELECT SUM(bs.hp + bs.attack + bs.defense + bs.spe_attack + bs.spe_defense + bs.speed) 
        FROM pokemon p
        JOIN base_stat bs ON p.pokemon_id = bs.pokemon_id
        JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id
        WHERE pt.type_id = t.type_id
        AND p.pokedex_number BETWEEN 1 AND 151
    ) / 
    (
        SELECT COUNT(DISTINCT p.pokemon_id) 
        FROM pokemon p
        JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id
        WHERE pt.type_id = t.type_id
        AND p.pokedex_number BETWEEN 1 AND 151
    ) AS 'Moyenne gen 1 total stat',

    
    (
        SELECT SUM(bs.hp + bs.attack + bs.defense + bs.spe_attack + bs.spe_defense + bs.speed) 
        FROM pokemon p
        JOIN base_stat bs ON p.pokemon_id = bs.pokemon_id
        JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id
        WHERE pt.type_id = t.type_id
        AND p.pokedex_number BETWEEN 252 AND 386
    ) / 
    (
        SELECT COUNT(DISTINCT p.pokemon_id) 
        FROM pokemon p
        JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id
        WHERE pt.type_id = t.type_id
        AND p.pokedex_number BETWEEN 252 AND 386
    ) AS 'Moyenne gen 3 total stat',

    
    (
        SELECT SUM(bs.hp + bs.attack + bs.defense + bs.spe_attack + bs.spe_defense + bs.speed) 
        FROM pokemon p
        JOIN base_stat bs ON p.pokemon_id = bs.pokemon_id
        JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id
        WHERE pt.type_id = t.type_id
        AND p.pokedex_number BETWEEN 494 AND 649
    ) / 
    (
        SELECT COUNT(DISTINCT p.pokemon_id) 
        FROM pokemon p
        JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id
        WHERE pt.type_id = t.type_id
        AND p.pokedex_number BETWEEN 494 AND 649
    ) AS 'Moyenne gen 5 total stat',

    
    (
        SELECT SUM(bs.hp + bs.attack + bs.defense + bs.spe_attack + bs.spe_defense + bs.speed) 
        FROM pokemon p
        JOIN base_stat bs ON p.pokemon_id = bs.pokemon_id
        JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id
        WHERE pt.type_id = t.type_id
        AND p.pokedex_number BETWEEN 722 AND 807
    ) / 
    (
        SELECT COUNT(DISTINCT p.pokemon_id) 
        FROM pokemon p
        JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id
        WHERE pt.type_id = t.type_id
        AND p.pokedex_number BETWEEN 722 AND 807
    ) AS 'Moyenne gen 7 total stat'

FROM 
    type t
ORDER BY 
    t.type_id;
`;

module.exports = q15;

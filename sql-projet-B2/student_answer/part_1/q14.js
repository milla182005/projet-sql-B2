const q14 = `SELECT 
    t.name AS 'Type', 
    
    (SELECT p1.name 
     FROM pokemon p1
     JOIN base_stat bs1 ON p1.pokemon_id = bs1.pokemon_id
     JOIN pokemon_type pt1 ON p1.pokemon_id = pt1.pokemon_id
     WHERE pt1.type_id = t.type_id
     ORDER BY bs1.hp DESC LIMIT 1) AS 'HP',
    
    (SELECT p2.name 
     FROM pokemon p2
     JOIN base_stat bs2 ON p2.pokemon_id = bs2.pokemon_id
     JOIN pokemon_type pt2 ON p2.pokemon_id = pt2.pokemon_id
     WHERE pt2.type_id = t.type_id
     ORDER BY bs2.attack DESC LIMIT 1) AS 'Attaque',
    
    (SELECT p3.name 
     FROM pokemon p3
     JOIN base_stat bs3 ON p3.pokemon_id = bs3.pokemon_id
     JOIN pokemon_type pt3 ON p3.pokemon_id = pt3.pokemon_id
     WHERE pt3.type_id = t.type_id
     ORDER BY bs3.defense DESC LIMIT 1) AS 'Défense',
    
    (SELECT p4.name 
     FROM pokemon p4
     JOIN base_stat bs4 ON p4.pokemon_id = bs4.pokemon_id
     JOIN pokemon_type pt4 ON p4.pokemon_id = pt4.pokemon_id
     WHERE pt4.type_id = t.type_id
     ORDER BY bs4.spe_attack DESC LIMIT 1) AS 'Spé. Attaque',
    
    (SELECT p5.name 
     FROM pokemon p5
     JOIN base_stat bs5 ON p5.pokemon_id = bs5.pokemon_id
     JOIN pokemon_type pt5 ON p5.pokemon_id = pt5.pokemon_id
     WHERE pt5.type_id = t.type_id
     ORDER BY bs5.spe_defense DESC LIMIT 1) AS 'Spé. Défense',
    
    (SELECT p6.name 
     FROM pokemon p6
     JOIN base_stat bs6 ON p6.pokemon_id = bs6.pokemon_id
     JOIN pokemon_type pt6 ON p6.pokemon_id = pt6.pokemon_id
     WHERE pt6.type_id = t.type_id
     ORDER BY bs6.speed DESC LIMIT 1) AS 'Vitesse'
FROM 
    type t
ORDER BY 
    t.type_id;
`;

module.exports = q14;
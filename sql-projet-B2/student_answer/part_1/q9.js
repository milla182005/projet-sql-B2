const q9 = `SELECT 
    t.name AS 'Type',
    m.name AS 'Capacité',
    m.power AS 'Puissance',
    m.accuracy AS 'Précision',
    m.description AS 'Description'
FROM 
    pokemon p
JOIN 
    pokemon_type pt ON p.pokemon_id = pt.pokemon_id
JOIN 
    type t ON pt.type_id = t.type_id
JOIN 
    move m ON m.type_id = t.type_id  
WHERE 
    m.power > 100
    AND m.accuracy >= 90
    AND m.description NOT LIKE '%tour%'
ORDER BY 
    m.power DESC;
`;

module.exports = q9;
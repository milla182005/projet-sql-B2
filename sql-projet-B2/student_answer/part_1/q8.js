const q8 = `SELECT 
    t.name AS 'Nom du type',
    COUNT(pt.pokemon_id) AS 'Nombre de pokemon', 
    SUM(CASE WHEN pt.slot = 1 THEN 1 ELSE 0 END) AS 'Nombre de pokemon avec le type slot 1',
    SUM(CASE WHEN pt.slot = 2 THEN 1 ELSE 0 END) AS 'Nombre de pokemon avec le type slot 2'
FROM 
    type t
JOIN 
    pokemon_type pt ON t.type_id = pt.type_id
JOIN 
    pokemon p ON pt.pokemon_id = p.pokemon_id
GROUP BY 
    t.name
ORDER BY 
    COUNT(pt.pokemon_id) DESC, 
    SUM(CASE WHEN pt.slot = 1 THEN 1 ELSE 0 END) DESC;  `;

module.exports = q8;

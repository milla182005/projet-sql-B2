const q17 = `SELECT 
    t.name AS 'Type', 
    COUNT(m.move_id) AS 'Nombre capacités',

    ROUND(SUM(CASE WHEN m.accuracy = 100 THEN 1 ELSE 0 END) * 100.0 / COUNT(m.move_id), 2) AS 'Capacité précision 100%',
    
    ROUND(SUM(CASE WHEN m.category = 'Physique' THEN 1 ELSE 0 END) * 100.0 / COUNT(m.move_id), 2) AS 'Pourcentage capacité physique',

    ROUND(SUM(CASE WHEN m.category = 'Spéciale' THEN 1 ELSE 0 END) * 100.0 / COUNT(m.move_id), 2) AS 'Pourcentage capacité spéciale',

    ROUND(SUM(CASE WHEN m.category = 'Statut' THEN 1 ELSE 0 END) * 100.0 / COUNT(m.move_id), 2) AS 'Pourcentage capacité statut',

    ROUND(SUM(CASE WHEN m.power <= 40 AND m.power IS NOT NULL THEN 1 ELSE 0 END) * 100.0 / COUNT(m.move_id), 2) AS 'Pourcentage capacité faible',

    
    ROUND(SUM(CASE WHEN m.power >= 100 AND m.power IS NOT NULL THEN 1 ELSE 0 END) * 100.0 / COUNT(m.move_id), 2) AS 'Pourcentage capacité forte'

FROM 
    type t
JOIN 
    move m ON t.type_id = m.type_id
GROUP BY 
    t.name
ORDER BY 
    t.name;
`;

module.exports = q17;

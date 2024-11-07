const q10 = `SELECT 
    t.name AS 'Type', 
   
    (SELECT m1.name 
     FROM move m1
     JOIN pokemon_type pt1 ON m1.type_id = pt1.type_id
     WHERE pt1.type_id = t.type_id
     ORDER BY m1.power DESC LIMIT 1) AS 'Meilleure capacité',
    (SELECT m1.power 
     FROM move m1
     JOIN pokemon_type pt1 ON m1.type_id = pt1.type_id
     WHERE pt1.type_id = t.type_id
     ORDER BY m1.power DESC LIMIT 1) AS 'Meilleure puissance',
 
    COALESCE(
        (SELECT m2.name 
         FROM move m2
         JOIN pokemon_type pt2 ON m2.type_id = pt2.type_id
         WHERE pt2.type_id = t.type_id AND m2.power IS NOT NULL
         ORDER BY m2.power ASC LIMIT 1), 
        'Aucune capacité') AS 'Pire capacité',
    COALESCE(
        (SELECT m2.power 
         FROM move m2
         JOIN pokemon_type pt2 ON m2.type_id = pt2.type_id
         WHERE pt2.type_id = t.type_id AND m2.power IS NOT NULL
         ORDER BY m2.power ASC LIMIT 1), 
        'N/A') AS 'Pire puissance'
FROM 
    type t
ORDER BY 
    t.name;
`;

module.exports = q10;

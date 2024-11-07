const q16 = `WITH TalentStats AS (
    
    SELECT 
        a.name AS Talent,
        COUNT(DISTINCT p.pokemon_id) AS Nombre_possedant_talent,
        t.name AS Type,
        SUM(CASE WHEN pa.is_hidden = 1 THEN 1 ELSE 0 END) AS Nombre_possession_cachee,
        COUNT(DISTINCT p.pokemon_id) * 100.0 / (SELECT COUNT(*) FROM pokemon) AS Pourcentage_possession
    FROM 
        ability a
    JOIN 
        pokemon_ability pa ON a.ability_id = pa.ability_id
    JOIN 
        pokemon p ON pa.pokemon_id = p.pokemon_id
    JOIN 
        pokemon_type pt ON p.pokemon_id = pt.pokemon_id
    JOIN 
        type t ON pt.type_id = t.type_id
    GROUP BY 
        a.ability_id, t.type_id
),

TopTypeByTalent AS (
    SELECT 
        Talent,
        Type,
        MAX(Nombre_possedant_talent) AS Max_nombre_possedant_talent
    FROM 
        TalentStats
    GROUP BY 
        Talent, Type
),

MaxTalentPossession AS (
    SELECT 
        MAX(Nombre_possedant_talent) AS Max_possession_talent
    FROM 
        TalentStats
)

SELECT 
    ts.Talent,
    ts.Nombre_possedant_talent AS 'Nombre possédant le talent',
    tt.Type AS 'Type possédant le plus le talent',
    ROUND(ts.Pourcentage_possession, 2) AS 'Pourcentage possession',
    ROUND(ts.Nombre_possession_cachee * 100.0 / ts.Nombre_possedant_talent, 2) AS 'Pourcentage possession cachée',
    ROUND(ts.Nombre_possedant_talent * 100.0 / (SELECT Max_possession_talent FROM MaxTalentPossession), 2) AS 'Pourcentage par rapport au talent le plus possédé'
FROM 
    TalentStats ts
JOIN 
    TopTypeByTalent tt ON ts.Talent = tt.Talent AND ts.Nombre_possedant_talent = tt.Max_nombre_possedant_talent
WHERE 
    ts.Nombre_possedant_talent > 0
ORDER BY 
    ts.Talent ASC;
`;

module.exports = q16;

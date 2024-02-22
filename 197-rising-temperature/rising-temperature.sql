SELECT w2.id id
FROM Weather w1, Weather w2
WHERE w1.recordDate::date - w2.recordDate::date = -1 AND
    w1.temperature < w2.temperature
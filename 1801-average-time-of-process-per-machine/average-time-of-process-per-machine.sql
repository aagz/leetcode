SELECT machine_id, ROUND(AVG(processing_time) * 1000) / 1000 processing_time
FROM (
    SELECT a1.machine_id, a2.timestamp - a1.timestamp processing_time
    FROM Activity a1, Activity a2
    WHERE a1.machine_id = a2.machine_id AND
        a1.process_id = a2.process_id AND
        a1.activity_type = 'start' AND
        a2.activity_type = 'end'
) s
GROUP BY machine_id

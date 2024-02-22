SELECT d.name Department, sq.name Employee, sq.salary Salary 
FROM (
    SELECT
        DENSE_RANK() OVER (
            PARTITION BY departmentid
            ORDER BY salary DESC
        ) as s,
        e.departmentid, e.salary, e.name
    FROM Employee e) sq, Department d
WHERE sq.s <= 3 AND
    sq.departmentid = d.id

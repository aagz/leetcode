SELECT customer_id, COUNT(v.visit_id) count_no_trans
FROM Visits v
WHERE v.visit_id NOT IN (select visit_id from Transactions)
GROUP BY customer_id
1683: select tweet_id from tweets where length(content) > 15;
1045: select customer_id from customer group by customer_id having count(distinct product_key) = (select count(distinct product_key) from product);

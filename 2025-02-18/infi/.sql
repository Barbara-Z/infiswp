select productName, min(price) from products;
select * from products where price = (select min(price) from products);
select * from persons where birthdate = (select max(birthdate) from persons where zodiacsign = 'Sagittarius');
select * from products order by price limit 5;
select min(price) as ändertNurDenNamenDerÜberschrift, CategoryID from products;
select min(price) as smallestPrice, CategoryID from products group by categoryid; 
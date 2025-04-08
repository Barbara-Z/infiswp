1068: SELECT product_name, year, price FROM Sales JOIN Product ON sales.product_id = product.product_id;
1378: select unique_id, name from employeeuni right join employees on employeeuni.id = employees.id;
577: select name, bonus.bonus from employee left join bonus on employee.empID = bonus.empID where bonus.bonus < 1000 or bonus is null;
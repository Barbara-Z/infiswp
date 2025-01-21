-- database: c:\Users\Barbara\Desktop\Schule\infiswp\infiswp\2025-01-14\w3schools.sqlite
INSERT INTO
    customers (
        CustomerName,
        ContactName,
        Address,
        City,
        PostalCode,
        Country
    )
values
    (
        'Barbara Zalud',
        'Tereza Kubek',
        'Spengergasse',
        'Wien',
        1050,
        'Österreich'
    );

INSERT INTO
    suppliers (
        SupplierName,
        ContactName,
        Address,
        City,
        PostalCode,
        Country,
        Phone
    )
VALUES
    (
        'Kekse by Tereza',
        'Tereza Kubek',
        'Spengergasse',
        'Wien',
        1050,
        'Österreich',
        '123 000 000'
    );

INSERT INTO
    products (ProductName, SupplierID, CategoryID, Unit, Price)
VALUES
    ('Kekse', 1, 1, 'Stück', 1.99);

INSERT INTO
    customers (CustomerName, City, PostalCode, Country)
VALUES
    ('Sonja Rogner', 'Wien', 1050, 'Österreich');

INSERT INTO
    employees (LastName, FirstName, Birthdate)
values
    ('Zalud', 'Barbara', '1990-01-01');

INSERT INTO
    products (ProductName, SupplierID, Price)
VALUES
    ('SanBueno', 1, 1.99);

INSERT INTO
    shippers (ShipperName)
VALUES
    ('Schule 123');

INSERT INTO
    products (ProductName, CategoryID, Price)
VALUES
    ('Lalala', 5, 1.99);

SELECT
    ProductName
FROM
    products
where
    Unit is null;

SELECT
    *
from
    customers
where
    ContactName is null order by Country;

SELECT
    *
from
    products
where
    Unit is not null;

SELECT
    ShipperName
from
    shippers
where
    Phone is not null order by ShipperID desc;

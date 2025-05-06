-- Aufgabe 1: Zeige alle Kunden mit ihren Bestellungen an.
-- Lösung:
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
-- Erklärung: Verbindet die Tabelle Customers mit Orders über CustomerID, um alle Kunden mit ihren Bestellungen anzuzeigen.

-- Aufgabe 2: Zeige alle Kunden an, auch wenn sie keine Bestellungen haben.
-- Lösung:
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
-- Erklärung: Zeigt alle Kunden aus Customers an und ergänzt Bestellinformationen aus Orders, falls vorhanden. Kunden ohne Bestellungen werden trotzdem angezeigt.

-- Aufgabe 3: Zeige alle Produkte mit den zugehörigen Bestelldetails.
-- Lösung:
SELECT Products.ProductName, OrderDetails.Quantity, OrderDetails.UnitPrice
FROM Products
JOIN OrderDetails ON Products.ProductID = OrderDetails.ProductID;
-- Erklärung: Verbindet Products mit OrderDetails über ProductID, um Produktinformationen mit Bestellmengen und Preisen zu kombinieren.

-- Aufgabe 4: Zeige alle Bestellungen mit Kunden- und Mitarbeiterinformationen.
-- Lösung:
SELECT Orders.OrderID, Customers.CustomerName, Employees.FirstName || ' ' || Employees.LastName AS EmployeeName
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID;
-- Erklärung: Verknüpft Orders mit Customers und Employees, um Bestellungen mit Kunden- und zuständigen Mitarbeiterinformationen anzuzeigen.

-- Aufgabe 6: Zeige alle Produkte und deren Kategorien.
-- Lösung:
SELECT Products.ProductName, Categories.CategoryName
FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID;
-- Erklärung: Verbindet Products mit Categories über CategoryID, um Produktnamen mit Kategorienamen anzuzeigen.

-- Aufgabe 7: Zeige alle Kunden und deren Bestellungen, auch wenn keine Bestellungen vorhanden sind.
-- Lösung:
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
-- Erklärung: Zeigt alle Kunden an und ergänzt Bestellinformationen, falls vorhanden.

-- Aufgabe 8: Zeige alle Bestellungen und die dazugehörigen Produkte.
-- Lösung:
SELECT Orders.OrderID, Products.ProductName, OrderDetails.Quantity
FROM Orders
JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
JOIN Products ON OrderDetails.ProductID = Products.ProductID;
-- Erklärung: Verknüpft Orders mit OrderDetails und Products, um Bestellungen mit Produktnamen und Mengen anzuzeigen.

-- Aufgabe 9: Zeige alle Lieferanten und deren Produkte.
-- Lösung:
SELECT Suppliers.CompanyName, Products.ProductName
FROM Suppliers
JOIN Products ON Suppliers.SupplierID = Products.SupplierID;
-- Erklärung: Verbindet Suppliers mit Products, um Lieferanten und deren Produkte anzuzeigen.

-- Aufgabe 10: Zeige alle Kunden, die keine Bestellungen haben.
-- Lösung:
SELECT Customers.CustomerName
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE Orders.OrderID IS NULL;
-- Erklärung: Zeigt Kunden ohne Bestellungen, da keine passenden Einträge in Orders existieren.

-- Aufgabe 11: Zeige alle Produkte, die nie bestellt wurden.
-- Lösung:
SELECT Products.ProductName
FROM Products
LEFT JOIN OrderDetails ON Products.ProductID = OrderDetails.ProductID
WHERE OrderDetails.OrderID IS NULL;
-- Erklärung: Zeigt Produkte ohne Bestellungen, da keine passenden Einträge in OrderDetails existieren.

-- Aufgabe 12: Zeige alle Bestellungen mit Kundenname und Versanddatum, sortiert nach Versanddatum.
-- Lösung:
SELECT Orders.OrderID, Customers.CustomerName, Orders.ShippedDate
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
ORDER BY Orders.ShippedDate;
-- Erklärung: Verbindet Orders mit Customers und sortiert die Ergebnisse nach Versanddatum.

-- Aufgabe 15: Zeige alle Produkte mit ihrem Lieferanten und Kategorie.
-- Lösung:
SELECT Products.ProductName, Suppliers.CompanyName AS Lieferant, Categories.CategoryName
FROM Products
JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID
JOIN Categories ON Products.CategoryID = Categories.CategoryID;
-- Erklärung: Verbindet Products mit Suppliers und Categories, um umfassende Produktinformationen anzuzeigen.

-- Aufgabe 16: Zeige alle Kunden und deren Bestellungen aus dem Jahr 2023.
-- Lösung:
SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE strftime('%Y', Orders.OrderDate) = '2023';
-- Erklärung: Filtert Bestellungen nach dem Jahr 2023 und zeigt Kunden mit ihren Bestellungen.

-- Aufgabe 19: Zeige alle Mitarbeiter und deren Vorgesetzten, auch wenn kein Vorgesetzter vorhanden ist.
-- Lösung:
SELECT e1.FirstName || ' ' || e1.LastName AS Mitarbeiter, e2.FirstName || ' ' || e2.LastName AS Vorgesetzter
FROM Employees e1
LEFT JOIN Employees e2 ON e1.ReportsTo = e2.EmployeeID;
-- Erklärung: Verbindet Mitarbeiter mit ihren Vorgesetzten, zeigt auch Mitarbeiter ohne Vorgesetzten.

-- Aufgabe 20: Zeige alle Fragen und deren zugehörige Kategorien aus fragen.sqlite.
-- Lösung:
SELECT Fragen.FrageText, Kategorien.KategorieName
FROM Fragen
JOIN Kategorien ON Fragen.KategorieID = Kategorien.KategorieID;
-- Erklärung: Verbindet die Tabelle Fragen mit Kategorien, um Fragen mit ihren Kategorienamen anzuzeigen.

-- Ende der Aufgaben mit Lösungen und präzisen Erklärungen

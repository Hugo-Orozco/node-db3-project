-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT
    a.ProductName,
    b.CategoryName
FROM Product as a
LEFT JOIN Category as b
ON a.CategoryId = b.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT
    a.Id,
    b.CompanyName
FROM `Order` as a
LEFT JOIN Shipper as b
ON a.ShipVia = b.Id
WHERE a.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT
    b.ProductName,
    a.Quantity
FROM OrderDetail as a
LEFT JOIN Product as b
ON a.ProductId = b.Id
WHERE a.OrderId = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT
    a.Id as OrderId,
    b.CompanyName,
    c.LastName
FROM `Order` as a
LEFT JOIN Customer as b
ON a.CustomerId = b.Id
LEFT JOIN Employee as c
ON a.EmployeeId = c.Id

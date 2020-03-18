-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT Product.ProductName, Category.CategoryName
FROM Product
JOIN Category
ON Product.CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT Id, ShipName 
FROM [Order]
WHERE ShippedDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT Product.ProductName, Product.QuantityPerUnit
FROM Product
JOIN OrderDetail
ON Product.Id = OrderDetail.ProductId
WHERE OrderDetail.OrderId = 10251
ORDER BY ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT [Order].Id as 'Order ID', Customer.CompanyName as 'Customer Company Name', Employee.LastName as 'Employee Last Name'
FROM [Order]
JOIN Customer
ON [Order].CustomerId = Customer.Id
JOIN Employee
ON [Order].EmployeeId = Employee.Id;

-- [STRETCH] Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.

SELECT CategoryName as Category, COUNT(CategoryName) as Count
FROM Categories
GROUP BY CategoryName
ORDER BY CategoryName;

-- [STRETCH] Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

SELECT OrderID, COUNT(OrderID) as ItemCount
FROM Orders
GROUP BY OrderID
ORDER BY OrderID;
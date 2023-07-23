
const products = [
    { name: 'Product A', price: 50, category: 'Electronics' },
    { name: 'Product B', price: 25, category: 'Apparel' },
    { name: 'Product C', price: 100, category: 'Electronics' },
    { name: 'Product D', price: 100, category: 'Furniture' },
    { name: 'Product E', price: 125, category: 'Clothing' }
  ];
  
  const electronics = products.filter(product => product.category === 'Electronics');  //Checks if the product's category is Electronics
  

  

  const employees = [
    { id: 1, name: 'Alice', department: 'Sales' },
    { id: 2, name: 'Bob', department: 'Marketing' },
    { id: 3, name: 'Charlie', department: 'Sales' },
    { id: 4, name: 'Dave', department: 'Engineering' },
    { id: 5, name: 'Eve', department: 'Marketing' }
  ];
  
  const marketingEmployees = employees.filter(employee => employee.department === 'Marketing'); //Checks if the employee's department is marketing
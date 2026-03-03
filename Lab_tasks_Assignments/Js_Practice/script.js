//sample data to use for exercises   ---- javascript arrays of objects practice tasks

const users = [
  {
    id: 1,
    name: "John",
    age: 25,
    email: "john@example.com",
    isActive: true,
    tags: ["developer", "javascript"],
  },
  {
    id: 2,
    name: "Jane",
    age: 32,
    email: "jane@example.com",
    isActive: false,
    tags: ["designer", "css"],
  },
  {
    id: 3,
    name: "Bob",
    age: 41,
    email: "bob@example.com",
    isActive: true,
    tags: ["developer", "python"],
  },
  {
    id: 4,
    name: "Mary",
    age: 28,
    email: "mary@example.com",
    isActive: true,
    tags: ["manager", "leadership"],
  },
  {
    id: 5,
    name: "Alex",
    age: 19,
    email: "alex@example.com",
    isActive: false,
    tags: ["intern", "student"],
  },
];

///

const products = [
  {
    id: 101,
    name: "Laptop",
    price: 999.99,
    category: "electronics",
    stock: 15,
  },
  {
    id: 102,
    name: "Smartphone",
    price: 699.99,
    category: "electronics",
    stock: 25,
  },
  { id: 103, name: "Book", price: 19.99, category: "books", stock: 50 },
  {
    id: 104,
    name: "Headphones",
    price: 149.99,
    category: "electronics",
    stock: 10,
  },
  { id: 105, name: "T-shirt", price: 29.99, category: "clothing", stock: 100 },
  { id: 106, name: "Shoes", price: 79.99, category: "clothing", stock: 30 },
];

///

const orders = [
  {
    id: 1001,
    userId: 1,
    products: [101, 104],
    totalAmount: 1149.98,
    date: "2023-01-15",
  },
  {
    id: 1002,
    userId: 3,
    products: [102],
    totalAmount: 699.99,
    date: "2023-01-18",
  },
  {
    id: 1003,
    userId: 2,
    products: [103, 105],
    totalAmount: 49.98,
    date: "2023-02-02",
  },
  {
    id: 1004,
    userId: 4,
    products: [101, 106],
    totalAmount: 1079.98,
    date: "2023-02-10",
  },
  {
    id: 1005,
    userId: 1,
    products: [105, 106],
    totalAmount: 109.98,
    date: "2023-02-15",
  },
];




// ============================================= 
// Basic Exercises 
// ============================================= 


// Exercise 1: Filter 
// Write a function that returns all active users 
function getActiveUsers() { 
  return users.filter(user => user.isActive);
} 



// Exercise 2: Map 
// Write a function that returns an array containing just the names of all users 
function getUserNames() { 
  return users.map(user => user.name);
} 



// Exercise 3: Find 
// Write a function that finds and returns a user by their ID 
function findUserById(id) { 
  return users.find(user => user.id === id);
} 

// Exercise 4: Some/Every 
// Write a function that checks if all users are active 
function areAllUsersActive() { 
  return users.every(user => user.isActive);
}


// Exercise 5: Reduce 
// Write a function that calculates the average age of all users 
function getAverageAge() { 
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
} 



// ============================================= 
// Intermediate Exercises 
// ============================================= 




// Exercise 6: Complex Filter 
// Write a function that returns users who are active and older than a specified age 
function getActiveUsersOlderThan(age) { 
  return users.filter(user => user.isActive && user.age > age);
}



// Exercise 7: Sorting 
// Write a function that returns all products sorted by price (low to high) 
function sortProductsByPrice() { 
  return products.sort((a, b) => a.price - b.price);
} 


// Exercise 8: Transformation 
// Write a function that transforms the users array into an object where the keys are the user 
IDs 
function transformUsersToObject() { 
// Your code here 
// Expected output: { 1: {user object}, 2: {user object}, ...} 
  const userObject = {};
  users.forEach(user => {
    userObject[user.id] = user;
  });
  return userObject;
}




// Exercise 9: Count Occurrences 
// Write a function that counts how many products are in each category 
function countProductsByCategory() { 
// Your code here 
// Expected output: { electronics: 3, books: 1, clothing: 2 } 
  const categoryCount = {};
  products.forEach(product => {
    categoryCount[product.category] = (categoryCount[product.category] || 0) + 1;
  });
  return categoryCount;
}



// Exercise 10: Multiple Array Operations 
// Write a function that returns the emails of active users sorted by age (youngest first) 
function getActiveUserEmailsSortedByAge() { 
  return users
    .filter(user => user.isActive)
    .sort((a, b) => a.age - b.age)
    .map(user => user.email);
} 
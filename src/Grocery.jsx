import React from 'react';

const GroceryList = () => {
  const groceryItems = [
    'Apples',
    'Bananas',
    'Milk',
    'Bread',
    'Eggs',
    'Cheese',
    'Tomatoes',
    'Cucumbers',
  ];

  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {groceryItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;

import React from 'react';

export const products = [

    {
      title: 'Cabbage',
      isFruit: false,
      id: 1
    },

    {
      title: 'Garlic',
      isFruit: false,
      id: 2
    },

    {
      title: 'Apple',
      isFruit: true,
      id: 3
    }

];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

function RenderingLists1() {
  return (
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}

export default RenderingLists1

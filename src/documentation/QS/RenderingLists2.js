import React from 'react';
import products from './RenderingLists1';

function RenderingLists2() {
    const listItems = products.map(product => 
    <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
        {product.title}
    </li>
    );

  return (
    <ul>
        {listItems}      
    </ul>
  );
}

export default RenderingLists2

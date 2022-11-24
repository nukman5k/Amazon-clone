import React from 'react'
import Product from './Product';

const ProductFeed = ({ products }) => {
    return (
        <div>
            {products.map(({ id, title, price, description, category, images }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    />
            ))}
        </div>
    )
}

export default ProductFeed;
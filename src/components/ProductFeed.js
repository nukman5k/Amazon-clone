import React from 'react'

const ProductFeed = ({ products }) => {
    return (
        <div>
            {products.map(product => (
                <p key={product.id}>{product.title}</p>
            ))}
        </div>
    )
}

export default ProductFeed;
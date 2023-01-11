import Image from 'next/dist/client/image';
import React from 'react';

const CheckoutProduct = ({
    id,
    title,
    rating,
    price,
    description,
    category,
    image,
    hasPrime }) => {
    return (
        <div className='grid grid-cols-5'>
            {/* Product Image - Column 1 */}
            <Image src={image} height={200} width={200} objectFit='contain' />

            {/* Product Details Area - Column 2,3,4 */}
            <div className='col-span-3 mx-5'>

            </div>

            {/* Buttons - Column 5 */}
            <div className='col-span-1'>

            </div>

        </div>
    )
}

export default CheckoutProduct;
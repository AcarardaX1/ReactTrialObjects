import React from 'react'

function Product({ productName, price }) {
    return (

        <div>

            <hr />
            <div>Product Info</div>
            <hr />

            <div>

                <div>Name : {productName}</div>

                <div>Price : {price} €</div>
            </div>

        </div>


    )
}

export default Product

import React from 'react'
import { useRouter } from 'next/router'

const ProductDetail = () => {
    const router = useRouter();
    // console.log(router.query)
    const productId = router.query.productid;
    // console.log(productId, "productId")
    return (
        <h1>Details about product {productId} </h1>
    )
}

export default ProductDetail
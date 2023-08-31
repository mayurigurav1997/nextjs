import Link from 'next/link'
import React from 'react'

const product = ({ productId = 100 }) => {
    return (
        <>
            <p><Link href="/">HOME</Link></p>
            <h1><Link href="/product/1">Product 1</Link></h1>
            <h1><Link href="/product/2">Product 2</Link></h1>
            <h1><Link href="/product/3" replace>Product 3</Link></h1>
            <h1><Link href={`/product/${productId}`} replace>Product 100</Link></h1>
        </>
    )
}

export default product
import { useRouter } from 'next/router'

function Product({ product }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h2>
                {product.id} {product.title} {product.price}
            </h2>
            <p>{product.description}</p>
            <hr />
        </div>
    )
}

export default Product
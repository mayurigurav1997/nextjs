

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(
        `http://localhost:4000/products/${params.productId}`
    )
    const data = await response.json()
    console.log(`Generating page for /products/${params.productId}`)

    return {
        props: {
            product: data
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { productId: '1' } }],
        fallback: true
    }
}
function ProductList({ products }) {
    return (
        <>
            <h1>List of products</h1>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <h2>
                            {product.id} {product.title} {product.price}
                        </h2>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default ProductList

export async function getStaticProps() {
    console.log('Generating / Regenerating ProductList')
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()

    return {
        props: {
            products: data
        },
        revalidate: 30
    }
}
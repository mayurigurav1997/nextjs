import { useRouter } from 'next/router'
import React from 'react'

const Doc = () => {
    const router = useRouter()
    // catch all routes
    const { params = [] } = router.query
    console.log(params)
    if (params.length === 2) {
        return <h1>
            Viewing docs for feature {params[0]} and conscept {params[1]}
        </h1>
    } else if (params.length === 1) {
        return (
            <h1>Docs Home Page {params[0]}</h1>
        )
    } else {
        return (
            <h1>Docs Home Page</h1>
        )
    }
}

export default Doc
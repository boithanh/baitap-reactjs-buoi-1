import React from 'react'
import ItemComponent from './ItemComponent'
import BannerComponent from './BannerComponent'

const BodyComponent = () => {
    return (
        <div>
            <BannerComponent />
            <ItemComponent />
        </div>
    )
}

export default BodyComponent
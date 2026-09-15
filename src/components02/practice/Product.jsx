import React from 'react'

const Product = ({p}) => {
    const {id, name, price} = p;
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{parseInt(price).toLocaleString()}</td>
            </tr>
            <tr style={{backgroundColor: 'cyan', color: 'white'}}>
                <td colSpan="3">{p.description}</td>
            </tr>
        </>
    )
}
export default Product
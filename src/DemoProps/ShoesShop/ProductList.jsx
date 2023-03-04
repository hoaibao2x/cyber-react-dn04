import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    renderShoes = () => {
        // return: Trả kết quả ra ngoài renderShoes
        return this.props.arrayShoes.map((shoe) => {

            let { id } = shoe;

            // Trả về 1 mảng chứa các đối tượng thẻ div-col-md-4
            return <div className="col-md-4" key={`shoes-${id}`}>
                <ProductItem shoe = {shoe} />
            </div>
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderShoes()}
            </div>
        )
    }
}

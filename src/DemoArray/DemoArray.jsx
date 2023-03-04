import React, { Component } from 'react'

export default class DemoArray extends Component {

    productList = [
        { id: 1, name: 'Black Car', url: './img/products/black-car.jpg', price: 6000 },
        { id: 2, name: 'Red Car', url: './img/products/red-car.jpg', price: 5000 },
        { id: 3, name: 'Silver Car', url: './img/products/silver-car.jpg', price: 4000 },
        { id: 4, name: 'Steel Car', url: './img/products/steel-car.jpg', price: 3000 }
    ]

    renderCar = () => {
        let content = [];
        for (let i = 0; i < this.productList.length; i++) {
            let { name, price, url } = this.productList[i];
            let trObj = <tr>
                <td>{name}</td>
                <td>
                    <img style={{ width: '30%' }} src={url} alt="" />
                </td>
                <td>{price}</td>
            </tr>
            content.push(trObj);
        }

        return content;
    }

    renderCarMap = () => {
        // let content = [];
        // Trả kết quả ra khỏi hàm renderCarMap 
        return this.productList.map((car) => {
            let { name, price, url } = car;

            // return: trả về 1 mảng mới, return trong map chỉ dừng khi hết mảng
            // trả kết quả ra ngoài map
            return <tr>
                <td>{name}</td>
                <td>
                    <img style={{ width: '30%' }} src={url} alt="" />
                </td>
                <td>{price}</td>
            </tr>
        })
    }

    render() {
        return (
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCarMap()}
                    </tbody>
                </table>
            </div>
        )
    }
}

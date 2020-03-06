import React, { Component } from 'react'

import foodsArray from '../../../foods-info'

import { Container, Table } from 'react-bootstrap'



class FoodsIndex extends Component {

    constructor() {
        super()
        this.state = { foods: foodsArray }
    }

    render() {

        return (

            <Container>

                <h1>Listado de alimentos</h1>

                <Table>
                    <tbody>
                        {this.state.foods.map(food =>
                            <tr>
                                <td> <img src={`/img/${food.img}`} alt={food.name} /> </td>
                                <td> <p>{food.name}</p> </td>
                                <td> <p><small>Precio: {food.price}€ | Stock: {food.stock} uds. |  Kcal: {food.kcal}/100g</small></p> </td>
                            </tr>
                        )}
                    </tbody>
                </Table>

            </Container>
        )
    }
}

export default FoodsIndex
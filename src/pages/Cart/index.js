import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart }) {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>Produto</th>
                        <th>Qtd</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>R$ 122,11</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#719"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button type="button">
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#719"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 310,22</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    <MdDelete size={20} color="#719" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar Pedido</button>

                <Total>
                    <span>Toal</span>
                    <strong>R$ 129,22</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(CartActions, dispatch);

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

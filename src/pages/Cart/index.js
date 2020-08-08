import React from "react";
import { Total, ProductTable, Container } from "./styles";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://csgostash.com/storage/img/skin_sideview/s1285.png?id=4816ffb3a25e858c60dc"
                  alt="tlxStore"
                  width="250px"
                />
              </td>

              <td>
                <strong>AK 47 DAORA</strong>
                <span>R$129,90</span>
              </td>

              <td>
                {" "}
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      size={20}
                      color="#2e342f"
                    ></MdRemoveCircleOutline>
                  </button>
                  <input type="number" readOnly value={1} />
                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      color="#2e342f"
                    ></MdAddCircleOutline>
                  </button>{" "}
                </div>
              </td>
              <td>
                <strong>R$260</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#2e342f"></MdDelete>
                </button>
              </td>
            </tr>
          </tbody>
        </thead>
      </ProductTable>
      <footer>
        <button type="button">Finalizer pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>RS3000</strong>
        </Total>
      </footer>
    </Container>
  );
}

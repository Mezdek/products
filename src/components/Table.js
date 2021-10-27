import { v4 } from "uuid";

export default function Table({ shoppingCart, total }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {shoppingCart.map((item, index) => {
          return (
            <tr key={index} id={v4()}>
              <th>{item.name}</th>
              <th>{item.price}</th>
              <th>{item.quantity}</th>
              <th>{item.price * item.quantity}</th>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3">Total Price</td>
          <td colSpan="1">{total}</td>
        </tr>
      </tfoot>
    </table>
  );
}

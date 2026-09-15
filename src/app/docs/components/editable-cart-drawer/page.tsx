export default function Editablecart-drawerDocsPage() {
  return (
    <div className="docs-page">
      <h1 className="component-title">EditableCartDrawer</h1>
      <p className="component-description">
        The EditableCartDrawer component provides a customizable drawer for displaying and editing items in a shopping cart. It allows users to view their selected products, update quantities, and see the subtotal of their cart.
      </p>
      <h2 className="props-title">Props</h2>
      <table className="props-table">
        <thead>
          <tr>
            <th className="props-name">Name</th>
            <th className="props-type">Type</th>
            <th className="props-default">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>itemPath</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>cart</td>
            <td>CartItem[]</td>
            <td>-</td>
          </tr>
          <tr>
            <td>isCartOpen</td>
            <td>boolean</td>
            <td>-</td>
          </tr>
          <tr>
            <td>cartCount</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>cartSubtotal</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>imageFallback</td>
            <td>string</td>
            <td>'/placeholder.svg'</td>
          </tr>
          <tr>
            <td>as</td>
            <td>React.ElementType</td>
            <td>'aside'</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>''</td>
          </tr>
          <tr>
            <td>style</td>
            <td>React.CSSProperties</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <h2 className="usage-title">Usage Example</h2>
      <pre className="usage-example">
        {`<EditableCartDrawer
  itemPath="cart"
  cart={cartItems}
  isCartOpen={true}
  cartCount={cartItems.length}
  cartSubtotal={calculateSubtotal(cartItems)}
/>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.heading</li>
        <li>*.emptyCartMessage</li>
        <li>*.emptyCartDescription</li>
        <li>*.cartItems.*.image</li>
        <li>*.cartItems.*.brand</li>
        <li>*.cartItems.*.name</li>
        <li>*.subtotalLabel</li>
      </ul>
    </div>
  );
}
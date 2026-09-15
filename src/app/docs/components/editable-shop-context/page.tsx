import React from 'react';

const EditableshopContextDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">EditableshopContext</h1>
      <p className="component-description">
        The EditableshopContext component allows users to edit product details such as name, subtitle, description, and image in a user-friendly manner. It provides a flexible way to display and modify product information dynamically.
      </p>
      <h2 className="props-title">Props</h2>
      <table className="props-table">
        <thead>
          <tr>
            <th className="props-header">Prop</th>
            <th className="props-header">Type</th>
            <th className="props-header">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>itemPath</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>product</td>
            <td>ProductItem</td>
            <td>-</td>
          </tr>
          <tr>
            <td>imageFallback</td>
            <td>string</td>
            <td>/placeholder.svg</td>
          </tr>
          <tr>
            <td>as</td>
            <td>React.ElementType</td>
            <td>div</td>
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
        {`<EditableshopContext
  itemPath="product1"
  product={{
    id: "1",
    name: "iPhone 13",
    brand: "Apple",
    subtitle: "Latest model",
    price: 999,
    originalPrice: 1099,
    condition: "Brand New",
    colors: [{ name: "Black", hex: "#000000" }],
    image: "/images/iphone13.jpg",
    specs: [{ label: "Storage", value: "128GB" }],
    description: "The latest iPhone with amazing features."
  }}
/>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.image</li>
        <li>*.name</li>
        <li>*.subtitle</li>
        <li>*.description</li>
      </ul>
    </div>
  );
};

export default EditableshopContextDocsPage;
import React from 'react';

const EditableShopPageContentDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">EditableShopPageContent</h1>
      <p className="component-description">
        The <code>EditableShopPageContent</code> component allows you to create a customizable shop page with editable fields for the title and description, along with various filters for displaying products.
      </p>
      
      <h2 className="props-title">Props</h2>
      <table className="props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>itemPath</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>filters</td>
            <td>ShopFilters</td>
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
          <tr>
            <td>children</td>
            <td>React.ReactNode</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="usage-title">Usage Example</h2>
      <pre className="usage-example">
        {`<EditableShopPageContent
  itemPath="shop.main"
  filters={{
    category: "sneakers",
    gender: "unisex",
    sizes: ["S", "M", "L"],
    priceMin: 50,
    priceMax: 200,
    sort: "popularity",
    saleOnly: false,
    search: ""
  }}
>
  {/* Additional shop items can be placed here */}
</EditableShopPageContent>`}
      </pre>

      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.title</li>
        <li>*.description</li>
      </ul>
    </div>
  );
};

export default EditableShopPageContentDocsPage;
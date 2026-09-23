import React from 'react';

const EditableShopPageContentDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">EditableShopPageContent</h1>
      <p className="component-description">
        The <code>EditableShopPageContent</code> component allows for the dynamic editing of shop page content, including titles, descriptions, and product search functionality. It integrates editable text fields and provides a layout for displaying products based on various filters.
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
            <td>maxPrice</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>availableSizes</td>
            <td>string[]</td>
            <td>-</td>
          </tr>
          <tr>
            <td>filteredProducts</td>
            <td>unknown[]</td>
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
            <td>'div'</td>
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
        {`<EditableShopPageContent
  itemPath="shop"
  filters={{
    category: "sneakers",
    gender: "unisex",
    sizes: ["S", "M", "L"],
    priceMin: 0,
    priceMax: 100,
    sort: "popularity",
    saleOnly: false,
    search: ""
  }}
  maxPrice={100}
  availableSizes={["S", "M", "L"]}
  filteredProducts={[]}
/>`}
      </pre>

      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.pageTitle</li>
        <li>*.pageDesc</li>
        <li>*.searchProductsPlaceholder</li>
      </ul>
    </div>
  );
};

export default EditableShopPageContentDocsPage;
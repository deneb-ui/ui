import React from 'react';

const EditableQuickViewModalDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="docs-title">EditableQuickViewModal</h1>
      <p className="docs-description">
        The EditableQuickViewModal component provides a quick view of a product with editable fields for the name, category, short description, and image. It allows users to easily update product details in a modal format.
      </p>
      <h2 className="docs-props-title">Props</h2>
      <table className="docs-props-table">
        <thead>
          <tr>
            <th className="docs-props-header">Prop</th>
            <th className="docs-props-header">Type</th>
            <th className="docs-props-header">Default</th>
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
            <td>Product | null</td>
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
      <h2 className="docs-usage-title">Usage Example</h2>
      <pre className="docs-usage-code">
        {`<EditableQuickViewModal
  itemPath="product1"
  product={{
    id: 1,
    name: "Sample Product",
    category: "Category Name",
    shortDescription: "This is a short description.",
    images: ["/path/to/image.jpg"]
  }}
/>`}
      </pre>
      <h2 className="docs-editable-fields-title">Editable Field Paths</h2>
      <ul className="docs-editable-fields-list">
        <li>*.imageUrl</li>
        <li>*.category</li>
        <li>*.name</li>
        <li>*.shortDescription</li>
      </ul>
    </div>
  );
};

export default EditableQuickViewModalDocsPage;
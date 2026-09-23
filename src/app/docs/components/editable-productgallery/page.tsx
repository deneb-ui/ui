import React from 'react';

const EditableProductGalleryDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="docs-title">EditableProductGallery</h1>
      <p className="docs-description">
        The EditableProductGallery component allows users to display and edit a gallery of product images. It supports a main image display and thumbnail navigation for multiple images, making it easy to showcase products visually.
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
            <td>images</td>
            <td>string[]</td>
            <td>-</td>
          </tr>
          <tr>
            <td>productName</td>
            <td>string</td>
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

      <h2 className="docs-usage-title">Usage Example</h2>
      <pre className="docs-usage-code">
        {`<EditableProductGallery
  itemPath="product1"
  images={["/images/product1-1.jpg", "/images/product1-2.jpg"]}
  productName="Product 1"
/>`}
      </pre>

      <h2 className="docs-editable-fields-title">Editable Field Paths</h2>
      <ul className="docs-editable-fields-list">
        <li>*.imageUrl</li>
        <li>*.productImagesLabel</li>
        <li>*.thumbs.*</li>
      </ul>
    </div>
  );
};

export default EditableProductGalleryDocsPage;
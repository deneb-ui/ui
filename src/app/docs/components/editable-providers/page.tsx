import React from 'react';

const EditableprovidersDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">Editableproviders</h1>
      <p className="component-description">
        The Editableproviders component allows you to create a customizable provider card with editable fields for an image, name, and description.
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
            <td>data</td>
            <td>Record&lt;string, unknown&gt;</td>
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
        {`<Editableproviders
  itemPath="provider1"
  data={{
    name: "Provider Name",
    description: "Provider Description",
    imageUrl: "https://example.com/image.jpg"
  }}
>
  <div>Additional content can go here</div>
</Editableproviders>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.imageUrl</li>
        <li>*.name</li>
        <li>*.description</li>
      </ul>
    </div>
  );
};

export default EditableprovidersDocsPage;
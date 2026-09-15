import React from 'react';

const EditableprovidersDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">Editableproviders</h1>
      <p className="component-description">
        The Editableproviders component allows you to create a section that includes editable text fields for a title and description, providing context for the application.
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
            <td>children</td>
            <td>React.ReactNode</td>
            <td>-</td>
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
        {`<Editableproviders itemPath="providerSection">
  <EditableImage
    id="providerSection.image"
    data-preview-field-path="providerSection.image"
    defaultValue="https://example.com/image.jpg"
    className="provider-image"
  />
</Editableproviders>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.title</li>
        <li>*.description</li>
      </ul>
    </div>
  );
};

export default EditableprovidersDocsPage;
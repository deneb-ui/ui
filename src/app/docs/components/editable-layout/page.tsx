import React from 'react';

const EditablelayoutDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">Editablelayout</h1>
      <p className="component-description">
        The Editablelayout component provides a flexible layout for displaying editable text and images. It allows users to modify content directly within the UI, making it ideal for applications that require dynamic content management.
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
        {`<Editablelayout itemPath="example.layout">
  <p>Additional content can go here.</p>
</Editablelayout>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.title</li>
        <li>*.description</li>
        <li>*.keywords</li>
        <li>*.image</li>
      </ul>
    </div>
  );
};

export default EditablelayoutDocsPage;
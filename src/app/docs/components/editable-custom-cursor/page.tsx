import React from 'react';

const EditablecustomCursorDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">EditablecustomCursor</h1>
      <p className="component-description">
        The EditablecustomCursor component allows users to edit text and images within a customizable cursor interface. It provides an editable text field and an editable image that can be easily integrated into your application.
      </p>
      <h2 className="props-title">Props</h2>
      <table className="props-table">
        <thead>
          <tr>
            <th className="prop-name">Name</th>
            <th className="prop-type">Type</th>
            <th className="prop-default">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>itemPath</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>cursorText</td>
            <td>string</td>
            <td>''</td>
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
        {`<EditablecustomCursor
  itemPath="example.cursor"
  cursorText="Edit me"
  imageFallback="/path/to/image.svg"
/>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.cursorText</li>
        <li>*.cursorImage</li>
      </ul>
    </div>
  );
};

export default EditablecustomCursorDocsPage;
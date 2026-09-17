import React from 'react';

const EditablebuttonDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">Editablebutton</h1>
      <p className="component-description">
        The Editablebutton component allows users to create a button with editable text and an optional icon. It supports dynamic updates to its label and icon through the EditableText and EditableImage components.
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
            <td>data</td>
            <td>{`{ label?: string; iconUrl?: string; fallbackIcon?: string; }`}</td>
            <td>-</td>
          </tr>
          <tr>
            <td>as</td>
            <td>React.ElementType</td>
            <td>'button'</td>
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
        {`<Editablebutton
  itemPath="example.button"
  data={{
    label: "Click Me",
    iconUrl: "https://example.com/icon.png",
    fallbackIcon: "https://example.com/fallback-icon.png"
  }}
  className="custom-button"
>
  Additional Content
</Editablebutton>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.iconUrl</li>
        <li>*.label</li>
      </ul>
    </div>
  );
};

export default EditablebuttonDocsPage;
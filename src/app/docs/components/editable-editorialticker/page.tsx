import React from 'react';

const EditableEditorialTickerDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="docs-title">EditableEditorialTicker</h1>
      <p className="docs-description">
        The EditableEditorialTicker component allows users to create a customizable ticker that displays a list of items. Each item can be edited inline, providing a dynamic way to manage editorial content.
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
            <td className="docs-props-cell">itemPath</td>
            <td className="docs-props-cell">string</td>
            <td className="docs-props-cell">-</td>
          </tr>
          <tr>
            <td className="docs-props-cell">items</td>
            <td className="docs-props-cell">string[]</td>
            <td className="docs-props-cell">-</td>
          </tr>
          <tr>
            <td className="docs-props-cell">as</td>
            <td className="docs-props-cell">React.ElementType</td>
            <td className="docs-props-cell">'div'</td>
          </tr>
          <tr>
            <td className="docs-props-cell">className</td>
            <td className="docs-props-cell">string</td>
            <td className="docs-props-cell">''</td>
          </tr>
          <tr>
            <td className="docs-props-cell">style</td>
            <td className="docs-props-cell">React.CSSProperties</td>
            <td className="docs-props-cell">-</td>
          </tr>
        </tbody>
      </table>
      <h2 className="docs-usage-title">Usage Example</h2>
      <pre className="docs-usage-code">
        {`<EditableEditorialTicker
  itemPath="editorial.ticker"
  items={["Item 1", "Item 2", "Item 3"]}
  className="custom-class"
/>`}
      </pre>
      <h2 className="docs-editable-fields-title">Editable Field Paths</h2>
      <ul className="docs-editable-fields-list">
        <li>items.*</li>
      </ul>
    </div>
  );
};

export default EditableEditorialTickerDocsPage;
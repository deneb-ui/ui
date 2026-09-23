import React from 'react';

const EditablenotFoundDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">EditableNotFound</h1>
      <p className="component-description">
        The EditableNotFound component is designed to display a customizable 404 Not Found page. It allows users to edit the title, subtitle, and return home label dynamically.
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
            <td className="props-cell">itemPath</td>
            <td className="props-cell">string</td>
            <td className="props-cell">-</td>
          </tr>
          <tr>
            <td className="props-cell">data</td>
            <td className="props-cell">object</td>
            <td className="props-cell">-</td>
          </tr>
          <tr>
            <td className="props-cell">as</td>
            <td className="props-cell">React.ElementType</td>
            <td className="props-cell">'div'</td>
          </tr>
          <tr>
            <td className="props-cell">className</td>
            <td className="props-cell">string</td>
            <td className="props-cell">''</td>
          </tr>
          <tr>
            <td className="props-cell">style</td>
            <td className="props-cell">React.CSSProperties</td>
            <td className="props-cell">-</td>
          </tr>
        </tbody>
      </table>
      <h2 className="usage-title">Usage Example</h2>
      <pre className="usage-example">
        {`<EditableNotFound
  itemPath="notFoundPage"
  data={{
    title: "404",
    subtitle: "Page Not Found",
    returnHomeUrl: "/",
    returnHomeLabel: "Return Home"
  }}
/>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.title</li>
        <li>*.subtitle</li>
        <li>*.returnHomeUrl</li>
        <li>*.returnHomeLabel</li>
      </ul>
    </div>
  );
};

export default EditablenotFoundDocsPage;
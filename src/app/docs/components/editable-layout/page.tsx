import React from 'react';

const EditablelayoutDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">Editablelayout</h1>
      <p className="component-description">
        The Editablelayout component provides a flexible layout for displaying editable content, including an image, title, and description. It allows users to modify these fields directly within the UI.
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
            <td>{`{ title?: string; description?: string; imageUrl?: string; imageFallback?: string; }`}</td>
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
          <tr>
            <td>children</td>
            <td>React.ReactNode</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <h2 className="usage-title">Usage Example</h2>
      <pre className="usage-example">
        {`<Editablelayout
  itemPath="example.item"
  data={{
    title: "Editable Title",
    description: "Editable Description",
    imageUrl: "https://example.com/image.jpg",
    imageFallback: "https://example.com/fallback.jpg"
  }}
>
  <p>Additional content can go here.</p>
</Editablelayout>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.imageUrl</li>
        <li>*.title</li>
        <li>*.description</li>
      </ul>
    </div>
  );
};

export default EditablelayoutDocsPage;
import React from 'react';

const EditablelayoutDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">Editablelayout</h1>
      <p className="component-description">
        The Editablelayout component allows users to create a customizable layout with editable fields for an image, title, and description. It provides a user-friendly interface for editing content directly within the layout.
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
            <td>{`{ title?: string; description?: string; imageUrl?: string; [key: string]: unknown; }`}</td>
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
    imageUrl: "https://example.com/image.jpg"
  }}
>
  <div>Additional content can go here.</div>
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
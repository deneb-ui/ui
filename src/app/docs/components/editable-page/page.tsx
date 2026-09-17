import React from 'react';

const EditablepageDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">Editablepage</h1>
      <p className="component-description">
        The Editablepage component allows users to edit a page's title, description, and image directly within the UI. It provides a seamless way to manage content dynamically.
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
            <td>'main'</td>
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
        {`<Editablepage
  itemPath="page1"
  data={{
    title: "My Editable Page",
    description: "This is an editable description.",
    imageUrl: "/path/to/image.jpg"
  }}
>
  <p>Additional content can go here.</p>
</Editablepage>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.title</li>
        <li>*.description</li>
        <li>*.imageUrl</li>
      </ul>
    </div>
  );
};

export default EditablepageDocsPage;
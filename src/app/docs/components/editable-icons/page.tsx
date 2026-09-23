import React from 'react';

const EditableIconsDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">EditableIcons</h1>
      <p className="component-description">
        The EditableIcons component allows users to display and edit a list of icons with associated names and descriptions. Each icon can be customized with an image, and users can interactively change the icon's properties.
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
            <td>icons</td>
            <td>Array<{`{ name: string; description: string; imageUrl: string; }`}></td>
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
        {`<EditableIcons
  itemPath="myIcons"
  icons={[
    { name: "Home", description: "Go to homepage", imageUrl: "/icons/home.svg" },
    { name: "Settings", description: "Adjust settings", imageUrl: "/icons/settings.svg" }
  ]}
>
  <p>Additional content can go here.</p>
</EditableIcons>`}
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

export default EditableIconsDocsPage;
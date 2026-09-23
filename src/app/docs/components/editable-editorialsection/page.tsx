import React from 'react';

const EditableEditorialSectionDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="docs-title">EditableEditorialSection</h1>
      <p className="docs-description">
        The EditableEditorialSection component allows users to create a customizable editorial section with editable text and images. It includes features for displaying an eyebrow, title, description, and a call-to-action button, all of which can be edited in a user-friendly manner.
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
            <td>itemPath</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>eyebrow</td>
            <td>string</td>
            <td>Editorial</td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>description</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>image</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>imageAlt</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>ctaLabel</td>
            <td>string</td>
            <td>Discover</td>
          </tr>
          <tr>
            <td>ctaHref</td>
            <td>string</td>
            <td>/shop/</td>
          </tr>
          <tr>
            <td>reversed</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>dark</td>
            <td>boolean</td>
            <td>false</td>
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
      <h2 className="docs-usage-title">Usage Example</h2>
      <pre className="docs-usage-code">
        {`<EditableEditorialSection
  itemPath="example.path"
  title="Sample Title"
  description="This is a sample description."
  image="/path/to/image.jpg"
  imageAlt="Sample Image Alt Text"
/>`}
      </pre>
      <h2 className="docs-editable-fields-title">Editable Field Paths</h2>
      <ul className="docs-editable-fields-list">
        <li>*.image</li>
        <li>*.eyebrow</li>
        <li>*.title</li>
        <li>*.description</li>
        <li>*.ctaLabel</li>
      </ul>
    </div>
  );
};

export default EditableEditorialSectionDocsPage;
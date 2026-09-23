import React from 'react';

const EditableEditorialSectionDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="docs-title">EditableEditorialSection</h1>
      <p className="docs-description">
        The EditableEditorialSection component allows users to create an editable section that includes an image, title, description, and a call-to-action button. It is designed for editorial content and supports customization through various props.
      </p>
      <h2 className="docs-props-title">Props</h2>
      <table className="docs-props-table">
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
        </tbody>
      </table>
      <h2 className="docs-usage-title">Usage Example</h2>
      <pre className="docs-usage-example">
        {`<EditableEditorialSection
  itemPath="example.path"
  title="Sample Title"
  description="This is a sample description."
  image="/path/to/image.jpg"
  imageAlt="Sample Image"
  ctaLabel="Learn More"
  ctaHref="/learn-more"
/>`}
      </pre>
      <h2 className="docs-editable-fields-title">Editable Field Paths</h2>
      <ul className="docs-editable-fields-list">
        <li>*.image</li>
        <li>*.eyebrow</li>
        <li>*.title</li>
        <li>*.description</li>
        <li>*.ctaHref</li>
        <li>*.ctaLabel</li>
      </ul>
    </div>
  );
};

export default EditableEditorialSectionDocsPage;
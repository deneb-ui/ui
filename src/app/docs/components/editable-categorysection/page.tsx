import React from 'react';

const EditableCategorySectionDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">EditableCategorySection</h1>
      <p className="component-description">
        The EditableCategorySection component allows users to display and edit a section of categories with images and labels. It is designed for easy integration into a UI, providing editable fields for dynamic content.
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
            <td>categories</td>
            <td>Category[]</td>
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
            <td>'section'</td>
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
        {`<EditableCategorySection
  itemPath="home.categories"
  categories={[
    { id: 1, label: "Running", image: "/images/running.jpg" },
    { id: 2, label: "Casual", image: "/images/casual.jpg" },
  ]}
/>`}
      </pre>

      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.label</li>
        <li>*.title</li>
        <li>*.description</li>
        <li>*.categories[*].image</li>
        <li>*.categories[*].label</li>
      </ul>
    </div>
  );
};

export default EditableCategorySectionDocsPage;
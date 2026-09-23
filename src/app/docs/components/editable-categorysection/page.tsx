import React from 'react';

const EditableCategorySectionDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">EditableCategorySection</h1>
      <p className="component-description">
        The EditableCategorySection component allows users to create a customizable section for displaying categories with editable text and images. It provides an intuitive interface for managing category content dynamically.
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
  itemPath="examplePath"
  categories={[
    { id: 1, label: "Category 1", image: "/cat1.jpg" },
    { id: 2, label: "Category 2", image: "/cat2.jpg" }
  ]}
  imageFallback="/fallback.jpg"
/>`}
      </pre>

      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.categories2</li>
        <li>*.findYoursilhouette</li>
        <li>*.silhouette</li>
        <li>*.fromPerformanceRunnersStreetReady</li>
        <li>*.categories[*].image</li>
        <li>*.categories[*].label</li>
      </ul>
    </div>
  );
};

export default EditableCategorySectionDocsPage;
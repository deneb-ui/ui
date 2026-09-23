import React from 'react';

const EditableAnimatedShoeDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="docs-title">EditableAnimatedShoe</h1>
      <p className="docs-description">
        The EditableAnimatedShoe component allows users to display an animated shoe image with editable fields for the image source and alt text. It provides a user-friendly interface for customizing the shoe's appearance.
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
            <td>src</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>alt</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>''</td>
          </tr>
          <tr>
            <td>variant</td>
            <td>'default' | 'hero'</td>
            <td>'default'</td>
          </tr>
          <tr>
            <td>itemPath</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>shoe</td>
            <td>AnimatedShoeProps</td>
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
        </tbody>
      </table>
      <h2 className="docs-usage-title">Usage Example</h2>
      <pre className="docs-usage-example">
        {`<EditableAnimatedShoe
  itemPath="shoe1"
  shoe={{ src: "/shoe.png", alt: "A stylish shoe" }}
  className="custom-class"
>
  <p>Additional content can go here.</p>
</EditableAnimatedShoe>`}
      </pre>
      <h2 className="docs-editable-fields-title">Editable Field Paths</h2>
      <ul className="docs-editable-fields-list">
        <li>*.src</li>
        <li>*.alt</li>
      </ul>
    </div>
  );
};

export default EditableAnimatedShoeDocsPage;
import React from 'react';

const EditableRequiredPageLinkDocsPage = () => {
  return (
    <div className="docs-page">
      <h1 className="component-title">EditableRequiredPageLink</h1>
      <p className="component-description">
        The <code>EditableRequiredPageLink</code> component is a link that allows users to edit its text content directly. It is designed to be used for linking to required pages while providing an editable interface for the link text.
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
            <td>pageId</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>href</td>
            <td>string</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>''</td>
          </tr>
          <tr>
            <td>staticId</td>
            <td>string</td>
            <td>undefined</td>
          </tr>
          <tr>
            <td>style</td>
            <td>React.CSSProperties</td>
            <td>undefined</td>
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
        {`<EditableRequiredPageLink 
  itemPath="example.link" 
  pageId="123" 
  className="custom-class" 
>
  Click here to edit
</EditableRequiredPageLink>`}
      </pre>

      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.children</li>
      </ul>
    </div>
  );
};

export default EditableRequiredPageLinkDocsPage;
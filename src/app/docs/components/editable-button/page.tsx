export default function EditablebuttonDocsPage() {
  return (
    <div className="docs-page">
      <h1 className="component-title">Editablebutton</h1>
      <p className="component-description">
        The Editablebutton component allows users to create a button that can have editable text and an optional image. It supports customization through various props and is designed to be flexible for different use cases.
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
            <td>label</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>imageUrl</td>
            <td>string</td>
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
            <td>&#x27;button&#x27;</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>&#x27;&#x27;</td>
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
        {`<Editablebutton
  itemPath="button1"
  label="Click Me"
  imageUrl="https://example.com/image.png"
>
  Additional Content
</Editablebutton>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.imageUrl</li>
        <li>*.label</li>
      </ul>
    </div>
  );
}
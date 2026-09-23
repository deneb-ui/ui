export default function EditableAnimatedShoeDocsPage() {
  return (
    <div className="docs-page">
      <h1 className="component-title">EditableAnimatedShoe</h1>
      <p className="component-description">
        The EditableAnimatedShoe component allows users to display an animated shoe image with editable fields for the image source and alt text. It provides a flexible way to integrate animated shoe visuals into your application while allowing for easy customization.
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
            <td className="props-cell">itemPath</td>
            <td className="props-cell">string</td>
            <td className="props-cell">-</td>
          </tr>
          <tr>
            <td className="props-cell">shoe</td>
            <td className="props-cell">AnimatedShoeProps</td>
            <td className="props-cell">-</td>
          </tr>
          <tr>
            <td className="props-cell">imageFallback</td>
            <td className="props-cell">string</td>
            <td className="props-cell">"/placeholder.svg"</td>
          </tr>
          <tr>
            <td className="props-cell">as</td>
            <td className="props-cell">React.ElementType</td>
            <td className="props-cell">"div"</td>
          </tr>
          <tr>
            <td className="props-cell">className</td>
            <td className="props-cell">string</td>
            <td className="props-cell">""</td>
          </tr>
          <tr>
            <td className="props-cell">style</td>
            <td className="props-cell">React.CSSProperties</td>
            <td className="props-cell">-</td>
          </tr>
        </tbody>
      </table>
      <h2 className="usage-title">Usage Example</h2>
      <pre className="usage-example">
        {`<EditableAnimatedShoe
  itemPath="shoes.1"
  shoe={{
    src: "/shoes/animated-shoe.gif",
    alt: "A stylish animated shoe",
    variant: "hero"
  }}
/>`}
      </pre>
      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.src</li>
        <li>*.alt</li>
      </ul>
    </div>
  );
}
export default function EditableheroSectionDocsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">EditableHeroSection</h1>
      <p className="mb-6">
        The EditableHeroSection component is designed to create a visually striking hero section that allows for easy editing of text and images. It is ideal for showcasing high-impact content, such as promotional banners or featured products, with customizable fields for performance metrics, titles, and descriptions.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Props</h2>
      <table className="min-w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Prop</th>
            <th className="border border-gray-300 p-2">Type</th>
            <th className="border border-gray-300 p-2">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">itemPath</td>
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">data</td>
            <td className="border border-gray-300 p-2">any</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">imageFallback</td>
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">"/placeholder.svg"</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">as</td>
            <td className="border border-gray-300 p-2">React.ElementType</td>
            <td className="border border-gray-300 p-2">"section"</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">className</td>
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">""</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">style</td>
            <td className="border border-gray-300 p-2">React.CSSProperties</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">children</td>
            <td className="border border-gray-300 p-2">React.ReactNode</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {`<EditableHeroSection
  itemPath="heroSection"
  data={data}
>
  <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Learn More</button>
</EditableHeroSection>`}
      </pre>
      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.exoticHypercarNightFrontModern</li>
        <li>*.performance</li>
        <li>*.theArtPerformanceLabel</li>
        <li>*.title</li>
        <li>*.beyondLabel</li>
        <li>*.discoverExceptionalPerformanceMachinesEngineered</li>
      </ul>
    </div>
  );
}
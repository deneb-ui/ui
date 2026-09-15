export default function EditablebrandMarqueeDocsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Editablebrand Marquee</h1>
      <p className="mb-6">
        The Editablebrand Marquee component allows for the display of a list of brands with editable names and subtitles. It provides a visually appealing way to showcase brand partnerships or certifications, with interactive text fields for easy updates.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Props</h2>
      <table className="min-w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Prop</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">itemPath</td>
            <td className="border border-gray-300 px-4 py-2">string</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">brands</td>
            <td className="border border-gray-300 px-4 py-2">Brand[]</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">as</td>
            <td className="border border-gray-300 px-4 py-2">React.ElementType</td>
            <td className="border border-gray-300 px-4 py-2">'section'</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">className</td>
            <td className="border border-gray-300 px-4 py-2">string</td>
            <td className="border border-gray-300 px-4 py-2">''</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">style</td>
            <td className="border border-gray-300 px-4 py-2">React.CSSProperties</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {`<EditablebrandMarquee
  itemPath="example.path"
  brands={[
    { name: "Brand A", subtitle: "Subtitle A" },
    { name: "Brand B", subtitle: "Subtitle B" },
  ]}
/>`}
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside mb-6">
        <li>*.certifiedAcrossIndustryLeadingMobile</li>
        <li>*.BRANDS[*].name</li>
        <li>*.BRANDS[*].subtitle</li>
      </ul>
    </div>
  );
}
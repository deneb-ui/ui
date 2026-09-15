import React from 'react';

const EditabletrustStatsDocsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6">EditabletrustStats Component</h1>
      <p className="mb-4">
        The EditabletrustStats component allows users to display and edit trust statistics and pillars in a visually appealing layout. It supports editable fields for dynamic content updates.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">Props</h2>
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
            <td className="border border-gray-300 px-4 py-2">stats</td>
            <td className="border border-gray-300 px-4 py-2">TrustStat[]</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">pillars</td>
            <td className="border border-gray-300 px-4 py-2">TrustPillar[]</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">imageFallback</td>
            <td className="border border-gray-300 px-4 py-2">string</td>
            <td className="border border-gray-300 px-4 py-2">"/placeholder.svg"</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">as</td>
            <td className="border border-gray-300 px-4 py-2">React.ElementType</td>
            <td className="border border-gray-300 px-4 py-2">"section"</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">className</td>
            <td className="border border-gray-300 px-4 py-2">string</td>
            <td className="border border-gray-300 px-4 py-2">""</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">style</td>
            <td className="border border-gray-300 px-4 py-2">React.CSSProperties</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {`<EditabletrustStats
  itemPath="trustStats"
  stats={[
    { number: "99%", label: "Satisfaction", detail: "Customer satisfaction rate" },
    { number: "100%", label: "Security", detail: "Data security compliance" },
  ]}
  pillars={[
    { icon: SomeIconComponent, title: "Integrity", desc: "We uphold integrity in all dealings." },
    { icon: AnotherIconComponent, title: "Transparency", desc: "We believe in transparency with our clients." },
  ]}
/>`}
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Editable Field Paths</h2>
      <ul className="list-disc list-inside mb-6">
        <li>*.uncompromisingIntegrityLabel</li>
        <li>*.heading3</li>
        <li>*.description3</li>
        <li>*.STATS[*].number</li>
        <li>*.STATS[*].label</li>
        <li>*.STATS[*].detail</li>
        <li>*.PILLARS[*].title</li>
        <li>*.PILLARS[*].desc</li>
      </ul>
    </div>
  );
};

export default EditabletrustStatsDocsPage;
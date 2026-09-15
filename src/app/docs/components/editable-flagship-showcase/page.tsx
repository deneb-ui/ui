import React from 'react';

const EditableflagshipShowcaseDocsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Editableflagship Showcase</h1>
      <p className="mb-6">
        The Editableflagship Showcase component allows users to display a visually appealing showcase of a flagship device, with editable text fields and an image. It is designed to be flexible and customizable, making it easy to integrate into various layouts.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Props</h2>
      <table className="min-w-full border-collapse border border-gray-300">
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
            <td className="border border-gray-300 px-4 py-2">data</td>
            <td className="border border-gray-300 px-4 py-2">object</td>
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
          <tr>
            <td className="border border-gray-300 px-4 py-2">children</td>
            <td className="border border-gray-300 px-4 py-2">React.ReactNode</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {`<EditableflagshipShowcase
  itemPath="example.path"
  data={{
    engineeredMoreTitaniumLab: "Custom Titanium Lab",
    showcaseExcellenceLabel: "Excellence Showcase",
    heading9: "Innovative Design",
    description9: "Experience the future of technology.",
    engineeredMoreFlagshipDeviceImage: "/images/custom-device.jpg",
    clickInspectHardwareLabel: "Inspect Now"
  }}
/>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.engineeredMoreTitaniumLab</li>
        <li>*.showcaseExcellenceLabel</li>
        <li>*.heading9</li>
        <li>*.description9</li>
        <li>*.engineeredMoreFlagshipDeviceImage</li>
        <li>*.clickInspectHardwareLabel</li>
      </ul>
    </div>
  );
};

export default EditableflagshipShowcaseDocsPage;
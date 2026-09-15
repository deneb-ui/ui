import React from 'react';

const EditableaccessoriesSectionDocsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold my-6">EditableaccessoriesSection</h1>
      <p className="mb-4">
        The <code className="font-mono">EditableaccessoriesSection</code> component allows users to display a list of accessories for a product, with editable fields for each accessory's badge, image, name, and subtitle. This component is designed to enhance user interaction by enabling inline editing of accessory details.
      </p>
      
      <h2 className="text-2xl font-semibold my-4">Props</h2>
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
            <td className="border border-gray-300 px-4 py-2">accessories</td>
            <td className="border border-gray-300 px-4 py-2">ProductItem[]</td>
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

      <h2 className="text-2xl font-semibold my-4">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {`<EditableaccessoriesSection
  itemPath="product.accessories"
  accessories={[
    { id: 1, badge: "New", name: "Accessory 1", subtitle: "Best accessory", image: "/accessory1.png" },
    { id: 2, badge: "Sale", name: "Accessory 2", subtitle: "Limited edition", image: "/accessory2.png" },
  ]}
  imageFallback="/placeholder.svg"
/>`}
      </pre>

      <h2 className="text-2xl font-semibold my-4">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.accessories.*.badge</li>
        <li>*.accessories.*.image</li>
        <li>*.accessories.*.name</li>
        <li>*.accessories.*.subtitle</li>
      </ul>
    </div>
  );
};

export default EditableaccessoriesSectionDocsPage;
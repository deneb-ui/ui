import React from 'react';

const EditableinventoryFilterSectionDocsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Editableinventory Filter Section</h1>
      <p className="mb-6">
        The Editableinventory Filter Section component allows users to filter a curated portfolio of hypercars and sports cars by various criteria. It provides editable text fields for customization and a user-friendly interface for searching and sorting inventory.
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
        {`<EditableinventoryFilterSection
  itemPath="inventory.filter"
  data={data}
>
  {/* Additional children can be added here */}
</EditableinventoryFilterSection>`}
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.completeInventoryRepositoryLabel</li>
        <li>*.heading7</li>
        <li>*.nextMachineLabel</li>
        <li>*.description5</li>
        <li>*.searchModelBrandPowertrainPlaceholder</li>
        <li>*.sortLabel</li>
        <li>*.marqueFilterLabel</li>
        <li>*.bodyClassificationLabel</li>
        <li>*.showingExtraordinaryMachines</li>
      </ul>
    </div>
  );
};

export default EditableinventoryFilterSectionDocsPage;
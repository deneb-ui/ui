import React from 'react';

const EditablebrandSelectorDocsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Editablebrand Selector</h1>
      <p className="mb-6">
        The Editablebrand Selector component allows users to select a brand from a list of options. It features editable fields for dynamic content and displays relevant brand information, including images and descriptions.
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
            <td className="border border-gray-300 p-2">brands</td>
            <td className="border border-gray-300 p-2">BrandInfo[]</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">selectedBrand</td>
            <td className="border border-gray-300 p-2">BrandInfo</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">onSelectBrand</td>
            <td className="border border-gray-300 p-2">(brandName: string) => void</td>
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
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {`<EditablebrandSelector
  itemPath="brands.selected"
  brands={brandsArray}
  selectedBrand={selectedBrand}
  onSelectBrand={handleSelectBrand}
/>`}
      </pre>
      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.bannerImage</li>
        <li>*.marqueSelectionLabel</li>
        <li>*.heading</li>
        <li>*.yourObsessionLabel</li>
        <li>*.origin</li>
        <li>*.name</li>
        <li>*.badge</li>
        <li>*.motto</li>
        <li>*.flagshipCurationLabel</li>
        <li>*.flagshipModel</li>
        <li>*.powerOutputLabel</li>
        <li>*.exploreInventoryLabel</li>
      </ul>
    </div>
  );
};

export default EditablebrandSelectorDocsPage;
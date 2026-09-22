import React from 'react';

const EditablepromoBannerDocsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mt-8">Editablepromo Banner</h1>
      <p className="mt-4 text-lg text-gray-700">
        The Editablepromo Banner component allows users to display a promotional banner with editable text and images. It is designed to enhance user engagement by providing dynamic content that can be easily updated.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Props</h2>
      <table className="min-w-full mt-4 border border-gray-300">
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
            <td className="border border-gray-300 px-4 py-2">any</td>
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
            <td className="border border-gray-300 px-4 py-2">'section'</td>
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

      <h2 className="text-2xl font-semibold mt-8">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mt-4">
        {`<EditablepromoBanner
  itemPath="promoBanner"
  data={data}
  imageFallback="/fallback-image.svg"
>
  {/* Additional children can go here */}
</EditablepromoBanner>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-8">Editable Field Paths</h2>
      <ul className="list-disc list-inside mt-4">
        <li>*.limitedShowroomUpgradeBonusLabel</li>
        <li>*.heading</li>
        <li>*.startsHereLabel</li>
        <li>*.description2</li>
        <li>*.exploreLatestPhonesUrl</li>
        <li>*.exploreLatestPhonesLabel</li>
        <li>*.calculateTradeUrl</li>
        <li>*.calculateTradeLabel</li>
        <li>*.auraUpgradeBannerPhonesImage</li>
      </ul>
    </div>
  );
};

export default EditablepromoBannerDocsPage;
import React from 'react';

const EditablefloatingNavbarDocsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Editablefloating-navbar</h1>
      <p className="mb-6">
        The Editablefloating-navbar component provides a customizable floating navigation bar that allows users to edit labels and links dynamically. It includes options for test drive booking, searching, and comparing items, making it ideal for applications that require interactive navigation.
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
            <td className="border border-gray-300 px-4 py-2">siteData</td>
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
            <td className="border border-gray-300 px-4 py-2">"header"</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">compareCount</td>
            <td className="border border-gray-300 px-4 py-2">number</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">onOpenTestDrive</td>
            <td className="border border-gray-300 px-4 py-2">() => void</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">onOpenSearch</td>
            <td className="border border-gray-300 px-4 py-2">() => void</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">onOpenCompare</td>
            <td className="border border-gray-300 px-4 py-2">() => void</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {`<EditablefloatingNavbar
  itemPath="navbar"
  siteData={siteData}
  compareCount={3}
  onOpenTestDrive={() => console.log('Test Drive Opened')}
  onOpenSearch={() => console.log('Search Opened')}
  onOpenCompare={() => console.log('Compare Opened')}
/>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.header.apexLabel</li>
        <li>*.header.motorsLabel</li>
        <li>*.navLinks[*].href</li>
        <li>*.navLinks[*].label</li>
        <li>*.header.compareLabel</li>
        <li>*.header.bookTestDriveLabel</li>
      </ul>
    </div>
  );
};

export default EditablefloatingNavbarDocsPage;
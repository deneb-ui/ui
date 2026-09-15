import React from 'react';

const EditablefooterDocsPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-6">Editablefooter Component</h1>
      <p className="mb-4">
        The Editablefooter component provides a customizable footer section that allows users to edit various text fields dynamically. It is designed to enhance the user experience by allowing content updates directly within the footer area.
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
            <td className="border border-gray-300 px-4 py-2">data</td>
            <td className="border border-gray-300 px-4 py-2">any</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">as</td>
            <td className="border border-gray-300 px-4 py-2">React.ElementType</td>
            <td className="border border-gray-300 px-4 py-2">'footer'</td>
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
          <tr>
            <td className="border border-gray-300 px-4 py-2">children</td>
            <td className="border border-gray-300 px-4 py-2">React.ReactNode</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold my-4">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {`<Editablefooter
  itemPath="footer"
  data={siteData}
  className="custom-class"
>
  <p>Custom footer content</p>
</Editablefooter>`}
      </pre>

      <h2 className="text-2xl font-semibold my-4">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.auraCellularLabel</li>
        <li>*.precisionEngineeringRetailLabel</li>
        <li>*.description</li>
        <li>*.certifiedOemLaboratoryLabel</li>
        <li>*.smartphoneShowroomSubheading</li>
        <li>*.url</li>
        <li>*.label</li>
        <li>*.repairLaboratorySubheading</li>
        <li>*.flagshipLabHoursSubheading</li>
        <li>*.auraCellularTechnologiesIncAll</li>
        <li>*.backTopUrl</li>
        <li>*.backTopLabel</li>
        <li>*.auraCellularLabel2</li>
      </ul>
    </div>
  );
};

export default EditablefooterDocsPage;
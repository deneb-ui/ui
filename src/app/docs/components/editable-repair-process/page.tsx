import React from 'react';

const EditablerepairProcessDocsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center my-8">Editablerepair Process Component</h1>
      <p className="text-lg text-center mb-8">
        The Editablerepair Process component allows users to display and edit a series of repair steps, 
        providing a structured and interactive way to present information about a repair process.
      </p>
      
      <h2 className="text-2xl font-bold mt-10">Props</h2>
      <table className="min-w-full border-collapse border border-gray-300 mt-4">
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
            <td className="border border-gray-300 px-4 py-2">steps</td>
            <td className="border border-gray-300 px-4 py-2">RepairStep[]</td>
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

      <h2 className="text-2xl font-bold mt-10">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mt-4">
        {`<EditablerepairProcess 
  itemPath="repairProcess"
  steps={[
    { step: "1", title: "Initial Check", desc: "Check the symptoms.", time: "10 mins" },
    { step: "2", title: "Diagnosis", desc: "Diagnose the issue.", time: "30 mins" },
    { step: "3", title: "Repair", desc: "Carry out the repair.", time: "1 hour" },
    { step: "4", title: "Testing", desc: "Test the repair.", time: "20 mins" }
  ]}
/>`}
      </pre>

      <h2 className="text-2xl font-bold mt-10">Editable Field Paths</h2>
      <ul className="list-disc list-inside mt-4">
        <li>*.heading</li>
        <li>*.description</li>
        <li>*.steps.*.step</li>
        <li>*.steps.*.title</li>
        <li>*.steps.*.desc</li>
        <li>*.steps.*.time</li>
        <li>*.steps.*.duration</li>
      </ul>
    </div>
  );
};

export default EditablerepairProcessDocsPage;
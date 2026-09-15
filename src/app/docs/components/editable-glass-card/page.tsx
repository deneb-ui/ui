import React from 'react';

const EditableglassCardDocsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Editableglass Card</h1>
      <p className="mb-6">
        The Editableglass Card component allows users to edit text and images directly within a stylish glass-like card interface. It features a customizable glow effect and can be used to display various content types in an interactive manner.
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
            <td className="border border-gray-300 p-2">glowColor</td>
            <td className="border border-gray-300 p-2">'cyan' | 'blue' | 'violet' | 'white'</td>
            <td className="border border-gray-300 p-2">'cyan'</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">spotlight</td>
            <td className="border border-gray-300 p-2">boolean</td>
            <td className="border border-gray-300 p-2">true</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">as</td>
            <td className="border border-gray-300 p-2">React.ElementType</td>
            <td className="border border-gray-300 p-2">'div'</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">className</td>
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">''</td>
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
        {`<EditableglassCard itemPath="example.card" glowColor="blue">
  <p>Editable content goes here.</p>
</EditableglassCard>`}
      </pre>
      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.text</li>
        <li>*.image</li>
      </ul>
    </div>
  );
};

export default EditableglassCardDocsPage;
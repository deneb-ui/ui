import React from 'react';

const EditablecontactFormDocsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">EditableContactForm</h1>
      <p className="mb-6">
        The EditableContactForm component allows users to edit and submit their contact information including name, email, and message. It provides an interactive way to collect user input with editable fields.
      </p>
      
      <h2 className="text-xl font-semibold mb-2">Props</h2>
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
            <td className="border border-gray-300 p-2">ContactFormData</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">imageFallback</td>
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">'/placeholder.svg'</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">as</td>
            <td className="border border-gray-300 p-2">React.ElementType</td>
            <td className="border border-gray-300 p-2">'form'</td>
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
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {`<EditableContactForm
  itemPath="contactForm"
  data={{ name: "John Doe", email: "john@example.com", message: "Hello!" }}
/>`}
      </pre>

      <h2 className="text-xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside mb-6">
        <li>*.nameLabel</li>
        <li>*.johnDoePlaceholder</li>
        <li>*.emailLabel</li>
        <li>*.johnExampleComPlaceholder</li>
        <li>*.messageLabel</li>
        <li>*.yourMessagePlaceholder</li>
        <li>*.submitButton</li>
      </ul>
    </div>
  );
};

export default EditablecontactFormDocsPage;
import React from 'react';

const EditablefaqSectionDocsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center my-8">EditablefaqSection</h1>
      <p className="text-lg text-center mb-8">
        The EditablefaqSection component allows users to display a list of frequently asked questions (FAQs) with editable text fields for both questions and answers. It provides a user-friendly interface for managing FAQs dynamically.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Props</h2>
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
            <td className="border border-gray-300 px-4 py-2">faqs</td>
            <td className="border border-gray-300 px-4 py-2">FaqItem[]</td>
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
      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {`<EditablefaqSection
  itemPath="faqSection"
  faqs={[
    { q: "What is your return policy?", a: "You can return items within 30 days." },
    { q: "Do you offer international shipping?", a: "Yes, we ship worldwide." },
  ]}
/>`}
      </pre>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.transparencyAnswersLabel</li>
        <li>*.heading</li>
        <li>*.description</li>
        <li>*.faqs[*].q</li>
        <li>*.faqs[*].a</li>
      </ul>
    </div>
  );
};

export default EditablefaqSectionDocsPage;
import React from 'react';

const EditablefinalCtaDocsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold my-6">Editablefinal Cta</h1>
      <p className="mb-4">
        The Editablefinal Cta component is designed to provide a customizable call-to-action section that allows users to edit text and images dynamically. It features a visually appealing layout with options for adding images, headings, subtitles, and action buttons.
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
            <td className="border border-gray-300 px-4 py-2">siteData</td>
            <td className="border border-gray-300 px-4 py-2">any</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">imageFallback</td>
            <td className="border border-gray-300 px-4 py-2">string</td>
            <td className="border border-gray-300 px-4 py-2">"/images/showcase-phone.jpg"</td>
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
        {`<EditablefinalCta
  itemPath="home.finalCta"
  siteData={siteData}
>
  {/* Additional children can go here */}
</EditablefinalCta>`}
      </pre>
      <h2 className="text-2xl font-semibold my-4">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.phoneSilhouetteImage</li>
        <li>*.theNextStandardMobileCare</li>
        <li>*.heading2</li>
        <li>*.subtitle4</li>
        <li>*.description2</li>
        <li>*.shopPhonesUrl</li>
        <li>*.shopPhonesLabel</li>
        <li>*.bookRepairLabel</li>
        <li>*.lifetimeScreenWarrantyLabel</li>
        <li>*.noObligationFreeDiagnosticsLabel</li>
        <li>*.sameDayTurnaroundLabel</li>
      </ul>
    </div>
  );
};

export default EditablefinalCtaDocsPage;
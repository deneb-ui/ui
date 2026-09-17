import React from 'react';

const Editableeditorial-about-and-reviewsDocsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">EditableEditorialAboutAndReviews Component</h1>
      <p className="text-lg mb-8">
        The EditableEditorialAboutAndReviews component allows users to edit and display editorial content, including text and images, in a structured layout. It is designed for showcasing information about a brand, its philosophy, and client reviews.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Props</h2>
      <table className="min-w-full border-collapse border border-gray-300 mb-8">
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
      <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-8">
        {`<EditableEditorialAboutAndReviews
  itemPath="editorial.about"
  data={data}
  imageFallback="/placeholder.svg"
  className="custom-class"
>
  <p>Additional content can go here.</p>
</EditableEditorialAboutAndReviews>`}
      </pre>
      <h2 className="text-2xl font-semibold mb-4">Editable Field Paths</h2>
      <ul className="list-disc list-inside mb-8">
        <li>*.heritagePhilosophyLabel</li>
        <li>*.heading2</li>
        <li>*.drivesUsLabel</li>
        <li>*.description</li>
        <li>*.description2</li>
        <li>*.apexAtelierPrivateVillaCollection</li>
        <li>*.flagshipAtelierLabel</li>
        <li>*.zurichPrivateGalleryLabel</li>
        <li>*.collectorExperiencesLabel</li>
        <li>*.commissionedDeliveredSubheading</li>
        <li>*.name.*</li>
        <li>*.car.*</li>
        <li>*.location.*</li>
      </ul>
    </div>
  );
};

export default Editableeditorial-about-and-reviewsDocsPage;
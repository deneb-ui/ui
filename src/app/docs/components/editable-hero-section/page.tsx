import React from 'react';

const EditableheroSectionDocsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mt-10 mb-6">EditableheroSection Component</h1>
      <p className="mb-6">
        The EditableheroSection component is designed to create a visually appealing hero section that allows users to edit various text fields and an image. It is ideal for showcasing flagship products and services with customizable content.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Props</h2>
      <table className="min-w-full border-collapse border border-gray-300 mb-6">
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
            <td className="border border-gray-300 px-4 py-2">object</td>
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
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {`<EditableheroSection
  itemPath="heroSection"
  data={{
    flagshipSalesCertifiedPrecisionRepairs: "Flagship Sales · Certified Precision Repairs",
    premiumPhonesLabel: "Premium Phones.",
    expertRepairsLabel: "Expert Repairs.",
    oneDestinationLabel: "One Destination.",
    description: "Discover the latest smartphones...",
    shopPhonesLabel: "Shop Phones",
    bookRepairLabel: "Book a Repair",
    oemPartsLabel: "OEM Parts",
    subtitle: "Original Grade Screens",
    twentyFiveMinFixLabel: "25-Min Fix",
    subtitle2: "Express Walk-In Service",
    lifetimeLabel: "Lifetime",
    subtitle3: "Warranty on Repairs",
    auraLuxuryFlagshipSmartphonesImage: "/images/hero-phones.jpg"
  }}
/>`}
      </pre>
      <h2 className="text-2xl font-semibold mb-4">Editable Field Paths</h2>
      <ul className="list-disc list-inside mb-6">
        <li>*.flagshipSalesCertifiedPrecisionRepairs</li>
        <li>*.premiumPhonesLabel</li>
        <li>*.expertRepairsLabel</li>
        <li>*.oneDestinationLabel</li>
        <li>*.description</li>
        <li>*.shopPhonesLabel</li>
        <li>*.bookRepairLabel</li>
        <li>*.oemPartsLabel</li>
        <li>*.subtitle</li>
        <li>*.twentyFiveMinFixLabel</li>
        <li>*.subtitle2</li>
        <li>*.lifetimeLabel</li>
        <li>*.subtitle3</li>
        <li>*.auraLuxuryFlagshipSmartphonesImage</li>
      </ul>
    </div>
  );
};

export default EditableheroSectionDocsPage;
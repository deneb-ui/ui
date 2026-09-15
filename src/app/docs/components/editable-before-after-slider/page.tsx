import React from 'react';

const EditablebeforeAfterSliderDocsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Editable Before After Slider</h1>
      <p className="mb-4">
        The Editable Before After Slider component allows users to compare two images interactively. It features editable labels and descriptions, making it suitable for showcasing before-and-after scenarios, such as product restorations or transformations.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Props</h2>
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
      <h2 className="text-2xl font-semibold mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {`<EditableBeforeAfterSlider
  itemPath="example.path"
  data={{
    oemCleanroomRestorationLabel: "OEM Cleanroom Restoration",
    heading4: "From Damaged to Like-New.",
    description4: "Drag the interactive slider below to inspect our flawless OLED replacement and aerospace frame realignments.",
    repairedPristinePhoneImage: "/images/screen-repaired.jpg",
    factoryRestoredOemLabel: "FACTORY RESTORED (OEM)",
    shatteredDamagedScreenImage: "/images/screen-cracked.jpg",
    crackedDamagedLabel: "CRACKED / DAMAGED",
    dragLeftRightCompare: "Drag left or right to compare"
  }}
/>`}
      </pre>
      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside mb-6">
        <li>*.oemCleanroomRestorationLabel</li>
        <li>*.heading4</li>
        <li>*.description4</li>
        <li>*.repairedPristinePhoneImage</li>
        <li>*.factoryRestoredOemLabel</li>
        <li>*.shatteredDamagedScreenImage</li>
        <li>*.crackedDamagedLabel</li>
        <li>*.dragLeftRightCompare</li>
      </ul>
    </div>
  );
};

export default EditablebeforeAfterSliderDocsPage;
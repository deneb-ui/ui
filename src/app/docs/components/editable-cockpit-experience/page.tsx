import React from 'react';

const EditablecockpitExperienceDocsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">EditableCockpitExperience</h1>
      <p className="mb-6">
        The EditableCockpitExperience component provides an interactive cockpit experience with editable text fields and hotspots. It allows users to customize the cockpit's appearance and content dynamically.
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
            <td className="border border-gray-300 p-2">hotspots</td>
            <td className="border border-gray-300 p-2">Hotspot[]</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">imageFallback</td>
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">"/placeholder.svg"</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">as</td>
            <td className="border border-gray-300 p-2">React.ElementType</td>
            <td className="border border-gray-300 p-2">"section"</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">className</td>
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">""</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">style</td>
            <td className="border border-gray-300 p-2">React.CSSProperties</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {`<EditableCockpitExperience
  itemPath="cockpit.experience"
  hotspots={[
    { id: '1', x: 50, y: 50, title: 'Driver Seat', tag: 'seat', description: 'The driver seat.' },
    { id: '2', x: 30, y: 70, title: 'Steering Wheel', tag: 'wheel', description: 'The steering wheel.' },
  ]}
  imageFallback="/images/fallback.jpg"
/>`}
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Editable Fields</h2>
      <ul className="list-disc list-inside">
        <li>*.cabinArchitectureLabel</li>
        <li>*.heading2</li>
        <li>*.theDriverLabel</li>
        <li>*.description</li>
        <li>*.supercarCockpitInteriorImage</li>
      </ul>
    </div>
  );
};

export default EditablecockpitExperienceDocsPage;
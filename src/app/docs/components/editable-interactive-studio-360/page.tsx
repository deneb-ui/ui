import React from 'react';

const EditableinteractiveStudio360DocsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">Editable Interactive Studio 360</h1>
      <p className="text-lg mb-8">
        The Editable Interactive Studio 360 component allows users to interactively explore a 360-degree view of a product. Users can change angles, finishes, and studio lighting while editing text fields dynamically.
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
            <td className="border border-gray-300 px-4 py-2">object</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
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
            <td className="border border-gray-300 px-4 py-2">as</td>
            <td className="border border-gray-300 px-4 py-2">React.ElementType</td>
            <td className="border border-gray-300 px-4 py-2">'section'</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-8">
        {`<EditableInteractiveStudio360
  itemPath="product.360"
  data={{
    angles: [{ id: 'angle1', label: 'Angle 1', image: '/path/to/image1.jpg' }],
    finishes: [{ name: 'Glossy', color: '#FFFFFF', filter: 'none' }],
    activeFinish: 'Glossy',
    studioLight: 'white',
    siteData: {
      content: {
        home: {
          item360DigitalSpecificationSuiteLabel: '360° DIGITAL SPECIFICATION SUITE',
          heading6: 'EXPLORE',
          everyAngleLabel: 'EVERY ANGLE.',
          description4: 'DRAG HORIZONTALLY ACROSS THE STAGE TO ROTATE CHASSIS.',
          dragOrbitAngleLabel: 'DRAG TO ORBIT ANGLE',
          paintLabel: 'PAINT:',
          studioLightLabel: 'STUDIO LIGHT',
        },
      },
    },
  }}
/>`}
      </pre>
      <h2 className="text-2xl font-semibold mb-4">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.item360DigitalSpecificationSuiteLabel</li>
        <li>*.heading6</li>
        <li>*.everyAngleLabel</li>
        <li>*.description4</li>
        <li>*.currentViewImage</li>
        <li>*.currentViewLabel</li>
        <li>*.dragOrbitAngleLabel</li>
        <li>*.paintLabel</li>
        <li>*.studioLightLabel</li>
      </ul>
    </div>
  );
};

export default EditableinteractiveStudio360DocsPage;
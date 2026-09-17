import React from 'react';

const EditablehorizontalShowcaseDocsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Editablehorizontal Showcase</h1>
      <p className="mb-6">
        The Editablehorizontal Showcase component allows users to display a collection of cars with editable fields. It provides an interactive experience where users can view details about each car, including images, specifications, and pricing, while also allowing for inline editing of the displayed information.
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
            <td className="border border-gray-300 px-4 py-2">showcaseCars</td>
            <td className="border border-gray-300 px-4 py-2">CarSpec[]</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">currentIndex</td>
            <td className="border border-gray-300 px-4 py-2">number</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
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
            <td className="border border-gray-300 px-4 py-2">onSelectCar</td>
            <td className="border border-gray-300 px-4 py-2">(car: CarSpec) => void</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {`<EditablehorizontalShowcase
  itemPath="car.showcase"
  showcaseCars={cars}
  currentIndex={0}
  onSelectCar={(car) => console.log(car)}
/>`}
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.horizontalRevealExperienceLabel</li>
        <li>*.heading5</li>
        <li>*.withoutCompromiseLabel</li>
        <li>*.image</li>
        <li>*.brand</li>
        <li>*.year</li>
        <li>*.name</li>
        <li>*.description</li>
        <li>*.priceLabel</li>
        <li>*.formattedPrice</li>
        <li>*.inspectSpecLabel</li>
      </ul>
    </div>
  );
};

export default EditablehorizontalShowcaseDocsPage;
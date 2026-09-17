import React from 'react';

const EditablecarComparisonModalDocsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Editablecar Comparison Modal</h1>
      <p className="mb-6">
        The Editablecar Comparison Modal is a component that allows users to compare multiple cars side by side. Users can edit car specifications, remove cars from the comparison, and explore the inventory to add new cars.
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
            <td className="border border-gray-300 px-4 py-2">compareCars</td>
            <td className="border border-gray-300 px-4 py-2">CarSpec[]</td>
            <td className="border border-gray-300 px-4 py-2">[]</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">imageFallback</td>
            <td className="border border-gray-300 px-4 py-2">string</td>
            <td className="border border-gray-300 px-4 py-2">'/placeholder.svg'</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">as</td>
            <td className="border border-gray-300 px-4 py-2">React.ElementType</td>
            <td className="border border-gray-300 px-4 py-2">'div'</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">onClose</td>
            <td className="border border-gray-300 px-4 py-2">() => void</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">onRemoveFromCompare</td>
            <td className="border border-gray-300 px-4 py-2">(carId: string) => void</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">onClearAll</td>
            <td className="border border-gray-300 px-4 py-2">() => void</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
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
        {`<EditablecarComparisonModal
  itemPath="carComparison"
  compareCars={cars}
  onClose={() => setModalOpen(false)}
  onRemoveFromCompare={(id) => removeCar(id)}
  onClearAll={() => clearAllCars()}
  onSelectCar={(car) => selectCar(car)}
/>`}
      </pre>
      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.heading</li>
        <li>*.sideSideTechnicalTelemetryEvaluation</li>
        <li>*.clearAllLabel</li>
        <li>*.subtitle</li>
        <li>*.exploreInventoryLabel</li>
        <li>*.car.*.image</li>
        <li>*.car.*.brand</li>
        <li>*.car.*.name</li>
        <li>*.car.*.formattedPrice</li>
        <li>*.car.*.inspectSpecLabel</li>
      </ul>
    </div>
  );
};

export default EditablecarComparisonModalDocsPage;
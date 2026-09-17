export default function EditablecuratedPerformanceDocsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
      <h1 className="text-5xl font-bold mb-4">EditableCuratedPerformance</h1>
      <p className="text-lg mb-8">
        The EditableCuratedPerformance component displays a curated collection of cars with editable fields for their specifications. Users can select cars to view more details and compare them with others.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Props</h2>
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
            <td className="border border-gray-300 px-4 py-2">featuredCars</td>
            <td className="border border-gray-300 px-4 py-2">CarSpec[]</td>
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
            <td className="border border-gray-300 px-4 py-2">compareList</td>
            <td className="border border-gray-300 px-4 py-2">string[]</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">onSelectCar</td>
            <td className="border border-gray-300 px-4 py-2">(car: CarSpec) => void</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">onToggleCompare</td>
            <td className="border border-gray-300 px-4 py-2">(carId: string) => void</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-3xl font-semibold mb-4">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded-md mb-8">
        {`<EditableCuratedPerformance
  itemPath="carPerformance"
  featuredCars={featuredCars}
  compareList={compareList}
  onSelectCar={handleSelectCar}
  onToggleCompare={handleToggleCompare}
/>`}
      </pre>

      <h2 className="text-3xl font-semibold mb-4">Editable Field Paths</h2>
      <ul className="list-disc list-inside mb-8">
        <li>*.theShowroomPortfolioLabel</li>
        <li>*.heading</li>
        <li>*.performanceLabel</li>
        <li>*.description</li>
        <li>*.cars.*.image</li>
        <li>*.cars.*.name</li>
        <li>*.cars.*.powerLabel</li>
        <li>*.cars.*.secLabel</li>
        <li>*.cars.*.speedLabel</li>
        <li>*.cars.*.acquisitionLabel</li>
        <li>*.cars.*.viewMachineLabel</li>
      </ul>
    </div>
  );
}
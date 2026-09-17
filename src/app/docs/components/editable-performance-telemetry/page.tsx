import React from 'react';

const EditableperformanceTelemetryDocsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">EditableperformanceTelemetry</h1>
      <p className="mb-6">
        The EditableperformanceTelemetry component displays performance telemetry statistics with editable fields for dynamic content management. It allows users to customize various aspects of the telemetry data, including labels, values, and descriptions.
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
            <td className="border border-gray-300 px-4 py-2">telemetryStats</td>
            <td className="border border-gray-300 px-4 py-2">TelemetryStat[]</td>
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
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {`<EditableperformanceTelemetry
  itemPath="performance.telemetry"
  telemetryStats={[
    { label: "Speed", value: "200", unit: "km/h", subtext: "Top Speed", icon: SpeedIcon },
    { label: "Power", value: "500", unit: "hp", subtext: "Horsepower", icon: PowerIcon },
  ]}
/>`}
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.backgroundImage</li>
        <li>*.telemetryBenchmarkDataLabel</li>
        <li>*.heading2</li>
        <li>*.withoutLimitsLabel</li>
        <li>*.description2</li>
        <li>*.telemetryStats[*].label</li>
        <li>*.telemetryStats[*].value</li>
        <li>*.telemetryStats[*].unit</li>
        <li>*.telemetryStats[*].subtext</li>
        <li>*.brakeSystem420mmCarbonCeramic</li>
        <li>*.torsionalRigidity40000Nm</li>
        <li>*.aerodynamicCoefficient031Cd</li>
      </ul>
    </div>
  );
};

export default EditableperformanceTelemetryDocsPage;
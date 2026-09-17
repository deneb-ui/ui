import React from 'react';

const EditableengineSoundExperienceDocsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">Editableengine Sound Experience</h1>
      <p className="text-lg mb-8">
        The Editableengine Sound Experience component allows users to interactively explore and edit the sound profiles of various engine types. It features editable text fields for customization and a visually appealing layout that enhances user engagement.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Props</h2>
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
            <td className="border border-gray-300 px-4 py-2">object</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">as</td>
            <td className="border border-gray-300 px-4 py-2">React.ElementType</td>
            <td className="border border-gray-300 px-4 py-2">'section'</td>
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
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {`<EditableengineSoundExperience
  itemPath="engine.sound.experience"
  siteData={{
    content: {
      home: {
        exhaustAcousticChamberImage: "/images/exhaust.jpg",
        imageAlt2: "Exhaust Image",
        acousticHarmonicsLabel: "ACOUSTIC HARMONICS",
        heading3: "HEAR THE",
        performanceLabel: "PERFORMANCE.",
        description2: "Explore the sound of engines.",
        tachometerTelemetryLabel: "TACHOMETER TELEMETRY",
        rpmLabel: "RPM",
        startEngineLabel: "START ENGINE",
        revThrottleBlipLabel: "REV THROTTLE (BLIP)",
      },
    },
  }}
/>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.exhaustAcousticChamberImage</li>
        <li>*.acousticHarmonicsLabel</li>
        <li>*.heading3</li>
        <li>*.performanceLabel</li>
        <li>*.description2</li>
        <li>*.currentProfileName</li>
        <li>*.currentProfileDescription</li>
        <li>*.tachometerTelemetryLabel</li>
        <li>*.rpmLabel</li>
        <li>*.startEngineLabel</li>
        <li>*.revThrottleBlipLabel</li>
      </ul>
    </div>
  );
};

export default EditableengineSoundExperienceDocsPage;
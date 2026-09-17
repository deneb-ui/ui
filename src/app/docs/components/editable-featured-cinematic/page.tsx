import React from 'react';

const EditablefeaturedCinematicDocsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">EditableFeaturedCinematic Component</h1>
      <p className="mb-6">
        The EditableFeaturedCinematic component is designed to showcase a featured cinematic experience with editable text and images. It allows users to customize various aspects of the display, including images, labels, and descriptions, making it ideal for dynamic content presentation.
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
            <td className="border border-gray-300 p-2">onDiscover</td>
            <td className="border border-gray-300 p-2">(car: CarSpec) => void</td>
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
        {`<EditableFeaturedCinematic
  itemPath="featured.porsche911"
  onDiscover={handleDiscover}
  imageFallback="/images/fallback.png"
>
  {/* Additional content can go here */}
</EditableFeaturedCinematic>`}
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside mb-6">
        <li>*.imageUrl</li>
        <li>*.gt3RsLabel</li>
        <li>*.theTrackBenchmarkLabel</li>
        <li>*.heading</li>
        <li>*.description</li>
        <li>*.aerodynamicsLabel</li>
        <li>*.activeDrsLabel</li>
        <li>*.item860KgDownforceLabel</li>
        <li>*.powertrainLabel</li>
        <li>*.item518HpLabel</li>
        <li>*.item40lFlatSixLabel</li>
        <li>*.redlineLabel</li>
        <li>*.item9000RpmLabel</li>
        <li>*.atmosphericSoundLabel</li>
        <li>*.discoverMachineLabel</li>
      </ul>
    </div>
  );
};

export default EditablefeaturedCinematicDocsPage;
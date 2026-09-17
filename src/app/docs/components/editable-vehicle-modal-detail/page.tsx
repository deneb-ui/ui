import React from 'react';

const EditablevehicleModalDetailDocsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Editablevehicle Modal Detail</h1>
      <p className="mb-6">
        The Editablevehicle Modal Detail component is designed to display and edit detailed information about a vehicle, including its specifications, images, and features. It allows users to interactively modify the vehicle's details in a modal format.
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
            <td className="border border-gray-300 p-2">car</td>
            <td className="border border-gray-300 p-2">CarSpec | null</td>
            <td className="border border-gray-300 p-2">null</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">imageFallback</td>
            <td className="border border-gray-300 p-2">string</td>
            <td className="border border-gray-300 p-2">'/placeholder.svg'</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">as</td>
            <td className="border border-gray-300 p-2">React.ElementType</td>
            <td className="border border-gray-300 p-2">'div'</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">onClose</td>
            <td className="border border-gray-300 p-2">() => void</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">onBookTestDrive</td>
            <td className="border border-gray-300 p-2">(car: CarSpec) => void</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">onReserve</td>
            <td className="border border-gray-300 p-2">(car: CarSpec) => void</td>
            <td className="border border-gray-300 p-2">-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
        {`<EditablevehicleModalDetail
  itemPath="vehicle1"
  car={carData}
  onClose={() => setShowModal(false)}
  onBookTestDrive={(car) => console.log('Book Test Drive:', car)}
  onReserve={(car) => console.log('Reserve:', car)}
/>`}
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.heroImage</li>
        <li>*.brand</li>
        <li>*.name</li>
        <li>*.tagline</li>
        <li>*.chassisPowertrainSummarySubheading</li>
        <li>*.description</li>
        <li>*.horsepowerLabel</li>
        <li>*.horsepower</li>
        <li>*.accelerationLabel</li>
        <li>*.acceleration</li>
        <li>*.topSpeedLabel</li>
        <li>*.topSpeed</li>
        <li>*.torqueLabel</li>
        <li>*.torque</li>
        <li>*.highResolutionGallerySubheading</li>
        <li>*.gallery.*</li>
      </ul>
    </div>
  );
};

export default EditablevehicleModalDetailDocsPage;
import React from 'react';

const EditablefinancingCalculatorSectionDocsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Editable Financing Calculator Section</h1>
      <p className="mb-6">
        The Editable Financing Calculator Section component provides an interactive financing calculator for users to estimate their financing options. It allows for editable fields, enabling customization of labels and descriptions to fit specific needs.
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
        {`<EditableFinancingCalculatorSection
  itemPath="financingCalculator"
  data={{
    bespokeFinancialSolutionsLabel: "Custom Financing Options",
    heading4: "Your Financing",
    yoursLabel: "Options",
    description3: "Estimate your financing with ease."
  }}
/>`}
      </pre>
      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.bespokeFinancialSolutionsLabel</li>
        <li>*.heading4</li>
        <li>*.yoursLabel</li>
        <li>*.description3</li>
        <li>*.selectAllocationLabel</li>
        <li>*.downPaymentLabel</li>
        <li>*.label</li>
        <li>*.financingTermLabel</li>
        <li>*.moLabel</li>
        <li>*.tradeValuationEstimateLabel</li>
        <li>*.structuredEstimateLabel</li>
        <li>*.msrpPriceLabel</li>
        <li>*.downPaymentLabel2</li>
        <li>*.estimatedTradeCreditLabel</li>
        <li>*.estimatedAprLabel</li>
        <li>*.estimatedMonthlyPaymentLabel</li>
        <li>*.monthLabel</li>
        <li>*.excludesStateLuxuryTaxRegistration</li>
        <li>*.testDriveLabel</li>
        <li>*.contactVipLabel</li>
      </ul>
    </div>
  );
};

export default EditablefinancingCalculatorSectionDocsPage;
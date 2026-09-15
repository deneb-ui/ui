import React from 'react';

const EditableinteractiveDiagnosticDocsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Editable Interactive Diagnostic</h1>
      <p className="mb-6">
        The Editable Interactive Diagnostic component allows users to interactively diagnose issues with their devices by selecting symptoms. It provides an estimated root cause, turnaround time, and repair quote based on the selected symptom.
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
        {`<EditableInteractiveDiagnostic
  itemPath="diagnostic"
  imageFallback="/placeholder.svg"
  className="custom-class"
/>`}
      </pre>
      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.interactiveSelfDiagnosticLabel</li>
        <li>*.heading5</li>
        <li>*.description5</li>
        <li>*.*.title</li>
        <li>*.*.symptom</li>
        <li>*.diagnosticAssessmentLabel</li>
        <li>*.laboratoryRootCauseLabel</li>
        <li>*.turnaroundTimeLabel</li>
        <li>*.estRepairRangeLabel</li>
        <li>*.includesComplimentaryInteriorUltrasonicCleaning</li>
        <li>*.scheduleFixIssueLabel</li>
      </ul>
    </div>
  );
};

export default EditableinteractiveDiagnosticDocsPage;
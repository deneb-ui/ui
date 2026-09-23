import React from 'react';

const EditablepageDocsPage = () => {
  return (
    <div className="documentation-page">
      <h1 className="component-title">Editablepage</h1>
      <p className="component-description">
        The Editablepage component allows users to create a customizable page with editable text and images. It is designed to facilitate content management directly within the UI, enabling real-time updates to the displayed information.
      </p>
      
      <h2 className="props-title">Props</h2>
      <table className="props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>itemPath</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>data</td>
            <td>any</td>
            <td>-</td>
          </tr>
          <tr>
            <td>as</td>
            <td>React.ElementType</td>
            <td>&#39;main&#39;</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>&#39;&#39;</td>
          </tr>
          <tr>
            <td>style</td>
            <td>React.CSSProperties</td>
            <td>-</td>
          </tr>
          <tr>
            <td>children</td>
            <td>React.ReactNode</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="usage-title">Usage Example</h2>
      <pre className="usage-example">
        {`<Editablepage
  itemPath="about"
  data={data}
>
  {/* Additional content can go here */}
</Editablepage>`}
      </pre>

      <h2 className="editable-fields-title">Editable Field Paths</h2>
      <ul className="editable-fields-list">
        <li>*.aboutVanta</li>
        <li>*.engineeredMotion</li>
        <li>*.aFootwearLaboratoryObsessedIntersection</li>
        <li>*.vantaWasFoundedClearMission</li>
        <li>*.eachModelGoesThroughRigorous</li>
        <li>*.ourOrderingProcessDeliberatelySimple</li>
        <li>*.vantaSneakerDesignCraftsmanshipImage</li>
        <li>*.theLab</li>
        <li>*.whereIdeasTakeShape</li>
        <li>*.fromInitialSketchFinalStitch</li>
        <li>*.founded</li>
        <li>*.colombo</li>
        <li>*.designStudio</li>
        <li>*.pairsDelivered</li>
        <li>*.exploreCollectionUrl</li>
        <li>*.exploreCollectionLabel</li>
      </ul>
    </div>
  );
};

export default EditablepageDocsPage;
export default function EditableFilterPanelDocsPage() {
  return (
    <div className="docs-page">
      <h1 className="docs-title">EditableFilterPanel</h1>
      <p className="docs-description">
        The EditableFilterPanel component provides a user interface for filtering items in a shop. It allows users to select categories, genders, sizes, price ranges, and sorting options, all of which can be edited directly within the panel.
      </p>
      
      <h2 className="docs-section-title">Props</h2>
      <table className="docs-props-table">
        <thead>
          <tr>
            <th className="docs-prop-name">Prop Name</th>
            <th className="docs-prop-type">Type</th>
            <th className="docs-prop-default">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>itemPath</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>filters</td>
            <td>ShopFilters</td>
            <td>-</td>
          </tr>
          <tr>
            <td>availableSizes</td>
            <td>number[]</td>
            <td>-</td>
          </tr>
          <tr>
            <td>maxPrice</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>mobileOpen</td>
            <td>boolean</td>
            <td>-</td>
          </tr>
          <tr>
            <td>resultCount</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>imageFallback</td>
            <td>string</td>
            <td>'/placeholder.svg'</td>
          </tr>
          <tr>
            <td>as</td>
            <td>React.ElementType</td>
            <td>'div'</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>''</td>
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

      <h2 className="docs-section-title">Usage Example</h2>
      <pre className="docs-code-block">
        {`<EditableFilterPanel
  itemPath="shop.filters"
  filters={{
    category: 'clothing',
    gender: 'unisex',
    sizes: [38, 40],
    priceMin: 1000,
    priceMax: 5000,
    sort: 'priceAsc',
    saleOnly: false,
    search: ''
  }}
  availableSizes={[36, 38, 40, 42, 44]}
  maxPrice={10000}
  mobileOpen={false}
  resultCount={100}
/>`}
      </pre>

      <h2 className="docs-section-title">Editable Fields</h2>
      <ul className="docs-editable-fields">
        <li>*.heading</li>
        <li>*.clearAllLabel</li>
        <li>*.sort</li>
        <li>*.SORT_OPTIONS[*].label</li>
        <li>*.categoryLabel</li>
        <li>*.genderLabel</li>
        <li>*.sizeEuLabel</li>
        <li>*.priceLkrLabel</li>
        <li>*.saleItemsOnlyLabel</li>
      </ul>
    </div>
  );
}
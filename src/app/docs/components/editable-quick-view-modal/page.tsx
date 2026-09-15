export default function Editablequick-view-modalDocsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Editable Quick View Modal</h1>
      <p className="mb-6">
        The Editable Quick View Modal component provides a user-friendly interface for displaying product details in a modal format. It allows users to edit various fields such as name, price, and images directly within the modal.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Props</h2>
      <table className="min-w-full border-collapse border border-gray-300">
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
            <td className="border border-gray-300 p-2">product</td>
            <td className="border border-gray-300 p-2">QuickViewProduct</td>
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
            <td className="border border-gray-300 p-2">"div"</td>
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
      <h2 className="text-2xl font-semibold mt-6 mb-2">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {`<EditableQuickViewModal
  itemPath="product1"
  product={{
    badge: "New",
    brand: "Brand Name",
    name: "Product Name",
    subtitle: "Product Subtitle",
    price: 100,
    originalPrice: 150,
    description: "Product description goes here.",
    condition: "New",
    image: "/path/to/image.jpg",
    colors: [{ name: "Red", hex: "#FF0000" }],
    storageOptions: ["64GB", "128GB"],
    specs: [{ label: "Weight", value: "1kg" }]
  }}
/>`}
      </pre>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.badge</li>
        <li>*.image</li>
        <li>*.condition</li>
        <li>*.brand</li>
        <li>*.name</li>
        <li>*.subtitle</li>
        <li>*.priceLabel</li>
        <li>*.price</li>
        <li>*.originalPriceLabel</li>
        <li>*.originalPrice</li>
        <li>*.inStockLabel</li>
        <li>*.description</li>
        <li>*.finishLabel</li>
        <li>*.selectedColor</li>
        <li>*.capacityLabel</li>
        <li>*.storageOption</li>
        <li>*.specLabel</li>
        <li>*.specValue</li>
      </ul>
    </div>
  );
}
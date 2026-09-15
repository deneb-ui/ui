import React from 'react';

const EditablefeaturedPhonesDocsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">EditableFeaturedPhones Component</h1>
      <p className="mb-6">
        The EditableFeaturedPhones component allows users to display a list of featured phones with editable fields for various attributes such as brand, name, price, and more. This component is designed to be flexible and customizable, making it easy to integrate into any application.
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
            <td className="border border-gray-300 p-2">phones</td>
            <td className="border border-gray-300 p-2">PhoneItem[]</td>
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
        {`<EditableFeaturedPhones
  itemPath="featuredPhones"
  phones={[
    {
      id: 1,
      name: "iPhone 13",
      brand: "Apple",
      subtitle: "Latest model",
      price: "999",
      originalPrice: "1099",
      badge: "Best Seller",
      image: "/images/iphone13.jpg"
    },
    {
      id: 2,
      name: "Galaxy S21",
      brand: "Samsung",
      subtitle: "Flagship phone",
      price: "799",
      originalPrice: "899",
      image: "/images/galaxy-s21.jpg"
    }
  ]}
/>`}
      </pre>
      <h2 className="text-2xl font-semibold mb-2">Editable Field Paths</h2>
      <ul className="list-disc list-inside">
        <li>*.phones.*.brand</li>
        <li>*.phones.*.name</li>
        <li>*.phones.*.subtitle</li>
        <li>*.phones.*.badge</li>
        <li>*.phones.*.image</li>
        <li>*.phones.*.price</li>
        <li>*.phones.*.originalPrice</li>
      </ul>
    </div>
  );
};

export default EditablefeaturedPhonesDocsPage;
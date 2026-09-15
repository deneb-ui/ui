export default function EditabletestimonialsDocsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-zinc-950 mb-6">EditableTestimonials</h1>
      <p className="text-lg text-zinc-600 mb-8">
        The EditableTestimonials component allows users to display and edit client reviews dynamically. It provides a structured way to showcase testimonials with various attributes such as name, role, rating, and comments.
      </p>
      
      <h2 className="text-2xl font-bold text-zinc-900 mb-4">Props</h2>
      <table className="min-w-full border-collapse border border-gray-300 mb-8">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">itemPath</td>
            <td className="border border-gray-300 px-4 py-2">string</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">reviews</td>
            <td className="border border-gray-300 px-4 py-2">Review[]</td>
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

      <h2 className="text-2xl font-bold text-zinc-900 mb-4">Usage Example</h2>
      <pre className="bg-gray-100 p-4 rounded mb-8">
        {`<EditableTestimonials
  itemPath="testimonials"
  reviews={[
    {
      name: "John Doe",
      role: "CEO, Company",
      rating: 5,
      date: "2023-01-01",
      verifiedService: "Verified Purchase",
      comment: "This product is amazing!",
      device: "iPhone 12"
    },
    // Add more reviews as needed
  ]}
/>`}
      </pre>

      <h2 className="text-2xl font-bold text-zinc-900 mb-4">Editable Field Paths</h2>
      <ul className="list-disc list-inside mb-8">
        <li>*.clientExperiencesLabel</li>
        <li>*.heading</li>
        <li>*.description</li>
        <li>*.REVIEWS[*].rating</li>
        <li>*.verifiedClientLabel</li>
        <li>*.REVIEWS[*].comment</li>
        <li>*.REVIEWS[*].name</li>
        <li>*.REVIEWS[*].role</li>
        <li>*.REVIEWS[*].device</li>
        <li>*.REVIEWS[*].date</li>
        <li>*.REVIEWS[*].verifiedService</li>
      </ul>
    </div>
  );
}
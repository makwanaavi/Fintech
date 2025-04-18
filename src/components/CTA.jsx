import { FaDownload } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Get Your Free AI-Powered Financial Report
        </h2>
        <p className="text-gray-700 text-base mb-6">
          Discover hidden insights and smart investment strategies using the power of AI.
          Enter your email to receive a custom financial snapshot.
        </p>

        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Email signup form"
        >
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Get Report
          </button>
        </form>

        <div className="mt-8 border rounded p-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Free Download</h3>
            <p className="text-sm text-gray-600">AI in Modern Finance – 2025 Outlook</p>
          </div>
          <a
            href="/AI-in-Modern-Finance-2025.pdf"
            download
            className="flex items-center gap-2 text-blue-600 hover:underline font-medium"
          >
            <FaDownload className="text-lg" /> Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

export default function Contact() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 bg-[#2e2c1e] text-white placeholder:text-[#bfbb9c] focus:outline-none"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-3 bg-[#2e2c1e] text-white placeholder:text-[#bfbb9c] focus:outline-none"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 bg-[#2e2c1e] text-white placeholder:text-[#bfbb9c] focus:outline-none"
            placeholder="Subject"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            rows="5"
            className="w-full border border-gray-300 rounded-md p-3 bg-[#2e2c1e] text-white placeholder:text-[#bfbb9c] focus:outline-none"
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-[#f3c144] text-[#181611] text-sm font-bold hover:bg-[#e2b831]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

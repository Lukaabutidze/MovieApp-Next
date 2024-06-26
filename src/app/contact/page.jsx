"use client";

const ContactUs = () => {
  //

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted!");
  };

  return (
    <div className="p-4 sm:p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="mb-5">
            <div className="flex justify-center mb-6 mt-2 gap-2">
              <h1 className="text-xl sm:text-3xl font-semibold mt-10">
                Contact Us
              </h1>
            </div>
            <label
              htmlFor="name"
              className="mb-2 sm:mb-3 block text-sm sm:text-base font-semibold "
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-bold text-[#383c44] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 sm:mb-3 block text-sm sm:text-base font-semibold "
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-bold text-[#383c44] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-2 sm:mb-3 block text-sm sm:text-base font-semibold "
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject..."
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-bold text-[#383c44] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-2 sm:mb-3 block text-sm sm:text-base font-semibold"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message..."
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-bold text-[#383c44] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-amber-400 py-2 px-4 sm:py-3 sm:px-8 text-sm sm:text-base font-semibold text-black outline-none cursor-pointer hover:scale-110 transition-all-ease duration-500 shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

export const Contact = () => {
  return (
    <div class="flex items-center justify-center p-42 border-2 border-red-600 rounded-md">
      <div class="mx-auto w-full max-w-[550px] ">
        <h2 className="text-4xl text-center text-gray-900 font-semibold ">
          Send Us A Message!
        </h2>
        <br />
        <br />
        <form action="https://formspree.io/f/xknlppzr" method="POST">
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <br />
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <br />

          <div class="mb-5">
            <label
              for="message"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Message:
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <br />
          <div>
            <button class="hover:shadow-form rounded-md bg-[red] py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

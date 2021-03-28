function Contact() {
  return (
    <div className="p-4 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex mx-24 mt-14">
          <div className="w-1/2 mr-4">
            <h4 className="text-5xl text-center font-bold text-gray-700 mb-6">
              Contact Me
            </h4>
            <p className="text-gray-600 text-lg mb-6">
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to use the form.
            </p>
            <form>
              <div className="flex mb-6">
                <div class="w-1/2 pr-4">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border-b-2 focus:border-gray-700 transition-colors ease-in-out duration-200 focus:outline-none"
                  />
                </div>
                <div class="w-1/2">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border-b-2 focus:border-gray-700 transition-colors ease-in-out duration-200 focus:outline-none"
                  />
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="message"
                  class="block mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400"
                >
                  Your Message
                </label>

                <textarea
                  rows="2"
                  name="message"
                  id="message"
                  placeholder="Message"
                  class="w-full px-3 py-2 placeholder-gray-300 border-2 focus:border-gray-900 transition-colors ease-in-out duration-200 focus:outline-none"
                  required
                ></textarea>
              </div>
              <div class="mb-6">
                <button class="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 transition ease-in-out duration-200 text-lg font-bold py-2 px-4 focus:outline-none">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

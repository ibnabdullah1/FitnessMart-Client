import { useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin, SlPhone } from "react-icons/sl";
import SectionBanner from "../components/SectionBanner";

const Contact = () => {
  const form = useRef();

  return (
    <div className="bg-white dark:bg-gray-900" id="contact">
      <SectionBanner
        title={"Contact Us"}
        description={
          "Want to contact us? Choose an option below and well be happy to show you how we can transform company web experience."
        }
      />
      <div className="max-w-7xl mx-auto p-5 lg:px-10 lg:py-16">
        <div className=" border border-[rgb(23,122,86,0.1)] rounded-md lg:flex justify-around items-start p-5 lg:py-10 lg:px-14 ">
          <div className="lg:w-[40%] lg:mb-0 mb-10">
            <h2 className="text-2xl text-primary font-semibold ">
              Get In Touch
            </h2>
            <p className="max-w-sm  mb-4 ">
              Have something to say? We are here to help. Fill up the form or
              send email or call phone.
            </p>
            <div className="flex items-center mt-2 space-x-2 text-secondary ">
              <SlPhone />

              <a href="tel:+8801800000000">+8801800000000</a>
            </div>
            <div className="flex items-start mt-2 space-x-2 text-secondary ">
              <MdOutlineMail className="mt-[6px]" />
              <div>
                <a href="mailto:sohelhodavasi@gmail.com">VigorFit@gmail.com</a>
                <br />
                <a href="mailto:support@VigorFit.com">support@VigorFit.com</a>
              </div>
            </div>
            <div className="flex items-start mt-2 space-x-2 text-secondary ">
              <SlLocationPin className="mt-[6px]" />

              <p>
                VigorFit Shop <br />
                Karwan Bazar, Tejgaon, Dhaka-1215.
              </p>
            </div>
          </div>
          <div className="max-w-[650px] lg:w-[60%] bg-white">
            <form ref={form}>
              <div className="mb-5  md:flex items-start gap-4 lg:justify-start justify-between">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    autoComplete="false"
                    className="w-full  mb-5  md:mb-0  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                    name="name"
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="phone"
                    name="phone"
                    autoComplete="false"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="email_address">Email Address</label>
                <input
                  id="email_address"
                  type="email"
                  required
                  placeholder="Email Address"
                  autoComplete="false"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  name="email"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email_address">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder=" Subject"
                  autoComplete="false"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  name="subject"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Your Message"
                  required
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  name="message"
                />
              </div>

              <button className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

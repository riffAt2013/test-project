import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="grid h-fit place-items-center">
        <div className="p-10">
          {/*Card 1*/}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="h-64 w-48 mx-auto rounded-xl"
              src="/images/me.jpg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                Rifat Masud
              </div>
              <p className="text-gray-700 text-base">
                Hello! I want to join EB Solutions as a fullstack engineer. I
                hope this meal webapp worked just fine! 😉
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-row justify-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <a
                  href="https://www.facebook.com/ibnemashood"
                  target={"_blank"}
                >
                  <img className="" src="/images/fb.png" />
                </a>
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <a href="https://github.com/riffAt2013" target={"_blank"}>
                  <img className="" src="/images/github.png" />
                </a>
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <a href="mailto:rifatmasud0@gmail.com">
                  <img className="" src="/images/mail.png" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

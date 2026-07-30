import React from "react";

const videos = [
  "wU7GLvvSDjI",
  "bv8rNsRSlcg",
  "bv8rNsRSlcg",
  "hlXmlmmkWPQ",
  "6w0tL62TDOU",
  "lAgaoNn0irQ",
];

https://www.youtube.com/embed/wU7GLvvSDjI?si=lYWHwGTyO6bOhiNj'

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/6dJmILRJU7E?si=-9h93VcRfxZ5e_yX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
}

const LearningPage: React.FC = () => {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-350 lg:mt-10 mx-auto px-4 md:px-0 mb-24 flex justify-center">
        <div className="relative w-full max-w-225 aspect-video rounded-xl md:rounded-xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(34,197,94,0.2)]">
          {/* Background Glow */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-green-50/50 via-white to-cyan-50/50 blur-3xl -z-10" />

          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/kBfbSs7VbXc?si=-R89xXwZ3EhrOkdP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning</h2>
        <p className="text-gray-600 max-w-3xl">
          Elaborate Capital Learning helps you understand investing and
          financial planning through simple video lessons, making finance easy
          for everyone.
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((videoId, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden  hover:shadow-lg transition duration-300"
          >
            <div className="relative w-full pb-[56.25%]">
              {" "}
              {/* 16:9 ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`YouTube video ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningPage;



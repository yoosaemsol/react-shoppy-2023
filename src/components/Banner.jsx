import React from 'react';

export default function Banner() {
  return (
    <section className="flex py-20 gap-10 flex-col items-center lg:flex-row lg:justify-center lg:gap-20 md:py-40">
      <div className="w-50 translate-x-10 lg:translate-x-0">
        <h3 className="text-5xl font-bold rotate-3 -translate-x-28">
          positive
        </h3>
        <h3 className="text-5xl font-bold -rotate-6 -translate-x-11">mental</h3>
        <h3 className="text-5xl font-bold rotate-3 translate-x-12">power</h3>
      </div>
      <p className="w-100">
        AOY is a Seoul-based creative design studio. We focus on making
        comfortable but cool stuff, while constantly thinking about what is
        needed in the current era, rather than focusing on 'fashion'. Our
        clothes play a role as a basic element of human life and we strive to
        melt into the lives of those who wear them.
      </p>
    </section>
  );
}

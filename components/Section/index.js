import Image from "next/image";
import { Button } from "../Button";
import { Carousel } from "../Carousel";
import { testimonialData } from "/utils";
import { Contact } from "../Forms/contact";

export const Section = {
  Brief: () => {
    return (
      <section
        id="about__brief"
        className="flex w-full md:w-5/6 mx-auto flex-col md:flex-row md:items-center p-24 mt-100 mb-100"
      >
        <div className="w-full md:w-1/2">
          <Image
            src="/images/aunties.png"
            width={603}
            height={354}
            objectFit="cover"
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-4xl text-gray-900 font-semibold">In Brief</h2>
          <p className="py-20 leading-7 tracking-wide">
            We are committed to offering an authentic Sudanese dining
            experience. Our culinary journey began with a simple vision: to
            bring the rich flavors of Sudan to the heart of London.
            <br />
            <br /> We take pride in sourcing high-quality ingredients and
            crafting them into delectable dishes that represent the essence of
            Sudanese cuisine. Our team is dedicated to providing exceptional
            service, ensuring that each guest leaves with a memorable
            experience.
          </p>
        </div>
      </section>
    );
  },
  Work: () => {
    return (
      <section
        id="about__work__with__us"
        className="flex w-full md:w-5/6 mx-auto flex-col md:flex-row md:items-center my-20 p-24 mt-50 mb-100"
      >
        <div className="w-full md:w-1/2 md:pr-10">
          <h2 className="text-4xl text-gray-900 font-semibold">
            Working with Us
          </h2>
          <p className="py-20 leading-7 tracking-wide">
            Are you passionate about food, culture, and community? If so, Heart
            of the Nile might be the perfect place for you. We&apos;re always on
            the lookout for talented individuals who share our values and
            vision.
            <br />
            <br />
            Interested in working with us? Send your resume and a cover letter
            to [orders@heartofthenile.com], or visit our restaurant to fill out
            an application.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/logo.png"
            width={603}
            height={354}
            alt=""
            className="w-full"
          />
        </div>
      </section>
    );
  },
  Hero: () => {
    return (
      <section id="hero" className="hero ">
        <div className="bg-[rgba(0,0,0,.15)] h-full flex flex-col justify-center px-24">
          <span className="bg-white w-56 py-5 px-10  text-gray-900 font-semibold tracking-wide">
            A Sudanese Restaurant
          </span>
          <h1 className="text-5xl md:text-7xl text-white my-20 font-extrabold uppercase">
            Heart of the Nile <br />
            in london, ontario
          </h1>
          <div className="flex flex-row justify-center">
            <Button.Primary
              label="Call NOW to order"
              url="tel:(519) 432-3222"
              bgColor="red"
              icon
            />
          </div>
        </div>
      </section>
    );
  },
  PopularItems: () => {
    return (
      <section id="popular__items" className="my-24 p-24">
        <div className="text-center">
          <span className="bg-red-200 p-10 text-sm font-semibold tracking-wide rounded text-red-500">
            Tasty Customer Favorites
          </span>
          <h2 className="text-4xl text-gray-900 font-bold my-20">
            Popular Items
          </h2>
        </div>
        <div className="w-full md:w-4/6 py-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
          <div className="popular__items__large rounded row-span-2">
            <div className="bg-[rgba(0,0,0,.3)] h-full p-10 flex flex-col justify-center group hover:bg-[rgba(0,0,0,.15)]">
              <h3 className="text-3xl md:text-5xl text-white font-semibold">
                Special
                <br /> Delicacy
              </h3>
              <p className="mt-5 mb-10 text-white font-medium tracking-wide">
                Sweet food from <br />{" "}
                <span className="text-red-600 font-semibold">
                  The heart of the Nile
                </span>
              </p>
              <Button.Secondary label="order now" url={"/menu"} icon={false} />
            </div>
          </div>
          <div className="popular__items__1 rounded">
            <div className="bg-[rgba(0,0,0,.3)] h-full p-10 flex flex-col justify-center group hover:bg-[rgba(0,0,0,.15)]">
              <h3 className="text-3xl text-white font-semibold">
                Enjoy our <br />
                Delicious Meal
              </h3>
              <p className="mt-5 mb-10 text-white font-medium tracking-wide">
                {" "}
              </p>
              <Button.Secondary label="order now" url={"/menu"} icon={false} />
            </div>
          </div>
          <div className="popular__items__2 rounded">
            <div className="bg-[rgba(0,0,0,.3)] h-full p-10 flex flex-col justify-center group hover:bg-[rgba(0,0,0,.15)]">
              <h3 className="text-3xl text-white font-semibold">
                The Best North African food in{" "}
                <span className="text-red-600">London, ON</span>
              </h3>
              <p className="mt-5 mb-10 text-white font-medium tracking-wide"></p>
              <Button.Secondary label="order now" url={"/menu"} icon={false} />
            </div>
          </div>
        </div>
      </section>
    );
  },
  Testimonial: () => {
    return (
      <section id="testimonial" className="my-8 md:my-24 p-4 md:p-24">
        <div className="text-center">
          <span className="bg-red-100 p-2 md:p-10 text-xs md:text-sm font-semibold tracking-wide rounded text-red-500">
            Testimonial
          </span>
          <h2 className="text-2xl md:text-4xl text-gray-900 font-bold my-10 md:my-20">
            What Our Customers Say
          </h2>
        </div>
        <Carousel data={testimonialData} className="carousel-custom-styles" />
      </section>
    );
  },
  FooterFirst: () => {
    return <section id="footer-first" className="footer-first"></section>;
  },
  Community: () => {
    return (
      <section
        id="about__brief"
        className="flex w-full md:w-5/6 mx-auto flex-col md:flex-row md:items-center p-24 mt-100 mb-100"
      >
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-4xl text-gray-900 font-semibold">
            Our Community
          </h2>
          <p className="py-20 leading-7 tracking-wide">
            At Heart of the Nile, community is not just a word; it&apos;s a way
            of life. We believe that food is a universal language that brings
            people together. Our restaurant is not just a place to eat;
            it&apos;s a gathering spot for friends, families, and neighbors.
            <br />
            <br />
            Become a part of our growing community by joining our newsletter,
            participating in our events, or simply enjoying a meal at our
            restaurant. Together, we can make a difference.
          </p>
        </div>
        <div className="w-full md:w-1/2">
         
          <Contact />
        </div>
      </section>
    );
  },
};

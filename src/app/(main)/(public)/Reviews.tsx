"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useIndexPageState } from "@/state/indexStore";
import { useState } from "react";

const animations = {
  initial: {
    opacity: 0,
    y: -50
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 50
  },
  transition: {
    duration: 1,
    ease: "easeInOut"
  }
};

export default function Reviews() {
  const testimonials = useIndexPageState(_ => _.testimonials);
  const testimonialsCount = testimonials.length;
  const [index, setIndex] = useState(0);

  if (testimonialsCount > 0)
    return (
      <AnimatePresence mode="wait">
        <section className="reviews container">
          <div className="expert_reviews">
            <div className="expert_comments">
              <p>Expert Comments on Disability Act, 2019</p>

              <div className="expert_cmmnts_image">
                <img src="/ASSETS/Images/commentors.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="pro_reviewers pb-3 lg:min-w-[60%] max-[1200px]:min-h-60 relative">
            <div className="uppercard">
              <img src="/ASSETS/Icons/quotes.svg" alt="" />
              <div className="arrow_navigation">
                <button
                  onClick={() => {
                    setIndex(index > 0 ? index - 1 : testimonialsCount - 1);
                  }}
                  className="rounded-full bg-light inline-flex items-center justify-center size-7 shadow-md"
                >
                  <img src="/ASSETS/Icons/left arrow.svg" alt="" />
                </button>
                <button
                  onClick={() => {
                    setIndex(index < testimonialsCount - 1 ? index + 1 : 0);
                  }}
                  className="rounded-full bg-light inline-flex items-center justify-center size-7 shadow-md"
                >
                  <img src="/ASSETS/Icons/right arrow.svg" alt="" />
                </button>
              </div>
            </div>
            {[testimonials[index]].map(item =>
              <div key={item._id} className="overflow-hidden h-full w-full">
                <div className="uppercard_text">
                  <motion.p layoutId={item._id} {...animations}>
                    {item.message}
                  </motion.p>
                </div>

                <div className="lowercard">
                  <div className="lowercard_img_holder">
                    <motion.img
                      {...animations}
                      className="rounded-full object-cover w-10 h-10 min-w-10 min-h-10 bg-gray-200 size-10"
                      src={item.img}
                      alt={item.fullname}
                    />
                  </div>

                  <div className="name_info flex-shrink-0">
                    <motion.h3 {...animations} className="whitespace-nowrap">
                      {item.fullname}
                    </motion.h3>
                    <motion.p {...animations}>
                      {item.label}
                    </motion.p>
                  </div>
                  <motion.div
                    {...animations}
                    className="w-full flex gap-2 justify-end items-center pr-3"
                  >
                    {item.facebook &&
                      <a title="Facebook" href={item.facebook}>
                        <div>
                          <img src="/ASSETS/Icons/fb-icn.svg" alt="" />
                        </div>
                      </a>}
                    {item.instagram &&
                      <a title="Instagram" href={item.instagram}>
                        <div>
                          <img src="/ASSETS/Icons/ig-icn.svg" alt="" />
                        </div>
                      </a>}
                    {item.twitter &&
                      <a title="Twitter(X)" href={item.twitter}>
                        <div>
                          <img src="/ASSETS/Icons/x-icn.svg" alt="" />
                        </div>
                      </a>}
                  </motion.div>
                </div>
              </div>
            )}
            <div className="absolute flex gap-2 bottom-0 w-full justify-center pb-2">
              {testimonials.map((item, i) =>
                <button
                  key={item._id + i}
                  onClick={() => {
                    setIndex(i);
                  }}
                  className={`${i === index
                    ? "bg-primary rounded-xl w-6"
                    : "rounded-full w-2 bg-gray-300"} h-2 transition-all duration-300`}
                />
              )}
            </div>
          </div>
        </section>
      </AnimatePresence>
    );
}

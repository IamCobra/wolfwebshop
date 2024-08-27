"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const el = useRef<HTMLSpanElement>(null); // Correctly typing the element reference
  const typed = useRef<Typed | null>(null); // Allowing null to be a valid type

  useEffect(() => {
    if (el.current) {
      // Ensure el.current is not null
      const options = {
        strings: [
          "It is better to die on your feet than to live on your knees.",
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        backDelay: 1500,
        showCursor: false,
      };

      // Assign Typed.js instance to typed.current
      typed.current = new Typed(el.current, options);
    }

    return () => {
      // Ensure typed.current is not null before calling destroy
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <div className="text-center mt-20">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white">
        <span ref={el}></span>
      </h2>
    </div>
  );
};

export default TypedText;

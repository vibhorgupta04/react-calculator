import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bottom-px relative w-full">
      <div className="py-2 border-t-1"></div>
      <div className="py-3 mx-auto w-full flex gap-4 items-center justify-center">
        {[
          { name: "email", link: "mailto:vibhorg.dev@gmail.com" },
          { name: "github", link: "https://github.com/vibhorgupta04" },
          {
            name: "linkedin",
            link: "https://www.linkedin.com/in/vibhor-dev/",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-card bg-btn shadow-button rounded-full px-3 py-3 flex items-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(49,52,75,1)"
            >
              {social.name === "email" && (
                <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V8l8 5 8-5v12z" />
              )}
              {social.name === "github" && (
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
              )}
              {social.name === "linkedin" && (
                <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77c0-.98-.79-1.77-1.77-1.77zm-14.91 20.45h-3.6v-12h3.6v12zm-1.8-13.73c-1.1 0-1.8-.73-1.8-1.66 0-.93.7-1.66 1.8-1.66 1.1 0 1.8.73 1.8 1.66 0 .93-.7 1.66-1.8 1.66zm14.71 13.73h-3.6v-6.14c0-1.47-.52-2.47-1.83-2.47-1.17 0-1.87.79-1.87 2.47v6.14h-3.6v-12h3.6v1.6c.5-.75 1.35-1.4 2.53-1.4 1.8 0 3.15 1.18 3.15 3.37v8.4z" />
              )}
            </svg>
          </motion.a>
        ))}
      </div>
      <br />
      <div className="w-1-2 mx-auto py-1 border-t-1"></div>
      <br />
      <motion.div
        className="text-center py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Copyright © Vibhor 2022. All rights reserved.
      </motion.div>
    </div>
  );
};

export default Footer;

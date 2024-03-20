import React from "react";
const Footer = () => {
  return (
    <footer
      className="mx-auto bottom-0 w-full p-4 border-t border-gray-200 shadow flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 bg-cyan-700 "
      style={{ placeContent: "center" }}
    >
      <span className="text-sm text-white dark:text-gray-400">
        © 2024{" "}
        <a
          href="https://www.instagram.com/hendri.whyu/"
          className="hover:underline"
        >
          Hendri Wahyu Perdana
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;

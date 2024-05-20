/*
 * @Author: Rem
 * @Date: 2024-05-20 16:59:22
 * @LastEditors: Rem
 * @LastEditTime: 2024-05-20 16:59:28
 * @FilePath: /weight-ui/tailwind.config.js
 * @FileDescription:
 * @Description:
 * Do one thing at a time, and do well.
 * Copyright (c) 2024 by Rem, All Rights Reserved.
 */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

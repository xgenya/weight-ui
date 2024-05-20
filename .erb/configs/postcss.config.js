/*
 * @Author: Rem
 * @Date: 2024-05-20 16:58:56
 * @LastEditors: Rem
 * @LastEditTime: 2024-05-20 16:59:01
 * @FilePath: /weight-ui/.erb/configs/postcss.config.js
 * @FileDescription:
 * @Description:
 * Do one thing at a time, and do well.
 * Copyright (c) 2024 by Rem, All Rights Reserved.
 */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};

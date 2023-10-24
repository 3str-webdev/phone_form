/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    PHONE_VALIDATE_API_KEY: process.env.PHONE_VALIDATE_API_KEY,
  },
};

module.exports = nextConfig;

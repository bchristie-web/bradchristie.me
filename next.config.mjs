// @ts-check

import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants.js";

/**
 * @param {string} phase
 * @param {object} obj
 * @param {import('next').NextConfig} obj.defaultConfig
 */
const nextConfig = async (phase, { defaultConfig }) => {
  const basePath = process.env.BASE_PATH || "";

  /** @type {import('next').NextConfig} */
  const sharedConfig = {
    ...defaultConfig,

    basePath,
    env: {
      BASE_PATH: basePath,
    },
    output: "export",
    trailingSlash: true,
  };

  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      /** @type {import('next').NextConfig} */
      const devConfig = {
        ...sharedConfig,
      };
      return devConfig;
    default:
      /** @type {import('next').NextConfig} */
      const prodConfig = {
        ...sharedConfig,
      };
      return prodConfig;
  }
};

export default nextConfig;

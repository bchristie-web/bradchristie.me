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
    case PHASE_PRODUCTION_BUILD:
      /** @type {import('next').NextConfig} */
      const prodConfig = {
        ...sharedConfig,
        unoptimized: true,
      };
      return prodConfig;
    case PHASE_DEVELOPMENT_SERVER:
    default:
      /** @type {import('next').NextConfig} */
      const devConfig = {
        ...sharedConfig,
      };
      return devConfig;
  }
}

export default nextConfig;

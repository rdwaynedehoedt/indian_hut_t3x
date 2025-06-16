import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

// Configure bundle analyzer properly
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true,
  compress: true,
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP', 'FID'],
  },
};

export default bundleAnalyzer(nextConfig);

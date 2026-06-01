import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    async redirects() {
        return [
            {
                source: "/contact",
                destination: "/home_test",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

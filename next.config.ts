import type { NextConfig } from "next";

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/callback',
        destination: '/', // เมื่อไปที่ /callback ให้ไปที่หน้าโฮม
        permanent: false,  // หรือ true ถ้าต้องการให้เป็นการเปลี่ยนเส้นทางถาวร
      },
    ];
  },
};

export default nextConfig;

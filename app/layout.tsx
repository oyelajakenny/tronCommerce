import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TronCommerce Backend",
  description: "Your One-Stop store for all your shopping needs",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

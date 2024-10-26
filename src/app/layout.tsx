import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Providers from "@/Components/Providers/Providers";
import AuthProvider from "./context/AuthProvider";
// import PersistGateProvider from "@/Components/ReduxPersist/PersistGate";

export const metadata: Metadata = {
  title: {
    default: "Fashion Website",
    template: "%s | Fashion Website",
  },
  description: "Fashion Website Created Using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Epilogue bg-background text-text max-w-[1550px] mx-auto  flex flex-col lg:gap-6">
        <AuthProvider>
          <Providers>
            {/* <PersistGateProvider> */}
            <Navbar />
            {children}
            <Footer />
            {/* </PersistGateProvider> */}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}

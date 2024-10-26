import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[15vh] tracking-wide px-4 flex flex-col gap-3 py-3">
      <div className="flex flex-col mid:grid place-items-center gap-4 place-content-between ">
        <div className="flex flex-col gap-1 items-center mid:items-start">
          <h3 className="text-xl font-medium">Quick Links</h3>
          <div className="flex flex-col font-light items-center mid:items-start">
            <span>Shop</span>
            <span>Cart</span>
            <span>FAQ</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center mid:items-start">
          <h3 className="text-xl font-medium">Contact</h3>
          <div className="flex flex-col font-light items-center mid:items-start">
            <span>Kathmandu, Nepal</span>
            <span>abc@gmail.com</span>
            <span>0123456789</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center mid:items-start">
          <h3 className="text-xl font-medium">Socials</h3>
          <div className="flex flex-col font-light items-center mid:items-start">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Tiktok</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center mid:items-start">
          <h3 className="text-xl font-medium">Others</h3>
          <div className="flex flex-col font-light items-center mid:items-start">
            <span>Privacy Policy</span>
            <span>Exchange & Refund</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
        <div className="font-light col-span-4">
          <span>Made by Sandesh Bhandari.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

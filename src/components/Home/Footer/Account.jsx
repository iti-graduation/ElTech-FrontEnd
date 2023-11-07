import React from "react";
import FooterLink from "./FooterLink";

const Account = () => {
  return (
    <div className="col-lg-2 col-md-4 col-custome-2">
      <aside className="widget">
        <h3 className="widget-title">Account</h3>
        <ul>
          <FooterLink href="/profile" linkTitle="My Account" />
          <FooterLink href="/login" linkTitle="Log in" />
          <FooterLink href="/register" linkTitle="Sign Up" />
          <FooterLink href="/orders" linkTitle="Purchases" />
          <FooterLink href="#" linkTitle="Shipping Address" />
        </ul>
      </aside>
    </div>
  );
};

export default Account;

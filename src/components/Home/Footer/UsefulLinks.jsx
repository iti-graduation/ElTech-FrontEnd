import React from "react";
import FooterLink from "./FooterLink";

const UsefulLinks = () => {
  return (
    <div className="col-lg-2 col-md-4 col-custome-1">
      <aside className="widget">
        <h3 className="widget-title">Useful Links</h3>
        <ul>
          <FooterLink href="#" linkTitle="Privacy Policy" />
          <FooterLink href="#" linkTitle="Return Policy" />
          <FooterLink href="#" linkTitle="Blog" />
          <FooterLink href="#" linkTitle="Contact" />
          <FooterLink href="#" linkTitle="Terms & Conditions" />
        </ul>
      </aside>
    </div>
  );
};

export default UsefulLinks;

import React from "react";

const FooterLink = ({ href, linkTitle }) => {
  return (
    <li>
      <a href={href}>{linkTitle}</a>
    </li>
  );
};

export default FooterLink;

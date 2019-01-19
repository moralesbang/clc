import React from 'react';

const Footer = () => {
  return(
    <nav className="flex items-center justify-between bg-green text-white p-6">
      <div>
        <span className="font-semibold text-xl">La Chaparraluna</span>
      </div>

      <div>
        <span>
          Created by &nbsp;
          <a className="no-underline text-white hover:text-grey-lightest" href="https://www.instagram.com/moralesbang/" rel="noopener noreferrer">
            @moralesbang
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Footer;
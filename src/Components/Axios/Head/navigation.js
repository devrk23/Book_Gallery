import React from 'react';
import { Breadcrumb } from 'antd';
const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Fiction
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Non-fiction
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Biographies
      </a>
    ),
  },
];
const Navbar= () => (
  <Breadcrumb
    items={[
      {
        title:<a href="#home">Home</a>,
      },
      {
        title:<a href="">Collections</a>,
        menu: {
          items: menuItems,
        },
      },
      {
        title:<a href="#home">Contact Us</a>,
      },
    ]}
  />
);
export default Navbar;
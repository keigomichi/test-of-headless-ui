import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Menu } from "@headlessui/react";

function App() {
  return (
    // <React.Fragment>
    //   <h1 className="text-3xl font-bold underline">Hello world!</h1>
    // </React.Fragment>
    <Menu>
      <Menu.Button>Options</Menu.Button>
      <Menu.Items className="right-0 mt-2">
        {/* <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"> */}
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active ? "bg-blue-500 text-white" : "bg-white text-black"
              }`}
              href="/account-setting"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active ? "bg-blue-500 text-white" : "bg-white text-black"
              }`}
              href="/account-setting"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default App;

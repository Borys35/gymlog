"use client";

import { signOut } from "next-auth/react";

const StartPage = () => {
  return (
    <div>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default StartPage;

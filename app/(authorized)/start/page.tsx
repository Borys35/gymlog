"use client";

import { signOut, useSession } from "next-auth/react";

const StartPage = () => {
  const session = useSession();

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

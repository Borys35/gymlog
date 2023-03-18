"use client";

import Topbar from "@/components/organisms/topbar";
import { signOut, useSession } from "next-auth/react";

const StartPage = () => {
  const session = useSession();

  return (
    <>
      <Topbar heading="Hi Borys!" />
      <div>
        <button
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
      </div>
    </>
  );
};

export default StartPage;

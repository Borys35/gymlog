"use client";

import Button, { ButtonProps } from "@/components/atoms/button";
import { BuiltInProviderType } from "next-auth/providers";
import { LiteralUnion, signIn } from "next-auth/react";
import { FC, useState } from "react";

interface Props extends Omit<ButtonProps, "children"> {
  provider: LiteralUnion<BuiltInProviderType, string>;
  name: string;
}

const SignInWithProviderButton: FC<Props> = ({ provider, name }) => {
  const [loading, setLoading] = useState(false);

  function handleSignIn() {
    try {
      signIn(provider, { callbackUrl: "/start" });
      setLoading(true);
    } catch {
      setLoading(false);
    }
  }

  return (
    <Button onClick={handleSignIn} disabled={loading}>
      Sign in with {name}
    </Button>
  );
};

export default SignInWithProviderButton;

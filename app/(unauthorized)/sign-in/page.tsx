import bgImg from "@/assets/images/man-flyes.jpg";
import HScreenView from "@/components/templates/h-screen-view";
import SignInWithProviderButton from "@/features/auth/components/sign-in-with-provider-button";
import Image from "next/image";
import styles from "./page.module.css";

const SignInPage = () => {
  return (
    <HScreenView
      heading="Sign In"
      bottom={
        <SignInWithProviderButton
          data-test="google-provider-button"
          provider="google"
          name="Google"
          size="lg"
        />
      }
    >
      <Image
        src={bgImg}
        alt="Background"
        className={styles.background}
        fill={true}
      />
    </HScreenView>
  );
};

export default SignInPage;

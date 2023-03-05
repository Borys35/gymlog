import bgImg from "@/assets/images/man-flyes.jpg";
import Button from "@/components/atoms/button";
import HScreenView from "@/components/templates/h-screen-view";
import Image from "next/image";
import styles from "./page.module.css";

const SignInPage = () => {
  return (
    <HScreenView
      heading="Sign In"
      bottom={<Button size="xl">With Google</Button>}
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

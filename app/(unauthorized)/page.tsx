import Button from "@/components/atoms/button";
import Paragraph from "@/components/atoms/paragraph";
import HScreenView from "@/components/templates/h-screen-view";

export default function Home() {
  return (
    <HScreenView
      heading="Log, Track, and Progress"
      bottom={
        <Button to="/sign-in" size="lg" data-test="button">
          Get started
        </Button>
      }
      center
    >
      <Paragraph size="lg" color="grey">
        With GymLog you can keep track of your workouts and progress faster.
        Completely for FREE!
      </Paragraph>
    </HScreenView>
  );
}

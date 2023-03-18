import bgWorkout from "@/assets/images/deadlift.jpg";
import bgExercise from "@/assets/images/woman-ab-crunch.jpg";
import bgExercises from "@/assets/images/woman-squat.jpg";
import PageTab, { PageTabProps } from "@/components/molecules/page-tab";
import styles from "./styles.module.css";

const pageTabs: PageTabProps[] = [
  {
    bgImage: bgWorkout,
    href: "/start",
    title: (
      <>
        <span className="highlight">Start</span> Workout
      </>
    ),
  },
  {
    bgImage: bgExercises,
    href: "/exercises",
    title: (
      <>
        View your <span className="highlight">Workouts</span>
      </>
    ),
  },
  {
    bgImage: bgExercise,
    href: "/exercises",
    title: (
      <>
        Add new <span className="highlight">Exercises</span>
      </>
    ),
  },
];

const StartPageTabList = () => {
  return (
    <div className={styles.list}>
      {pageTabs.map((tab, i) => (
        <PageTab key={i} data-test="page-tab" {...tab} />
      ))}
    </div>
  );
};

export default StartPageTabList;

import StartPageTabList from "@/components/organisms/start-page-tab-list";
import Topbar from "@/components/organisms/topbar";

const StartPage = () => {
  return (
    <div>
      <Topbar
        heading={
          <>
            Hi, <span className="highlight">Borys</span>!
          </>
        }
      />
      <StartPageTabList />
    </div>
  );
};

export default StartPage;

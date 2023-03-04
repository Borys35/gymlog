async function getSession() {
  //   redirect("/start");
}

const PrivateLayout = async ({ children }: { children: React.ReactNode }) => {
  await getSession();

  return children;
};

export default PrivateLayout;

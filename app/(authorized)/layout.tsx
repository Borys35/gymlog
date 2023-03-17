import AppView from "@/components/templates/app-view";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function checkSession() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/sign-in");
}

const PrivateLayout = async ({ children }: { children: React.ReactNode }) => {
  await checkSession();

  return <AppView heading="fdfd">{children}</AppView>;
};

export default PrivateLayout;

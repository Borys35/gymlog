import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function checkSession() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/start");
}

const PrivateLayout = async ({ children }: { children: React.ReactNode }) => {
  await checkSession();

  return children;
};

export default PrivateLayout;

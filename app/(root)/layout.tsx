import { getUserByEmail } from "@/actions/user.actions";
import MainLayout from "@/layouts/MainLayout";
import { auth } from "@/lib/auth";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const data = await auth();
  const user = await getUserByEmail(data?.user?.email);

  return <MainLayout user={user}>{children}</MainLayout>;
};

export default layout;

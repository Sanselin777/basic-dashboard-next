import { useSession } from "next-auth/react";
import { getUserSessionServer } from "@/auth/actions/auth-actions";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const user = await getUserSessionServer();
  if (!user) redirect("/api/auth/signin");
  const { data: session } = useSession();

  return (
    <div>
      <h1>Page Profile</h1>
      <hr />

      <div className="flex flex-col">
        <span>{session?.user?.name ?? "No Name"}</span>
        <span>{session?.user?.email ?? "No Email"}</span>
        <span>{session?.user?.image ?? "No Image"}</span>
        <span>{session?.user?.id ?? "No UUID"}</span>
        <span>{session?.user?.roles?.join(",") ?? ["no-roles"]}</span>
      </div>
    </div>
  );
}

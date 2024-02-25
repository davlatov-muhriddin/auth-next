"use server";
import { cookies } from "next/headers";
import Dashboard from "@/app/(root)/dashboard/page";
import Home from "@/app/(root)/(home)/page";
import { useRouter } from "next/navigation";

function Page() {
  const token = cookies().get("token");

  if (token) {
    return <Dashboard />;
  } else {
    return <Home />;
  }

  return <div>Contact</div>;
}

export default Page;

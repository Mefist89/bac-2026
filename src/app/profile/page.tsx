import { redirect } from "next/navigation";
import { hasSupabaseEnv } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";
import { ProfileContent } from "@/components/profile/profile-content";

export default async function ProfilePage() {
  let user = null;

  if (hasSupabaseEnv()) {
    const supabase = await createClient();
    const {
      data: { user: supabaseUser },
    } = await supabase.auth.getUser();

    if (!supabaseUser) {
      redirect("/login");
    }

    user = supabaseUser;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-deep">
      <ProfileContent user={user} />
    </div>
  );
}

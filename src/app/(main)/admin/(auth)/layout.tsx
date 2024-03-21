import AppLogo from "@/components/logo";
import { AppLayoutProps } from "@/utils/types/basicTypes";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default async function RootLayout({ children }: AppLayoutProps) {
  const cookie = await cookies();
  const email = cookie.get("email");
  const token = cookie.get("token");
  const pathname = headers().get("x-pathname");
  if (pathname && !pathname.includes("/log-out")) {
    if (email && token) redirect("/admin");
  }

  return (
    <main>
      <header className="app-container flex items-center py-6 border-b-4">
        <nav>
          <Link href="/">
            <div className="w-60">
              <AppLogo />
            </div>
          </Link>
        </nav>
      </header>
      <section className="py-10">
        <div className="app-container">
          <div className="md:rounded-md md:shadow-xl overflow-hidden flex justify-center items-center min-h-[500px] max-w-[500px] mx-auto">
            <div className="w-full h-fit md:p-8">
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

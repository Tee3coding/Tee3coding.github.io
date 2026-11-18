import Link from "next/link";
import Window from "@/components/Window";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Window title="error.exe" className="w-full max-w-md" bodyClassName="p-6 text-center">
        <p className="text-sm text-muted">404</p>
        <h1 className="mt-2 text-2xl font-semibold">Page not found</h1>
        <Link
          href="/"
          className="mt-6 inline-block border border-foreground px-5 py-2 text-sm hover:bg-foreground hover:text-background"
        >
          Back home
        </Link>
      </Window>
    </div>
  );
}

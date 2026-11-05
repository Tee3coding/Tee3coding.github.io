import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-indigo-400">404</p>
      <h1 className="mt-2 text-4xl font-bold">Page not found</h1>
      <Link href="/" className="mt-6 text-indigo-400 hover:underline">
        Back home
      </Link>
    </div>
  );
}

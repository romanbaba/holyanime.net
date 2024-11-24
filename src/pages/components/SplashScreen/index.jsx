import { Spinner } from "@/pages/components/Spinner";

export function SplashScreen() {
  return (
    <div className="grid place-items-center h-screen overflow-hidden">
      <Spinner size={64} />
    </div>
  );
}
import Home from "@/layouts/home/home";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="max-w-[1280px] mx-auto">
        <Home />
      </div>
    </Suspense>
  );
}

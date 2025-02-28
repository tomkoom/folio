"use client";
import { Suspense } from "react";

function HomeContent() {
  return (
    <div className="mt-8">
      <h2 className="my-2 font-bold">Heading</h2>
      <div></div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <HomeContent />
    </Suspense>
  );
}

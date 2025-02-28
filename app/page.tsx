"use client";
import { Suspense } from "react";
import { Content } from "./home";

function HomeContent() {
  return (
    <div className="mt-8">
      <h2 className="my-2 font-bold">Apps</h2>
      <div>
        <Content />
      </div>
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

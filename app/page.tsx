"use client";
import { Suspense } from "react";
import { Content } from "./home";

function HomeContent() {
  return (
    <Content />
  );
}

export default function Home() {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <HomeContent />
    </Suspense>
  );
}

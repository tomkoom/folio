"use client";
import { FC } from "react";

const CookiePolicy: FC = () => {
  return (
    <div className="mx-auto max-w-2xl p-6 text-neutral-200">
      <h2 className="mb-4 text-2xl font-bold">Cookie Policy</h2>
      <p>Last updated: 01/01/2025</p>

      <h3 className="mt-4 text-xl font-semibold">1. Introduction</h3>
      <p>
        This Cookie Policy explains how we use cookies and similar technologies
        to enhance your experience on our website.
      </p>

      <h3 className="mt-4 text-xl font-semibold">2. What Are Cookies?</h3>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help improve functionality, security, and performance.
      </p>

      <h3 className="mt-4 text-xl font-semibold">3. How We Use Cookies</h3>
      <p>We use the following types of cookies:</p>
      <ul className="ml-6 list-disc">
        <li>
          <strong>Essential Cookies:</strong> Required for core site functions.
        </li>
        <li>
          <strong>Analytical Cookies:</strong> Help us understand how visitors
          use our site (e.g., page views, time spent).
        </li>
      </ul>

      <h3 className="mt-4 text-xl font-semibold">4. Managing Cookies</h3>
      <p>
        You can control and delete cookies via your browser settings. Disabling
        cookies may impact site functionality.
      </p>

      <h3 className="mt-4 text-xl font-semibold">5. Changes to This Policy</h3>
      <p>
        We may update this policy periodically. Check this page for the latest
        version.
      </p>

      {/* <h3 className="mt-4 text-xl font-semibold">6. Contact Us</h3>
      <p>
        If you have any questions about this Cookie Policy, contact us at
        [...@email.com].
      </p> */}
    </div>
  );
};

export default CookiePolicy;

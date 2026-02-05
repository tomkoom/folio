const LINKS = [
    { label: "@tmkm44", href: "https://x.com/tmkm44" },
    { label: "GitHub", href: "https://github.com/tomkoom" },
    { label: "Telegram", href: "https://t.me/tomkoom" },
] as const;

export default function Footer() {
    return (
        <footer className="mt-16 flex min-h-[120px] flex-wrap gap-2 px-4 py-6 text-base font-semibold text-gray-400 sm:px-6 sm:py-8 sm:text-xl sm:leading-[200%] xl:px-8">
            <div className="flex-1 leading-relaxed sm:leading-[200%]">
                <p className="break-words">
                    Open to collaboration and freelance work 🤝 Hit me up on{" "}
                    {LINKS.map((link, index) => (
                        <span key={link.href}>
                            <a
                                className="text-gray-50 transition-all duration-300 ease-out hover:text-white hover:underline"
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </a>
                            {index < LINKS.length - 1 && " · "}
                        </span>
                    ))}
                </p>
            </div>
        </footer>
    );
}
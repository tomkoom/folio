export default function Footer() {
    const LINKS = {
        x: {
            label: "@tmkm44",
            href: "https://x.com/tmkm44",
        },
        github: {
            label: "GitHub",
            href: "https://github.com/tomkoom",
        },
        telegram: {
            label: "Telegram",
            href: "https://t.me/tomkoom",
        },
    }

    return (
        <footer className="mt-16 flex h-[160px] flex-wrap gap-2 px-6 py-8 text-xl font-semibold text-gray-400 xl:px-8">
            <div className="flex-1 leading-[200%]">
                <p>
                    Open to collaboration and freelance work 🤝 Hit me up on {" "}
                    <a
                        className="text-gray-50 transition-all duration-300 ease-out hover:text-white hover:underline"
                        href={LINKS.x.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {LINKS.x.label}
                    </a>
                    {" · "}
                    <a
                        className="text-gray-50 transition-all duration-300 ease-out hover:text-white hover:underline"
                        href={LINKS.github.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {LINKS.github.label}
                    </a>
                    {" · "}
                    <a
                        className="text-gray-50 transition-all duration-300 ease-out hover:text-white hover:underline"
                        href={LINKS.telegram.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {LINKS.telegram.label}
                    </a>
                </p>
            </div>
        </footer>
    );
}
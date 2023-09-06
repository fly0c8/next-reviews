import './globals.css';
import NavBar from "../components/NavBar";
import { orbitron, exo2 } from './fonts';

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
            <body className="flex flex-col min-h-screen px-4 py-4 bg-orange-50">
                <header>
                    <NavBar />
                </header>
                <main className="grow py-3">
                    {children}
                </main>
                <footer className="border-t py-3 pytext-center text-xs ">
                    Game data an images by <a className="text-orange-800 hover:underline" href="https://rawg.io/" target="_blank">
                        RAWG
                    </a>
                </footer >
            </body>
        </html>
    );
}

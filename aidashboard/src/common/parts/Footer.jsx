import React from 'react'
import { Link } from 'react-router-dom';
import { useUserAuth } from '../.././components/context/UserAuthContext';
import Logo from './Logo';
import { CompanyTagline, SaraAILink } from '../links';

function Footer() {
    const { user } = useUserAuth();
    const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const linkClass = "text-white/70 transition hover:text-white";

    return (
        <footer className="relative overflow-hidden bg-weave-ink text-white">
            <div className="ww-blob -left-20 -top-20 h-72 w-72 bg-brand-600" />
            <div className="ww-blob -bottom-24 right-0 h-72 w-72 bg-weave-cyan opacity-30" />
            <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8">
                <div className="grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <Logo textClassName="text-white" accentClassName="text-brand-300" />
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{CompanyTagline}</p>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Product</h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                {user
                                    ? <Link onClick={toTop} to="/dashboard" className={linkClass}>Your Space</Link>
                                    : <Link onClick={toTop} to="/auth" className={linkClass}>Get Access</Link>}
                            </li>
                            <li><a href={SaraAILink} target="_blank" rel="noopener noreferrer" className={linkClass}>Sara AI</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Company</h2>
                        <ul className="space-y-2 text-sm">
                            <li><Link onClick={toTop} to="/need-spark" className={linkClass}>Why WebWeave</Link></li>
                            <li><Link onClick={toTop} to="/contact" className={linkClass}>Contact</Link></li>
                            <li><Link onClick={toTop} to="/terms-of-use" className={linkClass}>Terms &amp; Privacy</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-4">
                        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Stay in the loop</h2>
                        <form
                            action="https://formsubmit.co/0b4ee2cd42a0e78f61eb1715e33bb409"
                            method="POST"
                            className="flex flex-col gap-2 rounded-2xl glass-dark p-2 sm:flex-row"
                        >
                            <input
                                type="email"
                                id="footer-field"
                                name="footer-field"
                                required
                                autoComplete="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl bg-transparent px-3 py-2 text-white placeholder-white/40 outline-none"
                            />
                            <button className="btn-weave !rounded-xl !py-2 whitespace-nowrap">Subscribe</button>
                        </form>
                        <p className="mt-2 text-xs text-white/50">Product updates only. No spam.</p>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
                    <p>© {new Date().getFullYear()} WebWeave. All rights reserved.</p>
                    <button onClick={toTop} className="transition hover:text-white">Back to top ↑</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer

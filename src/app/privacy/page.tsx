"use client";

import { Button } from "@/components/ui/button";
import { EMAIL_LINK, WEB_NAME } from "@/lib/constant";
import { montserrat } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-[#0d0d00] text-[#f5f0e0] font-sans selection:bg-yellow-500/30 w-full min-h-screen">
            {/* Nav */}
            <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert prose-yellow max-w-none"
                >
                    <h1 className={`${montserrat.className} text-4xl md:text-6xl font-black italic uppercase text-yellow-500 mb-4`}>
                        Privacy Policy
                    </h1>
                    <p className="opacity-60 italic mb-12 text-lg">Last Updated: 27-02-2025</p>

                    <div className="space-y-12 text-zinc-300 leading-relaxed">

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-yellow-500">1.</span> Introduction
                            </h2>
                            <p>Welcome to <strong>{WEB_NAME}</strong> ("we," "our," or "us"). We are dedicated to protecting your personal data and ensuring transparency in how we handle it.</p>
                            <p>This Privacy Policy explains how we collect, use, store, and share your data when you play our mobile games ("Games" or "Services"). By continuing to use our Games, you confirm your acceptance of this policy.</p>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-4">
                                <p className="text-sm font-bold uppercase tracking-widest text-yellow-500/80 mb-2">Compliance:</p>
                                <ul className="list-disc pl-5 text-sm space-y-1 opacity-70">
                                    <li>General Data Protection Regulation (GDPR) – For users in the EEA and UK</li>
                                    <li>California Consumer Privacy Act (CCPA) – For California residents</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-yellow-500">2.</span> Information We Collect
                            </h2>
                            <h3 className="text-lg font-bold text-yellow-500 mb-2 underline decoration-yellow-500/30">2.1 Personal Data (Provided by You)</h3>
                            <ul className="list-disc pl-5 mb-4">
                                <li>Name and contact information (if provided during support or account creation)</li>
                                <li>Payment information (processed securely via Google Play/Apple Pay—we do not store payment details)</li>
                                <li>User-generated content (chat messages, profile data)</li>
                            </ul>
                            <p className="text-sm italic opacity-60"><strong>Opt-Out:</strong> Users can choose not to provide personal data, but some features may not work.</p>

                            <h3 className="text-lg font-bold text-yellow-500 mt-6 mb-2 underline decoration-yellow-500/30">2.2 Non-Personal Data (Collected Automatically)</h3>
                            <p>Device information: Advertising ID, location, transaction information, Model, OS, and IP address (stored temporarily for security purposes).</p>
                            <p>Usage and gameplay data: Session times, in-game actions, and interactions.</p>

                            <h3 className="text-lg font-bold text-yellow-500 mt-6 mb-2 underline decoration-yellow-500/30">2.3 Third-Party Data Sources</h3>
                            <p><strong>Social logins:</strong> If you log in via social media, we may receive your name, profile picture, and email address.</p>
                            <p><strong>Ad/Analytics providers:</strong> Data on ad interactions and game performance.</p>

                            <h3 className="text-lg font-bold text-yellow-500 mt-6 mb-2 underline decoration-yellow-500/30">2.4 Device Permissions</h3>
                            <p>We may request access to camera, microphone, and storage for game features. You can disable these in your system settings (Android: Settings → Apps | iOS: Settings → Privacy).</p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-yellow-500">3.</span> How We Use Your Information
                            </h2>
                            <p>We use your data to improve the game experience and deliver relevant advertisements. In regions like the EU, we will ask for explicit consent before collecting data for advertising.</p>
                        </section>

                        {/* Section 4 - THE EXACT LIST */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-yellow-500">4.</span> Third-Party Services & SDKs
                            </h2>
                            <p className="mb-6 opacity-70">These third parties may collect user data under their own privacy policies:</p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-black text-yellow-500 uppercase text-xs tracking-widest mb-3">User Acquisition SDKs</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                        <SDKLink name="TikTok" url="https://ads.tiktok.com/i18n/official/policy/privacy" />
                                        <SDKLink name="Mintegral" url="https://www.mintegral.com/en/privacy" />
                                        <SDKLink name="Applovin" url="https://www.applovin.com/privacy/" />
                                        <SDKLink name="Ironsource" url="https://developers.ironsrc.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/" />
                                        <SDKLink name="Unity" url="https://unity3d.com/legal/privacy-policy" />
                                        <SDKLink name="Google" url="https://policies.google.com/privacy" />
                                        <SDKLink name="Meta (Facebook)" url="https://www.facebook.com/privacy/policy/" />
                                        <SDKLink name="Snapchat" url="https://snap.com/en-US/privacy/privacy-policy" />
                                        <SDKLink name="Liftoff" url="https://vungle.com/privacy/" />
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-black text-yellow-500 uppercase text-xs tracking-widest mb-3">Monetization SDKs</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                        <SDKLink name="BidMachine" url="https://bidmachine.io/privacy-policy/" />
                                        <SDKLink name="Admob" url="https://policies.google.com/privacy" />
                                        <SDKLink name="Pangle" url="https://www.pangleglobal.com/privacy/enduser-en" />
                                        <SDKLink name="Smaato" url="https://www.smaato.com/privacy/" />
                                        <SDKLink name="Ogury" url="https://ogury.com/ogury-advertising-privacy-policy/" />
                                        <SDKLink name="Chartboost" url="https://www.chartboost.com/legal/privacy-policy/" />
                                        <SDKLink name="Adverty" url="https://adverty.com/privacy-policy-2021" />
                                        <SDKLink name="Audiomob" url="https://audiomob.com/privacy-policy" />
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-black text-yellow-500 uppercase text-xs tracking-widest mb-3">Analytics & Monitoring</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                        <SDKLink name="Adjust" url="https://www.adjust.com/terms/privacy-policy" />
                                        <SDKLink name="Bytebrew" url="https://docs.bytebrew.io/BBSettings/privacypolicy" />
                                        <SDKLink name="Firebase" url="https://firebase.google.com/support/privacy" />
                                        <SDKLink name="GameAnalytics" url="https://gameanalytics.com/trust/privacy/privacy-notice" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5 & 6 */}
                        <section className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-3">5. Data Sharing</h2>
                                <p className="text-sm opacity-80">We do not sell your personal data. We disclose data only for legal compliance, fraud prevention, or business transfers.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
                                <p className="text-sm opacity-80">We retain data only as long as necessary and delete it automatically after a set period.</p>
                            </div>
                        </section>

                        {/* Section 8 & 9 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-yellow-500">8.</span> Children
                            </h2>
                            <p>Our services are not intended for children under 13. If we discover a child under 13 has provided data, we will take steps to delete it immediately.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-yellow-500">9.</span> Security
                            </h2>
                            <p>We use commercially accepted security measures, but no method of transmission is 100% secure. We also send push notifications for updates if you have consented.</p>
                        </section>

                        {/* Contact Section */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] mt-12 relative overflow-hidden group">
                            <div className="absolute -right-10 -bottom-10 text-yellow-500/10 font-black text-9xl italic group-hover:scale-110 transition-transform">@</div>
                            <h2 className="text-3xl font-black italic uppercase text-white mb-4">11. Contact Us</h2>
                            <p className="mb-8 opacity-70 max-w-lg">For any questions or concerns about this Privacy Policy, please reach out to our team at {WEB_NAME}.</p>
                            <Button asChild className="bg-yellow-500 text-black font-black h-14 px-8 rounded-2xl hover:bg-yellow-400 hover:scale-105 transition-all">
                                <a href={EMAIL_LINK}>
                                    <Mail className="mr-2 w-5 h-5" />admin@machinezonepvtltd.com
                                </a>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </main>

            <footer className="border-t border-white/5 py-10 px-8 text-center opacity-30 text-[10px] font-black uppercase tracking-[0.4em]">
                <p>© 2025 {WEB_NAME} ENGINEERED FOR PRIVACY.</p>
            </footer>
        </div>
    );
}

// Helper Component for Links
function SDKLink({ name, url }: { name: string; url: string }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/5 rounded-lg hover:border-yellow-500/50 hover:bg-white/[0.05] transition-colors group"
        >
            <span className="font-medium text-zinc-400 group-hover:text-white">{name}</span>
            <ExternalLink size={14} className="opacity-20 group-hover:opacity-100 transition-opacity" />
        </a>
    );
}

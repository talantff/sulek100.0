import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Check, Copy, Share2, Info, ArrowUpRight } from "lucide-react";
import { ChannelInfo } from "../types";

const blockchainInfo: ChannelInfo = {
  name: "Blockchain Alliance📈",
  avatarUrl: "https://i.ibb.co/FjwPz89/2026-06-05-050510.png",
  subscribersCount: "6 875 subscribers",
  subscribersRaw: 6875,
  description: "Без понтов, без инфоцыганщины.\nПоказываем, как реально зарабатывать на разнице между биржами.\n\n@Alex_Crypto_Blockchain — наставник, который не продаёт курс, а даёт связку.",
  inviteLink: "tg://join?invite=fOarOTPoJc43ZDAy",
  additionalText: "You are invited to the channel Blockchain Alliance📈. Click above to join."
};

export default function TelegramPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Automatically redirect user on page load
  React.useEffect(() => {
    const timer = setTimeout(() => {
      // Attempt to immediately open the native Telegram app
      window.location.href = blockchainInfo.inviteLink;
      // Simultaneously open the redirect fallback modal
      setShowModal(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
    
    // Attempt deep link redirect safely
    setTimeout(() => {
      window.location.href = blockchainInfo.inviteLink;
    }, 600);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://t.me/+fOarOTPoJc43ZDAy");
    triggerToast("Link copied to clipboard! 📋");
  };

  const handleCopyUsername = () => {
    navigator.clipboard.writeText("@Alex_Crypto_Blockchain");
    triggerToast("Mentor username copied! 📋");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-4 select-none">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 z-50 px-4 py-3 bg-[#1e2c3a] text-[#4cc4ff] border border-[#2c4054] rounded-lg shadow-xl text-sm font-medium flex items-center gap-2 max-w-xs"
          >
            <Check size={16} className="text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[360px] bg-[#17212b]/95 backdrop-blur-md rounded-[24px] border border-white/[0.04] p-5 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
        style={{ boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)" }}
      >
        {/* Subtle decorative card lighting */}
        <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-gradient-to-br from-[#24a1de]/20 to-transparent blur-2xl pointer-events-none" />

        {/* Channel Avatar Photo */}
        <div className="relative group mb-4 mt-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#1c2a38] shadow-lg bg-[#24a1de]/5 relative cursor-pointer"
          >
            <img
              src={blockchainInfo.avatarUrl}
              alt="Blockchain Alliance Avatar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </motion.div>
          {/* Pulsing indicator */}
          <span className="absolute bottom-1.5 right-1.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#24a1de] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#24a1de] border-2 border-[#17212b]"></span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold tracking-tight text-white mb-1 flex items-center justify-center gap-1.5 leading-snug">
          <span>{blockchainInfo.name}</span>
        </h1>

        {/* Subscribers Count */}
        <p className="text-xs text-[#6c7883] font-medium tracking-wide mb-5">
          {blockchainInfo.subscribersCount}
        </p>

        {/* Video strategy invitation callout text */}
        <div className="text-sm font-medium text-center text-[#e4ecf2] leading-relaxed mb-6 px-2">
          👇Все стратегии из видео и бесплатное обучение по кнопке ниже👇
        </div>

        {/* Action Button CTA */}
        <motion.a
          href={blockchainInfo.inviteLink}
          onClick={handleJoinClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3.5 rounded-full select-none text-white font-semibold text-sm tracking-wide uppercase shadow-lg shadow-[#24a1de]/20 bg-[#24a1de] flex items-center justify-center gap-2 shine-animate cursor-pointer"
        >
          <span>Join Channel</span>
        </motion.a>

      </motion.div>

      {/* Web Gateway Redirect / Dialog Native App Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop blur element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-[#070b0e]/80 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              className="w-full max-w-sm bg-[#17212b] border border-[#222f3d] rounded-2xl p-6 relative overflow-hidden shadow-2xl z-50"
            >
              {/* Top Graphic Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#24a1de]/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#24a1de]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.88 7.97-3.44 3.79-1.59 4.57-1.87 5.09-1.88.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Open in Telegram?</h3>
                  <p className="text-xs text-[#6c7883]">We are redirecting you to your Telegram app...</p>
                </div>
              </div>

              {/* Status Message */}
              <p className="text-xs text-[#a4b4c3] leading-relaxed bg-[#1b2632] px-3 py-2.5 rounded-xl mb-5">
                If the Telegram app doesn't open automatically, you can use the secondary actions below to join the channel directly.
              </p>

              {/* CTAs */}
              <div className="flex flex-col gap-2">
                <a
                  href={blockchainInfo.inviteLink}
                  className="w-full py-2.5 rounded-xl bg-[#24a1de] text-center font-semibold text-xs text-white uppercase hover:bg-opacity-90 active:scale-98 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Launch Deep Link</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="https://t.me/+fOarOTPoJc43ZDAy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-transparent hover:bg-[#1b2632] text-center font-medium text-xs text-[#4cc4ff] border border-[#222f3d] transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Open Telegram Web</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  onClick={() => setShowModal(false)}
                  className="w-full py-2.5 rounded-xl bg-transparent text-center font-normal text-xs text-[#6c7883] hover:text-white transition-all"
                >
                  Back to Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  FiCheck,
  FiCopy,
  FiFacebook,
  FiLinkedin,
  FiShare2,
  FiTwitter,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { trackBlogShare } from "@/app/lib/tracking";

export default function ShareButtons({ blog }) {
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const shareText = blog.title;

  const handleShareClick = (platform) => {
    trackBlogShare(platform, blog.slug);
  };

  const copyLink = async () => {
    handleShareClick("copy_link");
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const nativeShare = async () => {
    handleShareClick("native_share");
    if (!navigator.share) return;

    try {
      await navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url,
      });
    } catch {}
  };

  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-5 shadow-sm sm:rounded-3xl sm:p-6 lg:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Content */}
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700 sm:px-4 sm:py-1.5 sm:text-sm">
              Share Article
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Found this article helpful?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Share it with your friends, family, or colleagues who may
              find it useful.
            </p>
          </div>

          {/* Share Buttons */}
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap">
              {typeof navigator !== "undefined" && navigator.share && (
                <button
                  onClick={nativeShare}
                  className="flex h-12 w-full items-center justify-center rounded-xl bg-sky-600 text-white transition-all duration-300 hover:scale-105 hover:bg-sky-700 sm:h-12 sm:w-12"
                  aria-label="Share"
                >
                  <FiShare2 className="h-5 w-5" />
                </button>
              )}

              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `${shareText}\n${url}`
                )}`}
                onClick={() => handleShareClick("whatsapp")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-green-500 text-white transition-transform duration-300 hover:scale-105 sm:h-12 sm:w-12"
                aria-label="Share on WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  url
                )}`}
                onClick={() => handleShareClick("facebook")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 text-white transition-transform duration-300 hover:scale-105 sm:h-12 sm:w-12"
                aria-label="Share on Facebook"
              >
                <FiFacebook className="h-5 w-5" />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  url
                )}`}
                onClick={() => handleShareClick("linkedin")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-sky-700 text-white transition-transform duration-300 hover:scale-105 sm:h-12 sm:w-12"
                aria-label="Share on LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  shareText
                )}&url=${encodeURIComponent(url)}`}
                onClick={() => handleShareClick("twitter")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-black text-white transition-transform duration-300 hover:scale-105 sm:h-12 sm:w-12"
                aria-label="Share on X"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
            </div>

            <button
              onClick={copyLink}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 transition-all duration-300 hover:border-sky-500 hover:text-sky-600 sm:mt-4"
            >
              {copied ? (
                <>
                  <FiCheck />
                  Copied
                </>
              ) : (
                <>
                  <FiCopy />
                  Copy Link
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
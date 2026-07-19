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

export default function ShareButtons({ blog }) {
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const shareText = `${blog.title}`;

  const copyLink = async () => {
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
    <section className="mt-20">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-8 shadow-sm">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
              Share Article
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Found this article helpful?
            </h2>

            <p className="mt-3 text-slate-600">
              Share it with your friends and family.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
         {typeof navigator !== "undefined" && navigator.share && (
              <button
                onClick={nativeShare}
                className="rounded-xl bg-sky-600 p-3 text-white transition hover:scale-105 hover:bg-sky-700"
              >
                <FiShare2 size={20} />
              </button>
            )}

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${shareText}\n${url}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 p-3 text-white transition hover:scale-105"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 p-3 text-white transition hover:scale-105"
            >
              <FiFacebook size={20} />
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-sky-700 p-3 text-white transition hover:scale-105"
            >
              <FiLinkedin size={20} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                shareText
              )}&url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-black p-3 text-white transition hover:scale-105"
            >
              <FiTwitter size={20} />
            </a>

            <button
              onClick={copyLink}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium transition hover:border-sky-500 hover:text-sky-600"
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
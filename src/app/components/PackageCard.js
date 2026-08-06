import {
  FiArrowRight,
  FiHome,
  FiClock,
  FiShield,
} from "react-icons/fi";

import { packageTheme, packageThemeMap } from "../data/packages";
import Image from "next/image";
import PackageLink from "./PackageCardLink";

export default function PackageCard({
  pkg,
  featured = false,
  location = "packages",
}) {
  const savings = pkg.originalPrice - pkg.price;
  const discount = Math.round((savings / pkg.originalPrice) * 100);

  const themeKey = packageThemeMap[pkg.slug] || "preventive";
  const theme = packageTheme[themeKey];
  const Icon = theme.icon;

  return (
    <article
      itemScope
      itemType="https://schema.org/Product"
      className={`relative flex w-full flex-col overflow-hidden rounded-3xl border border-slate-200 ${theme.cardBg} shadow-sm transition-all duration-300 hover:shadow-xl`}
    >
      {/* Glow */}
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-25 ${theme.glow}`}
      />

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-4">
        {/* Package Image */}
        <div className="relative mb-4 h-48 overflow-hidden rounded-2xl">
          <Image
            src={pkg.image}
            alt={`${pkg.name} Health Package`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            quality={60}
            priority={featured}
            loading={featured ? undefined : "lazy"}
            className="object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Header */}
        <div className="flex items-start gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${theme.iconBg}`}
          >
            <Icon className={`${theme.iconColor} text-xl`} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${theme.badgeBg} ${theme.badgeColor}`}
              >
                {pkg.testsCount} Tests
              </span>

              {discount > 0 && (
                <span className="rounded-full bg-red-100 px-2.5 py-1 text-[10px] font-bold text-red-600">
                  {discount}% OFF
                </span>
              )}
            </div>

            <h3
              itemProp="name"
              className="mt-2 line-clamp-2 text-lg font-bold text-slate-900 truncate"
            >
              {pkg.name}
            </h3>
          </div>
        </div>

        {/* Price Box */}
        <div
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
          className="mt-5 rounded-2xl bg-white p-5 shadow-sm border border-slate-100"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Starting From
          </p>

          <div className="mt-2 flex items-end gap-2">
            <span
              itemProp="price"
              content={pkg.price}
              className="text-4xl font-black text-slate-900"
            >
              ₹{pkg.price}
            </span>
            <meta itemProp="priceCurrency" content="INR" />

            <span className="pb-1 text-base text-slate-400 line-through">
              ₹{pkg.originalPrice}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              Save ₹{savings}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${theme.badgeBg} ${theme.badgeColor}`}
            >
              {discount}% OFF
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { icon: FiHome, title: "Home" },
            { icon: FiClock, title: pkg.reportTime },
            { icon: FiShield, title: "Trusted" },
          ].map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={index}
                className="rounded-xl hidden lg:block bg-white border border-slate-100 p-3 text-center"
              >
                <div
                  className={`mx-auto flex h-9 w-9 items-center justify-center rounded-xl ${theme.iconBg}`}
                >
                  <ItemIcon className={theme.iconColor} size={18} />
                </div>
                <p className="mt-2 text-xs font-semibold text-slate-700">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${theme.badgeBg} ${theme.badgeColor}`}
          >
            🧪 {pkg.testsCount} Tests
          </span>

          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            ✔ Recommended
          </span>
        </div>

        {/* CTA */}
        <PackageLink
          href={`/packages/${pkg.slug}`}
          tracking={`${location}-${pkg.slug}`}
          aria-label={`View ${pkg.name} package details`}
          className={`mt-4 flex h-11 items-center justify-between rounded-xl px-4 text-sm font-semibold text-white shadow-md transition duration-300 hover:shadow-lg ${theme.button}`}
        >
          <span>View Package</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
            <FiArrowRight size={15} />
          </span>
        </PackageLink>
      </div>
    </article>
  );
}
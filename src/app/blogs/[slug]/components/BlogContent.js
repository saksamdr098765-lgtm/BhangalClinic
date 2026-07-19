import Image from "next/image";
import InfoCard from "./InfoCard";

export default function BlogContent({ content }) {
  return (
    <div className="prose prose-lg max-w-none prose-slate">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={index}
                  id={block.text
                    .toLowerCase()
                    .replace(/[^\w\s]/g, "")
                    .replace(/\s+/g, "-")}
                  className="mt-16 mb-6 scroll-mt-28 text-3xl font-bold text-slate-900"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.level === 3) {
              return (
                <h3
                  key={index}
                  className="mt-12 mb-4 text-2xl font-semibold text-slate-900"
                >
                  {block.text}
                </h3>
              );
            }

            return null;

          case "paragraph":
            return (
              <p
                key={index}
                className="mb-6 text-lg leading-8 text-slate-600"
              >
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul
                key={index}
                className="mb-8 list-disc space-y-3 pl-6 text-lg text-slate-600 marker:text-sky-600"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          case "image":
            return (
              <figure key={index} className="my-12">
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-200">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={1400}
                    height={800}
                    className="w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {block.caption && (
                  <figcaption className="mt-3 text-center text-sm text-slate-500">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "tip":
            return (
              <InfoCard
                key={index}
                type="tip"
                title={block.title}
                text={block.text}
              />
            );

          case "warning":
            return (
              <InfoCard
                key={index}
                type="warning"
                title={block.title}
                text={block.text}
              />
            );

          case "success":
            return (
              <InfoCard
                key={index}
                type="success"
                title={block.title}
                text={block.text}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
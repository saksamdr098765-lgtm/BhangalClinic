import PackageImageCarouselClient from "./PackageImageCarouselClient";

const packages = [
  {
    name: "bhangal ayush profile 2.1",
    image: "/carausol/bhangal-ayush-profile-2-1.webp",
  },
  {
    name: "bhangal ayush profile 3.1",
    image: "/carausol/bhangal-ayush-profile-3-1.webp",
  },
  {
    name: "bhangal ayush profile 3",
    image: "/carausol/bhangal-ayush-profile-3.webp",
  },
  {
    name: "bhangal ayush profile 2",
    image: "/carausol/bhangal-ayush-profile-2.webp",
  },
  {
    name: "bhangal dengue profile",
    image: "/carausol/bhangal-dengue-profile.webp",
  },
  {
    name: "bhangal diabetic profile",
    image: "/carausol/bhangal-diabetic-profile.webp",
  },
];

export default function PackageImageCarousel() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Medical glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <PackageImageCarouselClient packages={packages} />
      </div>
    </section>
  );
}
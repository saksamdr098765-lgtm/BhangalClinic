import PackageImageCarouselClient from "./PackageImageCarouselClient";

const packages = [
  {
    name: "Bhangal Ayush Profile 2.1",
    price: 1500,
    originalPrice: 2000,
    slug: "bhangal-ayush-profile-2-1",
    image: "/carausol/bhangal-ayush-profile-2-1.webp",
  },
  {
    name: "Bhangal Ayush Profile 3.1",
    price: 2250,
    originalPrice: 3000,
    slug: "bhangal-ayush-profile-3-1",
    image: "/carausol/bhangal-ayush-profile-3-1.webp",
  },
  {
    name: "Bhangal Ayush Profile 3",
    price: 1499,
    originalPrice: 2000,
    slug: "bhangal-ayush-profile-3",
    image: "/carausol/bhangal-ayush-profile-3.webp",
  },
  {
    name: "Bhangal Ayush Profile 2",
    price: 1125,
    originalPrice: 1500,
    slug: "bhangal-ayush-profile-2",
    image: "/carausol/bhangal-ayush-profile-2.webp",
  },
  {
    name: "Bhangal Dengue Profile",
    price: 1500,
    originalPrice: 2000,
    slug: "bhangal-dengue-profile",
    image: "/carausol/bhangal-dengue-profile.webp",
  },
  {
    name: "Bhangal Diabetic Profile",
    price: 1499,
    originalPrice: 2000,
    slug: "bhangal-diabetic-profile",
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

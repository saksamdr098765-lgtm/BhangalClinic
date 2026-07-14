import AdminBookingEmail from "../AdminBookingEmail";

export default function Preview() {
  return (
    <AdminBookingEmail
      booking={{
        name: "Rohit Kumar",
        phone: "9876543210",
        email: "rohit@gmail.com",

        test: "Complete Body Checkup",

        preferredDate: "24 July 2026",

        preferredTime: "10:00 AM",

        homeCollection: true,

        address:
          "House No. 201, Sector 20, Panchkula, Haryana",

        notes:
          "Please call before arriving.",
      }}
    />
  );
}
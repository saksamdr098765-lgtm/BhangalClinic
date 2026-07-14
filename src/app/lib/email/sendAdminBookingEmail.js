
import AdminBookingEmail from "@/emails/AdminBookingEmail";
import { resend } from "../resend";

export async function sendAdminBookingEmail(booking) {
  return await resend.emails.send({
    from: `Website Booking <${process.env.FROM_EMAIL}>`,
 to: process.env.ADMIN_EMAIL,
    subject: `🩺 New Booking • ${booking.name}`,
    react: <AdminBookingEmail booking={booking} />,
  });
}
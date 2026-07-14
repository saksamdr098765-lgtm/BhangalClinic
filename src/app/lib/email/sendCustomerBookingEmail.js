CustomerBookingEmail
import CustomerBookingEmail from "@/emails/CustomerBookingEmail";
import { resend } from "../resend";

export async function sendCustomerBookingEmail(booking) {
 

  return await resend.emails.send({
    from: `Bhangal Clinical laboratory & ECG Center <${process.env.FROM_EMAIL}>`,
    to: booking.email,
    subject: "Your Booking Request has been Received",

    react: <CustomerBookingEmail booking={booking} />,
  
  });
}
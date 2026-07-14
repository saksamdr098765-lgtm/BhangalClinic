
import { bookingSchema } from "@/app/lib/BookingSchema";
import { sendAdminBookingEmail } from "@/app/lib/email/sendAdminBookingEmail";
import { sendCustomerBookingEmail } from "@/app/lib/email/sendCustomerBookingEmail";

export async function POST(request) {
  try {
    const body = await request.json();

    const validation = bookingSchema.safeParse(body);

    if (!validation.success) {
      return Response.json(
        {
          success: false,
          message: validation.error.issues[0].message,
        },
        {
          status: 400,
        }
      );
    }

    await Promise.all([
      sendAdminBookingEmail(body),
      sendCustomerBookingEmail(body),
    ]);

    return Response.json({
      success: true,
      message: "Booking submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
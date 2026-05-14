import { NextResponse } from 'next/server'

export async function POST(
  req: Request
) {

  try {

    const body = await req.json()

    const {
      firstName,
      lastName,
      email,
      message,
    } = body

    const BOT_TOKEN =
      '8727236959:AAEnVR-1EF_-zSOAzPtuyGuL8Il_Twdbk8g'

    const CHAT_ID =
      '1072507526'

    const text = `
🔥 NEW CLIENT INQUIRY

👤 Name:
${firstName} ${lastName}

📧 Email:
${email}

📝 Project:
${message}
`

    const telegramResponse =
      await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
          }),
        }
      )

    if (!telegramResponse.ok) {

      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 500,
        }
      )

    }

    return NextResponse.json({
      success: true,
    })

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )

  }

}
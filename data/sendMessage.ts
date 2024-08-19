export async function sendMessage({
  full_name,
  email,
  phone,
  subject,
  message,
}: any) {
  try {
    const res = await fetch('http://localhost:3000/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ full_name, email, phone, subject, message }),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

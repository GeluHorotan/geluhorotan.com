import { IMessage } from '@customTypes/IContactFormParams';
import { SUBMIT_CONTACT_FORM_QUERY } from '@data/queries';
import { directus } from '@lib/directus';

export async function POST(req: any) {
  if (req.method !== 'POST') {
    return Response.json({ message: 'Method not allowed!' }, { status: 405 });
  }
  const body = await req.json();

  const { full_name, email, phone, subject, message } = body;

  if (!full_name || !email || !phone || !subject || !message) {
    return Response.json(
      { message: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    await directus.query<IMessage>(SUBMIT_CONTACT_FORM_QUERY(body));
    return Response.json(
      { message: 'Your message has been sent!' },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error });
  }
}

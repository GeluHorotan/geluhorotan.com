import { directus } from '@lib/directus';
import { SUBMIT_CONTACT_FORM_QUERY } from './queries';
import { IContactFormParams } from '@customTypes/IContactFormParams';

export async function sendMessage(formData: any) {
  'use server';

  const full_name = formData.get('full_name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');
  const subject = formData.get('subject');

  try {
    const res = await directus.query<IContactFormParams>(
      SUBMIT_CONTACT_FORM_QUERY({ full_name, email, phone, message, subject })
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
}

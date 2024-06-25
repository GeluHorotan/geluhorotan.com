import { submitContactForm } from '@data/submitContactForm';
import { Button } from './ui/Button';

export function Contact() {
  return (
    <section className=" w-full  max-w-8xl  flex items-center justify-center self-center">
      <form
        action={submitContactForm}
        className="w-full flex flex-col items-start"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Full Name</label>

          <input id="name" name="full_name" required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject">Subject</label>
          <input name="subject" id="subject" required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            cols={50}
            required
            placeholder="Enter information about yourself..."
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}

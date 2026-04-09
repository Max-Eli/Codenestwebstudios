import { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Codenest Web Studios privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="April 9, 2026">
      <section>
        <h2>1. Introduction</h2>
        <p>
          Codenest Web Studios (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website codenestwebstudios.com or engage our services.
        </p>
        <p>
          Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <h3>Information you provide directly</h3>
        <p>We collect information you voluntarily provide when you:</p>
        <ul>
          <li>Fill out our contact form (name, email, company, project details)</li>
          <li>Request a project proposal or consultation</li>
          <li>Subscribe to our newsletter or blog</li>
          <li>Communicate with us via email or phone</li>
        </ul>

        <h3>Automatically collected information</h3>
        <p>When you visit our site, we may automatically collect:</p>
        <ul>
          <li>IP address and general location (country/region)</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent</li>
          <li>Referring URL and exit pages</li>
          <li>Device type and operating system</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your project inquiries and service requests</li>
          <li>Provide quotes, proposals, and project updates</li>
          <li>Send you our newsletter if you have opted in (you can unsubscribe anytime)</li>
          <li>Improve our website experience and content</li>
          <li>Comply with legal obligations</li>
          <li>Prevent fraud and ensure security</li>
        </ul>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes.</p>
      </section>

      <section>
        <h2>4. Cookies</h2>
        <p>
          We use minimal cookies for essential website functionality and analytics. We use privacy-respecting analytics (no cross-site tracking). You can control cookie preferences through your browser settings.
        </p>
      </section>

      <section>
        <h2>5. Data Sharing</h2>
        <p>We may share your information with:</p>
        <ul>
          <li><strong>Service providers</strong> — email providers, hosting services, and analytics tools that help us operate our site (bound by confidentiality agreements)</li>
          <li><strong>Legal authorities</strong> — if required by law, court order, or to protect our rights</li>
          <li><strong>Business transfers</strong> — in the event of a merger or acquisition, with appropriate notice</li>
        </ul>
      </section>

      <section>
        <h2>6. Data Retention</h2>
        <p>
          We retain personal information only as long as necessary for the purposes outlined in this policy, or as required by law. Project-related communications are retained for 7 years for accounting and legal purposes.
        </p>
      </section>

      <section>
        <h2>7. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Request deletion of your personal information</li>
          <li>Object to or restrict processing of your information</li>
          <li>Data portability (receive your data in a structured format)</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at hello@codenestwebstudios.com. We will respond within 30 days.
        </p>
      </section>

      <section>
        <h2>8. Security</h2>
        <p>
          We implement industry-standard security measures including HTTPS encryption, secure data storage, and limited access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>9. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
        </p>
      </section>

      <section>
        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of our site constitutes acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2>11. SMS / Text Message Marketing</h2>
        <h3>Program Description</h3>
        <p>
          Codenest Web Studios operates an SMS marketing program to send project updates, promotional offers, and informational messages to subscribers who have provided explicit written consent.
        </p>

        <h3>Consent</h3>
        <p>
          By providing your mobile phone number and checking the SMS consent box on our website forms, you expressly consent to receive recurring automated marketing text messages from Codenest Web Studios at the mobile number provided. Consent is not a condition of purchase or use of our services.
        </p>

        <h3>Message Frequency</h3>
        <p>Message frequency varies. You may receive up to 4 messages per month depending on your engagement and our current campaigns.</p>

        <h3>Costs</h3>
        <p>Message and data rates may apply. Check with your mobile carrier for details.</p>

        <h3>How to Opt Out</h3>
        <p>
          You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will receive one final confirmation message. To re-subscribe, reply <strong>START</strong>.
        </p>

        <h3>Help</h3>
        <p>
          For help, reply <strong>HELP</strong> to any SMS message or contact us at hello@codenestwebstudios.com.
        </p>

        <h3>Supported Carriers</h3>
        <p>
          Carriers are not liable for delayed or undelivered messages. Supported carriers include but are not limited to: AT&amp;T, T-Mobile, Verizon, Sprint, Boost Mobile, MetroPCS, U.S. Cellular, and other major US carriers.
        </p>

        <h3>Data Use</h3>
        <p>
          Mobile phone numbers collected for SMS messaging will only be used for the stated purpose and will not be shared with third parties for their own marketing purposes.
        </p>
      </section>

      <section>
        <h2>12. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> hello@codenestwebstudios.com<br />
          <strong>Subject:</strong> Privacy Policy Inquiry
        </p>
      </section>
    </LegalPage>
  );
}

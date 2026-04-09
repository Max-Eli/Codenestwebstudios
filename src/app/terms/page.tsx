import { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Codenest Web Studios terms and conditions for our web development and software services.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="January 1, 2025">
      <section>
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing codenestwebstudios.com or engaging Codenest Web Studios for services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our site or services.
        </p>
      </section>

      <section>
        <h2>2. Services</h2>
        <p>
          Codenest Web Studios provides web development, mobile application development, custom software development, and related digital services. The specific scope, deliverables, timeline, and payment terms for each project are defined in a separate Statement of Work (SOW) or project proposal agreed upon by both parties.
        </p>
      </section>

      <section>
        <h2>3. Project Engagements</h2>
        <h3>Proposals and Agreements</h3>
        <p>
          All project work begins with a signed proposal or SOW. Work will not begin until both parties have signed the agreement and any required deposit has been received.
        </p>

        <h3>Changes to Scope</h3>
        <p>
          Any changes to the agreed project scope must be submitted in writing. We will provide a revised estimate for additional work before proceeding. Scope changes may affect timeline and cost.
        </p>

        <h3>Client Responsibilities</h3>
        <p>Clients are responsible for:</p>
        <ul>
          <li>Providing timely feedback within agreed review periods</li>
          <li>Supplying all required content, assets, and access credentials</li>
          <li>Ensuring they have rights to any third-party content provided</li>
          <li>Designating a single point of contact for project communication</li>
        </ul>
      </section>

      <section>
        <h2>4. Payment Terms</h2>
        <ul>
          <li>Projects require a 40% deposit before work begins</li>
          <li>Remaining balance is invoiced at milestones defined in the SOW</li>
          <li>Invoices are due within 14 days of receipt</li>
          <li>Late payments are subject to 1.5% monthly interest</li>
          <li>Work will pause on accounts with invoices overdue by 30+ days</li>
        </ul>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <h3>Client-owned assets</h3>
        <p>
          Upon receipt of full payment, clients receive full ownership of all custom-developed code, designs, and deliverables created specifically for their project.
        </p>

        <h3>Third-party components</h3>
        <p>
          Projects may incorporate open-source libraries, licensed fonts, or stock assets. These remain subject to their respective licenses. We will disclose any third-party components used.
        </p>

        <h3>Portfolio rights</h3>
        <p>
          Unless explicitly agreed otherwise, we retain the right to display completed projects in our portfolio and case studies, with appropriate attribution.
        </p>
      </section>

      <section>
        <h2>6. Confidentiality</h2>
        <p>
          We treat all client information — business strategies, technical details, user data — as strictly confidential. We will not disclose confidential information to third parties without prior written consent. We are happy to sign a mutual NDA before project discussions begin.
        </p>
      </section>

      <section>
        <h2>7. Warranties and Guarantees</h2>
        <p>We guarantee that:</p>
        <ul>
          <li>All deliverables will function as specified in the agreed SOW</li>
          <li>Code will be our original work or properly licensed third-party components</li>
          <li>We have the skills and resources to complete the agreed work</li>
        </ul>
        <p>
          We provide a 30-day bug fix period post-launch for defects that existed at the time of delivery. This does not cover new features, changes in browser/OS compatibility after delivery, or issues caused by third-party service changes.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          Our liability is limited to the total fees paid for the specific project in question. We are not liable for indirect, incidental, or consequential damages including lost profits, business interruption, or data loss.
        </p>
      </section>

      <section>
        <h2>9. Termination</h2>
        <p>
          Either party may terminate a project with 14 days written notice. Upon termination, clients are responsible for payment for all work completed to date. Deposits are non-refundable once work has begun.
        </p>
      </section>

      <section>
        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by applicable law. Any disputes will be resolved through good-faith negotiation. If negotiation fails, disputes will be resolved through binding arbitration.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          Questions about these Terms? Contact us at hello@codenestwebstudios.com.
        </p>
      </section>
    </LegalPage>
  );
}

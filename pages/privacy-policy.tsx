import React from "react";

// Simplified, dependency-free React/Next.js page component for /privacy-policy
// This version avoids potential runtime issues caused by environment-specific
// components or CSS frameworks. Drop this file into `pages/privacy-policy.tsx`
// (Next.js) or adapt for your router. It intentionally uses minimal markup and
// inline styles so it is robust in sandboxed or limited environments.

export default function PrivacyPolicy(): JSX.Element {
  return (
    <div style={{ minHeight: '100vh', background: '#f7fafc', color: '#1a202c', padding: '48px 16px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', background: '#ffffff', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', borderRadius: 20, padding: 32 }}>
        <header style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>Privacy Policy</h1>
          <p style={{ marginTop: 8, fontSize: 13, color: '#4a5568' }}>Last updated: <strong>October 27, 2025</strong></p>
          <p style={{ marginTop: 16, lineHeight: 1.6 }}>Welcome to <strong>HoxFitness.in</strong>, a gym management software platform designed to help gym owners manage memberships, payments, reminders, and communication with their members efficiently. Your privacy is important to us.</p>
        </header>

        <main style={{ lineHeight: 1.7 }}>
          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>1. Information We Collect</h2>
            <p>We collect the following types of information to provide and improve our services:</p>

            <h3 style={{ marginTop: 12, marginBottom: 6 }}>User Information</h3>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Contact Number</li>
              <li>Gym/Business Name</li>
              <li>UPI or Payment Details (only entered voluntarily for payment reminders)</li>
            </ul>

            <h3 style={{ marginTop: 12, marginBottom: 6 }}>Member Information (added by gym owners)</h3>
            <ul>
              <li>Name, Contact Number, Membership Type, and Payment Status</li>
              <li>Exercise plans, schedules, or performance data (if gym owner uploads it)</li>
            </ul>

            <h3 style={{ marginTop: 12, marginBottom: 6 }}>System Information</h3>
            <ul>
              <li>Browser type, device type, operating system</li>
              <li>IP address and login timestamps for security tracking</li>
            </ul>

            <h3 style={{ marginTop: 12, marginBottom: 6 }}>Communication Data</h3>
            <p>Messages or notifications sent via WhatsApp Cloud API or OneSignal Web Push (only when users give permission).</p>
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>2. How We Use the Collected Information</h2>
            <p>We use the information to:</p>
            <ul>
              <li>Register gym owners and members into the HoxFitness system.</li>
              <li>Manage gym membership records and payment histories.</li>
              <li>Send payment reminders, membership expiry alerts, and fitness notifications.</li>
              <li>Improve our platform, fix bugs, and provide technical support.</li>
              <li>Communicate via email, WhatsApp API, or web notifications after consent.</li>
            </ul>
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>3. Data Sharing & Third Parties</h2>
            <p>We <strong>do not sell or rent</strong> your personal data. We may share limited data only with:</p>
            <ul>
              <li><strong>Meta Platforms, Inc.</strong> — for sending messages via the WhatsApp Business Cloud API.</li>
              <li><strong>OneSignal</strong> — for browser-based web push notifications.</li>
              <li><strong>Payment Gateways</strong> (e.g., UPI, Razorpay, PhonePe) — when verifying payment screenshots.</li>
            </ul>
            <p>Each third party handles data under their own privacy policies and applicable laws.</p>
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>4. Data Storage and Security</h2>
            <ul>
              <li>All user and gym data are stored securely in <strong>MongoDB Atlas (Free Tier)</strong> with encrypted access.</li>
              <li>Access to your data is limited to authorized administrators only.</li>
              <li>We use HTTPS encryption for all data transmission between users and our servers.</li>
              <li>No sensitive payment data (like full card numbers or passwords) is stored on our servers.</li>
            </ul>
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>5. User Rights</h2>
            <p>As a user or gym owner, you have the right to:</p>
            <ul>
              <li>Access your stored information.</li>
              <li>Update or correct inaccurate data.</li>
              <li>Request deletion of your account and associated data.</li>
              <li>Withdraw permissions (e.g., WhatsApp or Push Notifications) at any time.</li>
            </ul>
            <p>To exercise these rights, email us at <a href="mailto:support@hoxfitness.in">support@hoxfitness.in</a>.</p>
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>6. Cookies and Tracking</h2>
            <p>HoxFitness.in uses cookies to:</p>
            <ul>
              <li>Maintain login sessions.</li>
              <li>Remember user preferences.</li>
              <li>Improve website performance and analytics.</li>
            </ul>
            <p>You can disable cookies through your browser settings, though this may affect functionality.</p>
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>7. Children’s Privacy</h2>
            <p>Our services are intended for users aged <strong>18 years and above</strong>. We do not knowingly collect data from children.</p>
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>8. Policy Updates</h2>
            <p>We may update this policy occasionally to reflect new features or legal requirements. Updated versions will always be posted on this page with a revised date.</p>
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>9. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or data practices, please contact:</p>
            <address style={{ fontStyle: 'normal', marginTop: 8 }}>
              <strong>HoxFitness.in</strong><br />
              Email: <a href="mailto:support@hoxfitness.in">support@hoxfitness.in</a><br />
              Website: <a href="https://hoxfitness.in" target="_blank" rel="noopener noreferrer">https://hoxfitness.in</a><br />
              Location: India
            </address>
          </section>

          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>Meta Verification Declaration</h2>
            <p>HoxFitness.in complies with <strong>Meta’s Developer Policies</strong>, <strong>WhatsApp Business API Terms</strong>, and data protection guidelines. We ensure that:</p>
            <ul>
              <li>All message communications are user-consented.</li>
              <li>Sensitive user data is never shared with third parties for marketing.</li>
              <li>Data deletion and privacy requests are honored promptly.</li>
            </ul>
          </section>

          <footer style={{ marginTop: 24 }}>
            <p style={{ fontSize: 13, color: '#4a5568' }}>This policy was prepared for verification purposes and can be adjusted to meet local legal requirements. For legal advice specific to your jurisdiction, consult a qualified attorney.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

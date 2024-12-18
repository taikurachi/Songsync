export default function EndUserAgreement() {
  const date = new Date().toLocaleDateString();

  return (
    <div
      style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
      className="eula"
    >
      <h1>End User License Agreement</h1>
      <p>Last updated: {date}</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Songsync (&quot;the Application&quot;), you
          agree to be bound by this End User License Agreement
          (&quot;Agreement&quot;). If you do not agree to these terms, please do
          not use the Application.
        </p>
      </section>

      <section>
        <h2>2. Spotify Integration</h2>
        <p>
          Songsync integrates with Spotify&apos;s services. By using our
          Application, you acknowledge that:
        </p>
        <ul>
          <li>You must have a valid Spotify account to use our services</li>
          <li>You agree to comply with Spotify&apos;s Terms of Service</li>
          <li>
            Your use of Spotify&apos;s services through our Application is
            subject to Spotify&apos;s own terms and conditions
          </li>
        </ul>
      </section>

      <section>
        <h2>3. License Grant</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable
          license to use the Application for your personal, non-commercial
          purposes, subject to these terms.
        </p>
      </section>

      <section>
        <h2>4. User Restrictions</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Modify, reverse engineer, or decompile the Application</li>
          <li>Use the Application for any illegal purpose</li>
          <li>
            Attempt to gain unauthorized access to any portion of the
            Application
          </li>
          <li>
            Use the Application in any way that could damage or overburden our
            systems
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Data Usage</h2>
        <p>
          Your use of the Application is also governed by our Privacy Policy.
          The Application will access your:
        </p>
        <ul>
          <li>Spotify listening history</li>
          <li>Recently played tracks</li>
          <li>Basic profile information</li>
        </ul>
      </section>

      <section>
        <h2>6. Disclaimer of Warranties</h2>
        <p>
          The Application is provided &quot;as is&quot; without any warranties,
          express or implied. We do not guarantee that the Application will
          always be available, uninterrupted, or error-free.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Songsync shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages resulting from your use or inability to use the Application.
        </p>
      </section>

      <section>
        <h2>8. Changes to Agreement</h2>
        <p>
          We reserve the right to modify this Agreement at any time. We will
          notify users of any material changes. Your continued use of the
          Application after such modifications constitutes acceptance of the
          updated terms.
        </p>
      </section>

      <section>
        <h2>9. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to the
          Application at any time, for any reason, without notice. You may also
          terminate this Agreement by ceasing to use the Application and
          revoking access through your Spotify account settings.
        </p>
      </section>

      <section>
        <h2>10. Contact Information</h2>
        <p>
          If you have any questions about this Agreement, please contact us at:
          Burichan523@gmail.com
        </p>
      </section>
    </div>
  );
}

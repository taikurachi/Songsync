export default function Privacy() {
  const date = new Date().toLocaleDateString();
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: {date}</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how Songsync collects, uses, and protects
          your data when you use our application that integrates with Spotify.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>When you use Songsync, we collect:</p>
        <ul>
          <li>
            Your Spotify account information (such as your Spotify username)
          </li>
          <li>Your recently played tracks</li>
          <li>Your listening history</li>
          <li>Basic profile information from your Spotify account</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Display your recently played songs</li>
          <li>Show upcoming concerts based on your listening history</li>
          <li>Improve our service and user experience</li>
          <li>Provide technical support when needed</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Storage and Security</h2>
        <p>
          We take the security of your data seriously. We do not store your
          Spotify credentials. Authentication is handled directly through
          Spotify&apos;s secure OAuth process.
        </p>
      </section>

      <section>
        <h2>5. Data Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We only access the Spotify data necessary to provide our
          service.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Request deletion of your data</li>
          <li>Revoke access to your Spotify account at any time</li>
          <li>Request information about how your data is used</li>
        </ul>
      </section>

      <section>
        <h2>7. Spotify Integration</h2>
        <p>
          This application uses the Spotify Web API to access your Spotify data.
          Our use of information received from Spotify APIs adheres to the
          <a href="https://developer.spotify.com/terms">
            {" "}
            Spotify Developer Terms of Service
          </a>{" "}
          and
          <a href="https://spotify.com/legal/privacy-policy">
            {" "}
            Spotify Privacy Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>8. Changes to Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          users of any material changes by posting the new Privacy Policy on
          this page.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at: Burichan523@gmail.com
        </p>
      </section>
    </div>
  );
}

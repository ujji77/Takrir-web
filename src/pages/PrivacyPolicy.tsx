const LAST_UPDATED = 'April 2025'
const CONTACT_EMAIL = 'spatialuzair@gmail.com'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}

export default function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-12">Last updated: {LAST_UPDATED}</p>

      <Section title="Overview">
        <p>
          Takrir ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
          explains what information we collect, how we use it, and your rights regarding your data
          when you use the Takrir app ("App").
        </p>
        <p>
          Takrir is a Quran memorisation app that allows users to build verse playlists and listen
          to Quranic recitations. We take a minimal-data approach and collect only what is necessary
          to provide the service.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p><strong className="text-gray-800">Account information.</strong> If you choose to sign in,
          we use OAuth 2.0 authentication provided by Quran Foundation. We receive a session token
          that identifies your account. We do not receive or store your password.</p>
        <p><strong className="text-gray-800">App preferences.</strong> Settings such as your chosen
          reciter, font style, font size, playback speed, and display preferences are stored locally
          on your device and, if you are signed in, synced to your Quran Foundation account via the
          Quran.com Preferences API.</p>
        <p><strong className="text-gray-800">Usage as a guest.</strong> You may use Takrir without
          signing in. In this case, your preferences are stored locally on your device only and
          are not transmitted to any server.</p>
        <p><strong className="text-gray-800">No analytics or tracking.</strong> We do not collect
          analytics, crash reports, advertising identifiers, or any behavioural data about how you
          use the App.</p>
      </Section>

      <Section title="How We Use Your Information">
        <p>We use the information described above solely to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Authenticate your account and maintain your session</li>
          <li>Sync your preferences across devices when signed in</li>
          <li>Provide personalised recitation and display settings</li>
        </ul>
        <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
      </Section>

      <Section title="Third-Party Services">
        <p>Takrir integrates with the following third-party services:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-gray-800">Quran Foundation / Quran.com API</strong> — We use
            the Quran.com v4 API to fetch Quranic text, translations, and audio recitations. Your
            use of this data is subject to the{' '}
            <a
              href="https://quran.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-600 hover:text-teal-800"
            >
              Quran.com Privacy Policy
            </a>
            {' '}and{' '}
            <a
              href="https://quran.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-600 hover:text-teal-800"
            >
              Terms of Service
            </a>.
          </li>
          <li>
            <strong className="text-gray-800">Quran Foundation OAuth</strong> — Authentication is
            handled via the Quran Foundation OAuth 2.0 server. We do not have access to your
            Quran.com password.
          </li>
        </ul>
      </Section>

      <Section title="Data Storage and Security">
        <p>
          Preferences are stored locally on your device using encrypted storage (expo-secure-store).
          When signed in, preferences are synced to Quran Foundation's servers, governed by their
          privacy policy.
        </p>
        <p>
          We do not operate our own backend servers or databases. We do not store any personal data
          on servers we control.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          Takrir is suitable for users of all ages, including children, as its content is limited to
          Quranic recitation. The App does not collect personal information from children and does
          not require account creation to use its core features.
        </p>
        <p>
          If you are under 13 (or under 16 in the EEA), please use the App in guest mode or with
          parental supervision when signing in.
        </p>
      </Section>

      <Section title="Your Rights">
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access the personal data we hold about you</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict processing of your data</li>
          <li>Data portability</li>
        </ul>
        <p>
          Since we do not operate a backend, most data is held by Quran Foundation. To exercise
          rights over account data, please contact Quran Foundation directly via{' '}
          <a
            href="https://quran.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-teal-600 hover:text-teal-800"
          >
            quran.com/privacy
          </a>.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify users of material
          changes by updating the "Last updated" date at the top of this page. Continued use of the
          App after changes constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline text-teal-600 hover:text-teal-800">
            {CONTACT_EMAIL}
          </a>.
        </p>
      </Section>
    </div>
  )
}

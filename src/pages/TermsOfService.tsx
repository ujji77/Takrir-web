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

export default function TermsOfService() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-12">Last updated: {LAST_UPDATED}</p>

      <Section title="Acceptance of Terms">
        <p>
          By downloading, installing, or using the Takrir app ("App"), you agree to be bound by
          these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use
          the App.
        </p>
        <p>
          These Terms apply to all users of the App, whether accessing as a guest or with a signed-in account.
        </p>
      </Section>

      <Section title="Description of Service">
        <p>
          Takrir is a Quran memorisation application that enables users to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Select Quranic chapters and verse ranges</li>
          <li>Create personalised listening playlists with custom repeat counts</li>
          <li>Listen to audio recitations from a selection of reciters</li>
          <li>Adjust display and playback preferences</li>
        </ul>
        <p>
          Quranic text and audio are sourced from the Quran Foundation's Quran.com API. Their
          content policies and terms also apply to your use of that content.
        </p>
      </Section>

      <Section title="Quran.com API and Content">
        <p>
          Takrir uses the{' '}
          <a
            href="https://quran.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-teal-600 hover:text-teal-800"
          >
            Quran.com
          </a>{' '}
          API to provide Quranic text, translations, and audio. By using Takrir, you also agree to
          the Quran Foundation's{' '}
          <a
            href="https://quran.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-teal-600 hover:text-teal-800"
          >
            Terms of Service
          </a>.
        </p>
        <p>
          All Quranic text and audio recitations are the intellectual property of their respective
          owners and rights holders. Takrir does not claim ownership of this content.
        </p>
      </Section>

      <Section title="User Accounts">
        <p>
          Takrir offers optional sign-in via Quran Foundation OAuth. You are not required to create
          an account to use the core features of the App.
        </p>
        <p>
          If you choose to sign in, you are responsible for maintaining the security of your
          account credentials. Your Quran Foundation account is governed by Quran Foundation's own
          Terms of Service.
        </p>
      </Section>

      <Section title="Acceptable Use">
        <p>You agree to use Takrir only for lawful purposes. You must not:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use the App in any way that violates applicable laws or regulations</li>
          <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
          <li>Interfere with or disrupt the App's functionality or the Quran.com API</li>
          <li>Use automated tools to scrape or harvest content from the App</li>
          <li>Use the App to distribute malware or harmful content</li>
        </ul>
      </Section>

      <Section title="Intellectual Property">
        <p>
          The Takrir name, branding, and app design are the intellectual property of Takrir. Nothing
          in these Terms grants you a right to use our trademarks, logos, or other proprietary materials.
        </p>
        <p>
          The App is made available to you under a limited, non-exclusive, non-transferable licence
          for personal, non-commercial use.
        </p>
      </Section>

      <Section title="Disclaimer of Warranties">
        <p>
          The App is provided "as is" and "as available" without warranties of any kind, either
          express or implied. We do not warrant that the App will be uninterrupted, error-free, or
          free of viruses or other harmful components.
        </p>
        <p>
          We make no warranty regarding the accuracy, completeness, or reliability of any Quranic
          text, translation, or audio provided through third-party APIs.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Takrir and its developers shall not be liable for
          any indirect, incidental, special, or consequential damages arising from your use of or
          inability to use the App.
        </p>
        <p>
          Our total liability to you for any claims arising under these Terms shall not exceed the
          amount you paid, if any, for access to the App in the twelve months preceding the claim.
        </p>
      </Section>

      <Section title="Privacy">
        <p>
          Your use of the App is also governed by our{' '}
          <a href="/privacy" className="underline text-teal-600 hover:text-teal-800">
            Privacy Policy
          </a>
          , which is incorporated into these Terms by reference.
        </p>
      </Section>

      <Section title="Changes to Terms">
        <p>
          We reserve the right to modify these Terms at any time. We will indicate changes by
          updating the "Last updated" date. Your continued use of the App after changes constitutes
          acceptance of the revised Terms.
        </p>
      </Section>

      <Section title="Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of England and
          Wales, without regard to its conflict of law provisions.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          For questions regarding these Terms, please contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline text-teal-600 hover:text-teal-800">
            {CONTACT_EMAIL}
          </a>.
        </p>
      </Section>
    </div>
  )
}

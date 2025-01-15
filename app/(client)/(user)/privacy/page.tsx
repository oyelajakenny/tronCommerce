import Container from '@/components/Container'
import React from 'react'

const PrivacyPage = () => {
  return (
    <Container className="max-w-3xl sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms and Condition</h1>
      <div>
        <section>
          <h2 className="text-xl font-semibold my-2">1. Acceptance of Terms</h2>
          <p>
            By accessing this website, you are agreeing to be bound by these
            website Terms and Conditions of Use, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold  my-2">2. Use of Services</h2>
          <p>
            You agree to use TronCommerce&apos;s services only for lawful
            purposes and in accordance with these Terms and Conditions.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold  my-2">3. Disclaimer</h2>
          <p>
            The materials on TronCommerce website are provided on an &apos;as is&apos;
            basis. TronCommerce makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold my-2">
            4. Limitations of Liability
          </h2>
          <p>
            In no event shall TronCommerce or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on TronCommerce website, even if
            TronCommerce or a Tulos authorized representative has been notified
            orally or in writing of the possibility of such damage.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold my-2">
            5. Revisions and Errata
          </h2>
          <p>
            The materials appearing on TronCommerce website could include
            technical, typographical, or photographic errors. TronCommerce does
            not warrant that any of the materials on its website are accurate,
            complete, or current. TronCommerce may make changes to the materials
            contained on its website at any time without notice. TronCommerce
            does not, however, make any commitment to update the materials.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold my-2">6. Links</h2>
          <p>
            TronCommerce has not reviewed all of the sites linked to its website
            and is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by TronCommerce of
            the site. Use of any such linked website is at the user&apos;s own risk.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold my-2">
            7. Site Terms of Use Modifications
          </h2>
          <p>
            TronCommerce may revise these terms of use for its website at any
            time without notice. By using this website, you are agreeing to be
            bound by the then current version of these Terms and Conditions of
            Use.
          </p>
        </section>
      </div>
    </Container>
  );
}

export default PrivacyPage
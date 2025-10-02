import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">Terms of Use</h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: October 1, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Bronx Bridges High School website, you accept and agree to be bound by the terms
                and provision of this agreement. These terms apply to all visitors, users, and others who access or use the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on Bronx Bridges High School's website
                for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Educational Purpose</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is intended to provide information about Bronx Bridges High School, its programs, admissions process,
                and educational services. The information provided is for general informational purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to use the website to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Violate any local, state, national, or international law or regulation</li>
                <li>Transmit any material that is unlawful, harmful, threatening, abusive, or objectionable</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Use the website for any commercial purpose without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Bronx Bridges High School's website are provided on an 'as is' basis. Bronx Bridges High School
                makes no representations or warranties of any kind, express or implied, as to the operation of the website or the information contained therein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at{' '}
                <a href="mailto:info@bronxbridges.org" className="text-primary hover:underline">
                  info@bronxbridges.org
                </a>
                {' '}or by phone at (718) 829-2984.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;

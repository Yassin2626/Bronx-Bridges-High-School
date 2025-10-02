import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">Accessibility Statement</h1>
            <p className="text-lg text-muted-foreground">
              Last Reviewed: October 1, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Commitment to Accessibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bronx Bridges High School is committed to ensuring digital accessibility for people with disabilities.
                We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Accessibility Features</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website includes the following accessibility features:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed using only a keyboard</li>
                <li><strong>Screen Reader Support:</strong> Proper heading structure and alt text for images</li>
                <li><strong>Color Contrast:</strong> Text and background colors meet WCAG 2.1 AA standards</li>
                <li><strong>Responsive Design:</strong> Website works on all device sizes and orientations</li>
                <li><strong>Focus Indicators:</strong> Clear visual indicators show which element has keyboard focus</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Standards Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                These guidelines explain how to make web content more accessible to people with disabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Feedback and Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                We welcome your feedback on the accessibility of Bronx Bridges High School's website.
                If you encounter any accessibility barriers, please let us know:
              </p>
              <div className="mt-4 p-4 bg-muted/10 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@bronxbridges.org" className="text-primary hover:underline">
                    info@bronxbridges.org
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong>Phone:</strong> (718) 829-2984
                </p>
                <p className="text-muted-foreground">
                  <strong>Address:</strong> 1980 Lafayette Avenue, Bronx, NY 10473
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Technical Specifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website's accessibility relies on the following technologies:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>HTML5 for semantic markup</li>
                <li>CSS3 for presentation and layout</li>
                <li>JavaScript for enhanced functionality (with graceful degradation)</li>
                <li>ARIA (Accessible Rich Internet Applications) attributes where appropriate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Continuous Improvement</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are continually seeking out solutions that will bring all areas of the site up to the same
                level of overall web accessibility. In the meantime, should you experience any difficulty in
                accessing the Bronx Bridges High School website, please don't hesitate to contact us.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;

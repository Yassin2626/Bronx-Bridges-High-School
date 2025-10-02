import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: October 1, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Bronx Bridges High School respects your privacy and is committed to protecting your personal information.
                  This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
                </p>

                <h3 className="text-xl font-medium text-foreground">Personal Information</h3>
                <p className="leading-relaxed">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Demographic information for admissions inquiries</li>
                  <li>Educational background and interests</li>
                  <li>Communication preferences</li>
                  <li>Feedback and survey responses</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground">Automatically Collected Information</h3>
                <p className="leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and location information</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Educational Services:</strong> To provide information about our programs and admissions process</li>
                  <li><strong>Communication:</strong> To respond to inquiries and provide updates about school events</li>
                  <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our website functionality</li>
                  <li><strong>Admissions Support:</strong> To process applications and maintain student records</li>
                  <li><strong>Community Engagement:</strong> To facilitate parent-teacher communication and school activities</li>
                  <li><strong>Safety and Security:</strong> To protect against fraud and ensure campus security</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience:
                </p>

                <h3 className="text-xl font-medium text-foreground">Essential Cookies</h3>
                <p className="leading-relaxed">
                  Required for basic website functionality, including navigation and security features.
                </p>

                <h3 className="text-xl font-medium text-foreground">Analytics Cookies</h3>
                <p className="leading-relaxed">
                  Help us understand how visitors interact with our website, allowing us to improve content and user experience.
                </p>

                <h3 className="text-xl font-medium text-foreground">Functional Cookies</h3>
                <p className="leading-relaxed">
                  Remember your preferences and settings to provide a more personalized experience.
                </p>

                <p className="leading-relaxed">
                  You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing and Disclosure</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Bronx Bridges High School does not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
                </p>

                <h3 className="text-xl font-medium text-foreground">Educational Partners</h3>
                <p className="leading-relaxed">
                  With educational partners and service providers who assist in delivering our programs and maintaining our website.
                </p>

                <h3 className="text-xl font-medium text-foreground">Legal Requirements</h3>
                <p className="leading-relaxed">
                  When required by law, court order, or government regulation to protect our rights or ensure public safety.
                </p>

                <h3 className="text-xl font-medium text-foreground">School Operations</h3>
                <p className="leading-relaxed">
                  With school administrators, teachers, and staff as necessary for educational and administrative purposes.
                </p>

                <h3 className="text-xl font-medium text-foreground">Consent-Based Sharing</h3>
                <p className="leading-relaxed">
                  With your explicit consent for specific purposes, such as college applications or scholarship opportunities.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  We implement comprehensive security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Encryption:</strong> All data transmission is encrypted using SSL/TLS protocols</li>
                  <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
                  <li><strong>Regular Audits:</strong> Periodic security assessments and updates</li>
                  <li><strong>Secure Storage:</strong> Information stored on protected servers with firewall protection</li>
                  <li><strong>Staff Training:</strong> Regular training for staff on data protection best practices</li>
                </ul>
                <p className="leading-relaxed">
                  While we strive to protect your personal information, no method of transmission over the internet is 100% secure.
                  We cannot guarantee absolute security but are committed to protecting your data using industry-standard measures.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes outlined in this policy,
                comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods vary
                depending on the type of information and the purpose for which it was collected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Bronx Bridges High School is committed to protecting the privacy of students and children. Our website is designed
                  to serve prospective students, current students, parents, and the community. We take special care when collecting
                  information from or about minors:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Parental consent is required for students under 18 for certain data collection activities</li>
                  <li>We limit the collection of personal information from students to what is necessary for educational purposes</li>
                  <li>Student information is protected with additional security measures</li>
                  <li>Parents/guardians can request access to their child's information and request corrections</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights and Choices</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request information about what personal data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
                  <li><strong>Objection:</strong> Object to processing for direct marketing purposes</li>
                </ul>
                <p className="leading-relaxed">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites, including educational partners, government agencies,
                and community organizations. We are not responsible for the privacy practices or content of these external sites.
                We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bronx Bridges High School is located in the United States. Information collected through our website may be
                transferred to, processed, and stored in the United States. By using our website, you consent to such transfers
                in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law.
                We will notify you of any material changes by posting the updated policy on our website and updating the
                "Effective Date" at the top of this page. Your continued use of our website after such changes constitutes
                acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>

                <div className="bg-muted/10 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-foreground mb-3">Data Protection Officer</h3>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> privacy@bronxbridges.org</p>
                    <p><strong>Phone:</strong> (718) 829-2984</p>
                    <p><strong>Fax:</strong> (718) 829-2987</p>
                    <p><strong>Mail:</strong> 1980 Lafayette Avenue, Bronx, NY 10473</p>
                  </div>
                </div>

                <p className="leading-relaxed">
                  We will respond to your inquiry within 30 days of receipt. For urgent privacy concerns,
                  please call us directly.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

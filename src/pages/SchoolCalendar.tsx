import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SchoolCalendar = () => {
  const calendarEvents = [
    { date: 'September 4', weekday: 'Thursday', event: 'First day of school' },
    { date: 'September 17', weekday: 'Wednesday', event: 'Evening Parent-Teacher Conferences for elementary schools and Pre-K Centers' },
    { date: 'September 18', weekday: 'Thursday', event: 'Evening Parent-Teacher Conferences for middle schools and D75 schools' },
    { date: 'September 23–24', weekday: 'Tuesday–Wednesday', event: 'Rosh Hashanah, schools closed' },
    { date: 'September 25', weekday: 'Thursday', event: 'Evening Parent-Teacher Conferences for high schools, K–12, and 6–12 schools' },
    { date: 'October 2', weekday: 'Thursday', event: 'Yom Kippur, schools closed' },
    { date: 'October 13', weekday: 'Monday', event: 'Italian Heritage/Indigenous Peoples\' Day, schools closed' },
    { date: 'October 20', weekday: 'Monday', event: 'Diwali, schools closed' },
    { date: 'November 4', weekday: 'Tuesday', event: 'Election Day; students do not attend school' },
    { date: 'November 6', weekday: 'Thursday', event: 'Afternoon and Evening Parent-Teacher Conferences for elementary schools; students in these schools dismissed three hours early' },
    { date: 'November 11', weekday: 'Tuesday', event: 'Veterans Day, schools closed' },
    { date: 'November 13', weekday: 'Thursday', event: 'Afternoon and Evening Parent-Teacher Conferences for middle schools and D75; students in these schools dismissed three hours early' },
    { date: 'November 20', weekday: 'Thursday', event: 'Afternoon and Evening Parent-Teacher Conferences for high schools, K–12 and 6–12 schools' },
    { date: 'November 21', weekday: 'Friday', event: 'Afternoon Parent-Teacher Conferences for high schools, K–12 and 6–12 schools; students in these schools dismissed three hours early' },
    { date: 'November 27–28', weekday: 'Thursday–Friday', event: 'Thanksgiving Recess, schools closed' },
    { date: 'December 24–January 2', weekday: 'Wednesday–Friday', event: 'Winter Recess, schools closed' },
    { date: 'January 19', weekday: 'Monday', event: 'Rev. Dr. Martin Luther King Jr. Day, schools closed' },
    { date: 'January 20–23', weekday: 'Tuesday–Friday', event: 'Regents Administration' },
    { date: 'January 26', weekday: 'Monday', event: 'Professional Development Day for high schools and 6–12 schools; students in these schools do not attend' },
    { date: 'January 27', weekday: 'Tuesday', event: 'Spring Semester begins' },
    { date: 'February 16–20', weekday: 'Monday–Friday', event: 'Midwinter Recess, schools closed' },
    { date: 'March 5', weekday: 'Thursday', event: 'Afternoon and Evening Parent-Teacher Conferences for elementary schools and Pre-K Centers; students in these schools dismissed three hours early' },
    { date: 'March 12', weekday: 'Thursday', event: 'Afternoon and Evening Parent-Teacher Conferences for middle schools and D75 schools; students in these schools dismissed three hours early' },
    { date: 'March 18', weekday: 'Wednesday', event: 'Evening Parent-Teacher Conferences for high schools, K–12 and 6–12 schools' },
    { date: 'March 19', weekday: 'Thursday', event: 'Afternoon Parent-Teacher Conferences for high schools, K-12 and 6-12 schools; students in these schools dismissed three hours early' },
    { date: 'March 20', weekday: 'Friday', event: 'Eid al-Fitr, schools closed' },
    { date: 'April 2–10', weekday: 'Thursday–Friday', event: 'Spring Recess schools closed' },
    { date: 'May 7', weekday: 'Thursday', event: 'Evening Parent-Teacher Conferences for elementary schools and Pre-K Centers' },
    { date: 'May 14', weekday: 'Thursday', event: 'Evening Parent-Teacher Conferences for middle schools and D75 schools' },
    { date: 'May 21', weekday: 'Thursday', event: 'Evening Parent-Teacher Conferences for high schools, K–12, and 6–12 schools' },
    { date: 'May 25', weekday: 'Monday', event: 'Memorial Day, schools closed' },
    { date: 'May 27', weekday: 'Wednesday', event: 'Eid al-Adha, schools closed' },
    { date: 'June 4', weekday: 'Thursday', event: 'Anniversary Day/Chancellor\'s Conference Day for staff development; students do not attend' },
    { date: 'June 5', weekday: 'Friday', event: 'Clerical Day for elementary schools, middle schools, K-12 schools, and standalone D75 programs; students in these schools do not attend' },
    { date: 'June 9-10; June 17–25', weekday: 'Tuesday– Thursday', event: 'Regents Administration (No exams will be held on June 19)' },
    { date: 'June 19', weekday: 'Friday', event: 'Juneteenth, schools closed' },
    { date: 'June 26', weekday: 'Friday', event: 'Last day of school for students' },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background mt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              School Calendar
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay informed about important dates, events, and holidays for the current school year.
            </p>
          </div>

          {/* Calendar Events */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
              <div className="bg-primary/10 px-6 py-4 border-b border-border">
                <h2 className="text-2xl font-bold text-foreground">2024-2025 Academic Year Calendar</h2>
              </div>

              <div className="p-6">
                <div className="grid gap-4">
                  {calendarEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg border border-border/50 hover:bg-background transition-colors"
                    >
                      <div className="flex-shrink-0 w-20 text-center">
                        <div className="text-sm font-medium text-primary">{event.date}</div>
                        <div className="text-xs text-muted-foreground mt-1">{event.weekday}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground leading-relaxed">{event.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-card/50 rounded-lg p-6 border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Important Notes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Parent-Teacher Conferences may affect dismissal times - check with your school for specific schedules</li>
                <li>• School closing dates are subject to change - please check official communications</li>
                <li>• Regents exams and other testing dates are administered according to state guidelines</li>
                <li>• Professional development days are for staff training and students do not attend</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchoolCalendar;

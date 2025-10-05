export interface StaffMember {
  name: string;
  position: string;
  photo: string;
  phone?: string;
  section: string;
  background?: string;
  expertise?: string;
}

export interface AllStaffData {
  administration: StaffMember[];
  teachers: StaffMember[];
  staff: StaffMember[];
  paraprofessionals: StaffMember[];
  youthDevelopment: StaffMember[];
}

export const allStaff: AllStaffData = {
  administration: [
    {
      name: 'Mrs. Nelsie Castillo',
      position: 'Principal',
      photo: '/src/assets/Administration/Nelsie_Castillo.jpg',
      phone: '(718) 829-2984',
      section: 'administration',
      background: 'Visionary educational leader with over 15 years of experience in urban education. Previously served as Assistant Principal and Math Department Chair, bringing a data-driven approach to school improvement and a passion for equity in education.',
      expertise: 'Educational leadership, curriculum design, teacher development, data analysis, community partnerships, and strategic planning for diverse student populations.'
    },
    {
      name: 'Mr. Jerrick Rutherford',
      position: 'Assistant Principal',
      photo: '/src/assets/Administration/Jerrick_Rutherford.jpg',
      section: 'administration',
      background: 'Dynamic administrator with a background in special education and school culture. Former Dean of Students who excels at creating positive learning environments and supporting both students and staff through innovative programming.',
      expertise: 'Student discipline, restorative practices, special education coordination, staff leadership development, and implementing social-emotional learning programs.'
    },
    {
      name: 'Ms. Ruth Serels',
      position: 'Assistant Principal',
      photo: '/src/assets/Administration/Ruth_Serels.jpg',
      section: 'administration',
      background: 'Results-oriented administrator specializing in academic interventions and family engagement. Former ELA teacher and literacy coach who brings expertise in curriculum alignment and creating comprehensive support systems for student success.',
      expertise: 'Academic interventions, family engagement, curriculum alignment, literacy coaching, progress monitoring, and developing comprehensive student support systems.'
    },
  ],
  teachers: [
    {
      name: 'Mr. Juffer Villanueva',
      position: 'Math Teacher',
      photo: '/src/assets/Teachers/Juffer_Villanueva.jpg',
      section: 'teachers',
      background: 'Innovative mathematics educator with a passion for making complex concepts accessible. Former engineer who transitioned to teaching, bringing real-world applications and technology integration to create engaging math experiences.',
      expertise: 'Algebra, geometry, calculus, mathematical modeling, technology integration, project-based learning, and connecting mathematics to real-world applications.'
    },
    {
      name: 'Mr. Travis Rivera',
      position: 'Physical Education Teacher',
      photo: '/src/assets/Teachers/Travis_Rivera.jpg',
      section: 'teachers',
      background: 'Energetic physical education instructor and former collegiate athlete who believes in the power of movement for holistic development. Specializes in creating inclusive PE programs that build confidence and teamwork skills.',
      expertise: 'Physical fitness, team sports, health education, adapted physical education, coaching, wellness promotion, and developing lifelong fitness habits.'
    },
    {
      name: 'Mr. Jeremiah Conway',
      position: 'ELA Teacher',
      photo: '/src/assets/Teachers/Jeremiah_Conway.jpg',
      section: 'teachers',
      background: 'Passionate literacy advocate with a focus on multicultural literature and student voice. Former journalist who brings real-world writing experience to help students find their authentic voice and develop critical reading skills.',
      expertise: 'Creative writing, literary analysis, multicultural literature, journalism, public speaking, debate, and fostering student voice in writing.'
    },
    {
      name: 'Mr. Michael Reese',
      position: 'ELA Teacher',
      photo: '/src/assets/Teachers/Michael_Reese.jpg',
      section: 'teachers',
      background: 'Dedicated grammar and composition specialist with a focus on academic writing and research skills. Former college writing tutor who emphasizes structured writing processes and helps students develop strong analytical thinking abilities.',
      expertise: 'Academic writing, grammar instruction, research methodologies, essay structure, citation styles, critical analysis, and college preparatory writing skills.'
    },
    {
      name: 'Ms. Josephine Turkson',
      position: 'ENL Teacher',
      photo: '/src/assets/Teachers/Josephine_Turkson.jpg',
      section: 'teachers',
      background: 'Compassionate ENL educator specializing in newcomer students and cultural adaptation. Former international student advisor who creates welcoming environments and supports students in both language acquisition and cultural adjustment.',
      expertise: 'English language acquisition, newcomer support, cultural adaptation, vocabulary development, conversational English, and supporting multilingual families.'
    },
    {
      name: 'Mr. Aneponi Tye',
      position: 'ENL Teacher',
      photo: '/src/assets/Teachers/Aneponi_Tye.jpg',
      section: 'teachers',
      background: 'Dynamic ENL instructor with expertise in content-based language instruction and academic language development. Former STEM teacher who integrates language learning with core content areas to accelerate student progress.',
      expertise: 'Content-based language instruction, academic vocabulary, STEM-English integration, assessment for English learners, and bilingual education strategies.'
    },
    {
      name: 'Ms. Ebony Edwards',
      position: 'ENL Teacher',
      photo: '/src/assets/Teachers/Ebony_Edwards.jpg',
      section: 'teachers',
      background: 'Creative ENL specialist with a focus on arts integration and expressive language development. Former theater educator who uses drama, music, and visual arts to make language learning engaging and memorable for students.',
      expertise: 'Arts-integrated language learning, drama in education, expressive language development, creative writing for English learners, and multimodal literacy approaches.'
    },
    {
      name: 'Mr. Neylin Puello',
      position: 'ENL Teacher',
      photo: '/src/assets/Teachers/Neylin_Puello.jpg',
      section: 'teachers',
      background: 'Technology-savvy ENL educator specializing in digital literacy and 21st-century language skills. Former IT specialist who incorporates educational technology and digital tools to enhance language learning and prepare students for the digital world.',
      expertise: 'Digital literacy, educational technology, online language learning platforms, multimedia content creation, coding for English learners, and digital citizenship education.'
    },
    {
      name: 'Mr. Victor Barrientos',
      position: 'Math Teacher',
      photo: '/src/assets/Teachers/Victor_Barrientos.jpg',
      section: 'teachers',
      background: 'Patient and methodical mathematics instructor with a focus on foundational skills and mathematical reasoning. Former tutor who specializes in helping struggling students build confidence and master essential math concepts through personalized approaches.',
      expertise: 'Basic mathematics, algebra fundamentals, mathematical reasoning, individualized instruction, math anxiety reduction, and building mathematical confidence.'
    },
    {
      name: 'Ms. Houda ElGhouch',
      position: 'Math Teacher',
      photo: '/src/assets/Teachers/Houda_ElGhouch.jpg',
      section: 'teachers',
      background: 'Analytical mathematics educator with expertise in statistics and data analysis. Former research assistant who brings real-world applications of mathematics to the classroom and helps students understand the power of numerical reasoning.',
      expertise: 'Statistics, data analysis, probability, mathematical modeling, research methods, quantitative reasoning, and connecting math to real-world decision making.'
    },
    {
      name: 'Mr. James Wellington',
      position: 'Math and Music Teacher',
      photo: '/src/assets/Teachers/James_Wellington.jpg',
      section: 'teachers',
      background: 'Unique dual-discipline educator who seamlessly integrates mathematics and music theory. Former professional musician who uses rhythm, patterns, and musical structure to teach mathematical concepts in engaging, memorable ways.',
      expertise: 'Music theory, mathematical patterns in music, algebra through composition, geometry in musical structures, music technology, and interdisciplinary arts integration.'
    },
    {
      name: 'Ms. Mary Carmen Irizarry-Santos',
      position: 'Science Teacher',
      photo: '/src/assets/Teachers/Mary_Carmen_Irizarry-Santos.jpg',
      section: 'teachers',
      background: 'Environmental science specialist with a passion for ecology and sustainability. Former environmental educator who connects classroom learning to real-world environmental issues and inspires students to become stewards of the planet.',
      expertise: 'Environmental science, ecology, sustainability education, field research, environmental policy, citizen science projects, and connecting science to real-world issues.'
    },
    {
      name: 'Ms. Haidi Souid',
      position: 'Science Teacher',
      photo: '/src/assets/Teachers/Haidi_Souid.jpg',
      section: 'teachers',
      background: 'Chemistry and physics educator with a focus on laboratory experimentation and scientific inquiry. Former laboratory technician who emphasizes hands-on learning and helps students develop critical thinking through experimental design.',
      expertise: 'Chemistry, physics, laboratory techniques, experimental design, scientific inquiry, data interpretation, safety protocols, and inquiry-based learning.'
    },
    {
      name: 'Mr. Brian Villarreal Noel',
      position: 'Science Teacher',
      photo: '/src/assets/Teachers/Brian_Villarreal_Noel.jpg',
      section: 'teachers',
      background: 'Biology and life sciences educator with expertise in human anatomy and physiology. Former medical researcher who brings clinical perspectives to the classroom and helps students understand the human body through hands-on activities.',
      expertise: 'Biology, anatomy, physiology, microbiology, health sciences, dissection techniques, medical terminology, and connecting biology to healthcare careers.'
    },
    {
      name: 'Mr. Bradley Delacruz',
      position: 'Social Studies Teacher',
      photo: '/src/assets/Teachers/Bradley_Delacruz.jpg',
      section: 'teachers',
      background: 'U.S. History specialist with a focus on civil rights and social justice movements. Former civil rights advocate who brings personal stories and primary sources to help students understand the ongoing struggle for equality and justice.',
      expertise: 'U.S. History, civil rights movement, social justice education, primary source analysis, constitutional law, civic engagement, and teaching controversial topics.'
    },
    {
      name: 'Mr. Victor Luna',
      position: 'Social Studies Teacher',
      photo: '/src/assets/Teachers/Victor_Luna.jpg',
      section: 'teachers',
      background: 'World History and geography expert with a focus on global cultures and international relations. Former international studies coordinator who helps students develop global perspectives and understand diverse cultural viewpoints.',
      expertise: 'World History, geography, cultural studies, international relations, global issues, comparative religions, cross-cultural communication, and global citizenship education.'
    },
    {
      name: 'Ms. Jessica Freed',
      position: 'Special Education Teacher',
      photo: '/src/assets/Teachers/Jessica_Freed.jpg',
      section: 'teachers',
      background: 'Inclusive education advocate specializing in autism spectrum disorders and behavioral support. Former behavioral therapist who creates structured learning environments that help students with diverse needs thrive academically and socially.',
      expertise: 'Autism spectrum disorders, behavioral intervention, visual supports, sensory integration, social skills training, functional behavior assessment, and inclusive classroom strategies.'
    },
    {
      name: 'Ms. Natalia Hiraldo',
      position: 'Special Education Teacher',
      photo: '/src/assets/Teachers/Natalia_Hiraldo.jpg',
      section: 'teachers',
      background: 'Bilingual special education specialist with expertise in supporting English language learners with disabilities. Former ESL coordinator who develops culturally responsive teaching methods and advocates for equitable education for multilingual students.',
      expertise: 'Bilingual special education, culturally responsive teaching, English language learners with disabilities, translanguaging strategies, family engagement for diverse populations, and dual-language assessment.'
    },
    {
      name: 'Ms. Edith Carrasco',
      position: 'Special Education Teacher',
      photo: '/src/assets/Teachers/Edith_Carrasco.jpg',
      section: 'teachers',
      background: 'Learning disabilities specialist with a focus on reading intervention and academic support. Former reading specialist who develops individualized literacy programs and uses multisensory approaches to help students overcome learning challenges.',
      expertise: 'Learning disabilities, reading intervention, dyslexia support, multisensory learning, academic assessment, progress monitoring, and individualized education program development.'
    },
    {
      name: 'Ms. Elizabeth Reeve',
      position: 'Special Education Teacher',
      photo: '/src/assets/Teachers/Elizabeth_Reeve.jpg',
      section: 'teachers',
      background: 'Emotional and behavioral disorders specialist with expertise in trauma-informed care. Former school counselor who integrates therapeutic approaches with academic instruction to support students with significant behavioral and emotional needs.',
      expertise: 'Emotional behavioral disorders, trauma-informed teaching, therapeutic interventions, crisis intervention, positive behavior support, and mental health integration in education.'
    },
    {
      name: 'Ms. Sophia Figueroa',
      position: 'Special Education Teacher',
      photo: '/src/assets/Teachers/Sophia_Figueroa.jpg',
      section: 'teachers',
      background: 'Intellectual disabilities specialist with a focus on life skills and vocational training. Former occupational therapist who develops functional curricula that prepare students for independent living and meaningful employment.',
      expertise: 'Intellectual disabilities, life skills instruction, vocational training, functional academics, community-based instruction, transition planning, and adaptive technology.'
    },
    {
      name: 'Ms. Jerphy Cabrera',
      position: 'Special Education and Conversational Spanish Teacher',
      photo: '/src/assets/Teachers/Jerphy_Cabrera.jpg',
      section: 'teachers',
      background: 'Dual-certified educator specializing in special education and Spanish language instruction. Former bilingual education coordinator who develops inclusive Spanish programs that support both language acquisition and special learning needs.',
      expertise: 'Bilingual special education, conversational Spanish, Spanish for students with disabilities, cultural linguistics, heritage language maintenance, and inclusive language instruction.'
    },
    {
      name: 'Ms. Erika Palomino',
      position: 'Spanish Language Teacher',
      photo: '/src/assets/Teachers/Erika_Palomino.jpg',
      section: 'teachers',
      background: 'Dynamic Spanish language educator with expertise in communicative approaches and cultural immersion. Former study abroad coordinator who creates authentic learning experiences and helps students develop practical communication skills for real-world situations.',
      expertise: 'Communicative language teaching, cultural immersion, conversational Spanish, Spanish literature, heritage language learners, and proficiency-based assessment.'
    },
    {
      name: 'Ms. Crystal Lamb',
      position: 'Art Teacher',
      photo: '/src/assets/Teachers/Crystal_Lamb.jpg',
      section: 'teachers',
      background: 'Creative visual arts educator with a focus on digital media and contemporary art practices. Former graphic designer who integrates technology and traditional art techniques to help students express themselves through multiple artistic mediums.',
      expertise: 'Visual arts, digital media, graphic design, contemporary art, portfolio development, art therapy techniques, and integrating technology in art education.'
    },
    {
      name: 'Ms. Karisha Ewell',
      position: 'Instructional Coach',
      photo: '/src/assets/Teachers/Karisha_Ewell.jpg',
      section: 'teachers',
      background: 'Experienced instructional coach and former classroom teacher who supports teachers in implementing effective instructional strategies. Former curriculum specialist who facilitates professional development and helps educators improve student outcomes through evidence-based practices.',
      expertise: 'Instructional coaching, teacher professional development, curriculum design, data-driven instruction, classroom management, differentiated instruction, and educational leadership.'
    },
  ],
  staff: [
    {
      name: 'Ms. Geetanjali Gunanathan',
      position: 'Guidance Counselor',
      photo: '/src/assets/Staff/Geetanjali_Gunanathan.jpg',
      section: 'staff',
      background: 'Compassionate guidance counselor with expertise in college and career planning for diverse student populations. Former admissions officer who helps students navigate postsecondary options and develop realistic academic and career goals.',
      expertise: 'College counseling, career planning, postsecondary transitions, scholarship applications, resume development, interview preparation, and career assessment tools.'
    },
    {
      name: 'Ms. Dirsilys Tirado',
      position: 'Guidance Counselor',
      photo: '/src/assets/Staff/Dirsilys_Tirado.jpg',
      section: 'staff',
      background: 'Social-emotional learning specialist with a focus on mental health support and crisis intervention. Former school psychologist who provides individual and group counseling to help students develop coping strategies and emotional resilience.',
      expertise: 'Mental health counseling, crisis intervention, social-emotional learning, group therapy, behavioral assessment, suicide prevention, and trauma-informed counseling.'
    },
    {
      name: 'Mr. George Roach',
      position: 'Guidance Counselor',
      photo: '/src/assets/Staff/George_Roach.jpg',
      section: 'staff',
      background: 'Academic intervention specialist who coordinates support services for struggling students. Former academic coordinator who develops individualized learning plans and connects students with appropriate academic resources and tutoring.',
      expertise: 'Academic interventions, learning support coordination, progress monitoring, tutoring referrals, study skills development, and academic accommodation coordination.'
    },
    {
      name: 'Ms. Maria Cepeda',
      position: 'Social Worker',
      photo: '/src/assets/Staff/Maria_Cepeda.jpg',
      section: 'staff',
      background: 'Community-based social worker with expertise in family systems and community resources. Former family therapist who connects families with community services and advocates for students facing socioeconomic challenges.',
      expertise: 'Family therapy, community resource coordination, socioeconomic support services, family engagement, crisis intervention, and systems advocacy.'
    },
    {
      name: 'Ms. Neith-Aisha Strother',
      position: 'School Secretary',
      photo: '/src/assets/Staff/Neith-Aisha_Strother.jpg',
      section: 'staff',
      background: 'Efficient school secretary with expertise in student information systems and administrative procedures. Former registrar who maintains accurate student records and serves as the primary point of contact for families and community members.',
      expertise: 'Student information systems, record management, family communication, administrative procedures, scheduling coordination, and office management systems.'
    },
    {
      name: 'Ms. Lisandra Pena',
      position: 'Parent Coordinator',
      photo: '/src/assets/Staff/Lisandra_Pena.jpg',
      section: 'staff',
      background: 'Community engagement specialist who builds strong relationships between school and families. Former community organizer who facilitates parent workshops, cultural events, and creates welcoming spaces for diverse families.',
      expertise: 'Parent engagement, community organizing, cultural competency, workshop facilitation, family support services, and building school-community partnerships.'
    },
    {
      name: 'Mr. John Luciano',
      position: 'Community Coordinator',
      photo: '/src/assets/Staff/John_Luciano.jpg',
      section: 'staff',
      background: 'Youth development coordinator with expertise in after-school programming and community partnerships. Former youth program director who develops enriching extracurricular activities and connects students with community resources.',
      expertise: 'Youth program development, after-school programming, community partnerships, volunteer coordination, event planning, and student leadership development.'
    },
    {
      name: 'Ms. Olga Fret',
      position: 'School Aide',
      photo: '/src/assets/Staff/Olga_Fret.jpg',
      section: 'staff',
      background: 'Dedicated school aide with expertise in lunchroom supervision and student safety. Former childcare provider who ensures students have positive mealtime experiences and helps maintain a safe and orderly school environment.',
      expertise: 'Lunchroom supervision, student safety protocols, behavior management, first aid, emergency procedures, and creating positive student interactions.'
    },
    {
      name: 'Ms. Rosa Morales',
      position: 'School Aide',
      photo: '/src/assets/Staff/Rosa_Morales.jpg',
      section: 'staff',
      background: 'Supportive school aide with a focus on hallway monitoring and student transitions. Former security coordinator who helps maintain orderly transitions between classes and ensures students feel safe and supported throughout the school day.',
      expertise: 'Hallway supervision, transition management, student support, conflict resolution, safety monitoring, and maintaining positive school climate.'
    },
    {
      name: 'Ms. Betty Trinidad',
      position: 'School Aide',
      photo: '/src/assets/Staff/Betty_Trinidad.jpg',
      section: 'staff',
      background: 'Organized school aide with expertise in attendance tracking and administrative support. Former office assistant who helps maintain accurate attendance records and supports teachers with classroom preparation and materials management.',
      expertise: 'Attendance tracking, administrative support, record keeping, classroom preparation, materials management, and teacher assistance coordination.'
    },
    {
      name: 'Mr. Maximo Moreno',
      position: 'School Aide',
      photo: '/src/assets/Staff/Maximo_Moreno.jpg',
      section: 'staff',
      background: 'Maintenance-focused school aide with expertise in facility support and student safety. Former facilities coordinator who ensures the school environment is safe, clean, and conducive to learning while providing additional support during student activities.',
      expertise: 'Facility maintenance, safety inspections, student activity support, equipment setup, environmental monitoring, and emergency preparedness.'
    },
    {
      name: 'Mr. Emad Mikhaiel',
      position: 'School Computer Technology Specialist',
      photo: '/src/assets/Staff/Emad_Mikhaiel.jpg',
      section: 'staff',
      background: 'Technology integration specialist who supports digital learning initiatives school-wide. Former IT consultant who trains teachers on educational technology tools and maintains the school\'s technological infrastructure for optimal learning.',
      expertise: 'Educational technology, computer systems maintenance, software training, digital learning platforms, hardware troubleshooting, and technology integration strategies.'
    }
  ],
  paraprofessionals: [
    {
      name: 'Mr. Pinak Goswami',
      position: 'Paraprofessional',
      photo: '/src/assets/Paraprofessionals/Pinak_Goswami.jpg',
      section: 'paraprofessionals',
      background: 'Dedicated paraprofessional with expertise in supporting students with physical disabilities. Former healthcare aide who brings medical knowledge and patience to help students with mobility challenges participate fully in classroom activities.',
      expertise: 'Physical disability support, mobility assistance, adaptive equipment, personal care, medical procedure assistance, and creating inclusive learning environments.'
    },
    {
      name: 'Ms. Cielo Velez',
      position: 'Paraprofessional',
      photo: '/src/assets/Paraprofessionals/Cielo_Velez.jpg',
      section: 'paraprofessionals',
      background: 'Bilingual paraprofessional specializing in supporting English language learners in mainstream classrooms. Former community liaison who helps bridge communication between teachers, students, and families from diverse linguistic backgrounds.',
      expertise: 'Bilingual education support, translation services, family communication, cultural mediation, language assessment support, and facilitating inclusive classroom participation.'
    }
  ],
  youthDevelopment: [
    {
      name: 'Ms. Letticia Rondon',
      position: 'Grade Advisor',
      photo: '/src/assets/YouthDevelopment/Letticia_Rondon.jpg',
      section: 'youthDevelopment',
      background: 'Youth development specialist with expertise in adolescent development and peer mentoring programs. Former youth counselor who creates supportive environments for teenagers and helps them develop leadership skills and positive peer relationships.',
      expertise: 'Adolescent development, peer mentoring, leadership development, conflict resolution, group facilitation, social-emotional learning, and youth empowerment programs.'
    }
  ]
};

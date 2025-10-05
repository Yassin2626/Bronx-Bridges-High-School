export interface StaffMember {
  name: string;
  position: string;
  photo: string;
  phone?: string;
  section: string;
}

export interface AllStaffData {
  administration: StaffMember[];
  teachers: StaffMember[];
  paraprofessionals: StaffMember[];
  staff: StaffMember[];
  youthDevelopment: StaffMember[];
}

export const allStaff: AllStaffData = {
  administration: [
    {
      name: 'Mrs. Nelsie Castillo',
      position: 'Principal',
      photo: '/src/assets/Administration/Nelsie_Castillo.jpg',
      phone: '(718) 829-2984',
      section: 'administration'
    },
    {
      name: 'Mr. Jerrick Rutherford',
      position: 'Assistant Principal',
      photo: '/src/assets/Administration/Jerrick_Rutherford.jpg',
      section: 'administration'
    },
    {
      name: 'Ms. Ruth Serels',
      position: 'Assistant Principal',
      photo: '/src/assets/Administration/Ruth_Serels.jpg',
      section: 'administration'
    }
  ],
  teachers: [
    {
      name: 'Mr. Juffer Villanueva',
      position: 'Math Teacher',
      photo: '/src/assets/Teachers/Juffer_Villanueva.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Travis Rivera',
      position: 'Physical Education Teacher',
      photo: '/src/assets/Teachers/Travis_Rivera.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Jeremiah Conway',
      position: 'ELA Teacher',
      photo: '/src/assets/Teachers/Jeremiah_Conway.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Michael Reese',
      position: 'ELA Teacher',
      photo: '/src/assets/Teachers/Michael_Reese.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Josephine Turkson',
      position: 'ENL Teacher',
      photo: '/src/assets/Teachers/Josephine_Turkson.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Aneponi Tye',
      position: 'ENL Teacher',
      photo: '/src/assets/Teachers/Aneponi_Tye.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Ebony Edwards',
      position: 'ENL Teacher',
      photo: '/src/assets/Teachers/Ebony_Edwards.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Neylin Puello',
      position: 'ENL Teacher',
      photo: '/src/assets/Teachers/Neylin_Puello.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Victor Barrientos',
      position: 'Math Teacher',
      photo: '/src/assets/Teachers/Victor_Barrientos.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Houda ElGhouch',
      position: 'Math Teacher',
      photo: '/src/assets/Teachers/Houda_ElGhouch.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. James Wellington',
      position: 'Math and Music Teacher',
      photo: '/src/assets/Teachers/James_Wellington.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Mary Carmen Irizarry-Santos',
      position: 'Science Teacher',
      photo: '/src/assets/Teachers/Mary_Carmen_Irizarry-Santos.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Haidi Souid',
      position: 'Science Teacher',
      photo: '/src/assets/Teachers/Haidi_Souid.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Brian Villarreal Noel',
      position: 'Science Teacher',
      photo: '/src/assets/Teachers/Brian_Villarreal_Noel.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Bradley Delacruz',
      position: 'Social Studies Teacher',
      photo: '/src/assets/Teachers/Bradley_Delacruz.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Victor Luna',
      position: 'Social Studies Teacher',
      photo: '/src/assets/Teachers/Victor_Luna.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Jessica Freed',
      position: 'Special Education Teacher',
      photo: '/src/assets/Teachers/Jessica_Freed.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Natalia Hiraldo',
      position: 'Special Education Teacher',
      photo: '/src/assets/Teachers/Natalia_Hiraldo.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Edith Carrasco',
      position: 'Special Education Teacher',
      photo: '/src/assets/Teachers/Edith_Carrasco.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Elizabeth Reeve',
      position: 'Special Education Teacher',
      photo: '/src/assets/Teachers/Elizabeth_Reeve.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Sophia Figueroa',
      position: 'Special Education Teacher',
      photo: '/src/assets/Teachers/Sophia_Figueroa.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Jerphy Cabrera',
      position: 'Special Education and Conversational Spanish Teacher',
      photo: '/src/assets/Teachers/Jerphy_Cabrera.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Erika Palomino',
      position: 'Spanish Language Teacher',
      photo: '/src/assets/Teachers/Erika_Palomino.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Crystal Lamb',
      position: 'Art Teacher',
      photo: '/src/assets/Teachers/Crystal_Lamb.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Karisha Ewell',
      position: 'Instructional Coach',
      photo: '/src/assets/Teachers/Karisha_Ewell.jpg',
      section: 'teachers'
    },
  ],
  paraprofessionals: [
    {
      name: 'Mr. Pinak Goswami',
      position: 'Paraprofessional',
      photo: '/src/assets/Paraprofessionals/Pinak_Goswami.jpg',
      section: 'paraprofessionals'
    },
    {
      name: 'Ms. Cielo Velez',
      position: 'Paraprofessional',
      photo: '/src/assets/Paraprofessionals/Cielo_Velez.jpg',
      section: 'paraprofessionals'
    }
  ],
  staff: [
    {
      name: 'Ms. Geetanjali Gunanathan',
      position: 'Guidance Counselor',
      photo: '/src/assets/Staff/Geetanjali_Gunanathan.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Dirsilys Tirado',
      position: 'Guidance Counselor',
      photo: '/src/assets/Staff/Dirsilys_Tirado.jpg',
      section: 'staff'
    },
    {
      name: 'Mr. George Roach',
      position: 'Guidance Counselor',
      photo: '/src/assets/Staff/George_Roach.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Maria Cepeda',
      position: 'Social Worker',
      photo: '/src/assets/Staff/Maria_Cepeda.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Neith-Aisha Strother',
      position: 'School Secretary',
      photo: '/src/assets/Staff/Neith-Aisha_Strother.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Lisandra Pena',
      position: 'Parent Coordinator',
      photo: '/src/assets/Staff/Lisandra_Pena.jpg',
      section: 'staff'
    },
    {
      name: 'Mr. John Luciano',
      position: 'Community Coordinator',
      photo: '/src/assets/Staff/John_Luciano.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Olga Fret',
      position: 'School Aide',
      photo: '/src/assets/Staff/Olga_Fret.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Rosa Morales',
      position: 'School Aide',
      photo: '/src/assets/Staff/Rosa_Morales.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Betty Trinidad',
      position: 'School Aide',
      photo: '/src/assets/Staff/Betty_Trinidad.jpg',
      section: 'staff'
    },
    {
      name: 'Mr. Maximo Moreno',
      position: 'School Aide',
      photo: '/src/assets/Staff/Maximo_Moreno.jpg',
      section: 'staff'
    },
    {
      name: 'Mr. Emad Mikhaiel',
      position: 'School Computer Technology Specialist',
      photo: '/src/assets/Staff/Emad_Mikhaiel.jpg',
      section: 'staff'
    }
  ],
  youthDevelopment: [
    {
      name: 'Ms. Letticia Rondon',
      position: 'Grade Advisor',
      photo: '/src/assets/YouthDevelopment/Letticia_Rondon.jpg',
      section: 'youthDevelopment'
    }
  ]
};

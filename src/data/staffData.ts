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
      photo: '/src/assets/Nelsie_Castillo.jpg',
      phone: '(718) 829-2984',
      section: 'administration'
    },
    {
      name: 'Mr. Jerrick Rutherford',
      position: 'Assistant Principal',
      photo: '/src/assets/Jerrick_Rutherford.jpg',
      section: 'administration'
    },
    {
      name: 'Ms. Ruth Serels',
      position: 'Assistant Principal',
      photo: '/src/assets/Ruth_Serels.jpg',
      section: 'administration'
    }
  ],
  teachers: [
    {
      name: 'Mr. Juffer Villanueva',
      position: 'Math Teacher',
      photo: '/src/assets/Juffer_Villanueva.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Travis Rivera',
      position: 'Physical Education Teacher',
      photo: '/src/assets/Travis_Rivera.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Jeremiah Conway',
      position: 'ELA Teacher',
      photo: '/src/assets/Jeremiah_Conway.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Michael Reese',
      position: 'ELA Teacher',
      photo: '/src/assets/Michael_Reese.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Josephine Turkson',
      position: 'ENL Teacher',
      photo: '/src/assets/Josephine_Turkson.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Aneponi Tye',
      position: 'ENL Teacher',
      photo: '/src/assets/Aneponi_Tye.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Ebony Edwards',
      position: 'ENL Teacher',
      photo: '/src/assets/Ebony_Edwards.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Neylin Puello',
      position: 'ENL Teacher',
      photo: '/src/assets/Neylin_Puello.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Victor Barrientos',
      position: 'Math Teacher',
      photo: '/src/assets/Victor_Barrientos.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Houda ElGhouch',
      position: 'Math Teacher',
      photo: '/src/assets/Houda_ElGhouch.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. James Wellington',
      position: 'Math and Music Teacher',
      photo: '/src/assets/James_Wellington.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Mary Carmen Irizarry-Santos',
      position: 'Science Teacher',
      photo: '/src/assets/Mary_Carmen_Irizarry-Santos.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Haidi Souid',
      position: 'Science Teacher',
      photo: '/src/assets/Haidi_Souid.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Brian Villarreal Noel',
      position: 'Science Teacher',
      photo: '/src/assets/Brian_Villarreal_Noel.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Bradley Delacruz',
      position: 'Social Studies Teacher',
      photo: '/src/assets/Bradley_Delacruz.jpg',
      section: 'teachers'
    },
    {
      name: 'Mr. Victor Luna',
      position: 'Social Studies Teacher',
      photo: '/src/assets/Victor_Luna.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Jessica Freed',
      position: 'Special Education Teacher',
      photo: '/src/assets/Jessica_Freed.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Natalia Hiraldo',
      position: 'Special Education Teacher',
      photo: '/src/assets/Natalia_Hiraldo.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Edith Carrasco',
      position: 'Special Education Teacher',
      photo: '/src/assets/Edith_Carrasco.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Elizabeth Reeve',
      position: 'Special Education Teacher',
      photo: '/src/assets/Elizabeth_Reeve.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Sophia Figueroa',
      position: 'Special Education Teacher',
      photo: '/src/assets/Sophia_Figueroa.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Jerphy Cabrera',
      position: 'Special Education and Conversational Spanish Teacher',
      photo: '/src/assets/Jerphy_Cabrera.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Erika Palomino',
      position: 'Spanish Language Teacher',
      photo: '/src/assets/Erika_Palomino.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Crystal Lamb',
      position: 'Art Teacher',
      photo: '/src/assets/Crystal_Lamb.jpg',
      section: 'teachers'
    },
    {
      name: 'Ms. Karisha Ewell',
      position: 'Instructional Coach',
      photo: '/src/assets/Karisha_Ewell.jpg',
      section: 'teachers'
    },
  ],
  paraprofessionals: [
    {
      name: 'Mr. Pinak Goswami',
      position: 'Paraprofessional',
      photo: '/src/assets/Pinak_Goswami.jpg',
      section: 'paraprofessionals'
    },
    {
      name: 'Ms. Cielo Velez',
      position: 'Paraprofessional',
      photo: '/src/assets/Cielo_Velez.jpg',
      section: 'paraprofessionals'
    }
  ],
  staff: [
    {
      name: 'Ms. Geetanjali Gunanathan',
      position: 'Guidance Counselor',
      photo: '/src/assets/Geetanjali_Gunanathan.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Dirsilys Tirado',
      position: 'Guidance Counselor',
      photo: '/src/assets/Dirsilys_Tirado.jpg',
      section: 'staff'
    },
    {
      name: 'Mr. George Roach',
      position: 'Guidance Counselor',
      photo: '/src/assets/George_Roach.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Maria Cepeda',
      position: 'Social Worker',
      photo: '/src/assets/Maria_Cepeda.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Neith-Aisha Strother',
      position: 'School Secretary',
      photo: '/src/assets/Neith-Aisha_Strother.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Lisandra Pena',
      position: 'Parent Coordinator',
      photo: '/src/assets/Lisandra_Pena.jpg',
      section: 'staff'
    },
    {
      name: 'Mr. John Luciano',
      position: 'Community Coordinator',
      photo: '/src/assets/John_Luciano.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Olga Fret',
      position: 'School Aide',
      photo: '/src/assets/Olga_Fret.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Rosa Morales',
      position: 'School Aide',
      photo: '/src/assets/Rosa_Morales.jpg',
      section: 'staff'
    },
    {
      name: 'Ms. Betty Trinidad',
      position: 'School Aide',
      photo: '/src/assets/Betty_Trinidad.jpg',
      section: 'staff'
    },
    {
      name: 'Mr. Maximo Moreno',
      position: 'School Aide',
      photo: '/src/assets/Maximo_Moreno.jpg',
      section: 'staff'
    },
    {
      name: 'Mr. Emad Mikhaiel',
      position: 'School Computer Technology Specialist',
      photo: '/src/assets/Emad_Mikhaiel.jpg',
      section: 'staff'
    }
  ],
  youthDevelopment: [
    {
      name: 'Ms. Letticia Rondon',
      position: 'Grade Advisor',
      photo: '/src/assets/Letticia_Rondon.jpg',
      section: 'youthDevelopment'
    }
  ]
};

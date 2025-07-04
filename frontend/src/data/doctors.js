const doctors = [
  {
    id: 1,
    img: "/src/assets/img/doc1.jpg",
    name: "Dr. Serena Mitchell",
    specialties: "Orthopedic Surgeon",
    education: "MD, Harvard Medical School",
    experience: "15 years",
    bio: "Dr. Serena Mitchell is a board-certified orthopedic surgeon specializing in sports medicine and joint replacement. She has performed over 1,000 successful surgeries and is known for her minimally invasive techniques that promote faster recovery times. Dr. Mitchell is an active researcher in the field of regenerative medicine for orthopedic applications.",
    languages: ["English", "Spanish"],
    availability: "Monday, Wednesday, Friday",
    contact: "+1 (555) 123-4567"
  },
  {
    id: 2,
    img: "/src/assets/img/doc2.jpg",
    name: "Dr. Julian Bennett",
    specialties: "Cardiologist",
    education: "MD, Johns Hopkins University",
    experience: "20 years",
    bio: "Dr. Julian Bennett is a renowned cardiologist with expertise in interventional procedures and heart failure management. He pioneered several innovative treatment protocols that have been adopted nationwide. Dr. Bennett takes a holistic approach to heart health, emphasizing prevention alongside cutting-edge treatments.",
    languages: ["English", "French"],
    availability: "Tuesday, Thursday",
    contact: "+1 (555) 234-5678"
  },
  {
    id: 3,
    img: "/src/assets/img/doc3.jpg",
    name: "Dr. Camila Rodriguez",
    specialties: "Pediatrician",
    education: "MD, Stanford University School of Medicine",
    experience: "12 years",
    bio: "Dr. Camila Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children from birth through adolescence. She specializes in developmental pediatrics and has additional training in behavioral health. Dr. Rodriguez is known for her gentle approach and ability to connect with young patients.",
    languages: ["English", "Spanish", "Portuguese"],
    availability: "Monday through Friday",
    contact: "+1 (555) 345-6789"
  },
  {
    id: 4,
    img: "/src/assets/img/doc4.jpg",
    name: "Dr. Victor Nguyen",
    specialties: "Neurologist",
    education: "MD, Yale School of Medicine",
    experience: "18 years",
    bio: "Dr. Victor Nguyen is a specialist in clinical neurology with particular expertise in headache disorders, multiple sclerosis, and neurodegenerative diseases. He combines traditional neurological approaches with the latest technological advances in diagnosis and treatment. Dr. Nguyen is actively involved in clinical trials for new neurological treatments.",
    languages: ["English", "Vietnamese"],
    availability: "Monday, Tuesday, Thursday",
    contact: "+1 (555) 456-7890"
  },
  {
    id: 5,
    img: "/src/assets/img/doc5.jpg",
    name: "Dr. Ethan Carter",
    specialties: "Dermatologist",
    education: "MD, University of California, San Francisco",
    experience: "10 years",
    bio: "Dr. Ethan Carter is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. He has particular expertise in treating skin cancers, acne, psoriasis, and eczema. Dr. Carter is known for his thorough skin examinations and patient education on skin health and protection.",
    languages: ["English"],
    availability: "Wednesday, Thursday, Friday",
    contact: "+1 (555) 567-8901"
  },
  {
    id: 6,
    img: "/src/assets/img/doc6.jpg",
    name: "Dr. Olivia Martinez",
    specialties: "Ophthalmologist",
    education: "MD, Columbia University College of Physicians and Surgeons",
    experience: "14 years",
    bio: "Dr. Olivia Martinez is a highly skilled ophthalmologist specializing in cataract surgery, glaucoma management, and refractive procedures. She has performed over 5,000 eye surgeries with excellent outcomes. Dr. Martinez is passionate about preserving and improving vision through both surgical and non-surgical approaches.",
    languages: ["English", "Spanish"],
    availability: "Tuesday, Wednesday, Friday",
    contact: "+1 (555) 678-9012"
  },
  {
    id: 7,
    img: "/src/assets/img/doc1.jpg",
    name: "Dr. Marcus Wei",
    specialties: "Gastroenterologist",
    education: "MD, Duke University School of Medicine",
    experience: "16 years",
    bio: "Dr. Marcus Wei is a gastroenterologist with expertise in digestive disorders, inflammatory bowel disease, and advanced endoscopic procedures. He has pioneered minimally invasive techniques for diagnosing and treating GI conditions. Dr. Wei takes a patient-centered approach, focusing on both symptom management and addressing underlying causes.",
    languages: ["English", "Mandarin"],
    availability: "Monday, Thursday, Friday",
    contact: "+1 (555) 789-0123"
  },
  {
    id: 8,
    img: "/src/assets/img/doc2.jpg",
    name: "Dr. Sophia Patel",
    specialties: "Endocrinologist",
    education: "MD, University of Pennsylvania",
    experience: "13 years",
    bio: "Dr. Sophia Patel specializes in hormonal disorders with particular focus on diabetes management, thyroid conditions, and metabolic disorders. She integrates the latest research into her practice to provide evidence-based care. Dr. Patel is known for her comprehensive approach to complex endocrine conditions and patient education.",
    languages: ["English", "Hindi", "Gujarati"],
    availability: "Tuesday, Wednesday, Thursday",
    contact: "+1 (555) 890-1234"
  },
  {
    id: 9,
    img: "/src/assets/img/doc3.jpg",
    name: "Dr. James Wilson",
    specialties: "Psychiatrist",
    education: "MD, Washington University School of Medicine",
    experience: "22 years",
    bio: "Dr. James Wilson is a psychiatrist specializing in mood disorders, anxiety, and PTSD. He combines medication management with therapeutic approaches to provide comprehensive mental health care. Dr. Wilson has extensive experience working with both adolescents and adults, and is committed to reducing stigma around mental health conditions.",
    languages: ["English"],
    availability: "Monday through Thursday",
    contact: "+1 (555) 901-2345"
  },
  {
    id: 10,
    img: "/src/assets/img/doc4.jpg",
    name: "Dr. Aisha Johnson",
    specialties: "Rheumatologist",
    education: "MD, Mayo Clinic School of Medicine",
    experience: "11 years",
    bio: "Dr. Aisha Johnson specializes in diagnosing and treating autoimmune and inflammatory conditions affecting joints, muscles, and bones. She has particular expertise in rheumatoid arthritis, lupus, and osteoarthritis. Dr. Johnson emphasizes early intervention and personalized treatment plans to improve quality of life for patients with chronic rheumatic conditions.",
    languages: ["English", "Arabic"],
    availability: "Monday, Wednesday, Friday",
    contact: "+1 (555) 012-3456"
  },
  {
    id: 11,
    img: "/src/assets/img/doc5.jpg",
    name: "Dr. Robert Kim",
    specialties: "Pulmonologist",
    education: "MD, Northwestern University Feinberg School of Medicine",
    experience: "17 years",
    bio: "Dr. Robert Kim is a pulmonary specialist focusing on respiratory conditions including asthma, COPD, and sleep disorders. He has advanced training in interventional pulmonology and critical care medicine. Dr. Kim takes a comprehensive approach to lung health, addressing both acute and chronic respiratory issues with the latest evidence-based treatments.",
    languages: ["English", "Korean"],
    availability: "Tuesday, Thursday, Friday",
    contact: "+1 (555) 123-4567"
  },
  {
    id: 12,
    img: "/src/assets/img/doc6.jpg",
    name: "Dr. Elena Vasquez",
    specialties: "Nephrologist",
    education: "MD, University of Michigan Medical School",
    experience: "14 years",
    bio: "Dr. Elena Vasquez specializes in kidney diseases, hypertension management, and dialysis care. She has extensive experience in treating chronic kidney disease and preventing its progression. Dr. Vasquez is committed to patient education and empowerment, helping individuals understand and actively participate in their kidney health management.",
    languages: ["English", "Spanish"],
    availability: "Monday, Tuesday, Thursday",
    contact: "+1 (555) 234-5678"
  }
];

export default doctors;


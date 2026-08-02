import { PortfolioItem, SkillItem, DistrictFacility, ResourceDocument } from '../types';

export const PROFILE_DATA = {
  name: 'MUHAMMAD AYUB',
  title: 'District Population Welfare Officer (DPWO)',
  location: 'Islamabad Capital Territory, Pakistan',
  officeAddress: 'District Population Welfare Office, DHO Complex, Sector G-11/4, Islamabad',
  email: 'dpwo.islamabad@pwd.gov.pk',
  phone: '+92 (51) 9260142',
  altPhone: '+92 (51) 9260143',
  whatsapp: '+92 333 1532153',
  whatsappLink: 'https://wa.me/923331532153',
  linkedin: 'https://www.linkedin.com/in/muhammad-ayub-5a2383103?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  facebook: 'https://www.facebook.com/share/1GrAyLUdtY/',
  dhoIslamabad: 'https://www.dpwoislamabad.net/',
  profileImage: 'https://www.dpwoislamabad.net/assets/img/profile-img-about.jpeg',
  heroBanner: '/src/assets/images/dpwo_hero_banner_1784885947842.jpg',
  inspectionImage: '/src/assets/images/health_facility_inspection_1784885966797.jpg',
  
  aboutBioParagraph1: `Mr. Muhammad Ayub is the committed District Population Welfare Officer (DPWO) responsible for leading the strategic planning, implementation, and oversight of Family Planning, Reproductive Health, and Mother & Child Health services across the Islamabad Capital Territory. Drawing on a strong multidisciplinary academic background with Master's degrees in Public Health, Political Science, and Economics, Mr. Ayub brings a robust, analytical perspective to policy formulation and execution. He excels at translating complex population welfare policies into practical, measurable results on the ground. Mr. Ayub oversees all field operations, ensuring the delivery of accessible, high-quality services through all district outlets and health facilities. Leveraging strong expertise in program execution, resource mobilization, and inter-agency coordination, he cultivates effective partnerships and drives targeted Information, Education, and Communication (IEC) initiatives to maximize community awareness.`,
  
  aboutBioParagraph2: `District Population Welfare Officer (DPWO). Mr. Ayub takes pride in understanding the unique demographic and operational needs of each area he serves. He works closely with local communities, frontline health workers, and partner organizations to ensure the highest standard of service delivery and to drive strong performance across population welfare indicators. He welcomes engagement on current programs, potential collaborative initiatives, and any inquiries related to the district’s population strategy. With a focus on innovation, inclusivity, and measurable progress, Mr. Ayub remains committed to advancing community well-being and sustainable development throughout the district.`,

  keyMetrics: [
    { label: 'Health Outlets Supervised', value: '18+', icon: 'Hospital' },
    { label: 'CEWG Meetings Participated', value: '38+', icon: 'Users' },
    { label: 'District Population Reach', value: '2.3M+', icon: 'Target' },
    { label: 'Inspection Satisfaction', value: '98%', icon: 'ShieldCheck' },
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'skill-1',
    name: 'Health Facilities Monitoring & Inspection',
    nameUrdu: 'صحی صحت مراکز کی نگرانی و معائنہ',
    percentage: 95,
    description: 'Systematic visual and operational evaluation of Basic Health Units (BHUs), Rural Health Centers (RHCs), and Community Health Centers across ICT.',
    keyAchivements: [
      'Conducting unannounced quarterly compliance audits at all 18+ ICT health outlets.',
      'Ensuring strict adherence to hygiene, equipment calibration, and clinical protocols.',
      'Immediate rectification of service bottlenecks through automated field inspection logs.'
    ],
    iconName: 'Building2'
  },
  {
    id: 'skill-2',
    name: 'Contraceptive & Equipment Distribution',
    nameUrdu: 'ادویات و آلات ضبط ولادت کی بلا تعطل ترسیل',
    percentage: 80,
    description: 'End-to-end supply chain logistics management preventing stock-outs at peripheral clinics and field stations.',
    keyAchivements: [
      'Implementation of LMIS (Logistics Management Information System) for real-time tracking.',
      'Maintaining 100% availability of essential reproductive health commodities.',
      'Cold-chain integrity maintenance across urban and rural union councils.'
    ],
    iconName: 'PackageCheck'
  },
  {
    id: 'skill-3',
    name: 'Capacity Building & Staff Training',
    nameUrdu: 'عملے کی استعداد کاری اور تربیت',
    percentage: 90,
    description: 'Continuous professional development and skill upgrading for Family Welfare Workers (FWWs) and Lady Health Visitors (LHVs).',
    keyAchivements: [
      'Organized 25+ specialized technical workshops on modern reproductive health techniques.',
      'Trained 200+ frontline health workers in patient counseling and compassionate care.',
      'Standardized refresher courses on post-partum family planning procedures.'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 'skill-4',
    name: 'Data Management & Performance Reporting',
    nameUrdu: 'ڈیٹا منیجمنٹ اور کارکردگی رپورٹس',
    percentage: 95,
    description: 'Analytical demographic modeling, indicator tracking, and evidence-based reporting for provincial and national planning bodies.',
    keyAchivements: [
      'Monthly synthesis of key performance indicators (KPIs) across all Islamabad sub-sectors.',
      'Digitized reporting dashboard reducing data turnaround time by 60%.',
      'Data-driven allocation of outreach mobile units to underserved rural belts.'
    ],
    iconName: 'BarChart3'
  },
  {
    id: 'skill-5',
    name: 'Community & Stakeholder Coordination',
    nameUrdu: 'کمیونٹی اور شراکت داروں کے ساتھ ہم آہنگی',
    percentage: 100,
    description: 'Cross-sectoral partnerships with NGOs, international donor agencies, local elders, and civil society organizations.',
    keyAchivements: [
      'Fostered active public-private partnerships with Marie Stopes Society, UNFPA, and MSS.',
      'Chaired local community consultation councils across all rural Union Councils.',
      'Achieved 100% consensus in inter-agency district coordination task forces.'
    ],
    iconName: 'Handshake'
  },
  {
    id: 'skill-6',
    name: 'Family Planning Advocacy & Orientation',
    nameUrdu: 'خاندانی منصوبابندی کی ترغیب و آگاہی',
    percentage: 90,
    description: 'Targeted Information, Education, and Communication (IEC) drives addressing socio-cultural myths and raising awareness.',
    keyAchivements: [
      'Spearheaded annual World Contraception Day awareness rallies in Islamabad.',
      'Distributed 50,000+ bilingual informative leaflets in rural hubs.',
      'Engaged religious leaders and community influencers in supportive dialogue sessions.'
    ],
    iconName: 'Megaphone'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Meeting with Senior District Executive, Marie Stopes Society at District Health Office, Islamabad',
    date: '23/09/2025',
    category: 'Inland Events',
    location: 'District Health Office, ICT Islamabad',
    description: 'Strategic consultation meeting with leadership of Marie Stopes Society (MSS) to enhance referral pathways and expand reproductive healthcare access in underserved ICT pockets.',
    fullNarrative: 'DPWO Mr. Muhammad Ayub convened a high-level coordination meeting with the Senior District Executive and key program leads of Marie Stopes Society at the District Health Office, Islamabad. The discussions focused on reinforcing public-private collaboration, streamlining post-partum contraception referrals, and integrating mobile service units in hard-to-reach rural union councils.',
    outcomes: [
      'Agreed on joint outreach drives in rural union councils of ICT.',
      'Established a unified patient referral monitoring protocol.',
      'Formulated joint IEC awareness literature distribution plan.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766122093_Field4.jpeg',
    isFeatured: true
  },
  {
    id: 'port-2',
    title: 'Basic Health Unit (BHU) Sohan - Inspection & Operational Review',
    date: '27/09/2025',
    category: 'Field Monitoring',
    location: 'BHU Sohan, Expressway Sector, Islamabad',
    description: 'Comprehensive field monitoring visit to evaluate clinical readiness, stock levels of reproductive health commodities, and patient management protocols at BHU Sohan.',
    fullNarrative: 'As part of the routine district monitoring framework, Mr. Muhammad Ayub personally inspected BHU Sohan. He inspected the medicine inventory storage, interviewed attending patients regarding service quality, and instructed the facility staff to maintain strict sanitation standards.',
    outcomes: [
      'Audited medicine register and verified 100% commodity availability.',
      'Directed immediate repair of waiting area cooling facilities.',
      'Commended staff for maintaining spotless clinical procedure rooms.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766121944_Bhusohan27_9(1).jpeg',
    isFeatured: true
  },
  {
    id: 'port-3',
    title: 'Community Health Center (CHC) G-13 - Field Evaluation',
    date: '15/09/2025',
    category: 'Field Monitoring',
    location: 'CHC G-13, Sector G-13, Islamabad',
    description: 'On-site supervisory review of outpatient department (OPD) operations, counseling services, and maternal care facilities at CHC G-13.',
    fullNarrative: 'Mr. Muhammad Ayub conducted a field evaluation at Community Health Center G-13 to assess daily patient intake and the implementation of female healthcare worker counseling guidelines.',
    outcomes: [
      'Reviewed counseling logs of 120+ monthly walk-in clients.',
      'Ensured uninterrupted power backup for medical refrigeration.',
      'Enhanced coordination between LHVs and district outreach officers.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766121892_Fieldchc.jpeg',
    isFeatured: true
  },
  {
    id: 'port-4',
    title: 'Basic Health Unit (BHU) Tarnol - Comprehensive Audit',
    date: '30/08/2025',
    category: 'Field Monitoring',
    location: 'BHU Tarnol, Fateh Jang Road Zone, Islamabad',
    description: 'Detailed inspection of emergency care setup, contraceptive inventory, and record-keeping registers at BHU Tarnol.',
    fullNarrative: 'DPWO Mr. Muhammad Ayub inspected BHU Tarnol located along the heavy western traffic corridor of Islamabad. He emphasized prompt service delivery to rural residents and verified staff attendance logs.',
    outcomes: [
      'Verified zero stock-outs of vital medical commodities.',
      'Instructed staff on proper Bio-Medical waste disposal protocols.',
      'Scheduled additional weekend counseling sessions for local mothers.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766121823_Fieldtarnol.jpeg',
    isFeatured: true
  },
  {
    id: 'port-5',
    title: 'Rural Health Center (RHC) Sehala - Operational & Facility Review',
    date: '04/10/2025',
    category: 'Field Monitoring',
    location: 'RHC Sehala, Kahuta Road, Islamabad',
    description: 'High-priority monitoring visit to RHC Sehala to inspect 24/7 maternal delivery room services, laboratory equipment, and ambulance readiness.',
    fullNarrative: 'Mr. Muhammad Ayub inspected Rural Health Center Sehala, a critical medical node serving a wide rural radius in ICT. He reviewed labor room safety standards, sterilization machinery, and emergency patient transport procedures.',
    outcomes: [
      'Upgraded labor room emergency lighting systems.',
      'Reallocated additional FWW staff to accommodate high evening OPD volume.',
      'Initiated local community awareness camps in surrounding villages.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766121773_Field4_10sihala.jpeg',
    isFeatured: true
  },
  {
    id: 'port-6',
    title: 'Humak Dispensary, DHO-ICT - Supervisory Inspection',
    date: '04/10/2025',
    category: 'Field Monitoring',
    location: 'Humak Dispensary, Model Town Humak, Islamabad',
    description: 'Field check on medicine dispensing, record books, and public feedback mechanisms at Humak Dispensary.',
    fullNarrative: 'During the dual monitoring drive on October 4, 2025, Mr. Ayub visited Humak Dispensary. He interacted with local community members in the waiting area to evaluate user satisfaction and resolve local queries.',
    outcomes: [
      'Re-stocked essential family health literature in Urdu.',
      'Resolved local patient queries on commodity availability.',
      'Complimented facility staff for swift record digitization.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766121662_Field4_10.jpeg',
    isFeatured: true
  },
  {
    id: 'port-7',
    title: 'Basic Health Unit (BHU) Jagiot - Inspection & Outreach Check',
    date: '10/09/2025',
    category: 'Field Monitoring',
    location: 'BHU Jagiot, Simly Dam Road Zone, Islamabad',
    description: 'Supervisory check on rural community coverage, vaccination record sync, and maternal welfare programs at BHU Jagiot.',
    fullNarrative: 'Inspection conducted in the eastern rural hilly precinct of Islamabad. Mr. Ayub reviewed house-to-house visit registers of field motivators and ensured rural families receive timely counseling.',
    outcomes: [
      'Expanded outreach visit schedule for mountain hamlet clusters.',
      'Audited cold chain maintenance logbooks.',
      'Strengthened linkage with local Village Health Committees.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766120998_Field1.jpeg',
    isFeatured: true
  },
  {
    id: 'port-8',
    title: 'World Contraception Day 2025',
    date: '26/09/2025',
    category: 'Inland Events',
    location: 'Islamabad Club Auditorium & Public Advocacy Route',
    description: 'World Contraception Day 2025',
    fullNarrative: 'Under the leadership of DPWO Mr. Muhammad Ayub, the Population Welfare Department ICT commemorated World Contraception Day 2025 with an interactive seminar and public awareness march. Health experts, civil society leaders, and youth delegates attended.',
    outcomes: [
      'Mobilized 300+ civil society members and health workers.',
      'Distributed 5,000+ IEC kits on reproductive healthcare choices.',
      'Secured pledges from partner NGOs for continued community outreach.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766120792_landtraining(1).jpeg',
    isFeatured: true
  },
  {
    id: 'port-9',
    title: '2024 Technical Exchange Workshop of South-South Cooperation on HIV/AIDS Prevention & Control',
    date: 'September 2024',
    category: 'Foreign Visits',
    location: 'Beijing and Kunming, China',
    description: 'Organized by NCAIDS and China CDC, bringing together over 40 management and technical personnel from 16 countries, the African Union, and UN system with UNAIDS support.',
    fullNarrative: 'The 2024 Technical Exchange Workshop of South-South Cooperation on HIV/AIDS Prevention and Control, organized by the National Center for AIDS/STD Control and Prevention (NCAIDS), Chinese Center for Disease Control and Prevention (China CDC), was successfully held in Beijing and Kunming in September 2024. The event brought together over 40 management and technical personnel specializing in HIV/AIDS prevention and control from 16 countries, the African Union, and the United Nations system, with partial support from the UNAIDS China Office. DPWO Mr. Muhammad Ayub participated as a key delegate representing Pakistan’s population welfare and public health leadership.',
    outcomes: [
      'Engaged with 40+ international public health delegates across 16 nations & UN bodies.',
      'Studied China CDC best practices in disease surveillance and community health prevention.',
      'Strengthened South-South cooperation frameworks for sustainable population health.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766120649_Foreign2024(1).jpeg',
    isFeatured: true
  },
  {
    id: 'port-10',
    title: 'Technical Exchange Workshop of South-South Cooperation on AIDS Prevention and Control',
    date: '02/09/2024 - 11/09/2024',
    category: 'Foreign Visits',
    location: 'Beijing, China',
    description: 'Technical Exchange Workshop of South-South Cooperation on AIDS Prevention and Control, held at Beijing, China from September 2nd to 11th, 2024.',
    fullNarrative: 'Technical Exchange Workshop of South-South Cooperation on AIDS Prevention and Control, held at Beijing, China from September 2nd to 11th, 2024. DPWO Mr. Muhammad Ayub participated as a key delegate representing Pakistan’s population welfare and public health leadership.',
    outcomes: [
      'Participated in high-level South-South cooperation dialogues on AIDS prevention and control in Beijing.',
      'Exchanged technical expertise and policy frameworks with international delegates.',
      'Strengthened bilateral public health and population welfare linkages.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766120484_Foreignvisits2nd(1).jpeg',
    isFeatured: true
  },
  {
    id: 'port-11',
    title: '32nd Country Engagement Working Group (CEWG) National Session',
    date: '13/03/2024',
    category: 'Country Engagement Working Group (CEWG)',
    location: 'Ministry of National Health Services, Islamabad',
    description: 'National multi-stakeholder forum reviewing Pakistan FP2030 commitments, donor alignment, and provincial execution roadmaps.',
    fullNarrative: 'Representing the Islamabad Capital Territory, DPWO Mr. Muhammad Ayub actively participated in the 32nd CEWG Meeting. He presented Islamabad’s quarterly performance metrics, budget utilization reports, and resource requirements.',
    outcomes: [
      'Highlighted ICT’s 95%+ performance achievement in key indicators.',
      'Secured technical support for digital LMIS roll-out in federal capital.',
      'Aligned ICT district strategy with national FP2030 targets.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766120260_CEWGPESHAWAR(1).jpeg',
    isFeatured: true
  },
  {
    id: 'port-12',
    title: '38th Country Engagement Working Group (CEWG) High-Level Meeting',
    date: '18/09/2025',
    category: 'Country Engagement Working Group (CEWG)',
    location: 'Federal Population Council Hall, Islamabad',
    description: 'Review of international partnerships, FP2030 milestone achievements, and cross-provincial knowledge sharing.',
    fullNarrative: 'At the 38th national CEWG summit, Mr. Ayub delivered a keynote update on ICT’s inter-departmental synergy between Health and Population Welfare departments, demonstrating a 20% increase in contraceptive prevalence rate (CPR) across monitored urban slums.',
    outcomes: [
      'Recognized for exceptional inter-agency coordination in ICT.',
      'Finalized joint donor funding allocation for mobile service vans.',
      'Adopted digital supervision app developed under DPWO leadership.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766120065_CEWG18_9(4).jpeg',
    isFeatured: true
  },
  {
    id: 'port-13',
    title: 'Dengue Surveillance & Vector Control Drive - Sector G-7 & G-8',
    date: '06/09/2025',
    category: 'Field Monitoring',
    location: 'Sectors G-7, G-8 & Urban Settlements, Islamabad',
    description: 'Emergency anti-dengue field inspection monitoring standing water, larvicidal spray implementation, and door-to-door community awareness.',
    fullNarrative: 'During the peak monsoon vector season, Mr. Ayub led high-intensity dengue surveillance squads in urban union councils. Checked larvae hotspots, educated residents, and verified anti-dengue team activities.',
    outcomes: [
      'Inspected 150+ households for potential mosquito breeding sites.',
      'Ensured 100% larvicidal spray coverage in vulnerable spots.',
      'Distributed dengue prevention pamphlets in local markets.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766119812_Dengue6_9(1).jpeg',
    isFeatured: true
  },
  {
    id: 'port-14',
    title: 'Dengue Vector Surveillance & Rapid Response Drive',
    date: '06/09/2025',
    category: 'Field Monitoring',
    location: 'Rural Union Councils - Rawat & Sihala Zone, Islamabad',
    description: 'Targeted surveillance of tire shops, junkyards, and water storage containers in peri-urban belts of Islamabad.',
    fullNarrative: 'Parallel surveillance drive in rural union councils ensuring early larvicidal intervention and zero dengue mortality across district healthcare jurisdictions.',
    outcomes: [
      'Eliminated 40+ stagnant water breeding grounds.',
      'Issued health guidance compliance notices to commercial vendors.',
      'Coordinated with ICT Assistant Commissioners for strict enforcement.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766119694_Dengue6_9_2025(1).jpeg',
    isFeatured: true
  },
  {
    id: 'port-15',
    title: 'Dengue Surveillance Review & Task Force Field Drive',
    date: '07/09/2025',
    category: 'Field Monitoring',
    location: 'Tarlai & Shahzad Town, Islamabad',
    description: 'Follow-up field check on dengue surveillance teams, fogging schedule adherence, and fever clinic monitoring at local BHUs.',
    fullNarrative: 'On Sunday Sept 7, 2025, Mr. Ayub personally inspected fever counter logs at local health facilities to verify rapid diagnostic test availability for dengue suspect cases.',
    outcomes: [
      'Verified 100% availability of NS1 diagnostic kits.',
      'Reviewed daily surveillance reporting portal inputs.',
      'Commended rapid response field teams.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766119471_Dengue2.jpeg',
    isFeatured: true
  },
  {
    id: 'port-16',
    title: 'Islamabad Health & Population Expo 2025',
    date: '25/10/2025',
    category: 'Inland Events',
    location: 'Pak-China Friendship Centre, Islamabad',
    description: 'Major public exhibition showcasing healthcare innovations, population dynamics, interactive health screening booths, and family welfare literature.',
    fullNarrative: 'DPWO Mr. Muhammad Ayub spearheaded the official Population Welfare Pavilion at Health Expo 2025. Over 10,000 visitors, medical students, and delegates visited the stall for free medical counseling, BMI checks, and literature.',
    outcomes: [
      'Hosted over 10,000 visitors at the ICT Population Welfare Pavilion.',
      'Conducted free health screening and family counseling for 1,200+ citizens.',
      'Awarded Best Public Sector Pavilion Shield by Federal Ministry.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766057477_foreignvisits1.jpeg',
    isFeatured: true
  },
  {
    id: 'port-20',
    title: 'Field Monitoring & Healthcare Quality Review (6th September 2025)',
    date: '06/09/2025',
    category: 'Field Monitoring',
    location: 'Rural Health Outlets & Family Welfare Centers, ICT Islamabad',
    description: 'Special 6th September field inspection checking operational readiness, emergency medicine stocks, and clinical hygiene in rural health facilities.',
    fullNarrative: 'In alignment with the 6th September solidarity drive, DPWO Mr. Muhammad Ayub personally inspected rural health outlets in Islamabad. He examined stock registers for essential contraceptives, reviewed cold-chain maintenance logbooks, and interacted with patient visitors to ensure dignified healthcare delivery.',
    outcomes: [
      'Audited medicine stock registers and verified zero stock-out of essential commodities.',
      'Instructed facility in-charges to maintain 24/7 emergency readiness in rural health centers.',
      'Assessed patient feedback and commended clinical staff for high hygiene standards.'
    ],
    imageUrl: 'https://www.dpwoislamabad.net/assets/portfolio/1766057140_Dengue1.jpeg',
    isFeatured: true
  }
];

export const DISTRICT_FACILITIES: DistrictFacility[] = [
  {
    id: 'fac-1',
    name: 'Basic Health Unit (BHU) Sohan',
    type: 'Basic Health Unit (BHU)',
    location: 'Expressway Service Road, Sohan, Islamabad',
    timing: '08:00 AM - 02:00 PM (Mon-Sat)',
    services: ['Family Planning Counseling', 'Maternal & Child Health', 'Routine Vaccination', 'Essential Medicines'],
    phone: '+92 (51) 9255101',
    status: 'Inspection Completed',
    lastInspected: '27/09/2025'
  },
  {
    id: 'fac-2',
    name: 'Community Health Center (CHC) G-13',
    type: 'Community Health Center (CHC)',
    location: 'Main Service Road, Sector G-13/1, Islamabad',
    timing: '08:00 AM - 04:00 PM (Mon-Sat)',
    services: ['24/7 Delivery Care', 'Reproductive Health Clinic', 'Ultrasound & Diagnostics', 'Nutrition Support'],
    phone: '+92 (51) 9255102',
    status: 'Fully Operational',
    lastInspected: '15/09/2025'
  },
  {
    id: 'fac-3',
    name: 'Basic Health Unit (BHU) Tarnol',
    type: 'Basic Health Unit (BHU)',
    location: 'Fateh Jang Road, Tarnol Town, Islamabad',
    timing: '08:00 AM - 02:00 PM (Mon-Sat)',
    services: ['OPD Medical Consultations', 'Contraceptive Logistics', 'Antenatal Checkups', 'Dengue Screening'],
    phone: '+92 (51) 9255103',
    status: 'Inspection Completed',
    lastInspected: '30/08/2025'
  },
  {
    id: 'fac-4',
    name: 'Rural Health Center (RHC) Sehala',
    type: 'Rural Health Center (RHC)',
    location: 'Kahuta Road, Sihala Model Town, Islamabad',
    timing: '24 Hours Emergency & OPD (08:00 AM - 08:00 PM)',
    services: ['24/7 Labor Room', 'Inpatient Emergency Beds', 'Surgical Minor OT', 'Mobile Outreach Hub'],
    phone: '+92 (51) 9255104',
    status: 'Upgraded Facilities',
    lastInspected: '04/10/2025'
  },
  {
    id: 'fac-5',
    name: 'Humak Dispensary, DHO-ICT',
    type: 'Dispensary',
    location: 'Industrial Area, Model Town Humak, Islamabad',
    timing: '08:00 AM - 02:00 PM (Mon-Sat)',
    services: ['Primary General OPD', 'Reproductive Health Commodities', 'Public Health IEC Leaflets'],
    phone: '+92 (51) 9255105',
    status: 'Inspection Completed',
    lastInspected: '04/10/2025'
  },
  {
    id: 'fac-6',
    name: 'Basic Health Unit (BHU) Jagiot',
    type: 'Basic Health Unit (BHU)',
    location: 'Simly Dam Road, Jagiot Union Council, Islamabad',
    timing: '08:00 AM - 02:00 PM (Mon-Sat)',
    services: ['Rural Field Motivators', 'Contraceptive Supply', 'Child Health Immunization'],
    phone: '+92 (51) 9255106',
    status: 'Fully Operational',
    lastInspected: '10/09/2025'
  }
];

export const RESOURCE_DOCUMENTS: ResourceDocument[] = [
  {
    id: 'doc-1',
    title: 'Islamabad Capital Territory Population Welfare Strategy 2025-2030',
    titleUrdu: 'اسلام آباد آبادی ویلفیئر حکمت عملی 2025-2030',
    category: 'Policy & Strategy',
    fileSize: '4.2 MB',
    format: 'PDF',
    date: 'January 2025',
    downloads: 1420
  },
  {
    id: 'doc-2',
    title: 'Standard Operating Procedures for Field Health Outlets & BHU Monitoring',
    titleUrdu: 'صحی مراکز اور بی ایچ یو نگرانی کے طے شدہ طریقے',
    category: 'Clinical Guidelines',
    fileSize: '2.8 MB',
    format: 'PDF',
    date: 'August 2025',
    downloads: 980
  },
  {
    id: 'doc-3',
    title: 'Family Planning & Maternal Health Community Awareness Guide (Bilingual)',
    titleUrdu: 'خاندانی منصوبابندی اور مادری صحت آگاہی گائیڈ',
    category: 'IEC Material',
    fileSize: '5.5 MB',
    format: 'PDF',
    date: 'September 2025',
    downloads: 3250
  },
  {
    id: 'doc-4',
    title: 'District Population Welfare Department Annual Performance Digest 2024-2025',
    titleUrdu: 'ضلعی محکمہ بہبود آبادی سالانہ کارکردگی رپورٹ',
    category: 'Annual Report',
    fileSize: '6.1 MB',
    format: 'PDF',
    date: 'October 2025',
    downloads: 840
  }
];

export const TRANSLATIONS = {
  en: {
    govHeader: 'Government of Pakistan • Islamabad Capital Territory Administration',
    deptName: 'District Population Welfare Office (DPWO), Islamabad',
    officialPortal: 'Official Executive Portal',
    navHome: 'Home',
    navAbout: 'About DPWO',
    navPortfolio: 'Portfolio & Field Log',
    navSkills: 'Competencies & Metrics',
    navOutlets: 'District Outlets',
    navResources: 'Resource Hub',
    navContact: 'Contact & Inquiry',
    
    heroGreeting: 'Official Executive Profile',
    heroRole: 'District Population Welfare Officer (DPWO), Islamabad',
    heroSubtitle: 'Leading strategic planning, field monitoring, and Mother & Child Reproductive Health services across Islamabad Capital Territory.',
    btnScheduleMeeting: 'Schedule Official Meeting',
    btnViewPortfolio: 'Explore Portfolio',
    btnDownloadCV: 'Official Profile PDF',
    
    aboutTitle: 'About Mr. Muhammad Ayub',
    aboutSubtitle: 'Commitment to Excellence in District Population Strategy & Public Health Governance',
    academicBackground: 'Academic Excellence: Master of Public Health (MPH), M.A. Political Science & M.Sc. Economics',
    
    portfolioTitle: 'Field Operations & Event Portfolio',
    portfolioSubtitle: 'Transparent, documented field monitoring, high-level consultations, CEWG summits, and community initiatives in Islamabad.',
    searchPlaceholder: 'Search visits, BHUs, workshops or events...',
    
    skillsTitle: 'Core Competencies & Performance Indicators',
    skillsSubtitle: 'Proven operational standards across health outlet monitoring, logistics, capacity building, and community advocacy.',
    
    outletsTitle: 'Supervised District Health Facilities',
    outletsSubtitle: 'Basic Health Units (BHUs), Rural Health Centers (RHCs), and Community Health Centers under DPWO oversight across ICT.',
    
    resourcesTitle: 'Public Welfare & Policy Resource Hub',
    resourcesSubtitle: 'Download official guidelines, FP2030 district strategy documents, and community awareness literature.',
    
    contactTitle: 'Official Inquiry & Meeting Scheduler',
    contactSubtitle: 'Reach the District Population Welfare Office for official coordination, public feedback, or meeting requests.',
    
    formName: 'Full Name',
    formOrg: 'Organization / Department',
    formEmail: 'Email Address',
    formPhone: 'Contact Number',
    formPurpose: 'Purpose of Inquiry',
    formDate: 'Preferred Meeting Date',
    formMsg: 'Message / Detailed Notes',
    btnSubmitForm: 'Submit Official Request',
    
    footerRights: 'All Rights Reserved. Official District Population Welfare Office, Islamabad Capital Territory Administration.',
  },
  ur: {
    govHeader: 'حکومتِ پاکستان • اسلام آباد کیپٹل ٹیریٹری ایڈمنسٹریشن',
    deptName: 'ضلعی دفتر بہبودِ آبادی (DPWO)، اسلام آباد',
    officialPortal: 'سرکاری ایگزیکٹو پورٹل',
    navHome: 'صفحہ اول',
    navAbout: 'تعارف',
    navPortfolio: 'پورٹ فولیو و مانیٹرنگ',
    navSkills: 'مہارتیں و کارکردگی',
    navOutlets: 'ضلعی صحت مراکز',
    navResources: 'وسائل و رپورٹس',
    navContact: 'رابطہ و ملاقات',
    
    heroGreeting: 'سرکاری ایگزیکٹو پروفائل',
    heroRole: 'ڈسٹرکٹ پاپولیشن ویلفیئر آفیسر (DPWO)، اسلام آباد',
    heroSubtitle: 'اسلام آباد کیپٹل ٹیریٹری میں خاندانی منصوبابندی، مادری و طفلی صحت خدمات اور حکمتِ عملی کی قیادت۔',
    btnScheduleMeeting: 'سرکاری ملاقات وقت لیں',
    btnViewPortfolio: 'پورٹ فولیو دیکھیں',
    btnDownloadCV: 'سرکاری پروفائل پی ڈی ایف',
    
    aboutTitle: 'محمد ایوب کے بارے میں',
    aboutSubtitle: 'ضلعی آبادی کی حکمت عملی اور عوام کی صحت کے لیے پرعزم قیادت',
    academicBackground: 'تعلیمی پس منظر: ماسٹرز ان پبلک ہیلتھ، ایم اے سیاسیات اور ماسٹرز ان معاشیات',
    
    portfolioTitle: 'فیلڈ مانیٹرنگ اور اہم ایونٹس',
    portfolioSubtitle: 'اسلام آباد کے صحت مراکز کا معائنہ، ورکشاپس، اجلاس اور اعلیٰ سطحی مشاورت کا مکمل ریکارڈ۔',
    searchPlaceholder: 'کسی مرکز، تاریخ یا ایونٹ کے نام سے تلاش کریں...',
    
    skillsTitle: 'بنیادی صلاحیتیں اور کارکردگی کا معیار',
    skillsSubtitle: 'صحت کے مراکزی مانیٹرنگ، سپلائی چین اور کمیونٹی آگاہی میں بہترین مہارت۔',
    
    outletsTitle: 'زیرِ نگرانی ضلعی صحت مراکز',
    outletsSubtitle: 'اسلام آباد کے بی ایچ یو، آر ایچ سی اور کمیونٹی ہیلتھ سنٹرز کی فہرست۔',
    
    resourcesTitle: 'عوامی وسائل و پالیسی دستاویزات',
    resourcesSubtitle: 'سرکاری گائیڈ لائنز، ایف پی 2030 پالیسی اور آگاہی مواد ڈاؤن لوڈ کریں۔',
    
    contactTitle: 'سرکاری رابطہ و ملاقات کی درخواست',
    contactSubtitle: 'ضلعی محکمہ بہبودِ آبادی اسلام آباد سے رابطہ یا سرکاری ملاقات کے لیے فارم پر کریں۔',
    
    formName: 'مکمل نام',
    formOrg: 'ادارہ / محکمہ',
    formEmail: 'ای میل ایڈریس',
    formPhone: 'رابطہ نمبر',
    formPurpose: 'رابطے کا مقصد',
    formDate: 'ملاقات کی مطلوبہ تاریخ',
    formMsg: 'تفصیلی پیغام',
    btnSubmitForm: 'درخواست جمع کروائیں',
    
    footerRights: 'جملہ حقوق محفوظ ہیں۔ ضلعی دفتر بہبودِ آبادی، اسلام آباد کیپٹل ٹیریٹری ایڈمنسٹریشن۔',
  }
};

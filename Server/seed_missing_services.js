import mongoose from "mongoose";
import Service from "./models/Service.js";

const servicesToSeed = [
  {
    oldSlugs: ["anti-aging"],
    slug: "anti-aging-in-jaipur",
    previousSlugs: ["anti-aging"],
    title: "Anti-Aging Treatment in Jaipur",
    short: "Bring back your youthful glow with premium non-surgical anti-aging solutions at Dskinova.",
    price: 2500,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Anti Aging",
    image: "/Images/cosmatic/Skin Specialist in Jaipur.jpg",
    overview: {
      title: "Anti-Aging Treatment in Jaipur – Bring Back Your Youthful Glow",
      description: `
        <p>Your skin is supposed to be given the best treatment in order to remain radiant and youthful. In the modern day, where people live fast, are polluted and where stress is the order of the day, aging such as wrinkles, dryness, and lines can be seen at a young age. It is there that professional anti-aging treatment in Jaipur comes, to make you feel just like you were many years ago, firm and glowing, and confident with the help of professional skincare solutions.</p>
        <h3>Why Choose Anti-Aging Treatment in Jaipur?</h3>
        <p>The city of Jaipur has emerged as a destination of individuals who want to experience natural and long-term skin rejuvenation. The best dermatologists and beauty clinics in the city are safe and science-supported procedures to slow down aging and enhance youthful beauty on the skin. Anti-aging treatment in Jaipur is a guarantee of professional treatment, advanced technology, and a personalized effect which will improve your beauty without a filter.</p>
        <h3>How Aging Affects the Skin</h3>
        <p>The skin gets old and lacks collagen and elasticity thus causes wrinkles, pigmentation and even sagging. This is accelerated by sun exposure, pollution and dehydration. Luckily, there exist advanced anti-aging treatment in Jaipur which are aimed to deal with these issues with the help of non-surgical and safe methods.</p>
        <h3>Why Jaipur Is the Hub for Anti-Aging Solutions</h3>
        <p>It is the best city in terms of anti aging treatment with advanced skincare technology and reasonable prices. Jaipur is the ideal location where one can get international quality skincare services due to the presence of qualified dermatologists, fancy hair and beauty salons, and renowned youthful skin clinics</p>
        <h3>Post-Treatment Care Tips</h3>
        <p>Once you have had an anti-ageing treatment in Jaipur, then you should take care with your skin, put on sunscreen everyday, hydrate yourself, have a balanced diet and do not expose yourself to direct sunlight. Consistent maintenance appointments will assist in extending your performance and have your skin glowing years on.</p>
        <h3>Conclusion: Discover the Secret to Ageless Beauty</h3>
        <p>These are your skin, your confidence and your care. Professional anti-aging treatment in Jaipur is a way of reversing time and get warmer, younger skins. Today, visit a reputable skincare clinic in Jaipur in order to be subjected to the finest science and expertise coupled with beauty, to acquire the sort of glow that never leaves.</p>
      `
    },
    included: [
      "Botox & Fillers: Reduce wrinkles and fine lines instantly.",
      "Laser Rejuvenation: Removes age spots and improves skin tone.",
      "Chemical Peels: Exfoliate and brighten dull, tired skin.",
      "Microneedling & PRP Therapy: Boost collagen naturally.",
      "RF Skin Tightening: Firms sagging skin and improves elasticity.",
      "HydraFacial: Deeply hydrates and refreshes your skin."
    ],
    excluded: [
      "Surgical lifting",
      "Invasive procedures without medical consultation"
    ],
    additionalInfo: {
      duration: "60-90 min",
      sessions: "4-6 sessions recommended",
      results: "Visible in 2-3 weeks"
    },
    seo: {
      meta_title: "Anti-Aging Treatment in Jaipur | Dskinova Skin Specialists",
      meta_description: "Dskinova offers the best Anti-Aging Treatment in Jaipur. Book now!",
      focus_keyphrase: "Anti-Aging Treatment in Jaipur",
      slug: "anti-aging-in-jaipur"
    }
  },
  {
    oldSlugs: [],
    slug: "skin-doctor-in-jaipur",
    previousSlugs: [],
    title: "Skin Doctor in Jaipur",
    short: "Expert dermatology & advanced skin care by Dskinova for all your skin and hair concerns.",
    price: 500,
    currency: "₹",
    priceNote: "consultation",
    category: "Skin",
    subcategory: "General Dermatology",
    image: "/Images/blogs/skin doctor in jaipur.jpg",
    overview: {
      title: "Skin Doctor in Jaipur – Expert Dermatology & Advanced Skin Care by Dskinova",
      description: `
        <p>Finding a reliable skin doctor in Jaipur is essential when you’re dealing with acne, pigmentation, dull skin, tanning, or hair-related concerns. Jaipur’s hot climate, pollution, and lifestyle stress often make skin problems more common. That’s why choosing an experienced dermatologist is important for long-lasting results. At Dskinova, you receive advanced skin and hair treatments designed specifically for your skin type and concerns.</p>
        <h3>Why You Need a Trusted Skin Doctor in Jaipur</h3>
        <p>People in Jaipur often experience acne, dark spots, dryness, tan, aging, and changing weather due to intense sun exposure and climate shifts. A professional dermatologist in Jaipur understands the local skin challenges and offers medically certified remedies that are not just short-term solutions. At Dskinova, treatments are based on thorough diagnosis to guarantee healthy and natural outcomes.</p>
        <h3>Advanced Dermatology Treatments at Dskinova</h3>
        <p>Dskinova combines expertise and technology to provide safe, visible, and long-lasting outcomes. Some of the top treatments offered include:</p>
        <ul>
          <li><strong>Laser Hair Removal:</strong> Painless and long-term removal of unwanted hair using advanced laser systems.</li>
          <li><strong>Acne & Scar Removal:</strong> Acne treatments using chemical peels or laser resurfacing.</li>
          <li><strong>Pigmentation / Melasma Treatment:</strong> Targeted treatments for dark spots, melasma, and uneven skin tone.</li>
          <li><strong>Anti-Aging Solutions:</strong> Hydrafacials, peels, tightening procedures, and non-surgical treatments for wrinkles and sagging skin.</li>
          <li><strong>Hair Fall & Scalp Treatments:</strong> PRP therapy, scalp rejuvenation, and regrowth treatments.</li>
        </ul>
        <h3>Why Choose Dskinova as Your Skin Doctor in Jaipur?</h3>
        <ul>
          <li><strong>Extremely Qualified Dermatologists:</strong> Our experts are clinically trained and experienced in dermatology and cosmetic therapies.</li>
          <li><strong>Individualized Treatment Programs:</strong> Treatments are tailored based on individual skin types for the best outcomes.</li>
          <li><strong>Advanced Technology:</strong> We use high-quality machines for laser treatments, acne therapy, and anti-aging procedures.</li>
          <li><strong>Honest Consultation:</strong> Only necessary treatments are suggested, focusing on long-term improvements.</li>
          <li><strong>Natural & Long-term Results:</strong> Dskinova guarantees lasting improvements that look natural and enhance your skin’s health.</li>
        </ul>
        <h3>How to Choose the Best Skin Doctor in Jaipur</h3>
        <ul>
          <li>Doctor’s qualifications</li>
          <li>Clinic’s reputation & reviews</li>
          <li>Quality of equipment</li>
          <li>Cleanliness & hygiene</li>
          <li>Aftercare support</li>
        </ul>
        <p>Dskinova fulfills all these criteria, making it one of the top dermatology clinics in Jaipur.</p>
        <h3>FAQs About Visiting a Skin Doctor in Jaipur</h3>
        <ol>
          <li><strong>When should I visit a dermatologist?</strong><br/>If you have persistent acne, hair loss, pigmentation, rashes, or any continuous skin problems, it's a good idea to visit a specialist.</li>
          <li><strong>Are laser treatments safe?</strong><br/>Yes. Dskinova uses FDA-approved laser systems, which are safe and painless.</li>
          <li><strong>How soon can I expect results?</strong><br/>Treatment results depend on the severity of the condition. Some may resolve in weeks, while others may require multiple sessions.</li>
        </ol>
      `
    },
    included: [
      "Acne and acne scars",
      "Open pores",
      "Pigmentation and melasma",
      "Sun damage and tanning",
      "Anti-aging treatments",
      "Dull and uneven skin tone",
      "Hair fall and dandruff",
      "Allergies and dermatological infections"
    ],
    excluded: [
      "Home remedies and self-treatment kits",
      "Invasive surgical procedures"
    ],
    additionalInfo: {
      duration: "15-30 min consultation",
      sessions: "As advised by dermatologist",
      results: "Clinical advice and diagnosis"
    },
    seo: {
      meta_title: "Skin Doctor in Jaipur | Expert Dermatologist for All Skin Issues",
      meta_description: "Skin doctor in Jaipur offering advanced acne, pigmentation & laser treatments at Dskinova. Book your appointment now!",
      focus_keyphrase: "skin doctor in jaipur",
      slug: "skin-doctor-in-jaipur"
    }
  },
  {
    oldSlugs: [],
    slug: "skin-clinic-in-jaipur",
    previousSlugs: [],
    title: "Skin Clinic in Jaipur",
    short: "Dskinova offers personalized, safe, and effective skincare treatments for healthy, glowing skin.",
    price: 1500,
    currency: "₹",
    priceNote: "starting price",
    category: "Skin",
    subcategory: "General Dermatology",
    image: "/Images/SkinClinic/skin-clinic-in-jaipur.jpg",
    overview: {
      title: "Skin Clinic in Jaipur – Premier Skincare and Dermatology by Dskinova",
      description: `
        <p>Beauty today goes beyond glowing skin—it reflects overall wellness and confidence. With rising pollution, stress, and lifestyle changes, skin problems are becoming common across all age groups. Choosing the right skin clinic in Jaipur is essential for safe, effective, and long-term skincare solutions. Dskinova is a trusted dermatology clinic offering personalized treatments tailored to individual skin needs.</p>
        <h3>Why Visiting a Professional Skin Clinic in Jaipur Matters</h3>
        <p>Many individuals rely on home remedies or over-the-counter products, which often provide temporary relief or worsen skin conditions. A professional skin clinic in Jaipur ensures expert diagnosis, medically approved treatments, and customized care plans. At Dskinova, experienced skin specialists deliver safe and result-oriented solutions for long-lasting skin health.</p>
        <h3>Advanced Technology and Modern Skin Care Solutions</h3>
        <p>What differentiates a professional skin clinic in Jaipur is the use of advanced equipment and clinically tested procedures. Dskinova uses certified products and eco-safe machines. From laser treatments to non-invasive cosmetic procedures, all services are designed to deliver visible results with minimal downtime.</p>
        <h3>Experienced Skin Specialists You Can Trust</h3>
        <p>Choosing the right skin clinic in Jaipur means trusting qualified and experienced dermatologists. At Dskinova, every patient receives detailed consultation, skin analysis, and a personalized treatment plan. The clinic focuses on treating the root cause of skin problems while improving overall skin health.</p>
        <h3>How to Choose the Best Skin Clinic in Jaipur</h3>
        <ul>
          <li>Dermatologist’s experience and qualifications</li>
          <li>High hygiene and safety standards</li>
          <li>Use of advanced and certified equipment</li>
          <li>Transparent consultation and treatment process</li>
          <li>Positive patient reviews and testimonials</li>
        </ul>
        <p>Dskinova fulfills all these criteria, making it one of the top dermatology clinics in Jaipur.</p>
        <h3>Benefits of Choosing a Local Skin Clinic in Jaipur</h3>
        <p>A local skin clinic in Jaipur offers convenience, better follow-up care, and treatments suited to the city’s climate. Dskinova understands skin concerns caused by Jaipur’s heat, dust, and pollution, providing targeted solutions for long-term skin protection.</p>
      `
    },
    included: [
      "Acne and acne scar treatment",
      "High hygiene and safety standards",
      "Anti-aging and wrinkle reduction",
      "Laser hair removal",
      "Skin allergy and infection treatment",
      "Open pores and uneven skin tone solutions"
    ],
    excluded: [
      "Uncertified machine treatments",
      "Over the counter medication without prescription"
    ],
    additionalInfo: {
      duration: "Varies by procedure",
      sessions: "As per treatment plan",
      results: "Visible and long-lasting results"
    },
    seo: {
      meta_title: "Skin Clinic in Jaipur | Dskinova – Book Your Appointment Today",
      meta_description: "Skin clinic in Jaipur – Dskinova offers expert skincare treatments and personalized care. Book your consultation today for healthy skin.",
      focus_keyphrase: "skin clinic in jaipur",
      slug: "skin-clinic-in-jaipur"
    }
  },
  {
    oldSlugs: ["laser-tattoo-removal"],
    slug: "lazer-tattoo-removal-in-jaipur",
    previousSlugs: ["laser-tattoo-removal", "laser-tattoo-removal-jaipur"],
    title: "Laser Tattoo Removal in Jaipur",
    short: "Safe, effective, modern Q-switched & PicoSure Laser Tattoo Removal treatment at Dskinova.",
    price: 2000,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Laser",
    image: "/Images/Services/LaserTattooRemoval.jpg",
    overview: {
      title: "Laser Tattoo Removal in Jaipur – Safe & Effective Treatment with Dskinova",
      description: `
        <p>Tattoos are a beautiful means of expression, and at times you do not wish them to reflect your style or story any more. It could be a long-lived design, a tarnished tattoo, or a case of regrets, which can be solved with the help of laser tattoo removal in Jaipur, which is a safe, contemporary, and effective method. We are Dskinova who deal in professional laser tattoo removal in Jaipur and are able to assist clients in achieving clear and smooth skin with minimum pain.</p>
        <h3>What is Laser Tattoo Removal?</h3>
        <p>Laser tattoo removal in Jaipur is an arduous treatment which is non-invasive and involves the usage of high laser light to fragment tattoo ink particles below the skin. The body is capable of getting rid of these tiny pieces of ink as time goes by thus fading away the tattoo. Laser tattoo removal is also accurate as compared to other techniques such as dermabrasion or chemical treatment and skin around the tattoo is not harmed which minimizes chances of scarring in Jaipur.</p>
        <h3>How Does the Procedure Work?</h3>
        <p>In Dskinova, we have the technology of Q-switched and PicoSure lasers which are used to target the pigments of tattoos. Laser pulses are directed into the skin during treatment so as to dispersed the ink into small particles. Many of these sessions are determined by the size, color and depth of tattoos and where the tattoo is placed. Multi colored tattoos and especially the green and blue inks may take more sessions before they are completely removed. The majority of patients only have mild discomfort, it is normally termed as snapping or tingling. The sessions are normally brief, of 15-45 minutes, depending on the size and the complexity of the tattoo.</p>
        <h3>Cost and Choosing the Right Clinic</h3>
        <p>The prices of laser tattoo removal in Jaipur are dependent on the size, color and number of laser tattoo removal sessions. Small tattoos can begin at ₹2,000–3,000 per session, and bigger tattoos or multicolor ones can be more expensive. A certified clinic such as Dskinova would guarantee a safe and effective laser tattoo removal in Jaipur with lasting effects. With qualified dermatologists and advanced technology, we offer the best services in getting rid of your tattoos so that your tattoo removal experience can be safe and comfortable.</p>
        <h3>Pre- and Post-Treatment Care</h3>
        <p>Before and after-session proper care is the key to optimal outcomes. Prior to treatment, do not tan or sunburn, and adhere to skin preparation directions. Keep the area clean, moist, and protected from sunlight after the session. Complications may arise from scratching or picking the treated skin.</p>
        <h3>Conclusion</h3>
        <p>In case you are willing to get rid of an unwanted tattoo, laser tattoo removal in Jaipur, Dskinova is the best and safest choice. Dskinova is the place where you can get a clear and tattoo-free skin with the help of the most advanced equipment of lasers, qualified experts, and individual approach. Get a step closer to smooth and clean skin and make an appointment at Dskinova to get your laser tattoos removed in Jaipur.</p>
      `
    },
    included: [
      "Safe and non-invasive: No cutting or surgery is required.",
      "Effective on multiple colors: Modern lasers can handle a variety of pigments.",
      "Minimal scarring: Professional treatment ensures smooth, healthy skin.",
      "Gradual fading: Tattoos lighten naturally over time for a better aesthetic result."
    ],
    excluded: [
      "Scratching or picking treated skin",
      "Exposing the treated area to direct sunlight without SPF protection"
    ],
    additionalInfo: {
      duration: "15-45 minutes",
      sessions: "4-8 sessions recommended",
      results: "Progressive fading after each session"
    },
    seo: {
      meta_title: "Laser-Tattoo Removal Treatment in Jaipur | Dskinova Skin Specialists",
      meta_description: "Dskinova offers the best Laser-Tattoo Removal Treatment in Jaipur. Book now!",
      focus_keyphrase: "Laser-Tattoo Removal Treatment in Jaipur",
      slug: "lazer-tattoo-removal-in-jaipur"
    }
  },
  {
    oldSlugs: ["pigmentation-solutions"],
    slug: "pigmentation-treatment-doctor-in-jaipur",
    previousSlugs: ["pigmentation-solutions"],
    title: "Pigmentation Treatment Doctor in Jaipur",
    short: "Get rid of dark spots, melasma, and uneven tone with expert pigmentation treatments by Dskinova.",
    price: 3000,
    currency: "₹",
    priceNote: "starting price",
    category: "Skin",
    subcategory: "Pigmentation",
    image: "/Images/Pigmentation/pigmentation treatment doctor in Jaipur.png",
    overview: {
      title: "Pigmentation Treatment Doctor in Jaipur – Expert Care at Dskinova",
      description: `
        <p>Skin pigmentation is a common concern, especially in Jaipur, where strong sunlight and heat can worsen dark spots, melasma, and uneven skin tone. If you are looking for a trusted pigmentation treatment doctor in Jaipur, Dskinova offers advanced dermatological care focused on restoring clear, smooth, and radiant skin.</p>
        <h3>Understanding Pigmentation and Its Causes</h3>
        <p>Pigmentation occurs when the skin produces excess melanin. This condition can develop due to several factors:</p>
        <ul>
          <li>Prolonged sun exposure</li>
          <li>Hormonal changes</li>
          <li>Acne marks</li>
          <li>Aging</li>
          <li>Genetic predisposition</li>
        </ul>
        <p>A skilled pigmentation specialist can identify the type of pigmentation— melasma, sun spots, freckles, or post-inflammatory pigmentation—and recommend the most effective treatment plan.</p>
        <h3>Why Consult a Pigmentation Expert?</h3>
        <p>Choosing an experienced pigmentation treatment doctor in Jaipur ensures accurate diagnosis and safe, effective treatment. The dermatology experts at Dskinova understand skin types affected by Rajasthan’s climate and use advanced technologies to treat pigmentation precisely. Their expertise prevents skin damage, reduces recurrence, and delivers visible, long-lasting results.</p>
        <h3>Advanced Pigmentation Treatments at Dskinova</h3>
        <p><strong>Laser & Clinical Treatments:</strong></p>
        <ol>
          <li><strong>Laser Toning & Q-Switch Lasers</strong> – Targets deep pigmentation and enhances overall skin brightness.</li>
          <li><strong>Chemical Peels</strong> – Gently exfoliate damaged skin layers and reduce dark spots.</li>
        </ol>
        <p><strong>Skin Rejuvenation Therapies:</strong></p>
        <ol>
          <li><strong>Medifacials for Pigmentation</strong> – Hydrates, repairs, and improves skin clarity.</li>
          <li><strong>Microdermabrasion</strong> – Smoothens skin texture and fades mild pigmentation.</li>
        </ol>
        <p><strong>Medical-Grade Topical Treatments:</strong></p>
        <ol>
          <li><strong>Customized Creams & Serums</strong> – Designed for long-term skin improvement.</li>
        </ol>
        <h3>Personalized Skin Care Plans at Dskinova</h3>
        <p>Each patient undergoes a detailed skin analysis using modern diagnostic tools. Based on skin type, lifestyle, sensitivity, and medical history, a personalized treatment plan ensures safe and effective results.</p>
        <h3>How to Choose the Right Pigmentation Treatment Doctor in Jaipur</h3>
        <ol>
          <li>Doctor’s experience and qualifications</li>
          <li>Advanced technology and treatment options</li>
          <li>Patient reviews and testimonials</li>
        </ol>
        <p>At Dskinova, patients receive transparent guidance, customized treatment plans, and expert care from certified dermatologists.</p>
        <h3>Conclusion</h3>
        <p>Uneven skin tone and dark patches can be effectively treated with the right professional care. Consulting a trusted pigmentation treatment doctor in Jaipur is the first step toward healthier, clearer skin. With advanced treatments and personalized dermatological care, Dskinova delivers safe, visible, and long-lasting results for all skin types.</p>
      `
    },
    included: [
      "Customized Brightening Peels",
      "Wood lamp clinical skin check",
      "Melanin-inhibiting serum applications",
      "Post-care follow ups"
    ],
    excluded: [
      "Internal medications without script",
      "Direct sun exposure immediately after peels"
    ],
    additionalInfo: {
      duration: "45-60 min",
      sessions: "4-6 sessions recommended",
      results: "Visible brightening in 2-3 weeks"
    },
    seo: {
      meta_title: "Pigmentation Treatment Doctor in Jaipur | Dskinova Skin Clinic",
      meta_description: "Expert treatment for melasma, dark spots, and pigmentation in Jaipur at Dskinova. Book your consultation today!",
      focus_keyphrase: "pigmentation treatment doctor in jaipur",
      slug: "pigmentation-treatment-doctor-in-jaipur"
    }
  },
  {
    oldSlugs: ["laser-hair-removal-treatment-in-jaipur-test"],
    slug: "laser-hair-removal-treatment-in-jaipur",
    previousSlugs: ["laser-hair-removal-treatment-in-jaipur-test"],
    title: "Laser Hair Removal Treatment in Jaipur",
    short: "Experience smooth, hair-free skin with professional FDA-approved laser hair reduction at Dskinova.",
    price: 3500,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Laser",
    image: "/Images/newServicesComponent/Laser-hair-removal.jpg",
    overview: {
      title: "Laser Hair Removal Treatment in Jaipur – Say Goodbye to Unwanted Hair",
      description: `
        <p>Weary of forever shaving or waxing or threading? It is time to change to a more complex and long-lasting solution. Laser hair removal treatment at Dskinova, Jaipur, is a safe and painless and long term method of removing unwanted hair. Dskinova will bring up the glowing skin without the inconvenience of visiting the salon frequently with the help of high-quality laser technology and professional dermatological services.</p>
        <h3>What Is Laser Hair Removal?</h3>
        <p>Laser hair removal is a procedure which is scientifically proven to be targeted at the hair follicles and with the use of focused energy of light. This light kills the root of unwanted hair hence growth is slowed in the long run. Dskinova’s laser hair removal treatment in Jaipur is the new method when compared to the conventional techniques, which leaves long lasting effects and produces soft and flawless skin with little discomfort at Dskinova Jaipur. It can be applied on the face, arms, legs, back, bikini region, and underarms as it is appropriate on all types of skin.</p>
        <h3>Why Choose Laser Hair Removal in Jaipur?</h3>
        <p>With the new technology in skincare and the use of qualified professionals, Jaipur is rapidly turning out to be a place where permanent hair removal surgeries are undertaken. Dskinova is one of the leading laser hair removal treatment in Jaipur with its combination of innovation, safety and the price. All the treatments are carried out under the care of the experts using the laser machines approved by the FDA which are comfortable and precise. Have you a need to have smooth legs or a back that is free of hair, Dskinova will give you confidence in the long term beauty.</p>
        <h3>How the Treatment Works</h3>
        <p>It starts with the personalized consulting in which they test your skin and hair type. The professional staff in Dskinova Jaipur then tailors the lasers to be suitable to your comfort and efficiency. The laser is also applied during the session to hair roots only and does not cause damage to the surrounding skin. Depending on the thickness of your hair and its growth pattern, you might require several sessions in order to achieve maximum results. Cooling is done after the treatment so that there is no irritation and you are left with soft and rejuvenated skin.</p>
        <h3>Why Choose Dskinova – The Best Laser Clinic in Jaipur</h3>
        <p>Dskinova is considered to be among the top skincare and modern technology laser hair removal centers in Jaipur. Their certified dermatologists operate on the finest devices to provide safe, hygienic and result-oriented treatments. The clinic concentrates on individual treatment, which means every client receives an individual plan concerning his/her skin complexion and hair type. In Dskinova, comfort, safety and results can be seen come together to create an unparalleled experience.</p>
        <h3>Cost of Laser Hair Removal in Jaipur</h3>
        <p>The prices of laser hair removal treatment in Jaipur are varying based on the location of the hair removal, the number of sessions needed, and your hair growing cycle. Dskinova has got good packages that cater to both men and women at a low cost. Their affordable packages are such that everyone can have a hassle-free, smooth, hair-free skin without emptying their pockets.</p>
      `
    },
    included: [
      "Personalized Scalp & Body Consultation",
      "FDA-Approved Laser sessions",
      "Soothing skin cooling gel",
      "Post-treatment care guidelines"
    ],
    excluded: [
      "Waxing or plucking hair 2 weeks before session",
      "Hot baths or saunas immediately after treatment"
    ],
    additionalInfo: {
      duration: "30-90 min",
      sessions: "6-8 sessions recommended",
      results: "Permanent hair reduction"
    },
    seo: {
      meta_title: "Laser Hair Removal in Jaipur – Safe & Professional Treatment",
      meta_description: "Laser hair removal in Jaipur at Dskinova – safe, effective, long-lasting, and dermatologist-supervised. Book your session today!",
      focus_keyphrase: "laser hair removal in jaipur",
      slug: "laser-hair-removal-treatment-in-jaipur"
    }
  },
  {
    oldSlugs: [],
    slug: "cosmologist-in-jaipur",
    previousSlugs: ["cosmeologist-in-jaipur"],
    title: "Cosmetologist in Jaipur",
    short: "Professional cosmetology and advanced beauty therapies for skin, hair, and wellness at Dskinova.",
    price: 1500,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Cosmetology",
    image: "/Images/cosmatic/Skin Specialist in Jaipur.jpg",
    overview: {
      title: "Cosmetologist in Jaipur – Professional Skincare & Advanced Cosmetology",
      description: `
        <p>A cosmetologist is a trained professional who specializes in skin, hair, beauty, and wellness treatments. Unlike a regular beautician, cosmetologists use advanced techniques and scientific understanding to deliver safe and effective beauty solutions. Your complete guide to expert skincare, beauty treatments, and professional cosmetology services in Jaipur.</p>
        <h3>Why Visit a Professional Cosmetologist?</h3>
        <p>Professional cosmetologists provide personalized care, safe treatments, and long-term beauty solutions. From anti-aging facials to advanced hair rejuvenation, expert care boosts confidence and ensures lasting results.</p>
        <h3>How to Choose the Right Cosmetologist</h3>
        <ul>
          <li>Certified and trained professional</li>
          <li>Positive client reviews</li>
          <li>Clean & hygienic clinic environment</li>
          <li>Detailed consultation before treatment</li>
        </ul>
        <h3>Benefits of Regular Cosmetic Treatments</h3>
        <p>From glowing skin to stronger hair, regular cosmetology sessions improve appearance, boost confidence, and promote self-care.</p>
        <h3>Conclusion</h3>
        <p>A skilled cosmetologist in Jaipur can transform your skin, hair, and beauty journey. Experience the power of professional care and elevate your natural beauty today.</p>
      `
    },
    included: [
      "Hair treatments: scalp therapies and smoothing",
      "Skin care: Custom facials and deep cleansing",
      "Detailed skin and beauty consultations",
      "Personalized post-treatment advice"
    ],
    excluded: [
      "Prescription medical dermatological drugs",
      "Surgical facelifts or dynamic injectables"
    ],
    additionalInfo: {
      duration: "45-60 min",
      sessions: "As per self-care schedule",
      results: "Rejuvenated skin and hair"
    },
    seo: {
      meta_title: "Advanced Cosmetologist in Jaipur | Dskinova Skin Specialists",
      meta_description: "Find the best Cosmetologist in Jaipur at Dskinova for expert skin & hair treatments. Book your appointment now!",
      focus_keyphrase: "Cosmetologist in Jaipur",
      slug: "cosmologist-in-jaipur"
    }
  },
  {
    oldSlugs: [],
    slug: "carbon-facial",
    previousSlugs: [],
    title: "Carbon Facial",
    short: "Exfoliate, clarify, and instantly brighten your skin with the famous Charcoal Laser Carbon Facial.",
    price: 3000,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Facial",
    image: "/Images/Services/carbon-facial.avif",
    overview: {
      title: "Carbon Laser Facial – The Instant Glow Treatment",
      description: `
        <p>Also known as the 'Hollywood Peel', the Carbon Laser Facial is a non-invasive, completely painless treatment that uses liquid carbon and laser technology to deeply exfoliate, unclog pores, reduce acne, and stimulate collagen production. It leaves your skin feeling incredibly soft, firm, and radiant immediately after the session.</p>
        <h3>How Carbon Facial Works</h3>
        <p>A layer of liquid carbon is applied to the face, which penetrates deep into the pores. A specialized laser is then passed over the skin. The laser light is highly attracted to the carbon particles. When the laser sweeps over the area, it destroys the carbon, taking dead skin cells, contaminants, and excess oil along with it.</p>
        <h3>Benefits of Carbon Laser Peel</h3>
        <ul>
          <li>Deep cleansing and exfoliation of pores</li>
          <li>Reduction in fine lines, wrinkles, and acne marks</li>
          <li>Refines open pores and controls sebum production</li>
          <li>Stimulates collagen synthesis for firmer skin</li>
          <li>Instant skin brightening with zero downtime</li>
        </ul>
      `
    },
    included: [
      "Charcoal carbon paste application",
      "Laser carbon removal treatment",
      "Soothing hydration mask",
      "Sun protection post-care"
    ],
    excluded: [
      "Scratching skin or using harsh scrubs post-peel",
      "Direct sunlight exposure without SPF for 48 hours"
    ],
    additionalInfo: {
      duration: "45 min",
      sessions: "3-5 sessions for optimal outcomes",
      results: "Instant glow and refined pores"
    },
    seo: {
      meta_title: "Carbon Laser Facial in Jaipur | Dskinova Skin Clinic",
      meta_description: "Get instant skin brightening and pore refinement with the Carbon Laser Peel at Dskinova Jaipur. Zero downtime!",
      focus_keyphrase: "carbon facial jaipur",
      slug: "carbon-facial"
    }
  }
];

export async function seedMissingServices() {
  console.log("Starting services seeding/migration...");
  try {
    for (const data of servicesToSeed) {
      // 1. Try to find by new slug
      let doc = await Service.findOne({ slug: data.slug });

      // 2. If not found, try to find by old slugs
      if (!doc && data.oldSlugs.length > 0) {
        doc = await Service.findOne({ slug: { $in: data.oldSlugs } });
        if (doc) {
          console.log(`Found service with old slug "${doc.slug}". Migrating to new slug "${data.slug}".`);
          doc.slug = data.slug;
        }
      }

      const payload = {
        title: data.title,
        slug: data.slug,
        short: data.short,
        price: data.price,
        currency: data.currency,
        priceNote: data.priceNote,
        category: data.category,
        subcategory: data.subcategory,
        image: data.image,
        overview: data.overview,
        included: data.included,
        excluded: data.excluded,
        additionalInfo: data.additionalInfo,
        seo: data.seo,
        previousSlugs: data.previousSlugs
      };

      if (doc) {
        // Update existing service
        Object.assign(doc, payload);
        await doc.save();
        console.log(`Successfully updated/migrated service "${data.slug}".`);
      } else {
        // Create new service
        await Service.create(payload);
        console.log(`Successfully created/seeded new service "${data.slug}".`);
      }
    }
    console.log("Services seeding/migration finished successfully!");
  } catch (error) {
    console.error("Error in services seeding/migration:", error);
  }
}

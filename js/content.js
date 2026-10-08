/* =====================================================================
   MUSE & BLOOM — CONTENT FILE
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to update the website.
   Rules to remember:
     • Text goes inside "quotation marks".
     • Every item in a list ends with a comma  ,
     • Each item lives inside curly brackets  { ... }
   If the page goes blank after an edit, check for a missing comma or
   quote mark first.
   ===================================================================== */


/* ---------- 1. YOUR LINKS ----------
   Leave apple or youtube as "" until the show is live there.
   The site will show "Coming soon" instead of a broken button. */
window.SITE = {
  name: "Muse & Bloom",
  slogan: "Embracing Intentional Growth.",
  about: "Highlighting the journeys of Muslim women in career and life, while creating tools to help you bloom.",

  spotify:   "https://open.spotify.com/show/6OIh0bfb83XeEVFcZMyxG8",
  apple:     "",   // paste your Apple Podcasts link here when it's live
  youtube:   "",   // paste your YouTube link here when it's live
  substack:  "https://museandbloom.substack.com",
  instagram: "https://www.instagram.com/muse.grow/",
  hosts:     "Ziya and Fatima",

  // A Google Form (or any link) where people can suggest women for the archive.
  // Leave "" to hide the button.
  nominate:  ""
};


/* ---------- 2. PODCAST EPISODES ----------
   Newest episode goes at the TOP. Copy a block to add a new one. */
window.EPISODES = [
  { number: "09", guest: "Azeeza Usman", title: "Blooming with Azeeza Usman",
    role: "Scientist and Arabic calligraphy artist", date: "3 July 2026", length: "32 min",
    description: "How Azeeza holds a science career and a calligraphy practice side by side, and what she has learned about making room for both.",
    spotify: "https://open.spotify.com/episode/4yNKHxBUGSiU12JLfBWojy", apple: "", youtube: "" },

  { number: "08", guest: "Maryam Mudasiru", title: "Blooming with Maryam Mudasiru",
    role: "Software engineer, entrepreneur and medical student", date: "5 June 2026", length: "30 min",
    description: "An award-winning engineer and medical student on juggling several passions at once, and the lessons that came with it.",
    spotify: "https://open.spotify.com/episode/0B10fkVmGwC1q6wRTfp0PU", apple: "", youtube: "" },

  { number: "07", guest: "Fauziya Mohammed", title: "Blooming with Fauziya Mohammed",
    role: "Engineer turned designer and community builder", date: "15 May 2026", length: "30 min",
    description: "Fauziya's move from engineering into design, building community, and what leadership has taught her about growth.",
    spotify: "https://open.spotify.com/episode/4rhDO7kUlR24zzqzn5fqvP", apple: "", youtube: "" },

  { number: "06", guest: "Fatima Hamza", title: "Blooming with Fatima Hamza",
    role: "Product manager turned quality assurance engineer", date: "1 May 2026", length: "36 min",
    description: "Moving from product management to QA, being a hijabi in tech, and keeping faith and ambition in balance.",
    spotify: "https://open.spotify.com/episode/3tOOkoqe6uOuaGvdnINiRJ", apple: "", youtube: "" },

  { number: "05", guest: "Jamila Yusuf", title: "Blooming with Jamila Yusuf",
    role: "Civil and structural engineering student", date: "10 April 2026", length: "20 min",
    description: "Our first engineering guest on studying, staying true to her faith, and how her hijab has shaped her career choices.",
    spotify: "https://open.spotify.com/episode/1JQeSjNHSZpWfW5JuBGkRE", apple: "", youtube: "" },

  { number: "04", guest: "Gambo Usman", title: "Blooming with Gambo Usman",
    role: "Software quality assurance engineer", date: "27 March 2026", length: "33 min",
    description: "From physics teacher to tech, while raising her daughters. Gambo on learning new skills and making room for mothers in tech.",
    spotify: "https://open.spotify.com/episode/3x6SZd5X3jg6SXDS5clorA", apple: "", youtube: "" },

  { number: "03", guest: "Semira Yesufu", title: "Blooming with Semira Yesufu",
    role: "Tech professional and founder of Path4Her", date: "27 February 2026", length: "43 min",
    description: "Being a first-generation Muslim woman in tech, building Path4Her for young women, and preparing for Ramadan and an MBA.",
    spotify: "https://open.spotify.com/episode/5NXfvPjzjBbvtKbEYSb3Uq", apple: "", youtube: "" },

  { number: "02", guest: "Zalihat Mohammed", title: "Blooming with Zalihat Mohammed",
    role: "Data engineer", date: "13 February 2026", length: "40 min",
    description: "Five years into data engineering, Zalihat shares how she balances motherhood with a demanding tech career.",
    spotify: "https://open.spotify.com/episode/57OivXdktx3QVYjSk3L5To", apple: "", youtube: "" },

  { number: "01", guest: "Khadija Ladan", title: "Blooming with Khadija Ladan",
    role: "Front-end engineer", date: "23 January 2026", length: "28 min",
    description: "How a final-year project led Khadija to front-end development, and why community and mentorship shaped her career.",
    spotify: "https://open.spotify.com/episode/55nozJbzFRqsV8QWPy56RF", apple: "", youtube: "" },

  { number: "00", guest: "Ziya and Fatima", title: "Where it starts",
    role: "Your hosts", date: "15 January 2026", length: "4 min",
    description: "A short welcome: who we are, why this podcast exists, and the conversations we hope to have with you.",
    spotify: "https://open.spotify.com/episode/0OSs7aOhAVAYUnPXIDCB6U", apple: "", youtube: "" }
];


/* ---------- 3. LETTERS (from Substack) ----------
   Your latest Substack posts. Newest at the top. */
window.LETTERS = [
  { title: "What If You Don't Have to Choose Just One Dream?", author: "Humuani", date: "10 July 2026",
    url: "https://museandbloom.substack.com/p/what-if-you-dont-have-to-choose-just" },
  { title: "Can A Woman Be Successful And Happily Married?", author: "Ziya", date: "23 June 2026",
    url: "https://museandbloom.substack.com/p/can-a-woman-be-successful-and-happily" },
  { title: "Creating A Life That Makes Space For Purpose, Passion. And Joy", author: "Ziya", date: "12 June 2026",
    url: "https://museandbloom.substack.com/p/creating-a-life-that-makes-space" }
];


/* ---------- 4. WEEKLY READS ----------
   Every week: copy the whole { week: ... } block, paste it at the TOP
   of this list, and change the details. Older weeks move to
   "Past weeks" on the Weekly Reads page automatically.
   (These are EXAMPLES. Replace them with the articles you found.) */
window.WEEKLY_READS = [
  {
    week: "Week of 5 October 2026",
    note: "This week is all about growing on purpose: in your deen, your work and your rest.",
    articles: [
      { title: "Deenmaxing: a muslimah's guide to becoming her best self without losing herself",
        source: "Reflecting Muslimah", url: "https://reflectingmuslimah.substack.com/p/deenmaxing-a-muslimahs-guide-to-becoming", tag: "Faith & growth",
        why: "A new city, a new job, a new chapter. How to keep growing in your twenties without letting your deen fall to the bottom of the list. There's a checklist at the end." },
      { title: "Muslim Women Don't Need Another Side Hustle",
        source: "Salma Lucki", url: "https://salmalucki.substack.com/p/muslim-women-dont-need-another-side", tag: "Business",
        why: "A push to think bigger than side income, and build real businesses in tech, education, media and finance." },
      { title: "The Strength Trap",
        source: "Belonging for The Muslim Woman", url: "https://janetkiwanuka.substack.com/p/the-strength-trap", tag: "Wellbeing",
        why: "Why being the 'strong one' can lead high-achieving women to burnout, and how to rebuild on something softer." },
      { title: "The ambitious Muslim girl's guide to building her greatest asset: her personal brand",
        source: "Believe & Build", url: "https://yoursmalek.substack.com/p/the-ambitious-muslim-girls-guide", tag: "Career",
        why: "A practical system for showing up online while juggling uni, work and your deen, and why the slow start is normal." },
      { title: "i'm a hijabi: i cover my hair not my brain",
        source: "Figuring It Out", url: "https://figuringitout9.substack.com/p/im-a-hijabi-i-cover-my-hair-not-my", tag: "Faith at work",
        why: "A personal essay on growing to love the hijab, and the women who prove faith and ambition belong together." },
      { title: "A Productive Day In My Life As a Muslim Woman",
        source: "Saleem Muslimah", url: "https://rofiatibrahim.substack.com/p/a-productive-day-in-my-life", tag: "Routines",
        why: "From Tahajjud at 4:30am to the end of the day: a warm, honest look at building a routine around faith while waiting for NYSC." }
    ]
  }
];


/* ---------- 5. IN FULL BLOOM: THE WOMEN ARCHIVE ----------
   African Muslim women doing remarkable things, Nigerian women first.
   To add a woman, copy one { ... } block and change the details.
   field should be one of: "Leadership", "Business", "Advocacy",
   "Tech", "Arts & media", "Literature", "Sport", "Health & science",
   "Faith & scholarship" (a new one becomes a new filter button).
   source: the link that backs up her story (always include one).
   photo: optional, and only with her permission. Put it in /images
   and write "images/her-name.jpg".
   Please re-check job titles from time to time: roles change. */
window.WOMEN = [
  { name: "Amina J. Mohammed", country: "Nigeria", field: "Leadership",
    role: "Deputy Secretary-General, United Nations",
    story: "Has served as the UN's Deputy Secretary-General since 2017, after serving as Nigeria's Minister of Environment and helping shape the global Sustainable Development Goals.",
    source: "https://en.wikipedia.org/wiki/Amina_J._Mohammed", photo: "" },

  { name: "Nana Asma'u", country: "Nigeria", field: "Faith & scholarship",
    role: "Scholar, poet and teacher (1793–1864)",
    story: "Daughter of Usman dan Fodio, she wrote poetry in four languages and built the Yan Taru network that educated women across the Sokoto Caliphate. She is still revered in northern Nigeria.",
    source: "https://en.wikipedia.org/wiki/Nana_Asma%CA%BCu", photo: "" },

  { name: "Kudirat Abiola", country: "Nigeria", field: "Advocacy",
    role: "Pro-democracy campaigner (1951–1996)",
    story: "Led the campaign for democracy while her husband, the elected president MKO Abiola, was detained. She was assassinated in Lagos in 1996.",
    source: "https://en.wikipedia.org/wiki/Kudirat_Abiola", photo: "" },

  { name: "Gambo Sawaba", country: "Nigeria", field: "Advocacy",
    role: "Women's rights activist and politician (1933–2001)",
    story: "A fearless northern voice for women's rights who led the women's wing of NEPU and later became deputy national chair of the GNPP.",
    source: "https://en.wikipedia.org/wiki/Gambo_Sawaba", photo: "" },

  { name: "Aisha Yesufu", country: "Nigeria", field: "Advocacy",
    role: "Activist and businesswoman",
    story: "Co-founded the #BringBackOurGirls movement after the 2014 Chibok abductions and remains one of Nigeria's best-known voices for good governance.",
    source: "https://en.wikipedia.org/wiki/Aisha_Yesufu", photo: "" },

  { name: "Hadiza Bala Usman", country: "Nigeria", field: "Leadership",
    role: "Public servant",
    story: "Led the Nigerian Ports Authority as managing director from 2016 to 2021, after serving as chief of staff to the Kaduna State governor.",
    source: "https://en.wikipedia.org/wiki/Hadiza_Bala_Usman", photo: "" },

  { name: "Zainab Ahmed", country: "Nigeria", field: "Leadership",
    role: "Former Minister of Finance",
    story: "An accountant who served as Nigeria's Minister of Finance, Budget and National Planning from 2018 to 2023.",
    source: "https://en.wikipedia.org/wiki/Zainab_Ahmed", photo: "" },

  { name: "Aishah Ahmad", country: "Nigeria", field: "Business",
    role: "Finance professional",
    story: "A chartered accountant who served as Deputy Governor of the Central Bank of Nigeria from 2017.",
    source: "https://en.wikipedia.org/wiki/Aishah_Ahmad", photo: "" },

  { name: "Halima Dangote", country: "Nigeria", field: "Business",
    role: "Executive Director, Dangote Group",
    story: "Oversees commercial operations at one of Africa's largest industrial groups.",
    source: "https://en.wikipedia.org/wiki/Halima_Dangote", photo: "" },

  { name: "Bola Shagaya", country: "Nigeria", field: "Business",
    role: "Founder, Bolmus Group International",
    story: "Built a group with interests in real estate, oil and gas, banking and photography, and is one of Africa's wealthiest women.",
    source: "https://en.wikipedia.org/wiki/Bola_Shagaya", photo: "" },

  { name: "Aisha Muhammed-Oyebode", country: "Nigeria", field: "Business",
    role: "Lawyer, entrepreneur and philanthropist",
    story: "Group CEO of Asset Management Group and CEO of the Murtala Muhammed Foundation, which works on education, health and women's empowerment.",
    source: "https://en.wikipedia.org/wiki/Aisha_Muhammed-Oyebode", photo: "" },

  { name: "Abibatu Mogaji", country: "Nigeria", field: "Business",
    role: "Iyaloja of Lagos (1916–2013)",
    story: "A business magnate who led Lagos market women for decades as their Iyaloja.",
    source: "https://en.wikipedia.org/wiki/Abibatu_Mogaji", photo: "" },

  { name: "Maryam Lawan Gwadabe", country: "Nigeria", field: "Tech",
    role: "Founder and CEO, Blue Sapphire Hub",
    story: "Founded Blue Sapphire Hub in Kano in 2014, a tech hub that has trained thousands of young people in digital skills, with programmes built for women and girls. Named to Forbes Africa's 30 Under 30.",
    source: "https://leadership.ng/maryam-lawan-gwadabe-leading-northern-nigerias-digital-renaissance/", photo: "" },

  { name: "Aisha Tofa", country: "Nigeria", field: "Tech",
    role: "Founder, Startup Kano",
    story: "Built Startup Kano, one of northern Nigeria's largest tech hubs, and runs WINTECH and an annual conference for women founders.",
    source: "https://leadingladiesafrica.org/?p=26143", photo: "" },

  { name: "Amal Hassan", country: "Nigeria", field: "Tech",
    role: "Founder and CEO, Outsource Global",
    story: "Started Outsource Global in 2013 and grew it into one of Africa's leading business process outsourcing companies.",
    source: "https://en.wikipedia.org/wiki/Amal_Hassan", photo: "" },

  { name: "Habiba Ali", country: "Nigeria", field: "Tech",
    role: "Founder and CEO, Sosai Renewable Energies",
    story: "Brings solar power and clean cookstoves to communities across northern Nigeria, working through women resellers. Vital Voices Global Leadership Award, 2019.",
    source: "https://vitalvoices.org/news-articles/news/meet-the-vv-grow-fellow-habiba-ali", photo: "" },

  { name: "Rabia Salihu Sa'id", country: "Nigeria", field: "Tech",
    role: "Professor of atmospheric and space physics",
    story: "A space-weather researcher at Bayero University Kano and one of Nigeria's leading women physicists.",
    source: "https://en.wikipedia.org/wiki/Rabia_Salihu_Sa%27id", photo: "" },

  { name: "Lateefat Okunnu", country: "Nigeria", field: "Leadership",
    role: "Former Deputy Governor of Lagos State",
    story: "Served as Lagos deputy governor from 1990 to 1992 and is a founding member of FOMWAN, the Federation of Muslim Women's Associations in Nigeria.",
    source: "https://en.wikipedia.org/wiki/Lateefat_Okunnu", photo: "" },

  { name: "Aisha Lemu", country: "Nigeria", field: "Faith & scholarship",
    role: "Educator and author (died 2019)",
    story: "A British-born educator who made Nigeria her home, founded schools and helped found FOMWAN.",
    source: "https://en.wikipedia.org/wiki/Aisha_Lemu", photo: "" },

  { name: "Fatima Akilu", country: "Nigeria", field: "Health & science",
    role: "Psychologist; Executive Director, Neem Foundation",
    story: "A leading expert on preventing violent extremism who led Nigeria's first national programme to counter it.",
    source: "https://en.wikipedia.org/wiki/Fatima_Akilu", photo: "" },

  { name: "Bilkisu Yusuf", country: "Nigeria", field: "Arts & media",
    role: "Journalist and editor (1952–2015)",
    story: "The first woman to lead a national newspaper in Nigeria, she edited papers in Abuja, Kano and Kaduna.",
    source: "https://en.wikipedia.org/wiki/Bilkisu_Yusuf", photo: "" },

  { name: "Dadasare Abdullahi", country: "Nigeria", field: "Arts & media",
    role: "Writer, nurse and educator (1918–1984)",
    story: "The first female journalist in Northern Nigeria and a pioneer of women's education in the region.",
    source: "https://en.wikipedia.org/wiki/Dadasare_Abdullahi", photo: "" },

  { name: "Kadaria Ahmed", country: "Nigeria", field: "Arts & media",
    role: "Journalist and media entrepreneur",
    story: "Began her career at the BBC in London and now runs RadioNow 95.3FM.",
    source: "https://en.wikipedia.org/wiki/Kadaria_Ahmed", photo: "" },

  { name: "Hadiza Isma El-Rufai", country: "Nigeria", field: "Literature",
    role: "Novelist",
    story: "Author of An Abundance of Scorpions and founder of the Yasmin El-Rufai Foundation, which promotes reading and writing.",
    source: "https://en.wikipedia.org/wiki/Hadiza_Isma_El-Rufai", photo: "" },

  { name: "Balaraba Ramat Yakubu", country: "Nigeria", field: "Literature",
    role: "Novelist and screenwriter",
    story: "A leading writer of Hausa romance literature and one of very few Hausa novelists translated into English.",
    source: "https://en.wikipedia.org/wiki/Balaraba_Ramat_Yakubu", photo: "" },

  { name: "Bilkisu Funtuwa", country: "Nigeria", field: "Literature",
    role: "Novelist",
    story: "Writes Hausa novels centred on Muslim women and their choices.",
    source: "https://en.wikipedia.org/wiki/Bilkisu_Funtuwa", photo: "" },

  { name: "Aishatu Gidado Idris", country: "Nigeria", field: "Literature",
    role: "Author",
    story: "Writes in Hausa and English about marriage and relationships.",
    source: "https://en.wikipedia.org/wiki/Aishatu_Gidado_Idris", photo: "" },

  { name: "Rufaida Umar Ibrahim", country: "Nigeria", field: "Literature",
    role: "Writer and novelist",
    story: "A young Kano-born novelist writing in Hausa.",
    source: "https://en.wikipedia.org/wiki/Rufaida_Umar_Ibrahim", photo: "" },

  { name: "Aisha Augie-Kuta", country: "Nigeria", field: "Arts & media",
    role: "Photographer and filmmaker",
    story: "An Abuja-based artist from Argungu who won Creative Artist of the Year at The Future Awards in 2011.",
    source: "https://en.wikipedia.org/wiki/Aisha_Augie-Kuta", photo: "" },

  { name: "Rahama Sadau", country: "Nigeria", field: "Arts & media",
    role: "Actress and filmmaker",
    story: "Rose to fame in Kannywood and now works across Hausa, English and international productions.",
    source: "https://en.wikipedia.org/wiki/Rahama_Sadau", photo: "" },

  { name: "Hadiza Aliyu", country: "Nigeria", field: "Arts & media",
    role: "Actress and filmmaker",
    story: "Known as Hadiza Gabon, she won best actress at the 2013 Best of Nollywood Awards and works in Hausa and English films.",
    source: "https://en.wikipedia.org/wiki/Hadiza_Aliyu", photo: "" },

  { name: "Maryam Booth", country: "Nigeria", field: "Arts & media",
    role: "Actress and model",
    story: "Won an Africa Movie Academy Award for The Milkmaid, Nigeria's submission for the Oscars.",
    source: "https://en.wikipedia.org/wiki/Maryam_Booth", photo: "" },

  { name: "Nafisat Abdullahi", country: "Nigeria", field: "Arts & media",
    role: "Actress, director and filmmaker",
    story: "Works across Kannywood and Nollywood.",
    source: "https://en.wikipedia.org/wiki/Nafisat_Abdullahi", photo: "" },

  { name: "Saratu Gidado", country: "Nigeria", field: "Arts & media",
    role: "Actress (1968–2024)",
    story: "Known as Daso, she was one of Kannywood's most loved actresses for more than two decades.",
    source: "https://en.wikipedia.org/wiki/Saratu_Gidado", photo: "" },

  { name: "Fati Muhammad", country: "Nigeria", field: "Arts & media",
    role: "Actress",
    story: "A Kannywood pioneer who also led a national public-health awareness campaign.",
    source: "https://en.wikipedia.org/wiki/Fati_Muhammad", photo: "" },

  { name: "Hauwa Ibrahim", country: "Nigeria", field: "Advocacy",
    role: "Human rights lawyer",
    story: "Defended women facing death sentences in Sharia courts and won the European Parliament's Sakharov Prize in 2005.",
    source: "https://en.wikipedia.org/wiki/Hauwa_Ibrahim", photo: "" },

  { name: "Saudatu Mahdi", country: "Nigeria", field: "Advocacy",
    role: "Women's rights advocate",
    story: "Secretary General of WRAPA and author of more than 20 books on women's rights, Sharia and education.",
    source: "https://en.wikipedia.org/wiki/Saudatu_Mahdi", photo: "" },

  { name: "Laila Dogonyaro", country: "Nigeria", field: "Advocacy",
    role: "Activist (1944–2011)",
    story: "President of the National Council of Women's Societies and an early leader of Jam'iyyar Matan Arewa.",
    source: "https://en.wikipedia.org/wiki/Laila_Dogonyaro", photo: "" },

  { name: "Hajiya Naja'atu Mohammed", country: "Nigeria", field: "Advocacy",
    role: "Politician and activist",
    story: "A long-time political organiser in the tradition of Aminu Kano's people's politics.",
    source: "https://en.wikipedia.org/wiki/Hajiya_N%C3%A0ja'atu_Mohammed", photo: "" },

  { name: "Hauwa Ojeifo", country: "Nigeria", field: "Health & science",
    role: "Mental health advocate",
    story: "Founder of She Writes Woman and the first person with a mental health condition to speak to Nigeria's parliament about mental health rights.",
    source: "https://en.wikipedia.org/wiki/Hauwa_Ojeifo", photo: "" },

  { name: "Fatima Kyari Mohammed", country: "Nigeria", field: "Leadership",
    role: "Diplomat",
    story: "Served as the African Union's Permanent Observer to the United Nations.",
    source: "https://en.wikipedia.org/wiki/Fatima_Kyari_Mohammed", photo: "" },

  { name: "Amina Zakari", country: "Nigeria", field: "Leadership",
    role: "Electoral official",
    story: "Served as acting chair of Nigeria's Independent National Electoral Commission.",
    source: "https://en.wikipedia.org/wiki/Amina_Zakari", photo: "" },

  { name: "Fatima Waziri-Azi", country: "Nigeria", field: "Leadership",
    role: "Lawyer and public servant",
    story: "Led NAPTIP, Nigeria's anti-human-trafficking agency, after years as a law lecturer.",
    source: "https://en.wikipedia.org/wiki/Fatima_Waziri-Azi", photo: "" },

  { name: "Farida Waziri", country: "Nigeria", field: "Leadership",
    role: "Former EFCC Chair",
    story: "A senior police officer who chaired the Economic and Financial Crimes Commission.",
    source: "https://en.wikipedia.org/wiki/Farida_Waziri", photo: "" },

  { name: "Maryam Uwais", country: "Nigeria", field: "Leadership",
    role: "Lawyer and social policy leader",
    story: "Led Nigeria's National Social Investment Programmes as special adviser to the president from 2015 to 2023.",
    source: "https://en.wikipedia.org/wiki/Maryam_Uwais", photo: "" },

  { name: "Abike Dabiri", country: "Nigeria", field: "Leadership",
    role: "Founding chair, Nigerians in Diaspora Commission",
    story: "A former broadcaster and member of the House of Representatives for Ikorodu.",
    source: "https://en.wikipedia.org/wiki/Abike_Dabiri", photo: "" },

  { name: "Aisha Alhassan", country: "Nigeria", field: "Leadership",
    role: "Lawyer and politician (1959–2021)",
    story: "Known as Mama Taraba, she was a senator and later Federal Minister of Women Affairs.",
    source: "https://en.wikipedia.org/wiki/Aisha_Alhassan", photo: "" },

  { name: "Aisha Abubakar", country: "Nigeria", field: "Leadership",
    role: "Former Minister of State",
    story: "Served as Minister of State for Industry, Trade and Investment from 2015.",
    source: "https://en.wikipedia.org/wiki/Aisha_Abubakar", photo: "" },

  { name: "Maryam Ciroma", country: "Nigeria", field: "Leadership",
    role: "Former Minister of Women Affairs",
    story: "Served as Nigeria's Minister of Women Affairs from 2005 to 2007.",
    source: "https://en.wikipedia.org/wiki/Maryam_Ciroma", photo: "" },

  { name: "Zainab Maina", country: "Nigeria", field: "Leadership",
    role: "Former Minister of Women Affairs",
    story: "Served as Minister of Women Affairs and Social Development from 2011.",
    source: "https://en.wikipedia.org/wiki/Zainab_Maina", photo: "" },

  { name: "Salamatu Hussaini Suleiman", country: "Nigeria", field: "Leadership",
    role: "Lawyer and public administrator",
    story: "Served as Minister of Women Affairs and later as an ECOWAS commissioner.",
    source: "https://en.wikipedia.org/wiki/Salamatu_Hussaini_Suleiman", photo: "" },

  { name: "Gbemisola Saraki", country: "Nigeria", field: "Leadership",
    role: "Former Minister of State",
    story: "A former senator who served as Minister of State for Transportation and then for Mines and Steel Development.",
    source: "https://en.wikipedia.org/wiki/Gbemisola_Saraki", photo: "" },

  { name: "Khadija Bukar Abba Ibrahim", country: "Nigeria", field: "Leadership",
    role: "Politician",
    story: "Served as Minister of State for Foreign Affairs and represents her Yobe constituencies in the House of Representatives.",
    source: "https://en.wikipedia.org/wiki/Khadija_Abba_Ibrahim", photo: "" },

  { name: "Aishatu Dahiru Ahmed", country: "Nigeria", field: "Leadership",
    role: "Politician and entrepreneur",
    story: "Known as Aisha Binani, she was senator for Adamawa Central from 2019 to 2023.",
    source: "https://en.wikipedia.org/wiki/Aishatu_Dahiru_Ahmed", photo: "" },

  { name: "Aishatu Jibril Dukku", country: "Nigeria", field: "Leadership",
    role: "Educationist and politician",
    story: "A former school principal who served as Minister of State for Education.",
    source: "https://en.wikipedia.org/wiki/Aishatu_Jibril_Dukku", photo: "" },

  { name: "Ramatu Tijani Aliyu", country: "Nigeria", field: "Leadership",
    role: "Former Minister of State, FCT",
    story: "Served as Minister of State for the Federal Capital Territory from 2019 to 2023.",
    source: "https://en.wikipedia.org/wiki/Ramatu_Tijani_Aliyu", photo: "" },

  { name: "Mariya Mahmoud Bunkure", country: "Nigeria", field: "Health & science",
    role: "Medical doctor and minister",
    story: "Minister of State for the Federal Capital Territory since 2023 and former Kano commissioner for higher education.",
    source: "https://en.wikipedia.org/wiki/Mariya_Mahmoud_Bunkure", photo: "" },

  { name: "Hannatu Musawa", country: "Nigeria", field: "Leadership",
    role: "Minister of Art, Culture and Creative Economy",
    story: "A lawyer and author appointed to lead Nigeria's creative economy ministry in 2023.",
    source: "https://en.wikipedia.org/wiki/Hannatu_Musawa", photo: "" },

  { name: "Hadiza Balarabe", country: "Nigeria", field: "Health & science",
    role: "Medical doctor and deputy governor",
    story: "The first female deputy governor of Kaduna State under democratic rule.",
    source: "https://en.wikipedia.org/wiki/Hadiza_Balarabe", photo: "" },

  { name: "Zainab Abdulkadir Kure", country: "Nigeria", field: "Leadership",
    role: "Former senator",
    story: "Represented Niger South in the Senate from 2007 to 2015.",
    source: "https://en.wikipedia.org/wiki/Zainab_Abdulkadir_Kure", photo: "" },

  { name: "Mulikat Akande-Adeola", country: "Nigeria", field: "Leadership",
    role: "Lawyer and politician",
    story: "Rose to become majority leader of the House of Representatives.",
    source: "https://en.wikipedia.org/wiki/Mulikat_Akande-Adeola", photo: "" },

  { name: "Fatimat Raji-Rasaki", country: "Nigeria", field: "Leadership",
    role: "Former senator",
    story: "Served as a senator and earlier as first lady of Ogun, Ondo and Lagos States.",
    source: "https://en.wikipedia.org/wiki/Fatimat_Raji-Rasaki", photo: "" },

  { name: "Halima Tayo Alao", country: "Nigeria", field: "Leadership",
    role: "Architect and former minister",
    story: "An architect who served as Minister of Environment and Housing.",
    source: "https://en.wikipedia.org/wiki/Halima_Tayo_Alao", photo: "" },

  { name: "Jamila Bio Ibrahim", country: "Nigeria", field: "Leadership",
    role: "Medical doctor and former Minister of Youth",
    story: "A development specialist and SDGs advocate who was appointed Minister of Youth in 2023.",
    source: "https://en.wikipedia.org/wiki/Jamila_Bio_Ibrahim", photo: "" },

  { name: "Amina Titi Atiku-Abubakar", country: "Nigeria", field: "Advocacy",
    role: "Women and child rights advocate",
    story: "Founded WOTCLEF to fight human trafficking and child labour, work that helped lead to the creation of NAPTIP.",
    source: "https://en.wikipedia.org/wiki/Amina_Titi_Atiku-Abubakar", photo: "" },

  { name: "Aisha Buhari", country: "Nigeria", field: "Advocacy",
    role: "Former First Lady of Nigeria",
    story: "A beauty therapist by training who ran the Future Assured programme for women's and children's health.",
    source: "https://en.wikipedia.org/wiki/Aisha_Buhari", photo: "" },

  { name: "Hajiya Haidzatu Ahmed", country: "Nigeria", field: "Leadership",
    role: "Queen of Kumbwada (1966–2021)",
    story: "A traditional ruler who stood firmly against domestic violence and championed girls' education.",
    source: "https://en.wikipedia.org/wiki/Hajiya_Haidzatu_Ahmed", photo: "" },

  { name: "Asisat Oshoala", country: "Nigeria", field: "Sport",
    role: "Footballer, Super Falcons",
    story: "A record six-time African Women's Footballer of the Year.",
    source: "https://en.wikipedia.org/wiki/Asisat_Oshoala", photo: "" },

  { name: "Rasheedat Ajibade", country: "Nigeria", field: "Sport",
    role: "Footballer and Super Falcons captain",
    story: "A forward who captains Nigeria's women's national team.",
    source: "https://en.wikipedia.org/wiki/Rasheedat_Ajibade", photo: "" },

  { name: "Halimat Ismaila", country: "Nigeria", field: "Sport",
    role: "Sprinter",
    story: "Won an Olympic bronze medal for Nigeria in the 4 × 100 m relay at Beijing 2008.",
    source: "https://en.wikipedia.org/wiki/Halimat_Ismaila", photo: "" },

  { name: "Zulfat Suara", country: "Nigeria · USA", field: "Leadership",
    role: "Councilwoman, Nashville",
    story: "A Nigerian-American accountant who became the first Muslim elected to Nashville's Metro Council.",
    source: "https://en.wikipedia.org/wiki/Zulfat_Suara", photo: "" },

  { name: "Samia Suluhu Hassan", country: "Tanzania", field: "Leadership",
    role: "President of Tanzania",
    story: "Became Tanzania's first woman president in 2021.",
    source: "https://en.wikipedia.org/wiki/Samia_Suluhu_Hassan", photo: "" },

  { name: "Ameenah Gurib-Fakim", country: "Mauritius", field: "Health & science",
    role: "Scientist and former President of Mauritius",
    story: "A biodiversity scientist who served as President of Mauritius from 2015 to 2018.",
    source: "https://en.wikipedia.org/wiki/Ameenah_Gurib-Fakim", photo: "" },

  { name: "Fatou Bensouda", country: "Gambia", field: "Leadership",
    role: "Lawyer and diplomat",
    story: "Served as Prosecutor of the International Criminal Court from 2012 to 2021.",
    source: "https://en.wikipedia.org/wiki/Fatou_Bensouda", photo: "" },

  { name: "Zainab Bangura", country: "Sierra Leone", field: "Leadership",
    role: "Diplomat and activist",
    story: "Served as the UN's Special Representative on Sexual Violence in Conflict, then led the UN Office at Nairobi.",
    source: "https://en.wikipedia.org/wiki/Zainab_Bangura", photo: "" },

  { name: "Amina Mohamed", country: "Kenya", field: "Leadership",
    role: "Lawyer and diplomat",
    story: "Held several Kenyan cabinet posts, including Foreign Affairs and Sports, Heritage and Culture.",
    source: "https://en.wikipedia.org/wiki/Amina_Mohamed", photo: "" },

  { name: "Fatma Samoura", country: "Senegal", field: "Leadership",
    role: "Former FIFA Secretary General",
    story: "The first woman to serve as FIFA's Secretary General, after two decades at the United Nations.",
    source: "https://en.wikipedia.org/wiki/Fatma_Samoura", photo: "" },

  { name: "Alima Mahama", country: "Ghana", field: "Leadership",
    role: "Lawyer and diplomat",
    story: "Ghana's first female ambassador to the United States and former Minister for Women and Children.",
    source: "https://en.wikipedia.org/wiki/Alima_Mahama", photo: "" },

  { name: "Muferiat Kamil", country: "Ethiopia", field: "Leadership",
    role: "Minister and former Speaker",
    story: "Served as Speaker of Ethiopia's House of Peoples' Representatives and later as Minister of Labour and Skills.",
    source: "https://en.wikipedia.org/wiki/Muferiat_Kamil", photo: "" },

  { name: "Rawya Ateya", country: "Egypt", field: "Leadership",
    role: "Parliamentarian (1926–1997)",
    story: "Became the first woman elected to parliament in the Arab world, in 1957.",
    source: "https://en.wikipedia.org/wiki/Rawya_Ateya", photo: "" },

  { name: "Ilhan Omar", country: "Somalia · USA", field: "Leadership",
    role: "U.S. Representative",
    story: "A Somali-born former refugee who has represented Minnesota in the U.S. Congress since 2019.",
    source: "https://en.wikipedia.org/wiki/Ilhan_Omar", photo: "" },

  { name: "Khadija Arib", country: "Morocco · Netherlands", field: "Leadership",
    role: "Former Speaker of the Dutch House",
    story: "A Moroccan-born politician who served as Speaker of the Dutch House of Representatives from 2015 to 2021.",
    source: "https://en.wikipedia.org/wiki/Khadija_Arib", photo: "" },

  { name: "Fadumo Dayib", country: "Somalia", field: "Leadership",
    role: "Politician",
    story: "The first woman to run for President of Somalia, in 2016.",
    source: "https://en.wikipedia.org/wiki/Fadumo_Dayib", photo: "" },

  { name: "Huda Sha'arawi", country: "Egypt", field: "Advocacy",
    role: "Feminist leader (1879–1947)",
    story: "Founded the Egyptian Feminist Union and led the early struggle for women's rights in Egypt.",
    source: "https://en.wikipedia.org/wiki/Huda_Sha'arawi", photo: "" },

  { name: "Fatima Ahmed Ibrahim", country: "Sudan", field: "Advocacy",
    role: "Writer and women's rights leader (c.1930–2017)",
    story: "A pioneer of Sudan's women's movement and the country's first female member of parliament.",
    source: "https://en.wikipedia.org/wiki/Fatima_Ahmed_Ibrahim", photo: "" },

  { name: "Amina Cachalia", country: "South Africa", field: "Advocacy",
    role: "Anti-apartheid activist (1930–2013)",
    story: "A women's rights campaigner and close ally of Nelson Mandela.",
    source: "https://en.wikipedia.org/wiki/Amina_Cachalia", photo: "" },

  { name: "Fatima Meer", country: "South Africa", field: "Advocacy",
    role: "Writer and activist (1928–2010)",
    story: "An academic and anti-apartheid leader who wrote Mandela's first authorised biography.",
    source: "https://en.wikipedia.org/wiki/Fatima_Meer", photo: "" },

  { name: "Isatou Ceesay", country: "Gambia", field: "Advocacy",
    role: "Social entrepreneur",
    story: "Called the Queen of Recycling, she trains women to turn plastic waste into income.",
    source: "https://en.wikipedia.org/wiki/Isatou_Ceesay", photo: "" },

  { name: "Ilwad Elman", country: "Somalia", field: "Advocacy",
    role: "Peace and human rights activist",
    story: "Works with her mother at the Elman Peace Centre in Mogadishu, supporting survivors and young people.",
    source: "https://en.wikipedia.org/wiki/Ilwad_Elman", photo: "" },

  { name: "Ifrah Ahmed", country: "Somalia · Ireland", field: "Advocacy",
    role: "Activist",
    story: "Campaigns to end female genital mutilation and founded the Ifrah Foundation.",
    source: "https://en.wikipedia.org/wiki/Ifrah_Ahmed", photo: "" },

  { name: "Asma Khalifa", country: "Libya", field: "Advocacy",
    role: "Peace activist",
    story: "A women's rights and peace activist who won the Luxembourg Peace Prize in 2016.",
    source: "https://en.wikipedia.org/wiki/Asma_Khalifa", photo: "" },

  { name: "Hodan Nalayeh", country: "Somalia · Canada", field: "Arts & media",
    role: "Media executive (1976–2019)",
    story: "Founded Integration TV to share positive stories of Somali communities around the world.",
    source: "https://en.wikipedia.org/wiki/Hodan_Nalayeh", photo: "" },

  { name: "Rana el Kaliouby", country: "Egypt · USA", field: "Tech",
    role: "AI scientist and co-founder of Affectiva",
    story: "A pioneer of emotion AI who co-founded Affectiva, and author of the memoir Girl Decoded.",
    source: "https://en.wikipedia.org/wiki/Rana_el_Kaliouby", photo: "" },

  { name: "Zeinab Elobeid Yousif", country: "Sudan", field: "Tech",
    role: "Aircraft engineer (1952–2016)",
    story: "The first Sudanese woman licensed as an aircraft engineer by the country's Civil Aviation Authority.",
    source: "https://en.wikipedia.org/wiki/Zeinab_Elobeid_Yousif", photo: "" },

  { name: "Edna Adan Ismail", country: "Somaliland", field: "Health & science",
    role: "Nurse-midwife and hospital founder",
    story: "Built the Edna Adan Maternity Hospital in Hargeisa and served as Somaliland's first female Foreign Minister.",
    source: "https://en.wikipedia.org/wiki/Edna_Adan_Ismail", photo: "" },

  { name: "Hawa Abdi", country: "Somalia", field: "Health & science",
    role: "Physician and human rights activist (1947–2020)",
    story: "Turned her family farm into a hospital and camp that sheltered tens of thousands during Somalia's civil war.",
    source: "https://en.wikipedia.org/wiki/Hawa_Abdi", photo: "" },

  { name: "Fatima al-Fihri", country: "Morocco", field: "Faith & scholarship",
    role: "Founder of al-Qarawiyyin (9th century)",
    story: "Founded the al-Qarawiyyin mosque in Fez in 859, which grew into one of the world's oldest continuously operating universities.",
    source: "https://en.wikipedia.org/wiki/Fatima_al-Fihriya", photo: "" },

  { name: "Fatema Mernissi", country: "Morocco", field: "Faith & scholarship",
    role: "Sociologist and writer (1940–2015)",
    story: "One of the most influential Muslim feminist scholars of the 20th century.",
    source: "https://en.wikipedia.org/wiki/Fatema_Mernissi", photo: "" },

  { name: "Asma Lamrabet", country: "Morocco", field: "Faith & scholarship",
    role: "Doctor and Islamic scholar",
    story: "A physician and author known for her writing on women in the Qur'an.",
    source: "https://en.wikipedia.org/wiki/Asma_Lamrabet", photo: "" },

  { name: "Leila Aboulela", country: "Sudan · UK", field: "Literature",
    role: "Novelist",
    story: "A Sudanese writer whose novels, including Minaret, explore faith and migration.",
    source: "https://en.wikipedia.org/wiki/Leila_Aboulela", photo: "" },

  { name: "Mariama Bâ", country: "Senegal", field: "Literature",
    role: "Novelist (1929–1981)",
    story: "Wrote So Long a Letter, a classic of African literature translated into more than a dozen languages.",
    source: "https://en.wikipedia.org/wiki/Mariama_B%C3%A2", photo: "" },

  { name: "Asma Elbadawi", country: "Sudan · UK", field: "Sport",
    role: "Poet, basketball player and coach",
    story: "Successfully campaigned for FIBA to lift its ban on hijabs and religious head coverings.",
    source: "https://en.wikipedia.org/wiki/Asma_Elbadawi", photo: "" },

  { name: "Halima Aden", country: "Somalia · USA", field: "Arts & media",
    role: "Model",
    story: "Born in a Kenyan refugee camp, she became the first woman to wear a hijab in the Miss Minnesota USA pageant.",
    source: "https://en.wikipedia.org/wiki/Halima_Aden", photo: "" },

  { name: "Nawal El Moutawakel", country: "Morocco", field: "Sport",
    role: "Olympic champion",
    story: "Won 400 m hurdles gold in 1984, the first Olympic gold for an African, Arab and Muslim woman.",
    source: "https://en.wikipedia.org/wiki/Nawal_El_Moutawakel", photo: "" },

  { name: "Hassiba Boulmerka", country: "Algeria", field: "Sport",
    role: "Olympic champion",
    story: "Won Algeria's first-ever Olympic gold medal, in the 1500 m at Barcelona 1992.",
    source: "https://en.wikipedia.org/wiki/Hassiba_Boulmerka", photo: "" },

  { name: "Habiba Ghribi", country: "Tunisia", field: "Sport",
    role: "Olympic medallist",
    story: "Won the first Olympic medal by a Tunisian woman, in the 3000 m steeplechase.",
    source: "https://en.wikipedia.org/wiki/Habiba_Ghribi", photo: "" },

  { name: "Ons Jabeur", country: "Tunisia", field: "Sport",
    role: "Tennis player",
    story: "Reached world number two, the highest ranking ever for an African or Arab player.",
    source: "https://en.wikipedia.org/wiki/Ons_Jabeur", photo: "" },

  { name: "Feryal Abdelaziz", country: "Egypt", field: "Sport",
    role: "Olympic karate champion",
    story: "The first Egyptian woman to win an Olympic gold medal, at Tokyo 2020.",
    source: "https://en.wikipedia.org/wiki/Feryal_Abdelaziz", photo: "" }
];

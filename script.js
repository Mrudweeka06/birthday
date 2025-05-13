const memories = {
  "2024-12-26": "First day manam open up aina roju it means ni gurinchi motham cheppav and nen kuda cheppina.2hrs 16min 24sec call matladinam",
  "2024-12-31": "Last day of year 3hr mad lab la ni pakkana kurchunna.Nak java nerpinchav thats the first time.",
  "2025-01-01": "New year thaguthav kadha wish cheyadam marichipothav anukunna but u wished the best for my new year.nuv na venakala unta ani cheppav a situation lo aina marichipoku that is the fist day u said me ilove uh heartful ka kakapovochu but it made me happy",
  "2025-01-11":"Train lo sdpt pothunte call for hrs.",
  "2025-01-12":"Intiki vellina first day call chesi said about ur investment.",
  "2025-01-13":"Mrng mrng good news nik profit ochindhi ani.",
  "2025-01-15":"Bore kodthundi ani truth and dare adinam (said about vaishu and shivani).",
  "2025-01-16":"Night 5hrs matladukunnam(truth and dare) 10 nunchi 3 varaku(1809 msgs in 5hrs).",
  "2025-01-24":"First time short dress veskoni pic pettina uh melted",
  "2025-01-25":"Normal talk but 3hrs call.",
  "2025-01-28":"Our first kiss,hug,and even romance day.a roju first time nak thinipinchadam.",
  "2025-02-01":"Nannu drop cheyataniki first time busstand ki ochav.",
  "2025-02-04":"First bike ride.",
  "2025-02-08":"Second time romance(4 rounds with new poster).",
  "2025-03-02":"Third time romance (6 rounds).",
  "2025-03-14":"Hero heroine movie game adinam.",
  "2025-03-24":"Question ichi solve chesthe kiss annav.andharubio petti vellipoyaka fist time clg lo kiss hug.",
  "2025-03-26":"Bath chesthu vid call.",
  "2025-04-04":"Exams aipoyai oyo lo mana first night.",
  "2025-04-05":"First mrng together(night full romance).",
  "2025-04-15":"Traditional day (kiss hug).",
  "2025-04-16":"Anual day kiss hug.",
  "2025-04-17":"Dj night 1st block 3rd floor sex.",
  "2025-04-30":"Inka a intlo adhe last time meet.",
};

function showMemory() {
  const date = document.getElementById('dateInput').value;
  const memoryText = memories[date];
  const memoryDisplay = document.getElementById('memory');

  if (memoryText) {
    memoryDisplay.innerText = memoryText;
  } else {
    memoryDisplay.innerText = "No memory recorded for this date.";
  }
}

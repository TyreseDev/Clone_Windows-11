localStorage['currentPage'] = 'about';

let aboutDescriptionElement = document.querySelector('#about-description');

let i = 0;
let txt =
  "Saya Deri Kurniawan, Seorang Full Stack Web Developer yang saat ini masih ber-status sebagai mahasiswa di Universitas Muhammadiyah Sukabumi Dengan Jurusan Teknik Informatika. Saya seorang yang menyukai hal baru, Saya sangat senang jika berurusan dengan teknologi, termasuk dalam merancang, membangun, mengembangkan dan mewujudkan sesuatu yang dapat bermanfaat untuk berbagai sektor. Untuk itulah alasan saya memilih jurusan Teknik Informatika.";
let speed = 10;

const abilitiesElement = document.querySelector('#abilities-list');

const abilitiesData = [
  {
    name: "HTML",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
  },
  {
    name: "PHP",
    level: "Advanced",
  },
  {
    name: "MySQL",
    level: "Upper Intermediate",
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
  },
  {
    name: "Python",
    level: "Elementary",
  },
  {
    name: "CodeIgniter",
    level: "Upper Intermediate",
  },
  {
    name: "Laravel",
    level: "Elementary",
  },
  {
    name: "Express JS",
    level: "Intermediate",
  },
  {
    name: "Hapi JS",
    level: "Elementary",
  },
  {
    name: "Flutter",
    level: "Elementary",
  },
];

abilitiesElement.innerHTML += `
<tr class="bg-danger text-light">
  <th>Skill</th>
  <th>Level</th>
</tr>
`;

abilitiesData.forEach((ability) => {
  abilitiesElement.innerHTML += `
  <tr>
    <td>${ability.name}</td>
    <td>
      ${ability.level}
    </td>
  </tr>
  `;
});

$("#typewriter-name").typer({
  strings: [
    "About Me",
  ],
  typeSpeed: 100,
  backspaceSpeed: 20,
  backspaceDelay: 800,
  repeatDelay: 500,
  repeat: true,
  autoStart: true,
  startDelay: 100,
});

$("#typewriter-bio").typer({
  strings: [
    "My Bio",
  ],
  typeSpeed: 100,
  backspaceSpeed: 20,
  backspaceDelay: 800,
  repeatDelay: 500,
  repeat: true,
  autoStart: true,
  startDelay: 100,
});

$("#typewriter-ability").typer({
  strings: [
    "My Ability",
  ],
  typeSpeed: 100,
  backspaceSpeed: 20,
  backspaceDelay: 800,
  repeatDelay: 500,
  repeat: true,
  autoStart: true,
  startDelay: 100,
});

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    aboutDescriptionElement.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let clickCountNextAboutBtn = 1;

if (clickCountNextAboutBtn == 1) {
  $('#slide-about-1').show();
  $('#slide-about-2').hide();
  $('#slide-about-3').hide();
}

$('#about-next-btn').on('click', function () {
  clickCountNextAboutBtn += 1;
  if (clickCountNextAboutBtn > 3) {
    clickCountNextAboutBtn = 1;
  }

  switch (clickCountNextAboutBtn) {
    case 1:
      $('#slide-about-1').show();
      $('#slide-about-2').hide();
      $('#slide-about-3').hide();
      break;
    case 2:
      $('#slide-about-1').hide();
      $('#slide-about-2').show();
      $('#slide-about-3').hide();
      break;
    case 3:
      $('#slide-about-1').hide();
      $('#slide-about-2').hide();
      $('#slide-about-3').show();
      break;

    default:
      break;
  }
});
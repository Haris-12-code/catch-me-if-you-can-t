const levels = [
  { id: 1, name: 'Level 1' },
  { id: 2, name: 'Level 2' },
  { id: 3, name: 'Level 3' },
  { id: 4, name: 'Level 4' },
  { id: 5, name: 'Level 5' }
];

const charactersByLevel = {
  1: [
    { name: "Cat", image: "https://i.postimg.cc/nhNH0pT4/Pngtreea-cartoon-cat-16176361-1-optimized-1000.png" },
    { name: "Ghost", image: "https://i.postimg.cc/x8FKZXXj/Pngtree-sticker-halloween-cute-ghost-13010111.png" },
    { name: "Skull", image: "https://i.postimg.cc/ZRcd2Vfx/pexels-cottonbro-6502299.jpg" },
    { name: "Alien", image: "https://i.postimg.cc/tTw8WNbp/dynamic-wang-TQFtvt-TLMAg-unsplash.jpg" },
    { name: "Clown", image: "https://i.postimg.cc/Dwrzy5sV/erik-mclean-dh3-Jr-DKh-Mc-Y-unsplash.jpg" }
  ],
  2: [
    { name: "Robot", image: "https://i.postimg.cc/hGc4Fb4V/robot-2697683-1280.png" },
    { name: "Witch", image: "https://i.postimg.cc/xTX3HL2G/witch-908939-1280.jpg" },
    { name: "Monster", image: "https://i.postimg.cc/15DKRw1v/monster-5022326-1280.jpg" },
    { name: "Pumpkin", image: "https://i.postimg.cc/vHPZVSyT/harvest-4454745-1280.jpg" },
    { name: "Mummy", image: "https://i.postimg.cc/tRSKt0sK/egyptian-sculpture-6655820-1280.jpg" }
  ],
  3: [
    { name: "Vampire", image: "https://i.postimg.cc/J0L5jzbN/bat-1268650-1280.jpg" },
    { name: "Zombie", image: "https://i.postimg.cc/J0HCHK5D/zombie-2815482-1280.jpg" },
    { name: "Pirate", image: "https://i.postimg.cc/TYHQ4fG6/skull-1193784-1280.jpg" },
    { name: "Knight", image: "https://i.postimg.cc/MZBQSwyw/knight-2466314-1280.png" },
    { name: "Wizard", image: "https://i.postimg.cc/tRsLRSTp/wizard-3042838-1280.jpg" }
  ],
  4: [
    { name: "Dragon", image: "https://i.postimg.cc/zfWy1Sgj/dragon-238931-1280.jpg" },
    { name: "Demon", image: "https://i.postimg.cc/Nf6yVxRk/demon-pics.jpg" },
    { name: "Ninja", image: "https://i.postimg.cc/bNgykVQW/ninja-pics.jpg" },
    { name: "Werewolf", image: "https://i.postimg.cc/k5xhRzSt/werewolf-pics.jpg" },
    { name: "Angel", image: "https://i.postimg.cc/qvc8sTm0/angel-pics.webp" }
  ],
  5: [
    { name: "Cyborg", image: "https://i.postimg.cc/W4bXtzsx/cyborg.webp" },
    { name: "Pharaoh", image: "https://i.postimg.cc/SxVG04cd/paraoh.png" },
    { name: "Genie", image: "https://i.postimg.cc/yxQV4kYB/genie.jpg" },
    { name: "Astronaut", image: "https://i.postimg.cc/cJZPhd0c/astronaut.jpg" },
    { name: "Samurai", image: "https://i.postimg.cc/jjSYKRmS/samurai.jpg" }
  ]
};

const hintSets = {
  1: {
    "Cat": [
      "It moves silently and loves to nap.",
      "Whiskers, fur, and sharp reflexes.",
      "You’ve probably seen this animal chase mice.",
      "It purrs when it’s happy.",
      "Can land on its feet from high places."
    ],
    "Ghost": [
      "It’s not alive, but it’s around.",
      "Often appears in haunted places.",
      "You might feel a chill when it’s near.",
      "Usually white and floaty.",
      "Boo!"
    ],
    "Skull": [
      "It's always grinning but never alive.",
      "Represents death and danger.",
      "Found in pirate flags.",
      "No eyes, but still stares.",
      "What’s left when everything else is gone."
    ],
    "Alien": [
      "Definitely not from around here.",
      "Has traveled across galaxies.",
      "You might see it in UFOs.",
      "Not human, not animal.",
      "Its language is out of this world."
    ],
    "Clown": [
      "Always wearing a smile, real or not.",
      "You’d usually see it in a circus.",
      "Colorful, funny, or sometimes scary.",
      "It entertains… or haunts your dreams.",
      "Painted face, big shoes."
    ]
  },
  2: {
    "Robot": [
      "It runs on code and circuits.",
      "Made of metal, not muscle.",
      "Follows commands without emotions.",
      "Can be programmed for tasks.",
      "Its heart is a processor."
    ],
    "Witch": [
      "Knows spells and brews potions.",
      "Rides a broomstick at night.",
      "Often wears a pointy hat.",
      "Can curse or charm.",
      "Lives deep in the forest."
    ],
    "Monster": [
      "Lurks in the dark.",
      "Big, scary, and unpredictable.",
      "Might live under your bed.",
      "It’s not human, but walks like one.",
      "Terrifies with its look."
    ],
    "Pumpkin": [
      "Often carved with a spooky face.",
      "Orange and round.",
      "You’ll see it in Halloween decorations.",
      "Its smile is made with a knife.",
      "A vegetable turned creepy."
    ],
    "Mummy": [
      "Wrapped head to toe.",
      "Slept for thousands of years.",
      "Came from ancient tombs.",
      "It’s bandaged but not injured.",
      "Walks slowly but never stops."
    ]
  },
  3: {
    "Vampire": [
      "Sleeps in a coffin by day.",
      "Can’t be seen in mirrors.",
      "Avoids garlic and sunlight.",
      "Drinks something red.",
      "Has very sharp teeth."
    ],
    "Zombie": [
      "Walks slowly and moans.",
      "Once alive, now not quite.",
      "Always hungry for brains.",
      "Looks rotten but moves.",
      "Can’t feel pain, but won’t stop."
    ],
    "Pirate": [
      "Sails the sea, searching for treasure.",
      "Says 'Arrr!' a lot.",
      "Wears an eye patch or hat.",
      "Might have a parrot on shoulder.",
      "X marks the spot."
    ],
    "Knight": [
      "Wears armor and wields a sword.",
      "Protects kingdoms.",
      "Rides horses into battle.",
      "Follows a code of honor.",
      "Serves a king or queen."
    ],
    "Wizard": [
      "Casts spells with a wand.",
      "Knows ancient magic.",
      "Wears long robes.",
      "Usually has a long beard.",
      "Wise and powerful."
    ]
  },
  4: {
    "Dragon": [
      "Breathes fire.",
      "Has wings and scales.",
      "Guards treasure in caves.",
      "Flies high in legends.",
      "Feared in fairy tales."
    ],
    "Demon": [
      "From the underworld.",
      "Not from this world — dark and evil.",
      "Has horns and a fiery stare.",
      "Brings chaos, not peace.",
      "Represents temptation."
    ],
    "Ninja": [
      "Silent and fast.",
      "Disappears in the blink of an eye.",
      "Uses throwing stars.",
      "Wears black and blends in.",
      "You won’t hear them coming."
    ],
    "Werewolf": [
      "Normal by day, wild at night.",
      "Full moon changes everything.",
      "Half-human, half-beast.",
      "Howls into the night.",
      "Covered in fur and fangs."
    ],
    "Angel": [
      "Wears white, not black.",
      "Has wings and a halo.",
      "Brings messages of peace.",
      "Protects, not harms.",
      "Good and graceful."
    ]
  },
  5: {
    "Cyborg": [
      "Part human, part machine.",
      "Has wires and thoughts.",
      "Stronger than a normal person.",
      "Tech runs through its veins.",
      "Upgraded beyond human limits."
    ],
    "Pharaoh": [
      "Ruled ancient Egypt.",
      "Wore a golden crown.",
      "Built pyramids, ruled empires.",
      "Wrapped in history.",
      "A king among sands."
    ],
    "Genie": [
      "Lives in a lamp.",
      "Grants three wishes.",
      "Powerful but trapped.",
      "Appears in smoke.",
      "Magical and mischievous."
    ],
    "Astronaut": [
      "Floats above Earth.",
      "Wears a white suit.",
      "Trained for zero gravity.",
      "Lives in space stations.",
      "Looks back at Earth."
    ],
    "Samurai": [
      "Carries a katana.",
      "Follows strict honor code.",
      "Serves a master.",
      "Dressed in armor with a topknot.",
      "Warrior of ancient Japan."
    ]
  }
};
let unlockedLevel = 1;
let correctCharacter = null;
let levelAttempts = {};

const titleScreen = document.getElementById('title-screen');
const levelSelect = document.getElementById('level-select');
const gameScreen = document.getElementById('game-screen');
const gameArea = document.getElementById('game-area');
const levelTitle = document.getElementById('level-title');
const levelsDiv = document.getElementById('levels');
const successSound = document.getElementById('success-sound');
const failSound = document.getElementById('fail-sound');

successSound.src = ''; // add base64 success sound
failSound.src = 'data:audio/wav;base64,UklGRiIAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0YeAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA='; // add base64 fail sound

document.getElementById('start-button').onclick = () => {
  titleScreen.classList.add('hidden');
  showLevelSelect();
};

document.getElementById('back-button').onclick = () => {
  gameScreen.classList.add('hidden');
  showLevelSelect();
};

function showLevelSelect() {
  levelSelect.classList.remove('hidden');
  levelsDiv.innerHTML = '';
  levels.forEach(level => {
    const btn = document.createElement('button');
    btn.textContent = level.name;
    btn.disabled = level.id > unlockedLevel;
    btn.onclick = () => startLevel(level.id);
    levelsDiv.appendChild(btn);
  });
}
function startLevel(levelNumber) {
  levelSelect.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  levelTitle.textContent = `Level ${levelNumber}`;

  gameArea.innerHTML = '';
  levelAttempts[levelNumber] = 0;
  // Shuffle characters and choose a new correct character every time
  const shuffled = [...charactersByLevel[levelNumber]].sort(() => Math.random() - 0.5);
  correctCharacter = shuffled[Math.floor(Math.random() * shuffled.length)];
  const firstHint = hintSets[levelNumber][correctCharacter.name][0];
  document.getElementById('hint-text').innerText = `🧠 Hint: ${firstHint}`;

  shuffled.forEach(char => {
    const div = document.createElement('div');
    div.className = 'character fade-in';
    div.innerHTML = `
      <img src="${char.image}" />
      <div class="label">${char.name}</div>
    `;
    div.onclick = () => {
      if (char.name.trim().toLowerCase() === correctCharacter.name.trim().toLowerCase()){
  successSound.play();
  setTimeout(() => {
    if (levelNumber === 5) {
      document.getElementById('game-win').classList.remove('hidden');
      gameScreen.classList.add('hidden');
    } else {
      alert('✅ Level Complete!');
      if (levelNumber === unlockedLevel && unlockedLevel < 5) unlockedLevel++;
      gameScreen.classList.add('hidden');
      showLevelSelect();
    }
  }, 300);
} else {
  if (!levelAttempts[levelNumber]) levelAttempts[levelNumber] = 1;
  else levelAttempts[levelNumber]++;
  const hint = hintSets[levelNumber][correctCharacter.name][levelAttempts[levelNumber] % hintSets[levelNumber][correctCharacter.name].length];
  document.getElementById('hint-text').innerText = `🧠 Hint: ${hint}`;
        failSound.play();
        setTimeout(() => {
  alert('❌ Wrong Character! Try again.');
}, 300);
      }
    };
    gameArea.appendChild(div);
  });
}
function goToMainMenu() {
  document.getElementById('game-win').classList.add('hidden');
  document.getElementById('title-screen').classList.remove('hidden');
}
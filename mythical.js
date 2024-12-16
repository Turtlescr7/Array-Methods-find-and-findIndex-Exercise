const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

// Task 1: Find the first creature of the "Water" type and log its name
const firstWaterCreature = mythicalCreatures.find(
  (creature) => creature.type === "Water"
);
console.log("First Water Creature:", firstWaterCreature.name);

// Task 2: Find the index of the "Griffin" and log it
const griffinIndex = mythicalCreatures.findIndex(
  (creature) => creature.name === "Griffin"
);
console.log("Index of Griffin:", griffinIndex);

// Task 3: Find the first creature last seen in "Enchanted Forest" and log it
const enchantedForestCreature = mythicalCreatures.find(
  (creature) => creature.lastSeen === "Enchanted Forest"
);
console.log(
  "First Creature in Enchanted Forest:",
  enchantedForestCreature.name
);

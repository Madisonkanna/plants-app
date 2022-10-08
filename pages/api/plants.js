// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const plants = [
    {
      name: "Amaranth (also Love-lies-bleeding)",
      care: {
        q1: "Plant in garden.",
      },
    },
    {
      name: "Asparagus",
      care: {
        q1: "Plant in garden.",
      },
    },
    {
      name: "Beans - climbing (also Pole beans, Runner beans, Scarlet Runners)",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Beans - dwarf (also French beans, Bush beans)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q2: "Plant in garden.",
      },
    },
    {
      name: "Beetroot (also Beets)",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Borage (also Burrage, Bugloss)",
      care: {
        q1: "Plant in garden.",
      },
    },
    {
      name: "Broccoli",
      care: {
        q1: "Plant out (transplant) seedlings.",
        q3: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Capsicum (also Bell peppers, Sweet peppers)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q2: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Carrot",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Cauliflower",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Celeriac",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
      },
    },
    {
      name: "Chilli peppers (also Hot peppers)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Collards (also Collard greens, Borekale)",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Coriander (also Cilantro, Chinese parsley)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
      },
    },
    {
      name: "Eggplant (also Aubergine)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
      },
    },
    {
      name: "Endive",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
      },
    },
    {
      name: "Fennel (also Bronze fennel)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
      },
    },
    {
      name: "Florence Fennel (also Finocchio)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
      },
    },
    {
      name: "Kale (also Borecole)",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Kohlrabi",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Leeks",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q2: "Plant in garden.",
      },
    },
    {
      name: "Marrow",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q2: "Plant in garden.",
      },
    },
    {
      name: "Mizuna (also Japanese Greens, Mitzuna, Mibuna)",
      care: {
        q1: "Plant in garden.",
      },
    },
    {
      name: "Mustard greens (also gai choy)",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Okra (also Ladyfinger, gumbo)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q2: "Plant in garden.",
      },
    },
    {
      name: "Oregano (also Pot Marjoram)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
      },
    },
    {
      name: "Pak Choy (also Pak choi)",
      care: {
        q1: "Plant in garden.",
      },
    },
    {
      name: "Peas",
      care: {
        q1: "Plant in garden.",
      },
    },
    {
      name: "Potato",
      care: {
        q1: "Plant in garden.",
      },
    },
    {
      name: "Radish",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Rocket (also Arugula/Rucola)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
      },
    },
    {
      name: "Rockmelon (also Canteloupe)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q2: "Plant in garden.",
      },
    },
    {
      name: "Rosella (also Queensland Jam Plant, Roselle)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
      },
    },
    {
      name: "Rosemary",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Rutabaga (also Swedes)",
      care: {
        q1: "Plant in garden.",
      },
    },
    {
      name: "Shallots (also Eschalots)",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Snow Peas (also Sugar Peas, Mangetout, Chinese Peas)",
      care: {
        q1: "Plant in garden.",
      },
    },
    {
      name: "Spinach (also English spinach)",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Spring onions (also Scallions, Bunching onions, Welsh onion)",
      care: {
        q1: "Plant in garden.",
      },
    },
    {
      name: "Strawberries (from seeds)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q2: "Plant out (transplant) seedlings.",
      },
    },
    {
      name: "Sunflower",
      care: {
        q1: "Plant in garden.",
      },
    },
    {
      name: "Sweet Marjoram (also Knotted marjoram)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
      },
    },
    {
      name: "Thyme (also Common thyme)",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Tomato",
      care: {
        q1: "Start undercover in seed trays and plant out in 4-6 weeks.",
        q2: "Plant in garden.",
      },
    },
    {
      name: "Turnip",
      care: {
        q1: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Basil",
      care: {
        q2: "Plant in garden.",
      },
    },
    {
      name: "Cowpeas (also Black eye peas, Southern peas)",
      care: {
        q2: "Plant in garden.",
        q3: "Plant in garden.",
      },
    },
    {
      name: "Cucumber",
      care: {
        q2: "Plant in garden.",
      },
    },
    {
      name: "Lettuce",
      care: {
        q2: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Luffa (also Loofah, plant sponge)",
      care: {
        q2: "Plant in garden.",
      },
    },
    {
      name: "Onion",
      care: {
        q2: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Parsley (also curly leaf parsley or flat leaf (Italian) parsley)",
      care: {
        q2: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Squash (also Crookneck, Pattypan, Summer squash)",
      care: {
        q2: "Plant in garden.",
      },
    },
    {
      name: "Strawberry Plants",
      care: {
        q2: "Plant in garden.",
        q4: "Plant in garden.",
      },
    },
    {
      name: "Sweet corn (also maize)",
      care: {
        q2: "Plant in garden.",
      },
    },
    {
      name: "Sweet Potato (also Kumara)",
      care: {
        q2: "Plant in garden.",
      },
    },
    {
      name: "Watermelon",
      care: {
        q2: "Plant in garden.",
      },
    },
    {
      name: "Brussels sprouts",
      care: {
        q4: "Plant in garden.",
      },
    },
    {
      name: "Cabbage",
      care: {
        q4: "Plant in garden.",
      },
    },
    {
      name: "Celery",
      care: {
        q4: "Plant in garden.",
      },
    },
    {
      name: "Chinese cabbage (also Wong bok, wong nga pak)",
      care: {
        q4: "Plant in garden.",
      },
    },
    {
      name: "Chives (also Garden chives)",
      care: {
        q4: "Plant in garden.",
      },
    },
    {
      name: "NZ Spinach (also Warrigal greens)",
      care: {
        q4: "Plant in garden.",
      },
    },
    {
      name: "Sage (also Common Sage)",
      care: {
        q4: "Plant in garden.",
      },
    },
  ];

  res.status(200).json(plants);
}

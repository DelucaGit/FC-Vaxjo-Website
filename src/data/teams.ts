/**
 * Training times shown on the site.
 * Later this list should come from the club API, the same source the app updates.
 *
 * Birth years from the design (P15 as 2015, P16 as 2016) do not match the team names,
 * so they are left out until the club confirms them.
 *
 * Mirnes has two numbers in the design. This file uses the training-page number.
 * The contact page uses 070-957 11 54. Confirm which one is right.
 */

export type Coach = {
  name: string;
  phone: string;
};

export type TrainingSession = {
  day: string;
  time: string;
};

export type Team = {
  id: string;
  name: string;
  group: string;
  pitch: string;
  sessions: TrainingSession[];
  coaches: Coach[];
};

export const teams: Team[] = [
  {
    id: "fotbollsskola",
    name: "Fotbollsskola",
    group: "Öppen träning",
    pitch: "Centrumskolan",
    sessions: [{ day: "Lördagar", time: "11:00–12:00" }],
    coaches: [],
  },
  {
    id: "p13",
    name: "P13",
    group: "Pojkar 13",
    pitch: "Centrumskolan",
    sessions: [
      { day: "Måndagar", time: "18:00–19:15" },
      { day: "Onsdagar", time: "18:15–19:39" },
    ],
    coaches: [
      { name: "Sakib", phone: "073-524 17 73" }
    ],
  },
  {
    id: "p15",
    name: "P15",
    group: "Pojkar 15",
    pitch: "Centrumskolan",
    sessions: [
      { day: "Måndagar", time: "17:00–18:00" },
      { day: "Torsdagar", time: "17:00–18:00" },
    ],
    coaches: [
      { name: "Irfan", phone: "072-151 86 64" }
    ],
  },
  {
    id: "p16",
    name: "P16",
    group: "Pojkar 16",
    pitch: "Centrumskolan",
    sessions: [{ day: "Lördagar", time: "12:00–13:00" }],
    coaches: [
      { name: "Rami", phone: "076-219 76 60" },
      { name: "Abrar", phone: "076-757 94 48" },
    ],
  },
];

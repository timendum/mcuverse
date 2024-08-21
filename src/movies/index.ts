const Phase1 = import("./phase1").then((p) => p.subs);
const Phase2 = import("./phase2").then((p) => p.subs);
const Phase3_1 = import("./phase3_1").then((p) => p.subs);
const Phase3_2 = import("./phase3_2").then((p) => p.subs);
const Phase4 = import("./phase4").then((p) => p.subs);
const Phase5 = import("./phase5").then((p) => p.subs);

interface SubEntry {
  time: string;
  sub: string[];
  index: number;
}

interface Movie {
  id: string;
  title: string;
  subs: SubEntry[];
}

export {
  Phase1,
  Phase2,
  Phase3_1,
  Phase3_2,
  Phase4,
  Phase5,
  type Movie,
  type SubEntry,
};

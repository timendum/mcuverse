interface Movie {
  id: string;
  title: string;
  subs: {
    time: string;
    sub: string[];
    index: number;
  }[];
}

type PhaseType = Promise<Movie[]>;

const Phase1: PhaseType = import("./phase1").then((p) => p.subs);
const Phase2: PhaseType = import("./phase2").then((p) => p.subs);
const Phase3_1: PhaseType = import("./phase3_1").then((p) => p.subs);
const Phase3_2: PhaseType = import("./phase3_2").then((p) => p.subs);
const Phase4: PhaseType = import("./phase4").then((p) => p.subs);
const Phase5: PhaseType = import("./phase5").then((p) => p.subs);

export { Phase1, Phase2, Phase3_1, Phase3_2, Phase4, Phase5, type Movie };

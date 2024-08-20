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

import BlackWidow from "./Black Widow.json";
import CaptainMarvel from "./Captain Marvel.json";
import Eternals from "./Eternals.json";
import IAntMan from "./1 Ant-Man.json";
import IAvengers from "./1 Avengers.json";
import IBlackPanther from "./1 Black Panther.json";
import ICaptainAmerica from "./1 Captain America.json";
import IDoctorStrange from "./1 Doctor Strange.json";
import IGuardiansoftheGalaxy from "./1 Guardians of the Galaxy.json";
import IIronMan from "./1 Iron Man.json";
import ISpiderMan from "./1 Spider-Man.json";
import IThor from "./1 Thor.json";
import IIAntMan from "./2 Ant-Man.json";
import IIAvengers from "./2 Avengers.json";
import IIBlackPanther from "./2 Black Panther.json";
import IICaptainAmerica from "./2 Captain America.json";
import IIDoctorStrange from "./2 Doctor Strange.json";
import IIGuardiansoftheGalaxy from "./2 Guardians of the Galaxy.json";
import IIIronMan from "./2 Iron Man.json";
import IISpiderMan from "./2 Spider-Man.json";
import IIThor from "./2 Thor.json";
import IIIAntMan from "./3 Ant-Man.json";
import IIIAvengers from "./3 Avengers.json";
import IIICaptainAmerica from "./3 Captain America.json";
import IIIGuardiansoftheGalaxy from "./3 Guardians of the Galaxy.json";
import IIIIronMan from "./3 Iron Man.json";
import IIISpiderMan from "./3 Spider-Man.json";
import IIIThor from "./3 Thor.json";
import IVAvengers from "./4 Avengers.json";
import IVThor from "./4 Thor.json";
import Marvels from "./Marvels.json";
import ShangChi from "./Shang-Chi.json";
import TheIncredibleHulk from "./The Incredible Hulk.json";

const subs: Movie[] = [
  {
    id: "blackwidow",
    title: "Black Widow",
    subs: BlackWidow,
  },
  {
    id: "captainmarvel",
    title: "Captain Marvel",
    subs: CaptainMarvel,
  },
  {
    id: "eternals",
    title: "Eternals",
    subs: Eternals,
  },
  {
    id: "antman1",
    title: "1 Ant-Man",
    subs: IAntMan,
  },
  {
    id: "avengers1",
    title: "1 Avengers",
    subs: IAvengers,
  },
  {
    id: "blackpanther1",
    title: "1 Black Panther",
    subs: IBlackPanther,
  },
  {
    id: "captainamerica1",
    title: "1 Captain America",
    subs: ICaptainAmerica,
  },
  {
    id: "doctorstrange1",
    title: "1 Doctor Strange",
    subs: IDoctorStrange,
  },
  {
    id: "guardians1",
    title: "1 Guardians of the Galaxy",
    subs: IGuardiansoftheGalaxy,
  },
  {
    id: "ironman1",
    title: "1 Iron Man",
    subs: IIronMan,
  },
  {
    id: "spiderman1",
    title: "1 Spider-Man",
    subs: ISpiderMan,
  },
  {
    id: "thor1",
    title: "1 Thor",
    subs: IThor,
  },
  {
    id: "antman2",
    title: "2 Ant-Man",
    subs: IIAntMan,
  },
  {
    id: "avengers2",
    title: "2 Avengers",
    subs: IIAvengers,
  },
  {
    id: "blackpanther2",
    title: "2 Black Panther",
    subs: IIBlackPanther,
  },
  {
    id: "captainamerica2",
    title: "2 Captain America",
    subs: IICaptainAmerica,
  },
  {
    id: "doctorstrange2",
    title: "2 Doctor Strange",
    subs: IIDoctorStrange,
  },
  {
    id: "guardians2",
    title: "2 Guardians of the Galaxy",
    subs: IIGuardiansoftheGalaxy,
  },
  {
    id: "ironman2",
    title: "2 Iron Man",
    subs: IIIronMan,
  },
  {
    id: "spiderman2",
    title: "2 Spider-Man",
    subs: IISpiderMan,
  },
  {
    id: "thor2",
    title: "2 Thor",
    subs: IIThor,
  },
  {
    id: "antman3",
    title: "3 Ant-Man",
    subs: IIIAntMan,
  },
  {
    id: "avengers3",
    title: "3 Avengers",
    subs: IIIAvengers,
  },
  {
    id: "captainamerica3",
    title: "3 Captain America",
    subs: IIICaptainAmerica,
  },
  {
    id: "guardians3",
    title: "3 Guardians of the Galaxy"
    subs: IIIGuardiansoftheGalaxy,
  },
  {
    id: "ironman3",
    title: "3 Iron Man",
    subs: IIIIronMan,
  },
  {
    id: "spiderman3",
    title: "3 Spider-Man",
    subs: IIISpiderMan,
  },
  {
    id: "thor3",
    title: "3 Thor",
    subs: IIIThor,
  },
  {
    id: "avengers4",
    title: "4 Avengers",
    subs: IVAvengers,
  },
  {
    id: "thor4",
    title: "4 Thor",
    subs: IVThor,
  },
  {
    id: "marvels",
    title: "The Marvels",
    subs: Marvels,
  },
  {
    id: "shangchi",
    title: "Shang-Chi",
    subs: ShangChi,
  },
  {
    id: "hulk",
    title: "The Incredible Hulk",
    subs: TheIncredibleHulk,
  },
];

export { subs, type Movie, type SubEntry };

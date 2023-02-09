import axios from "axios";

interface Statistics {
  // Date of collection
  [key: string]: {
    // Time of collection
    [key: string]: {
      // The location the statistics are coming from (Breivika, Blindheim etc)
      [key: string]: string;
    };
  };
}
export default async function (): Promise<Statistics> {
  const result = (
    await axios.get<string>(
      "https://medlem.aktivtrening.no/MinSide/Home/VisitorStatistics?org=987397519"
    )
  ).data;

  const searchString = (loc: string): string =>
    `<divclass="d-flexflex-columnflex-grow-1align-items-endp-4text-white"><divclass=""style="font-size:2rem;">([0-9]+)</div><divclass=""style="font-size:0.9rem;"><small>${loc}</small></div></div>`;

  const stripped = result.replace(/[\n\s\r]/g, "");
  const date = new Date().toLocaleDateString("no");
  const time = new Date().toLocaleTimeString("no");

  let output: Statistics;
  ["Breivika", "Blindheim", "Digernes"].map((loc) => {
    const regex = new RegExp(searchString(loc), "g");
    const ppl = regex.exec(stripped.toString())[1];
    if (output[date] === undefined) output[date] = {};
    if (output[date][time] === undefined) output[date][time] = {};
    output[date][time][loc] = ppl;
  });

  return output;
}

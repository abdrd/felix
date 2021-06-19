export type Config = {
  printVersion: boolean;
  printHelp: boolean;
  root: string;
};

export const AVAILABLE_FLAGS = [
  "-h",
  "--help",
  "-v",
  "--version",
  "-d",
  "--dir",
];

export default interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: { spa: { official: string; common: string } };
  };
  capital: string[];
}

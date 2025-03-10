export interface Eng {
    official: string;
    common: string;
}

export interface NativeName {
    eng: Eng;
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface SHP {
    name: string;
    symbol: string;
}

export interface Currency {
    sHP: SHP;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface Language {
    eng: string;
}

export interface Ara {
    official: string;
    common: string;
}

export interface Bre {
    official: string;
    common: string;
}

export interface Ce {
    official: string;
    common: string;
}

export interface Cym {
    official: string;
    common: string;
}

export interface Deu {
    official: string;
    common: string;
}

export interface Est {
    official: string;
    common: string;
}

export interface Fin {
    official: string;
    common: string;
}

export interface Fra {
    official: string;
    common: string;
}

export interface Hrv {
    official: string;
    common: string;
}

export interface Hun {
    official: string;
    common: string;
}

export interface Ita {
    official: string;
    common: string;
}

export interface Jpn {
    official: string;
    common: string;
}

export interface Kor {
    official: string;
    common: string;
}

export interface Nld {
    official: string;
    common: string;
}

export interface Per {
    official: string;
    common: string;
}

export interface Pol {
    official: string;
    common: string;
}

export interface Por {
    official: string;
    common: string;
}

export interface Ru {
    official: string;
    common: string;
}

export interface Slk {
    official: string;
    common: string;
}

export interface Spa {
    official: string;
    common: string;
}

export interface Srp {
    official: string;
    common: string;
}

export interface Swe {
    official: string;
    common: string;
}

export interface Tur {
    official: string;
    common: string;
}

export interface Urd {
    official: string;
    common: string;
}

export interface Zho {
    official: string;
    common: string;
}

export interface Translation {
    ara: Ara;
    bre: Bre;
    ces: Ce;
    cym: Cym;
    deu: Deu;
    est: Est;
    fin: Fin;
    fra: Fra;
    hrv: Hrv;
    hun: Hun;
    ita: Ita;
    jpn: Jpn;
    kor: Kor;
    nld: Nld;
    per: Per;
    pol: Pol;
    por: Por;
    rus: Ru;
    slk: Slk;
    spa: Spa;
    srp: Srp;
    swe: Swe;
    tur: Tur;
    urd: Urd;
    zho: Zho;
}

export interface EngDemonym {
    f: string;
    m: string;
}

export interface Demonym {
    eng: EngDemonym;
}

export interface Map {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Car {
    signs: string[];
    side: string;
}

export interface Flag {
    png: string;
    svg: string;
}

export interface CoatOfArms {
    // This interface is empty because the API might return empty objects.
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Country {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currency;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    languages: Language;
    translations: Translation;
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: Demonym;
    flag: string;
    maps: Map;
    population: number;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flag;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode?: {
        format: string;
        regex: string;
    };
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getCountries(): Promise<Country[]> {
    const url = 'https://restcountries.com/v3.1/all';
    const maxAttempts = 3;
    let attempts = 0;
    let res: Response | null = null;

    while (attempts < maxAttempts) {
        try {
            res = await fetch(url);
            if (res.ok) break;
        } catch (error) {
            console.error(`Attempt ${attempts + 1} failed:`, error);
        }
        attempts++;
        await sleep(1000); // Wait 1 second before retrying
    }

    if (!res || !res.ok) {
        throw new Error('Error fetching countries after multiple attempts');
    }

    const data = (await res.json()) as Country[];

    // Preprocess the data: add summary fields for capital and languages,
    // and merge native names into one summary string.
    return data.map((country) => {
        const capitalSummary = country.capital ? country.capital.join(', ') : '';
        const languagesSummary = country.languages ? Object.values(country.languages).join(', ') : '';
        const nativeNamesSummary = country.name.nativeName
            ? Object.values(country.name.nativeName)
                .map((n) => n.common)
                .join(', ')
            : '';

        return {
            ...country,
            name: {
                ...country.name,
                nativeNamesSummary,
            },
            capitalSummary,
            languagesSummary,
        };
    });
}
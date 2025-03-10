// Not all the types are used, but are available if
// it is asked in case we need to work with absolutely all of them

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

export type CurrencyValue = {
    name: string;
    symbol: string;
};
export type Currencies = Record<string, CurrencyValue>;

export interface Idd {
    root: string;
    suffixes: string[];
}

export type Languages = Record<string, string>;

export type TranslationValue = {
    official: string;
    common: string;
};
export type Translations = Record<string, TranslationValue>;

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
    png?: string;
    svg?: string;
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
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    languages: Languages;
    translations: Translations;
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

export async function getCountries(): Promise<Country[]> {
    const res = await fetch ('https://restcountries.com/v3.1/all');


    if (!res.ok) {
        throw new Error('Error fetching countries');
    }

    const data = (await res.json()) as Country[];


    return data.map((country) => {
        const capitalSummary = country.capital ? country.capital.join(', ') : '';
        const languagesSummary = country.languages ? Object.values(country.languages).join(', ') : '';
        const nativeNamesSummary = country.name.nativeName
          ? Object.values(country.name.nativeName)
            .map(nativeObj => nativeObj.common)
            .join(', ')
          : '';

        const translationsNamesSummary = country.translations
          ? Object.entries(country.translations)
            .map(([lang, translation]) => `${lang}: ${translation.official}`)
            .join('\n')
          : '';
        return {
            ...country,
            nativeNamesSummary,
            capitalSummary,
            languagesSummary,
            translationsNamesSummary,
        };
    });
}
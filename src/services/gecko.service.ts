// Not all the types are used, but are available if
// it is asked in case we need to work with absolutely all of them

export interface RootObject {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi?: any;
    last_updated: string;
}

export async function getCoins(): Promise<RootObject[]> {

    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');

    if (!res.ok) {
        throw new Error('Failed to fetch data from CoinGecko');
    }

    const data = await res.json();
    return data as RootObject[] ;
}
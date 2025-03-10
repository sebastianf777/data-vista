export type Geo = {
    lat: string;
    lng: string;
};

export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};

export type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
};

export async function getUsers(): Promise<User[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
        throw new Error('Error al obtener los usuarios');
    }

    const data: User[] = (await res.json()) as User[];

    return data.map((user) => {
        const { lat, lng } = user.address.geo;
        return {
            ...user,
            address: {
                ...user.address,
                coords: `${lat}, ${lng}`,
            },
        };
    });
}

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};


export async function getPosts(): Promise<Post[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Error fetching posts');
    }
    const data = await res.json();
    return data as Post[];
}

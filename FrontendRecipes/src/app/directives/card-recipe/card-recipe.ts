export interface CardContent {
    id: number;
    image: string;
    author: string;
    tag1: string;  // todo использовать массив !!
    tag2: string;
    tag3: string;
    tags: string[];
    favorites: number;
    likes: number;
    header: string;
    text: string;
    time: string;
    persons: number;
}
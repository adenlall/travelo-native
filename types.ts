import { ReactElement } from "react";

export type cardtypes = 'one' | 'two' | 'three';
export type ListCardType = {
    image: string,
    within: string|undefined|null,
    title: string,
    tags: Array<string>,
    price: any,
    theme: cardtypes,
    horizontal: boolean
}
export type AvatarType =  {
    image: string,
    name: string,
    theme: cardtypes,
    avatar: boolean
}


export type ListViewType = {
    title: string,
    data: Array<Object>,
    uri: string|null|undefined,
    theme: cardtypes,
    horizontal: boolean
}

export type ScrollViewType = {
    children: ReactElement<any, any>
    title: string,
    uri: string|null|undefined,
    theme: cardtypes,
}

export interface CardThemeType {
    card: {
        border: string,
        backgroundColor: string,
        color: string
    },
    price: {
        color: string,
        backgroundColor: string
    },
    badge: {
        color: string,
        backgroundColor: string
    },
    tags: {
        color: string,
        backgroundColor: string
    }
}
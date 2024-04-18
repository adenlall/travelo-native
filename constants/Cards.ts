import Themer from "@/outils/Themer";
import { CardThemeType, cardtypes } from "@/types";

const modesHelper = {
    one:0,
    two:1,
    three:2
}

const useCardThemes = (theme: cardtypes) => {

    const themes = Themer();

    const one = {
        card: {
            border: themes.colors.secondary.base.backgroundColor,
            ...themes.colors.tertiary.container
        },
        price: themes.colors.primary.base,
        badge: themes.colors.secondary.base,
        tags: themes.colors.tertiary.container
    } as CardThemeType;
    const two = {
        card: {
            border: themes.colors.tertiary.container.color,
            ...themes.colors.secondary.container
        },
        price: themes.colors.tertiary.base,
        badge: themes.colors.primary.base,
        tags: themes.colors.secondary.container
    } as CardThemeType;
    const three = {
        card: {
            border: themes.colors.secondary.base.backgroundColor,
            ...themes.colors.primary.container
        },
        price: themes.colors.secondary.base,
        badge: themes.colors.tertiary.base,
        tags: themes.colors.primary.container
    } as CardThemeType;

    const modes = [
        one, two, three
    ];

    return modes[modesHelper[theme]];
}
export default useCardThemes; 
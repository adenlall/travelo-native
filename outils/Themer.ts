import { useTheme } from "react-native-paper";

export default function Themer() {
    const theme = useTheme();
    return {
        badges: {
            primary: {
                backgroundColor: theme.colors.secondaryContainer,
                color: theme.colors.onSecondaryContainer
            },
            secondary: {
                backgroundColor: theme.colors.secondaryContainer,
                color: theme.colors.onSecondaryContainer
            },
            triacty: {
                backgroundColor: theme.colors.onTertiaryContainer,
                color: theme.colors.primaryContainer
            }
        },
        colors: {
            primary: {
                base: {
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.onPrimary
                },
                container: {
                    backgroundColor: theme.colors.primaryContainer,
                    color: theme.colors.onPrimaryContainer
                }
            },
            secondary: {
                base: {
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.onSecondary
                },
                container: {
                    backgroundColor: theme.colors.secondaryContainer,
                    color: theme.colors.onSecondaryContainer
                }
            },
            tertiary: {
                base: {
                    backgroundColor: theme.colors.tertiary,
                    color: theme.colors.onTertiary
                },
                container: {
                    backgroundColor: theme.colors.tertiaryContainer,
                    color: theme.colors.onTertiaryContainer
                }
            }
        }
    }
};

import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RangePicker() {
    const [range, setRange] = React.useState({ startDate: undefined, endDate: undefined });
    const [open, setOpen] = React.useState(false);

    const onDismiss = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirm = React.useCallback(
        ({ startDate, endDate }: any) => {
            setOpen(false);
            setRange({ startDate, endDate });
        },
        [setOpen, setRange]
    );

    const toDateObject = (dd: string | number | Date | undefined): { day: string, date: string } => {
        const date = new Date(dd??"");
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        return {
            date: date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g,"-"),
            day: dayName
        };
    }

    return (
        <>
            <Button style={{marginVertical:4}} onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                Date Range {range.startDate ? (toDateObject(range?.startDate).date + " to " + toDateObject(range?.endDate).date) : ''}
            </Button>
            <DatePickerModal
                locale="en"
                mode="range"
                visible={open}
                onDismiss={onDismiss}
                startDate={range.startDate}
                endDate={range.endDate}
                onConfirm={onConfirm}
            />
        </>
    )
}
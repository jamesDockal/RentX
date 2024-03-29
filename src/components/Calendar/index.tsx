import React from "react";

import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";
import { Calendar as CustomCalendar } from "react-native-calendars";
import { DateCallbackHandler } from "react-native-calendars";

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

type Props = {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
};

const Calendar: React.FC<Props> = ({ markedDates, onDayPress }) => {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction === "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textMonthFontFamily: theme.fonts.secondary_500,
        textDayFontSize: 12.5,
        textMonthFontSize: 20,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date()}
      markedDates={markedDates}
      markingType={"period"}
      onDayPress={onDayPress}
    />
  );
};

export { Calendar, DayProps, MarkedDateProps };

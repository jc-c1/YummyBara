import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

export const CalorieWeek = () => {
  const ref = useRef(null);

  const lineData = [
    { value: 4, label: 'Mon' },
    { value: 14, label: 'Tues' },
    { value: 8, label: 'Wed' },
    { value: 38, label: 'Thurs' },
    { value: 36, label: 'Fri' },
    { value: 28, label: 'Sat' },
    { value: 14, label: 'Sun' },
  ];

  const yAxisLabels = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000];

  const showOrHidePointer = (ind) => {
    ref.current?.scrollTo({
      x: ind * 200 - 25, // adjust as per your UI
    });
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', marginLeft: 8 }}>
        {lineData.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                padding: 6,
                margin: 4,
                backgroundColor: '#ebb',
                borderRadius: 8,
              }}
              onPress={() => showOrHidePointer(index)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <LineChart
        scrollRef={ref}
        data={lineData}
        initialSpacing={0}
        yAxisLabels={yAxisLabels}
        yAxisSuffix="calories"
        rotateLabel
      />
    </View>
  );
};



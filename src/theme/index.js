export const theme = {
  appBackground: '#fff',
  colors: {
    tomato: 'rgba(255, 99, 71, 1)',
    grey: '#aaaaaa',
    orange: '#f7a440',
    beige: '#f6dcbf',
    lightBeige: '#fcecdd',
    lightBeigeTrans: 'rgba(252, 236, 221, 0.9)',
    darkBlue: '#114e60',
    mapOrange: '#FFBB00',
    mapLightOrange: '#FFC200',
    mapRed: '#FF0300',
    mapBLue: '#0078FF',
    mapGreen: '#00FF6A',
  },
};

export const mapStyle = [
  {
    featureType: 'landscape',
    stylers: [
      {
        hue: theme.colors.mapOrange,
      },
      {
        saturation: 43.400000000000006,
      },
      {
        lightness: 37.599999999999994,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: 'road.highway',
    stylers: [
      {
        hue: theme.colors.mapLightOrange,
      },
      {
        saturation: -61.8,
      },
      {
        lightness: 45.599999999999994,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    stylers: [
      {
        hue: theme.colors.mapRed,
      },
      {
        saturation: -100,
      },
      {
        lightness: 51.19999999999999,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: 'road.local',
    stylers: [
      {
        hue: theme.colors.mapRed,
      },
      {
        saturation: -100,
      },
      {
        lightness: 52,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: 'water',
    stylers: [
      {
        hue: theme.colors.mapBLue,
      },
      {
        saturation: -13.200000000000003,
      },
      {
        lightness: 2.4000000000000057,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        hue: theme.colors.mapGreen,
      },
      {
        saturation: -1.0989010989011234,
      },
      {
        lightness: 11.200000000000017,
      },
      {
        gamma: 1,
      },
    ],
  },
];

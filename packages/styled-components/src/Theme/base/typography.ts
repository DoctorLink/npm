export interface TypographyTheme {
  fontFamily: string;
  regular: {
    size: number;
    lineHeight: number;
  };
  error: {
    size: number;
  };
  title: {
    large: {
      size: number;
      lineHeight: number;
    };
    medium: {
      size: number;
      lineHeight: number;
    };
    small: {
      size: number;
      lineHeight: number;
    };
  };
  button: {
    size: number;
  };
  inputField: {
    size: number;
    textAlign: AlignSetting;
  };
}

const typography: TypographyTheme = {
  fontFamily: "'Noto Sans', sans-serif",
  regular: {
    size: 16,
    lineHeight: 24,
  },
  error: {
    size: 12,
  },
  title: {
    large: {
      size: 36,
      lineHeight: 42,
    },
    medium: {
      size: 20,
      lineHeight: 24,
    },
    small: {
      size: 16,
      lineHeight: 24,
    },
  },
  button: {
    size: 16,
  },
  inputField: {
    size: 20,
    textAlign: 'right',
  },
};

export default typography;

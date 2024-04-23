import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// define the base styles of the component
const baseStyle = {
  // borderRadius: "xl", // add a border radius
  fontWeight: "medium", // change the font weight
};

// define custom sizes
const sizes = {
  sm: defineStyle({
    maxW: "45ch",
    p: "4",
  }),
  md: defineStyle({
    maxW: "container.sm",
    p: "6",
    fontSize: "lg",
  }),
  lg: defineStyle({
    maxW: "75ch",
    p: "8",
    fontSize: "xl",
  }),
};

const testShe = defineStyle((props) => {
  return {
    borderRadius: "none",
    border: "2px solid",
    fontFamily: "mono",
    _light: {
      bg: "white",
      color: "black",
      borderColor: "orange",
      _hover: {
        shadow: "lg",
        color: "black",
        bg: "grey.700",
        borderColor: "#2F855A",
        bgGradient: "linear(to-l, #F56565, #DD6B20)",
    },
    _active: {
        borderColor: "#D53F8C",
        bgGradient: "linear(to-l, #bee3f8, #9AE6B4)",
    },
},
_dark: {
    bg: "black",
    color: "white",
    _hover: {
        shadow: "lg",
        color: "white",
        borderColor: "#3182ce",
        bgGradient: "linear(to-l, #ED64A6, #553C9A)",
    },
    _active: {
          borderColor: "#D53F8C",
        bgGradient: "linear(to-l, #bee3f8, #9AE6B4)",
      },
    },
  };
});

// define the custom variants
const variants = {
  testShe,
};

export const buttonTheme = defineStyleConfig({
  baseStyle: {},
  sizes,
  variants,
  defaultProps: {
    // define which sizes, variants, and color schemes are applied by default
    size: "md",
    variant: "testShe",
    // colorScheme: "brand",
  },
});

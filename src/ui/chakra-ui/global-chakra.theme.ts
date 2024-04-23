import { buttonTheme } from "@/src/ui/chakra-ui/buttons.theme";
import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";

// define the base styles of the component
const baseStyle = {
  borderRadius: "sm", // add a border radius
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

// define styles for the custom variants
const colorfulVariant = defineStyle((props) => {
  const { colorScheme: c } = props; // add color scheme as a prop
  return {
    // _light: {
    //   bg: `${c}.500`,
    //   color: `${c}.200`,
    // },
    // _dark: {
    //   bg: `${c}.500`,
    //   color: `${c}.400`,
    // },
  };
});

const boldVariant = defineStyle((props) => {
  return {
    borderRadius: "none",
    border: "2px solid",
    fontFamily: "mono",
    _light: {
      bg: "white",
      color: "green",
    },
    _dark: {
      bg: "black",
      color: "white",
    },
  };
});

// define the custom variants
const variants = {
  colorful: colorfulVariant,
  bold: boldVariant,
};

// export the component theme
export const containerTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    // define which sizes, variants, and color schemes are applied by default
    size: "md",
    variant: "colorful",
    colorScheme: "brand",
  },
});

const theme = extendTheme({
  colors: {
    brand: {
      50: "#dafff3",
      100: "#adffe2",
      200: "#7dfed5",
      300: "#4efeca",
      400: "#25fec3",
      500: "#13e4b1",
      600: "#01b18f",
      700: "#007f5d",
      800: "#004d32",
      900: "#001b0e",
    },
  },
  components: {
    Container: containerTheme,
    Button: buttonTheme,
  },
});

export default theme;

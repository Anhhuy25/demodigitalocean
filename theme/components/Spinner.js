import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const style = defineStyle({
  borderWidth: 4,
  height: 50,
  width: 50,

  position: "absolute",
  top: "417px",
  left: "50%",
  translateX: "-50%",
  translateY: "-50%",
});

export const spinnerTheme = defineStyleConfig({
  variants: { style },
});

import { createMuiTheme } from "@material-ui/core/styles";

import {
  deepTealColor,
  lightTealColor,
  veryLightTealColor,
  deepAmberColor,
  lightAmberColor,
  lightOrangeColor,
  deepOrangeColor,
  lightGreenColor,
  lightGreyColor,
  lightRedColor,
  evmaxBlueColor,
  evmaxRedColor
} from "./colors";

const theme = createMuiTheme({
  palette: {
    evmaxPrimary: evmaxBlueColor,
    evmaxSecondary: evmaxRedColor
  },
  local: {
    deepTealColor: deepTealColor,
    lightTealColor: lightTealColor,
    veryLightTealColor: veryLightTealColor,
    deepAmberColor: deepAmberColor,
    lightAmberColor: lightAmberColor,
    lightOrangeColor: lightOrangeColor,
    deepOrangeColor: deepOrangeColor,
    lightGreenColor: lightGreenColor,
    lightGreyColor: lightGreyColor,
    lightRedColor: lightRedColor
  },
  typography: {
    //typograghy error
    useNextVariants: true
  },
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: deepTealColor
        },
        "&$active": {
          color: evmaxRedColor
        },
        active: {},
        completed: {}
      }
    }
  }
});

export default theme;

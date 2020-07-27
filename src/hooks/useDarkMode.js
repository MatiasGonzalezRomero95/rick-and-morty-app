import {useState, useCallback} from "react";
import {createMuiTheme} from "@material-ui/core/styles";

const DARK_PALLET = "dark";
const LIGHT_PALLET = "light";

const useDarkMode = (isDarkTheme) => {
  const [isDarkModeActive, setDarkState] = useState(isDarkTheme);
  const palletType = isDarkModeActive ? DARK_PALLET : LIGHT_PALLET;

  const theme = createMuiTheme({
    palette: {
      type: palletType,
    },
    typography: {
      fontFamily: "Segoe UI Emoji"
    }
  });

  const switchTheme = useCallback(() => {
    setDarkState((state) => !state)
  }, [setDarkState]);

  return {theme, isDarkModeActive, switchTheme};
}

export default useDarkMode;

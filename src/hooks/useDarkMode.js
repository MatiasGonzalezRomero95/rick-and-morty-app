import {useState} from "react";
import {createMuiTheme} from "@material-ui/core/styles";

const DARK_PALLET = "dark";
const LIGHT_PALLET = "light";

const useDarkMode = (isDarkTheme) => {
  const [darkState, setDarkState] = useState(isDarkTheme);
  const palletType = darkState ? DARK_PALLET : LIGHT_PALLET;

  const theme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });

  const switchTheme = () => setDarkState(!darkState);

  return { theme, darkState, switchTheme };
}

export default useDarkMode;

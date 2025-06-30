import { useThemeMode } from "@/hooks/useThemeHook";
import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";

const LanguageSelector = () => {
  const { direction, setDirection } = useThemeMode();
  const languageChange = (e: SelectChangeEvent<string>) => {
    e.preventDefault();

    switch (e.target.value) {
      case "En":
        setDirection("ltr");
        break;
      case "Fa":
        setDirection("rtl");
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Select
        value={direction === "ltr" ? "En" : "Fa"}
        onChange={languageChange}
        sx={(theme) => ({
          border: "none",
          "& fieldset": { border: "none" },
          "& .MuiSelect-icon": {
            color: theme.palette.primary.main,
          },
        })}
      >
        <MenuItem
          key={"En"}
          value={"En"}
        >
          <Typography variant="button">English</Typography>
        </MenuItem>
        <MenuItem
          key={"Fa"}
          value={"Fa"}
        >
          <Typography variant="button">Farsi</Typography>
        </MenuItem>
      </Select>
    </>
  );
};

export default LanguageSelector;

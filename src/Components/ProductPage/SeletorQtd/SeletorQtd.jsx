import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filter = createFilterOptions();

export default function SeletorQtd({ quantidade, setQuantidade }) {
  const [value, setValue] = [quantidade, setQuantidade];

  return (
    <Autocomplete
      value={value}
      size="small"
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            seletor: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            seletor: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.seletor
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            seletor: `${inputValue}`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text"
      options={seletor}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.seletor;
      }}
      renderOption={(props, option) => <li {...props}>{option.seletor}</li>}
      sx={{ width: 200 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Digite a quantidade" />
      )}
    />
  );
}

const seletor = [
  { seletor: "1", label: "1" },
  { seletor: "2", label: "2" },
  { seletor: "3", label: "3" },
  { seletor: "4", label: "4" },
  { seletor: "5", label: "5" },
  { seletor: "6", label: "6" },
  { seletor: "7", label: "7" },
  { seletor: "8", label: "8" },
  { seletor: "9", label: "9" },
  { seletor: "10", label: "10" },
];

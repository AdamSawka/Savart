import React from 'react';
import {InputAdornment, TextField} from "@mui/material";
import {useTranslation} from "react-i18next";
import SearchIcon from '@mui/icons-material/Search';

function SearchInput() {
  const {t} = useTranslation();

  return (
    <TextField
      size='small'
      placeholder={t('search')}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon/>
          </InputAdornment>
        )
      }}
      sx={{
        justifySelf: 'end',
        width: "250px",
        marginRight: 5,
        marginTop: "16px"
      }}
    />

  );
}

export default SearchInput;

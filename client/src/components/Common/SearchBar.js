import React from 'react';
import { Autocomplete, TextField, Box } from '@mui/material';
import { useSuggestionState } from '../../hooks';
import { useSearchOptionState } from '../../hooks/useSearchOptionState';
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const { suggestionsData } = useSuggestionState();
  const { setSearchOption } = useSearchOptionState();
  const navigate = useNavigate();

  const onChange = (value) => {
    setSearchOption(value);
    navigate("/profile");
  }

  return (
    <Autocomplete
      className='items-center justify-center ml-auto mt-4 mb-4'
      freeSolo
      id="search-bar"
      options={suggestionsData}
      getOptionLabel={(option) => option.username}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img className='profile-image'
            alt={`${option.username}'s profile pic`}
            draggable="false"
            loading="lazy"
            src={option.image}
            style={{
              width: 45,
              height: 45,
              borderRadius: 24,
              border: '2px solid white',
              cursor: 'pointer',
            }}
          />
          <label className="text-black text-14-light text-left mt-1 ml-2" >{option.username}</label>
        </Box>
      )}
      onChange={(event, value) => onChange(value)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} placeholder="Search" size="small" variant="outlined" />}
      blurOnSelect={true}
    />
  );
}

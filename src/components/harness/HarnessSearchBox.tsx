import React, {FunctionComponent, useState} from 'react';
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const HarnessSearchBox: FunctionComponent = () => {
	const [searchValue, setSearchValue] = useState<string>();

	const handleChangeSearchBox = (newSearchValue: string) => {
		setSearchValue(newSearchValue)
	}

	return (
		<TextField
			sx={{
				width: '100%',
				'&& .MuiInputBase-root': {borderRadius: '20px'},
				'&& input': {paddingTop: '10px', paddingBottom: '10px'}
			}}
			InputProps={{
				disableUnderline: true,
				startAdornment: (
					<InputAdornment position="end" sx={{marginRight: "5px"}}>
						<SearchIcon/>
					</InputAdornment>
				),
			}}
			variant={'filled'}
			size="small"
			type="text"
			placeholder={'Поиск книг'}
			value={searchValue}
			onChange={(value) => handleChangeSearchBox(value.target.value)}
		/>);
};

export default HarnessSearchBox;

import React, { FC } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import "./Search.styles.sass";

interface SearchProps {
    searchQuery: string;
    setSearchQuery: (event: string) => void;
}

const Search: FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {

    return (
        <Paper
            component="div"
            className="search-form"
        >
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="search something..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
        </Paper>
    )
}

export default Search
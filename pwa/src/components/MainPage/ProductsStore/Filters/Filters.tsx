import React, {useState, ChangeEvent} from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import {useTranslation} from "react-i18next";
import {map} from "lodash";
import {categories} from "mockData";

interface FiltersState {
  category: string;
  minPrice: number | null;
  maxPrice: number | null;
}

function Filters() {
  const {t} = useTranslation();
  const [filters, setFilters] = useState<FiltersState>({
    category: '0',
    minPrice: null,
    maxPrice: null
  });

  const handleCategoryChange = (e: ChangeEvent<{ value: unknown }>) => {
    setFilters((prev) => ({...prev, category: String(e.target.value)}));
  };

  return (
    <Card>
      <CardHeader title={t('Filters')}/>
      <Box sx={{display: "flex", mb: 3}}>
        <div className="filter-input-wrapper">
          <InputLabel
            className="filter-input-label"
            id="category-label">{t('Category')}</InputLabel>
          <Select
            id='category'
            labelId='category-label'
            value={filters.category}
            size='small'
            // @ts-ignore
            onChange={handleCategoryChange}
          >
            {map(categories, (category) =>
              <MenuItem
                key={category.value}
                value={category.value}>{t(category.name)}</MenuItem>)
            }
          </Select>
        </div>
        <div className="filter-input-wrapper">
          <InputLabel
            className="filter-input-label"
            id="min-price-label">{t('min price')}</InputLabel>
          <TextField
            inputProps={{
              endAdornment: "PLN",
            }}
            size='small'
            className='filter-input'
            type='number'
            id='min-price-label'
            onChange={(e) => setFilters((prev) => ({
              ...prev,
              minPrice: Number(e.target.value)
            }))}/>
        </div>
        <div className="filter-input-wrapper">
          <InputLabel
            className="filter-input-label"
            id="max-price-label">{t('min price')}</InputLabel>
          <TextField
            inputProps={{
              endAdornment: "PLN",
            }}
            size='small'
            className='filter-input'
            type='number'
            id='max-price-label'
            onChange={(e) => setFilters((prev) => ({
              ...prev,
              maxPrice: Number(e.target.value)
            }))}/>
        </div>
        <Button
          className='filter-button' sx={{height: "40px"}}
          variant="outlined">{t("search")}</Button>
      </Box>
    </Card>
  );
}

export default Filters;

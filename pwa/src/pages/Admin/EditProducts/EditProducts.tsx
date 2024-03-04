import React, {useEffect} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import {useTranslation} from "react-i18next";
import useGetProductsQuery from "hooks/useGetProductsQuery";
import {useFieldArray, useForm} from "react-hook-form";
import {map} from "lodash"
import Loader from "components/Common/Loader/Loader";

interface FormInputs {
  products: Array<{
    id: number;
    name?: string;
    quantity?: number;
    minPrice?: number;
    maxPrice?: number;
    category?: string;
    description?: string;
    image?: string;
  }>;
}

function EditProducts() {
  const {t} = useTranslation();

  const {data, isLoading} = useGetProductsQuery()

  const {control, reset, handleSubmit, register} = useForm<FormInputs>()
  const {append, fields} = useFieldArray({control, name: "products"})
  useEffect(() => {
    reset({
      products: data?.["hydra:member"]
    })
  }, [])

  return (
    <div style={{marginTop: "100px"}}>
      {isLoading && <Loader/>}
      <Typography>{t('Edit Products')}</Typography>
      <Table sx={{maxWidth: 1050}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">{t('Name')}</TableCell>
            <TableCell align="right">{t('Quantity')}</TableCell>
            <TableCell align="right">{t('Min Price')}</TableCell>
            <TableCell align="right">{t('Max Price')}</TableCell>
            <TableCell align="right">{t('Category v1')}</TableCell>
            <TableCell align="right">{t('Description')}</TableCell>
            <TableCell align="right">{t('Image')}</TableCell>
          </TableRow>
        </TableHead>
        {data && <TableBody>
          {map(fields, (row) => (
            <TableRow
              key={row?.id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="right">{row?.quantity}</TableCell>
              <TableCell align="right">{row?.minPrice}</TableCell>
              <TableCell align="right">{row?.maxPrice}</TableCell>
              <TableCell align="right">{row?.category}</TableCell>
              <TableCell align="right">{row?.description}</TableCell>
              <TableCell align="right">{row?.image}</TableCell>
            </TableRow>
          ))}
        </TableBody>}
      </Table>
    </div>
  );
}

export default EditProducts;

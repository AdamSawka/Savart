import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {map} from "lodash";
import ProductRow from "pages/Admin/EditProducts/ProductRow";
import {useTranslation} from "react-i18next";

interface EditProductsTableProps {
  fields: any;
  control: any;
  remove: (index: number) => void;
}

const EditProductsTable: React.FC<EditProductsTableProps> = (
  {
    fields,
    control,
    remove
  }) => {
  const {t} = useTranslation();

  return (
    <Table sx={{maxWidth: 1050, mt: 2}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">{t('Name')}</TableCell>
          <TableCell align="center">{t('Quantity')}</TableCell>
          <TableCell align="center">{t('Min Price')}</TableCell>
          <TableCell align="center">{t('Max Price')}</TableCell>
          <TableCell align="center">{t('Category v1')}</TableCell>
          <TableCell align="center">{t('Description')}</TableCell>
          <TableCell align="center">{t('Image')}</TableCell>
          <TableCell align="center">{t('Action')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {map(fields, (row, index) => (
          <ProductRow
            row={row} key={row?.id} index={index} control={control}
            remove={remove}/>
        ))}
      </TableBody>
    </Table>
  );
};
export default EditProductsTable

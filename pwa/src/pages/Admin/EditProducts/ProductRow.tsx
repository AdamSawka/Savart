import React from "react";
import {
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import {Controller} from "react-hook-form";
import TwoStepAcceptancePopup
  from "components/Common/TwoStepsAcceptancePopup/TwoStepAcceptancePopup";

interface ProductRowProps {
  index: any;
  control: any;
  remove: (index: number) => void;
  row: any
}

const ProductRow: React.FC<ProductRowProps> = (
  {
    index,
    control,
    remove,
    row
  }) => {
  return (
    <TableRow
      key={row?.id}
      sx={{'&:last-child td, &:last-child th': {border: 0}}}
    >
      <TableCell component="th" scope="row">
        <Controller
          render={({field}) =>
            <TextField
              size="small"
              variant="outlined"
              className="edit-products-input" {...field} />}
          name={`products.${index}.name`}
          control={control}
        />
      </TableCell>
      <TableCell align="right">
        <Controller
          render={({field}) =>
            <TextField
              size="small"
              sx={{width: "60px"}}
              variant="outlined"
              className="edit-products-input" {...field} />}
          name={`products.${index}.quantity`}
          control={control}
        /></TableCell>
      <TableCell align="right">
        <Controller
          render={({field}) =>
            <TextField
              size="small"
              variant="outlined"
              sx={{width: "100px"}}
              className="edit-products-input" {...field} />}
          name={`products.${index}.minPrice`}
          control={control}
        /></TableCell>
      <TableCell align="right">
        <Controller
          render={({field}) =>
            <TextField
              size="small"
              sx={{width: "100px"}}
              variant="outlined"
              className="edit-products-input" {...field} />}
          name={`products.${index}.maxPrice`}
          control={control}
        /></TableCell>
      <TableCell align="right">
        <Controller
          render={({field}) =>
            <TextField
              size="small"
              variant="outlined"
              sx={{width: "60px"}}
              className="edit-products-input" {...field} />}
          name={`products.${index}.category`}
          control={control}
        /></TableCell>
      <TableCell align="right">
        <Controller
          render={({field}) =>
            <TextField
              size="small"
              variant="outlined"
              className="edit-products-input" {...field} />}
          name={`products.${index}.description`}
          control={control}
        /></TableCell>
      <TableCell align="right">
        <Controller
          render={({field}) =>
            <TextField
              size="small"
              variant="outlined"
              className="edit-products-input" {...field} />}
          name={`products.${index}.image`}
          control={control}
        /></TableCell>
      <TableCell>
        <TwoStepAcceptancePopup
          acceptanceFn={() => remove(index)}
          text="Do You Want Delete Item?"
          btnText="Delete"
          openBtnText="Delete"
        />
      </TableCell>
    </TableRow>
  );
};
export default ProductRow

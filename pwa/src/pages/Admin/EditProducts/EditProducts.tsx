import React, {useEffect} from 'react';
import {
  Button,
  Divider,
  Typography
} from "@mui/material";
import {useTranslation} from "react-i18next";
import useGetProductsQuery from "hooks/useGetProductsQuery";
import {useFieldArray, useForm} from "react-hook-form";
import Loader from "components/Common/Loader/Loader";
import EditProductsTable from "pages/Admin/EditProducts/EditProductTable";

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

  const {data, isLoading} = useGetProductsQuery({});
  const {control, reset, handleSubmit, register} = useForm<FormInputs>();
  const {append, fields, remove} = useFieldArray({control, name: "products"});

  useEffect(() => {
    console.log('gdfg');
    reset({
      products: data?.["hydra:member"]
    });
  }, [data]);

  return (
    <div style={{marginTop: "100px"}}>
      {isLoading && <Loader/>}
      <Typography sx={{fontWeight: 600, textAlign: "center", mb: 3}}>
        {t('Edit Products')}
      </Typography>
      <Button variant="outlined" onClick={() => append({
        id: 0,
        name: '',
        quantity: 0,
        minPrice: 0,
        maxPrice: 0,
        category: '',
        description: '',
        image: '',
      })}>
        {t('Add Product')}
      </Button>
      <Divider/>
      <EditProductsTable fields={fields} control={control} remove={remove}/>
    </div>
  );
}

export default EditProducts;

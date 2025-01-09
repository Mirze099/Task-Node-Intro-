import React from "react";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "@mui/material/Alert";
import axios from "axios";

export default function AddCar() {
  const navigate = useNavigate();

  function handleAdd(values) {
    axios
      .post(`http://localhost:3000/cars`, values)
      .then(() => navigate(-1))
      .catch((err) => console.error(err));
  }

  const SignupSchema = Yup.object().shape({
    brandName: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    modelName: Yup.string()
      .min(3, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
    year: Yup.number()
      .positive("Price must be positive")
      .min(3, "Price must be 3 dollars or more")
      .required("Required"),
    color: Yup.string()
      .min(3, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
    isNew: Yup.string()
      .min(3, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
  });
  return (
    <div className="mainss">
      <h1>Add Product</h1>
      <Formik
        initialValues={{
          brandName: "",
          modelName: "",
          year: "",
          color: "",
        }}
        validationSchema={SignupSchema}
        enableReinitialize
        onSubmit={(values) => handleAdd(values)}
      >
        {({ errors, touched }) => (
          <Form className="add-form">
            <Field name="brandName" className="field" placeholder="BrandName" />
            {errors.brandName && touched.brandName ? (
              <Alert severity="error" className="alertt">
                {errors.brandName}
              </Alert>
            ) : null}
            <Field name="modelName" className="field" placeholder="ModelName" />
            {errors.modelName && touched.modelName ? (
              <Alert severity="error" className="alertt">
                {errors.modelName}
              </Alert>
            ) : null}
            <Field name="year" className="field" placeholder="Year" />
            {errors.year && touched.year ? (
              <Alert severity="error" className="alertt">
                {errors.year}
              </Alert>
            ) : null}

            <Field name="color" className="field" placeholder="Color" />
            {errors.color && touched.color ? (
              <Alert severity="error" className="alertt">
                {errors.color}
              </Alert>
            ) : null}

            <Field name="isNew" className="field" placeholder="Is New" />
            {errors.isNew && touched.isNew ? (
              <Alert severity="error" className="alertt">
                {errors.isNew}
              </Alert>
            ) : null}

            <Button type="primary" htmlType="submit">
              ADD PRODUCT
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

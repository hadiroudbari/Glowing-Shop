import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Textarea from "../../ui/Textarea";
import SpinnerMini from "../../ui/SpinnerMini";
import { useFilterCategories } from "../categories/useCategories";
import { useCreateProduct } from "./useCreateProduct";

const Select = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 600;
  box-shadow: var(--shadow-sm);
`;

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 2fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;
  border-bottom: 1px solid var(--color-grey-100);
`;

function ProductForm({ onCloseModal }) {
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(0);

  const { filterCategories, isLoading } = useFilterCategories(categoryId);
  const { createProduct, isCreating } = useCreateProduct();

  const isWorking = isCreating;

  const {
    register,
    handleSubmit,
    // reset,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const image =
      typeof data.pictures === "string" ? data.pictures : data.pictures[0];

    const newData = { ...data, image, description };

    createProduct(newData, {
      onSuccess: (data) => {
        console.log("done");
        // reset();
        // onCloseModal?.();
      },
    });
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : ""}
    >
      <FormRow label="Product Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Top Category" error={errors?.topCategoryId?.message}>
        <Select
          disabled={isWorking}
          id="topCategoryId"
          {...register("topCategoryId", {
            required: "This field is required",
            onChange: (e) => {
              clearErrors("categoryId");
              setCategoryId(Number(e.target.value));
            },
          })}
        >
          <option value="">Select Top Category</option>
          <option value={1}>Body Care</option>
          <option value={2}>Skin Care</option>
          <option value={3}>Hair Care</option>
          <option value={4}>Accessories</option>
        </Select>
      </FormRow>

      <FormRow label="Category" error={errors?.categoryId?.message}>
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <Select
            defaultValue={categoryId}
            disabled={!filterCategories.length || isWorking}
            id="categoryId"
            {...register("categoryId", {
              required:
                +getValues().topCategoryId === 4
                  ? false
                  : "This field is required",
            })}
          >
            {filterCategories.length ? (
              <option value="">Select Category</option>
            ) : (
              <option value="">No Category Found</option>
            )}
            {filterCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        )}
      </FormRow>

      <FormRow label="Price" error={errors?.price?.message}>
        <Input
          type="number"
          id="price"
          disabled={isWorking}
          {...register("price", {
            required: "This field is required",
            min: {
              value: 0,
              message: "Price should be at least 0",
            },
            max: {
              value: 1000,
              message: "Price should be less than 1000",
            },
          })}
        />
      </FormRow>

      <FormRow label="Stock" error={errors?.stock?.message}>
        <Input
          type="number"
          id="stock"
          disabled={isWorking}
          {...register("stock", {
            required: "This field is required",
            min: {
              value: 0,
              message: "Stock should be at least 0",
            },
            max: {
              value: 1000,
              message: "Stock should be less than 1000",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              Number(value) <= Number(getValues().price) ||
              "Discount should be less than price",
          })}
        />
      </FormRow>

      <FormRow label="Status" error={errors?.status?.message}>
        <Select
          id="status"
          disabled={isWorking}
          {...register("status", {
            required: "This field is required",
          })}
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="acrchived">Acrchived</option>
          <option value="disabled">Disabled</option>
        </Select>
      </FormRow>

      <StyledFormRow>
        <label htmlFor="description">Description for website</label>
        <Textarea value={description} onChange={setDescription} />
      </StyledFormRow>

      <FormRow label="Product Photo" error={errors?.pictures?.message}>
        <FileInput
          id="pictures"
          accept="image/*"
          disabled={isWorking}
          {...register("pictures", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button bg="white" type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button bg="green">
          {isWorking ? <SpinnerMini /> : "Create new Product"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default ProductForm;

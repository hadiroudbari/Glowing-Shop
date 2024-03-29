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
import { useUpdateProduct } from "./useUpdateProduct";

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

const Thumbnail = styled.img`
  width: 15rem;
  height: 20rem;
  margin-top: 2rem;
`;

function ProductForm({ productToEdit = {}, onCloseModal }) {
  const { createProduct, isCreating } = useCreateProduct();
  const { updateProduct, isUpdating } = useUpdateProduct();

  const isWorking = isCreating || isUpdating;

  let defaultcategoryId, defaultTopCategoryId;
  const {
    id: productId,
    description: productDescription,
    name,
    pictures,
    price,
    stock,
    discount,
    status,
    image,
  } = productToEdit;

  const isUpdateSession = Boolean(productId);

  if (isUpdateSession) {
    ({
      categories: { id: defaultcategoryId },
      topCategories: { id: defaultTopCategoryId },
    } = productToEdit);
  }

  const defaultValues = {
    categoryId: defaultcategoryId,
    topCategoryId: defaultTopCategoryId,
    name,
    pictures,
    price,
    stock,
    discount,
    status,
    image,
    description: productDescription,
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: isUpdateSession ? defaultValues : {},
  });

  const [thumbnail, setThumbnail] = useState(image || "");
  const [description, setDescription] = useState(productDescription || "");
  const [categoryId, setCategoryId] = useState(defaultTopCategoryId || 0);
  const { filterCategories, isLoading } = useFilterCategories(categoryId);

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isUpdateSession) {
      updateProduct(
        { newProductData: { ...data, image, description }, id: productId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createProduct(
        { ...data, image, description },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
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
            min: {
              value: 0,
              message: "Discount should be at least 0",
            },
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
          <option value="archived">Archived</option>
          <option value="disabled">Disabled</option>
        </Select>
      </FormRow>

      <StyledFormRow>
        <label htmlFor="description">Description for website</label>
        <Textarea initialValue={description} onChange={setDescription} />
      </StyledFormRow>

      <FormRow label="Product Photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isUpdateSession ? false : "This field is required",
            onChange: (e) =>
              setThumbnail(URL.createObjectURL(e.target.files[0])),
          })}
        />
      </FormRow>
      {thumbnail && <Thumbnail src={thumbnail} alt={thumbnail} />}

      <FormRow>
        <Button
          bg="white"
          type="reset"
          onClick={() => onCloseModal?.()}
          disabled={isWorking}
        >
          Cancel
        </Button>
        <Button bg="green" disabled={isWorking}>
          {isWorking ? (
            <SpinnerMini />
          ) : isUpdateSession ? (
            "Update Product"
          ) : (
            "Create new Product"
          )}
        </Button>
      </FormRow>
    </Form>
  );
}

export default ProductForm;

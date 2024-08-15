import Input from "../FormInput";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import ButtonComponent from "../Button";
import PageTitle from "../PageTitle";
import { API_URL } from "../../utils";
import { useRef, useState } from "react";

interface IFormInput {
  title: string;
  price: number;
  description: string;
  category: string;
}

const submitData = async (formData: IFormInput) => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return data;
  } catch (e) {
    console.error((e as Error).message);
    return false;
  }
};

export default function AddProduct() {
  console.log(API_URL, " aPI UR");
  const [isSubmitting, setIsSubmition] = useState(false);
  const [success, setSuccess] = useState(false);
  const formSubmitted = useRef<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      category: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
    e?.preventDefault();
    setIsSubmition(true);
    formSubmitted.current = true;
    const formResult = await submitData(data);
    console.log(formResult);
    if (formResult) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }

    setIsSubmition(false);
  };

  return (
    <>
      <PageTitle>Add New Product</PageTitle>
      <div className="relative m-auto flex min-h-16 w-full max-w-lg flex-col justify-center gap-4">
        {isSubmitting ? (
          <div
            style={{
              borderTopColor: "transparent",
            }}
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[40px] w-[40px] animate-spin rounded-full border-4 border-solid border-orange-400"
          ></div>
        ) : (
          <>
            {formSubmitted.current ? (
              <>
                <h1 className="mt-4">
                  {success
                    ? " Product Added"
                    : "Something went wrong, please try again"}{" "}
                </h1>
                {!success ? (
                  <ButtonComponent
                    variant="primary"
                    type="submit"
                    className="w-full"
                    onClick={() => window.location.reload()}
                  >
                    retry
                  </ButtonComponent>
                ) : null}
              </>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="title"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <Input label="Title" {...field} error={errors.title} />
                  )}
                />
                <Controller
                  name="price"
                  rules={{ min: 1 }}
                  control={control}
                  render={({ field }) => (
                    <Input label="Price" {...field} error={errors.price} />
                  )}
                />
                <Controller
                  name="category"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      label="Category"
                      {...field}
                      error={errors.category}
                    />
                  )}
                />
                <Controller
                  name="description"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      label="Description"
                      {...field}
                      error={errors.description}
                      as="textarea"
                    />
                  )}
                />
                <ButtonComponent
                  variant="primary"
                  type="submit"
                  className="w-full"
                >
                  Add Product
                </ButtonComponent>
              </form>
            )}
          </>
        )}
      </div>
    </>
  );
}

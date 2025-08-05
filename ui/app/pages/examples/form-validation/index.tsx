import { showToast } from "@dynatrace/strato-components-preview/notifications";
import { Flex } from "@dynatrace/strato-components/layouts";
import { Blockquote } from "@dynatrace/strato-components/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageLayout } from "app/components/PageLayout";
import React from "react";
import { Form, useForm } from "react-hook-form";
import z from "zod/v4";

// Définition du schéma Zod
const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit avoir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit avoir au moins 2 caractères"),
  age: z
    .number("L'âge doit être un nombre")
    .int("L'âge doit être un entier")
    .gte(0, "L'âge ne peut pas être négatif")
    .min(18, "Vous devez être majeur"),
  email: z.email("L'email doit être valide"),
  acceptTerms: z.boolean(),
});

// Typage des données du formulaire
type FormData = z.infer<typeof formSchema>;

export const FormValidationExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    showToast({
      title: "Form submitted successfully",
      message: JSON.stringify(data, null, 2),
      type: "success",
      lifespan: 2000,
    });

    // Traitement backend ou autre logique ici
  };

  return (
    <PageLayout
      title={"Form Validation Example"}
      subtitle="Demonstration of form validation features"
      breadcrumbs={[{ href: "/", label: "Home" }, { href: "/", label: "Examples" }, { label: "Form Validation" }]}
    >
      <Flex flexDirection="column" width={"100%"} justifyContent="center" alignItems="start" gap={16}>
        <Blockquote>
          This example demonstrates how to implement form validation using various input components.
          <br />
          It includes:
          <ul>
            <li>
              <code>TextInput</code> - For text input with validation.
            </li>
            <li>
              <code>Checkbox</code> - For boolean input with validation.
            </li>
            <li>
              <code>DateTimePicker</code> - For date selection with validation.
            </li>
            <li>
              <code>RadioGroup</code> - For selecting one option from a set with validation.
            </li>
            <li>
              <code>SelectV2</code> - For multi-select dropdown with validation.
            </li>
          </ul>
        </Blockquote>
        <Flex>
          <Form>
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 500, margin: "auto" }}>
              <div>
                <label>Prénom</label>
                <input {...register("firstName")} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>

              <div>
                <label>Nom</label>
                <input {...register("lastName")} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>

              <div>
                <label>Âge</label>
                <input type="number" {...register("age", { valueAsNumber: true })} />
                {errors.age && <p>{errors.age.message}</p>}
              </div>

              <div>
                <label>Email</label>
                <input type="email" {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div>
                <label>
                  <input type="checkbox" {...register("acceptTerms")} />
                  J’accepte les conditions d’utilisation
                </label>
                {errors.acceptTerms && <p>{errors.acceptTerms.message}</p>}
              </div>

              <button type="submit">Envoyer</button>
            </form>
          </Form>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

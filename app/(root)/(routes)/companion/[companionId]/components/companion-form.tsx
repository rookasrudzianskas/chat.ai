"use client";

import * as z from "zod";
import React from 'react';
import {Category, Companion} from "@prisma/client";

interface CompanionFormProps {
  categories: Category[];
  initialData: Companion | null;
};

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  description: z.string().min(1, {
    message: "Description is required.",
  }),
  instructions: z.string().min(200, {
    message: "Instructions require at least 200 characters."
  }),
  seed: z.string().min(200, {
    message: "Seed requires at least 200 characters."
  }),
  src: z.string().min(1, {
    message: "Image is required."
  }),
  categoryId: z.string().min(1, {
    message: "Category is required",
  }),
})

const CompanionForm = ({
  categories,
  initialData
}: CompanionFormProps) => {

  return (
    <div>

    </div>
  );
};

export default CompanionForm;
// by Rokas with ❤️

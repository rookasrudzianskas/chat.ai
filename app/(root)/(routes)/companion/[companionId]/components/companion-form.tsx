"use client";

import React from 'react';
import {Category, Companion} from "@prisma/client";

interface CompanionFormProps {
  categories: Category[];
  initialData: Companion | null;
};

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

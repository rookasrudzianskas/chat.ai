"use client";

import React, {useEffect, useState} from 'react';
import {Search} from "lucide-react";
import {useRouter, useSearchParams} from "next/navigation";

import {Input} from "@/components/ui/input";

const SearchInput = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get('categoryId');
  const name = searchParams.get('name');

  const [value, setValue] = useState(name || '');

  useEffect(() => {

  })

  return (
    <div className="relative">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
        placeholder="Search..."
        className="pl-10 bg-primary/10"
      />
    </div>
  );
};

export default SearchInput;
// by Rokas with ❤️

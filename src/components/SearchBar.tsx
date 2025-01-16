import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search, XCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required!",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-4 shadow-lg transition-all duration-300 focus-within:border-orange-500 ${
          form.formState.errors.searchQuery
            ? "border-red-500"
            : "border-gray-300"
        }`}
      >
        {/* Search Icon */}
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-500 hidden md:block"
        />

        {/* Input Field */}
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-lg md:text-xl focus-visible:ring-0 placeholder-gray-500"
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Reset Button */}
        <Button
          onClick={handleReset}
          type="button"
          variant="ghost"
          className="rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
        >
          <XCircle className="text-gray-400 hover:text-red-500" size={24} />
        </Button>

        {/* Search Button */}
        <Button
          type="submit"
          className="rounded-full bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition-all duration-300"
        >
          Search
        </Button>
      </form>

      {/* Error Message */}
      {form.formState.errors.searchQuery && (
        <p className="text-red-500 mt-2 text-sm font-medium">
          {form.formState.errors.searchQuery.message}
        </p>
      )}
    </Form>
  );
};

export default SearchBar;

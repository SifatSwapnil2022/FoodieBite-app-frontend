import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";
import { CountryDropdown } from "react-country-region-selector"; // Optional for country select

const formSchema = z.object({
  email: z.string().email("Invalid email address").optional(),
  name: z.string().min(1, "Name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().min(1, "Phone number is required"),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  title?: string;
  buttonText?: string;
};

const UserProfileForm = ({
  onSave,
  isLoading,
  currentUser,
  title = "User Profile",
  buttonText = "Submit",
}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-6 bg-gray-50 rounded-lg shadow-lg p-6 md:p-10"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">{title}</h2>
          <FormDescription className="mt-2 text-sm text-gray-600">
            View and edit your profile information here
          </FormDescription>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled
                    className="bg-gray-100 cursor-not-allowed"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-6">
            <FormField
              control={form.control}
              name="addressLine1"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Address Line 1</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  {/* CountryDropdown with Orange Border */}
                  <CountryDropdown
                    {...field}
                    onBlur={() => null}
                    className="bg-white border-2 border-orange-500 rounded-md focus:ring-2 focus:ring-orange-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-4 flex justify-end gap-4">
          {isLoading ? (
            <Button className="bg-blue-500 text-white" disabled>
              Loading...
            </Button>
          ) : (
            <>
              <Button
                type="button"
                onClick={() => form.reset()}
                className="bg-gray-300 text-gray-800"
              >
                Reset
              </Button>
              <Button
                type="submit"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                {buttonText}
              </Button>
            </>
          )}
        </div>
      </form>
    </Form>
  );
};

export default UserProfileForm;

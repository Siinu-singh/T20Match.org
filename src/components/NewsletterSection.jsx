"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Mail } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function NewsletterSection() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    toast({
      title: "Subscription Successful!",
      description: "Thank you for subscribing to our newsletter. Welcome to the T.20Match community!",
    });
    form.reset();
  }

  return (
    <section className="relative overflow-hidden bg-card/95 backdrop-blur-sm border-t py-20 sm:py-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
           <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full inline-block">
                    <Mail size={32} className="text-primary" />
                </div>
            </div>
          <h2 className="font-headline text-4xl font-bold text-foreground">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay ahead of the game! Get the latest T20 news, match previews, and exclusive content delivered straight to your inbox. Never miss a moment of the action.
          </p>
        </div>
        <div className="mt-8 max-w-lg mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row items-start gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="h-14 text-base pl-6"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="h-14 w-full sm:w-auto text-base">
                Subscribe
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

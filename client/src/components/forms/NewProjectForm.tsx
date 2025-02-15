"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { newProjectSchema } from "@/lib/schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateProject } from "@/lib/query/project.query";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";

const NewProjectForm = () => {
  const { mutateAsync: createProject } = useCreateProject();
  const { toast } = useToast();
  const { data } = useSession();

  const form = useForm<z.infer<typeof newProjectSchema>>({
    resolver: zodResolver(newProjectSchema),
    defaultValues: {
      name: "",
      url: "",
      collaborators: [],
    },
  });

  async function onSubmit(values: z.infer<typeof newProjectSchema>) {
    if (!data?.user) {
      toast({
        title: "Unauthorized",
        description: "You need to login to create a project",
      });
      return;
    }

    await createProject({
      data: values,
      accessToken: data.user.accessToken,
    });

    window.location.reload();

    toast({
      title: "Project Created",
      description: "Project with name " + values.name + " has been created",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input placeholder="project name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Url *</FormLabel>
              <FormControl>
                <Input placeholder="github url" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="collaborators"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Collaborators</FormLabel>
              <FormControl>
                <Input placeholder="add a friend" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end items-center gap-2 pt-3">
          <Button
            type="submit"
            className="bg-orchid text-white border-orchid-dark hover:bg-orchid-dark px-8"
          >
            Submit
          </Button>
          <Button variant={"outline"}>Cancel</Button>
        </div>
      </form>
    </Form>
  );
};

export default NewProjectForm;

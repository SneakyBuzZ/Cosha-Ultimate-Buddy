import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NewProjectForm from "@/components/forms/NewProjectForm";

interface NewProjectModalProps {
  children: React.ReactNode;
  className?: string;
}

const NewProjectModal = ({ children, className }: NewProjectModalProps) => {
  return (
    <Dialog>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <NewProjectForm />
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectModal;

'use client';

import { Component } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ComponentForm } from './component-form';
import { Button } from './ui/button';
import { Pencil } from 'lucide-react';
import { useState } from 'react';

interface UpdateComponentDialogProps {
  component: Component;
  onUpdate?: () => Promise<void>;
}

export function UpdateComponentDialog({ component, onUpdate }: UpdateComponentDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSuccess = async (updatedComponent: Component) => {
    setOpen(false);
    if (onUpdate) {
      await onUpdate();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Component</DialogTitle>
        </DialogHeader>
        <ComponentForm
          initialData={component}
          onSuccess={handleSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
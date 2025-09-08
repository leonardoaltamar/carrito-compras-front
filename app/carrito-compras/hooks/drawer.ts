"use client"

import { useState, useCallback } from "react";

interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
}

export function useDisclosure(defaultIsOpen: boolean = false): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen);

  const onOpen = useCallback((): void => setIsOpen(true), []);
  const onClose = useCallback((): void => setIsOpen(false), []);
  const onOpenChange = useCallback((): void => setIsOpen((prev) => !prev), []);

  return { isOpen, onOpen, onClose, onOpenChange };
}
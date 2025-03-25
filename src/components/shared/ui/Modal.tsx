import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import CrossIcon from '../icons/CrossIcon';

type TModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  className?: string;
};

const Modal = ({ open, onOpenChange, children, className }: TModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="backdrop-blur-xs fixed inset-0 z-40 bg-black bg-opacity-10" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content
            className={twMerge(
              'relative w-full max-w-2xl rounded-lg bg-white shadow-lg dark:bg-gray-700',
              className,
            )}
          >
            {children}
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const ModalHeader = ({
  title,
  onClose,
}: {
  title?: string;
  onClose?: () => void;
}) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-4 md:p-5 dark:border-gray-600">
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      {onClose && (
        <button
          onClick={onClose}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <CrossIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

const ModalBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className="space-y-4 p-4 text-gray-500 md:p-5 dark:text-gray-400">
      {children}
    </div>
  );
};

const ModalFooter = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-end gap-2 border-t border-gray-200 p-4 md:p-5 dark:border-gray-600">
      {children}
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;

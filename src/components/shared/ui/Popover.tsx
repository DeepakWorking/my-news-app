import * as RadixPopover from '@radix-ui/react-popover';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type TPopoverProps = {
  trigger: ReactNode;
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  containerWrapperClassName?: string;
};

const Popover = ({
  trigger,
  children,
  side = 'bottom',
  containerWrapperClassName,
}: TPopoverProps) => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side={side}
          className={twMerge(
            'z-50 ml-4 w-52 rounded-md bg-white p-2 shadow-lg dark:bg-gray-800',
            containerWrapperClassName,
          )}
        >
          {children}
          <RadixPopover.Arrow className="fill-white dark:fill-gray-800" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};

export default Popover;

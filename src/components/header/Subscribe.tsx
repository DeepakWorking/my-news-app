import MailIcon from '@components/shared/icons/MailIcon';
import Button from '@ui/Button';
import Modal from '@ui/Modal';
import { useState } from 'react';

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="link"
        className="whitespace-nowrap px-1 underline"
        onClick={() => setIsOpen(true)}
      >
        Subscribe
      </Button>
      <Modal open={isOpen} onOpenChange={setIsOpen} className="text-sm">
        <Modal.Header
          title="Get more updates..."
          onClose={() => setIsOpen(false)}
        />
        <Modal.Body>
          <p className="text-textPrimary dark:text-textPrimary-dark">
            Do you want to get notified when a new news is added to ABC News?
            Sign up for our newsletter and you'll be among the first to find out
            about latest articles.
          </p>
          <form className="flex flex-col gap-y-4">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <MailIcon />
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter email..."
                required
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => alert('Coming Soon')}>Subscribe</Button>
          <Button variant="outlined" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Subscribe;

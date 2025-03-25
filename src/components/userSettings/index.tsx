import SettingsIcon from "@components/shared/icons/SettingsIcon";
import Button from "@ui/Button";
import Modal from "@ui/Modal";
import { useState } from "react";
import CategoryGroup from "./CategoryGroup";
import CountriesDropdown from "./CountresDropdown";
import SourcesGroup from "./SourcesGroup";

const UserSettings = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button variant="outlined" onClick={() => setIsOpen(true)} className='px-2 py-2 rounded-full'>
                <SettingsIcon />
            </Button>
            <Modal open={isOpen} onOpenChange={setIsOpen} className="text-sm">
                <Modal.Header title="Customise Your Feed" onClose={() => setIsOpen(false)} />
                <Modal.Body>
                    <p className=" text-textPrimary dark:text-textPrimary-dark">Here you can customize your user settings, preferences, and profile details.</p>
                    <form className="flex flex-col gap-y-4">
                        <CountriesDropdown />
                        <CategoryGroup />
                        <SourcesGroup />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outlined" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UserSettings;

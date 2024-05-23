import React from 'react';
import { Typography, Button, Dialog, DialogBody, DialogFooter } from '@material-tailwind/react';
import Map from '../../ui/Map';

const StoreDialog = ({ open, handleClose, center, distributor, location }) => {
    return (
        <Dialog open={open} handler={handleClose} size="sm">
            <DialogBody className="flex flex-col items-center justify-center text-center">
                {location && <Map center={center} />}
                {distributor && (
                    <Typography variant="paragraph" color="blue-gray" className="mt-4">
                        Distributer: {distributor}
                    </Typography>
                )}
                {location && (
                    <Typography variant="paragraph" color="blue-gray">
                        Location: {location}
                    </Typography>
                )}
            </DialogBody>
            <DialogFooter>
                <Button color="red" onClick={handleClose}>
                    Close
                </Button>
            </DialogFooter>
        </Dialog>
    );
};

export default StoreDialog;

import React from 'react';
import { Typography, Button, IconButton } from '@material-tailwind/react';

export default function Pagination() {
    return (
        <>
            <Button variant="outlined" size="sm">
                Previous
            </Button>
            <div className="flex items-center gap-2">
                <IconButton variant="outlined" size="sm">
                    1
                </IconButton>
                <IconButton variant="text" size="sm">
                    2
                </IconButton>
                <IconButton variant="text" size="sm">
                    3
                </IconButton>
                <IconButton variant="text" size="sm">
                    ...
                </IconButton>
                <IconButton variant="text" size="sm">
                    8
                </IconButton>
                <IconButton variant="text" size="sm">
                    9
                </IconButton>
                <IconButton variant="text" size="sm">
                    10
                </IconButton>
            </div>
            <Button variant="outlined" size="sm">
                Next
            </Button>
        </>
    );
}

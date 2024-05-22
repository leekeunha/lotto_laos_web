import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '@material-tailwind/react';

export default function Search() {
    return (
        <div className="mb-4 flex flex-col  gap-2 md:flex-row md:items-center justify-end">
            <div className="flex w-full shrink-0 gap-2 md:w-max mt-1">
                <div className="w-full md:w-72">
                    <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                </div>
            </div>
        </div>
    );
}

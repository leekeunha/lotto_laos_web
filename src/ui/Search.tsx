import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '@material-tailwind/react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Search() {
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        console.log('handleSubmit');
        console.log('text: ', text);
        e.preventDefault();
        navigate(`/service-center/notice/${text}`);
    };

    useEffect(() => setText(keyword || ''), [keyword]);

    return (
        <div className="mb-4 flex flex-col  gap-2 md:flex-row md:items-center justify-end">
            <div className="flex w-full shrink-0 gap-2 md:w-max mt-1">
                <form className="w-full md:w-72" onSubmit={handleSubmit}>
                    <Input
                        label="Search"
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    />
                </form>
            </div>
        </div>
    );
}

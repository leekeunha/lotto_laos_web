import React from 'react';
import { Typography, Button, IconButton } from '@material-tailwind/react';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../utils/constants';

export default function Pagination({ count }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

    const pageCount = Math.ceil(count / PAGE_SIZE);

    function nextPage() {
        const next = currentPage === pageCount ? currentPage : currentPage + 1;

        searchParams.set('page', next);
        setSearchParams(searchParams);
    }

    function prevPage() {
        const prev = currentPage === 1 ? currentPage : currentPage - 1;

        searchParams.set('page', prev);
        setSearchParams(searchParams);
    }

    function goToPage(page) {
        searchParams.set('page', page);
        setSearchParams(searchParams);
    }

    const pages = Array.from({ length: pageCount }, (value, index) => index + 1);

    return (
        <>
            <Button variant="outlined" size="sm" onClick={prevPage} disabled={currentPage === 1}>
                Previous
            </Button>
            <div className="flex items-center gap-2">
                {pages.map((page) => (
                    <IconButton
                        key={page}
                        variant={page === currentPage ? 'outlined' : 'text'}
                        size="sm"
                        onClick={() => goToPage(page)}
                    >
                        {page}
                    </IconButton>
                ))}
            </div>
            <Button
                variant="outlined"
                size="sm"
                onClick={nextPage}
                disabled={currentPage === pageCount}
            >
                Next
            </Button>
        </>
    );
}

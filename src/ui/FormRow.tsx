import React from 'react';

export default function FormRow({ label, error, children }) {
    return (
        <div className="grid items-center grid-cols-3 gap-10 py-5">
            {label && <label className="font-medium">{label}</label>}
            {children}
            {error && <div className="text-xl text-red-700">{error}</div>}
        </div>
    );
}

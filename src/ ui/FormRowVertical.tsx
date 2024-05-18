import { FormRowVerticalProps } from './types';

export default function FormRowVertical({ label, error, children }: FormRowVerticalProps) {
    return (
        <div className="flex flex-col gap-3 py-5">
            {label && (
                <label className="font-medium" htmlFor={children.props.id}>
                    {label}
                </label>
            )}
            {children}
            {error && <div className="text-xl text-red-700">{error}</div>}
        </div>
    );
}

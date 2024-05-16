import { useMoveBack } from '../hooks/useMoveBack';
import { Button } from '@material-tailwind/react';

function PageNotFound() {
    const moveBack = useMoveBack();

    return (
        <main className="h-screen bg-gray-50 flex items-center justify-center p-12">
            <div className="bg-white border border-gray-400 rounded-md p-12 flex-none w-[96rem] text-center">
                <div className="fs-1 fw-semibold mb-8">
                    The page you are looking for could not be found 😢
                </div>
                <Button
                    onClick={moveBack}
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-lg"
                >
                    &larr; Go back
                </Button>
            </div>
        </main>
    );
}

export default PageNotFound;
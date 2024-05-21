import { useMoveBack } from '../hooks/useMoveBack';
import { Button } from '@material-tailwind/react';

function PageNotFound() {
    const moveBack = useMoveBack();

    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-12 text-center">
                <div className="text-2xl font-semibold mb-8">
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

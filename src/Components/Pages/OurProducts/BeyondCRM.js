import 'styles/main.css';

export default function BeyondCRM() {
    return (
        <div className="flex flex-col justify-center h-96">
            <div className="bg-gray-200 rounded-3xl shadow-xl transform">
                <div className="h-72 rounded-3xl transform -rotate-2 bg-gradient-to-r from-light-blue-400 to-blue-500">
                </div>
            </div>

            <div className="h-96 w-2/3 self-center lg:self-auto md:w-3/5 lg:ml-12 lg:w-1/3 shadow-xl absolute bg-white rounded-3xl p-12">
                <p className="font-bold text-4xl">Beyond CRM</p>
                <p className="font-medium text-lg text-gray-400 mt-2">
                Tailwind CSS is the only framework that I\'ve seen scale on large teams. It’s easy to customize, adapts Tailwind CSS is the only framework that I\'ve seen scale on large teams. It’s easy to customize, adapts to any design and the build size is tiny.
                </p>
            </div>
        </div>

    );
}

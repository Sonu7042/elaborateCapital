import React from 'react';

interface PageProps {
    title: string;
}

const DemoPage: React.FC<PageProps> = ({ title }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 text-center">
                <h1 className="text-4xl font-extrabold text-[#111827] mb-4">
                    {title} Page
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    {/* This is the {title} page of Elaborate Capital. Premium financial services and investment planning. */}
                    comming soon...
                </p>
                <div className="mt-10 h-64 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">
                    Content for {title} will go here
                </div>
            </div>
        </div>
    );
};

export default DemoPage;

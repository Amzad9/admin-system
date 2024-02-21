import React from 'react'

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
            </div>
        </div>
    )
}

export default PageNotFound
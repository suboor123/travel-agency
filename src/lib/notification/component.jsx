'use client';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Notification from '.';
import { NOTIFICATIONS_TYPE } from './constant';

export default function NotificationBar({ type, message }) {
    const isError = type === NOTIFICATIONS_TYPE.ERROR;

    const renderMessage = () => {
        if (Array.isArray(message)) {
            return message.map((msg, idx) => (
                <p key={`msggg-${idx}`} className="mt-1 text-sm text-gray-500">
                    {msg}
                </p>
            ));
        } else {
            return <p className="mt-1 text-sm text-gray-500">{message}</p>;
        }
    };

    const renderIcon = () => {
        if (!isError) {
            return <CheckCircleIcon className="h-8 w-8 text-green-400" aria-hidden="true" />;
        } else {
            return <XCircleIcon className="h-8 w-8" style={{ color: 'red' }} aria-hidden="true" />;
        }
    };

    return (
        <>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div aria-live="assertive" className="z-[9999999] pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end transition-transform duration-500 translate-y-0">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">{renderIcon()}</div>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    {isError ? <p className="text-sm font-medium text-gray-900">Something went Wrong</p> : <p className="text-sm font-medium text-gray-900">Success!</p>}
                                    {renderMessage()}
                                </div>
                                <div className="ml-4 flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={() => {
                                            Notification.removeNotification();
                                        }}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

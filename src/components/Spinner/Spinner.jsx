const Spinner = () => {
    return (
        <div className="flex justify-center">
            <span className="loading loading-infinity text-secondary loading-xs size-12"></span>
            <span className="loading loading-infinity text-secondary loading-sm size-14"></span>
            <span className="loading loading-infinity text-secondary loading-md size-16"></span>
            <span className="loading loading-infinity text-secondary loading-lg size-20"></span>
        </div>
    );
};

export default Spinner;
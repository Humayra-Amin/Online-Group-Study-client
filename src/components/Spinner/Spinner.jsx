const Spinner = () => {
    return (
        <div className="flex justify-center">
            <span className="loading loading-infinity text-secondary loading-xs"></span>
            <span className="loading loading-infinity text-secondary loading-sm"></span>
            <span className="loading loading-infinity text-secondary loading-md"></span>
            <span className="loading loading-infinity text-secondary loading-lg"></span>
        </div>
    );
};

export default Spinner;
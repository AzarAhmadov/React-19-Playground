const TabButton = ({ children, isActive, onClick }) => {
    if (isActive) {
        return <div className="button">{children}</div>;
    }
    return (
        <button
            onClick={() => {
                onClick();
            }}
        >
            {children}
        </button>
    );
};
export default TabButton;
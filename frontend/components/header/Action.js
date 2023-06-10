const Action = ({ setModalOpen }) => {
    const onNewTransaction = () => {
        setModalOpen(true)
    }

    return (
        <div>
            <button onClick={onNewTransaction} className="w-full rounded-lg bg-[#16d542] py-3 hover:bg-opacity-70 hover:scale-105 active:scale-95">
                <span className="font-medium text-white">New</span>
            </button>
        </div>
    )
}

export default Action

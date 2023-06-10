import { useMemo, useState } from 'react'
import TransactionDetailModal from './TransactionDetailModal'
import TransactionItem from './TransactionItem'

const TransactionsList = ({ connected, transactions }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [currentTransactionID, setCurrentTransactionID] = useState(null)
    const currentTransaction = useMemo(() => transactions.find((transaction) => transaction.id === currentTransactionID), [currentTransactionID])

    const toggleTransactionDetailModal = (value, transactionID) => {
        setCurrentTransactionID(transactionID)
        setModalOpen(value)
    }

    return (
        <div className='bg-black text-[#15ec3c]'>
            <div className="text-[#15ec3c] pb-4 pt-10">
                <p className="mx-auto max-w-3xl px-10 text-3xl font-bold uppercase text-[#15ec3c] xl:px-0">Transactions</p>
            </div>
            <div className="mx-auto max-w-3xl divide-y divide-gray-100 py-4 px-10 xl:px-0">
                {connected ? (
                    <>
                        {transactions?.length != 0 ? transactions.map(({ id, to, amount, description, transactionDate }) => (
                            <TransactionItem key={id} id={id} to={to} description={description} transactionDate={transactionDate} amount={amount} toggleTransactionDetailModal={toggleTransactionDetailModal} />
                        )) : (
                            <div className="flex flex-row items-center text-center justify-center mt-40">
                        <p className="text-xl font-normal text-[#15ec3c]">No Transaction yet!</p>
                    </div>
                        )}

                        <TransactionDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} currentTransaction={currentTransaction} />
                    </>
                ) : (
                    <div className="flex items-center justify-center pt-20">
                        <p className="text-2xl font-medium text-[#15ec3c]">Please connect your wallet.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TransactionsList

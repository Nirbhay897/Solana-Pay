import { useState, useEffect } from 'react'
import Action from '../components/header/Action'
import NavMenu from '../components/header/NavMenu'
import Profile from '../components/header/Profile'
import SearchBar from '../components/home/SearchBar'
import NewTransactionModal from '../components/transaction/NewTransactionModal'
import TransactionsList from '../components/transaction/TransactionsList'
import { useWallet } from '@solana/wallet-adapter-react'
import TransactionQRModal from '../components/transaction/TransactionQRModal'
import { useCashApp } from '../hooks/Cashapp'



const Home = () => {
    const { connected, publicKey } = useWallet()
    const [transactionQRModalOpen, setTransactionQRModalOpen] = useState(false)
    const [qrCode, setQrCode] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        if(userAddress === '11111111111111111111111111111111'){
            setLoading(true)
        }
        if(loading){
            location.reload()
        }
        setLoading(false)
    },[loading])


    const { avatar, userAddress, doTransaction, transactions, setNewTransactionModalOpen, newTransactionModalOpen } = useCashApp()

    return (
        <div className="flex min-h-screen bg-black">
            <header className="flex w-[250px] flex-col bg-gray-800 p-12">
                <Profile setModalOpen={setTransactionQRModalOpen} avatar={avatar} userAddress={userAddress} setQrCode={setQrCode} />
                <TransactionQRModal modalOpen={transactionQRModalOpen} setModalOpen={setTransactionQRModalOpen} userAddress={userAddress} setQrCode={setQrCode} myKey={publicKey} />

                <NavMenu connected={connected} publicKey={publicKey} />

                <Action setModalOpen={setNewTransactionModalOpen} />
                <NewTransactionModal modalOpen={newTransactionModalOpen} setModalOpen={setNewTransactionModalOpen} addTransaction={doTransaction} />
            </header>

            <main className="flex flex-1 bg-black flex-col">
                {/* <SearchBar /> */}
                <TransactionsList className='bg-black' connected={connected} transactions={transactions} />
            </main>
        </div>
    )
}

export default Home

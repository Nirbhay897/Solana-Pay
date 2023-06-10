import { useState, useEffect } from "react";

import { getAvatarUrl } from "../functions/getAvatarUrl";

import {WalletAdapterNetwork} from '@solana/wallet-adapter-base'

import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import {clusterApiUrl, Connection, Ketpair, LAMPORTS_PER_SQL, PublicKey, SystemProgram, Transaction} from '@solana/web3.js'

export const useCashApp = () =>{

    const {connected, publicKey, sendTransaction} = useWallet()
    const {connection} = useConnection()
    const [userAddress, setUserAddress] = useState("11111111111111111111111111111111")
    const [avatar, setAvatar] = useState("")
    const [amount, setAmount] = useState(0)

     // Get Avatar based on the userAddress
     useEffect(() => {
        if(connected)
        setAvatar(getAvatarUrl(publicKey?.toString()))
        setUserAddress(publicKey?.toString())
    },[connected])


    // Create transaction to send to our wallet sign it

    const maleTransaction = async(fromWallet, toWallet, amount, reference) =>{

    }



    return {connected, publicKey, avatar, setAvatar, userAddress, setUserAddress}

}
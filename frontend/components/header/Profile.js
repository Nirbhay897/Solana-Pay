import { useEffect, useState } from "react"
import { truncate } from "../../utils/string"
const Profile = ({ setModalOpen, avatar, userAddress, setQrCode }) => {

    const onProfileOpen = () => {
        setModalOpen(true)
        setQrCode(false)
    }


    return (
        <div onClick={onProfileOpen} className="flex cursor-pointer flex-col items-center space-y-3">
            <div className="h-16 w-16 rounded-full border-2 border-[#15ec3c]">
                <img className="h-full w-full rounded-full object-cover" src={avatar} />
            </div>

            <div className="flex flex-col items-center space-y-1">
                <p className="font-semibold text-[#15ec3c]">{truncate(userAddress)}</p>

                <p className="text-sm font-light italic text-[#15ec3c]">${truncate(userAddress)}</p>
            </div>
        </div>
    )
}

export default Profile

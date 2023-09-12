import React, { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from "../../components/navbar";

export default function register() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.post(process.env.NEXT_PUBLIC_API_REGISTER, {
            "search_type": 1,
            "search_value": "ATEST"
        }).then((response) => {
            setUsers(response.data.data),
                console.log(response.data.data)

        }).catch((error) => console.log(error))

    }, [])


    return (

        <div>
            <Navbar />
            <h1 className="py-8 text-xl font-semibold text-[#dd2d7f] ">Registre des personnes </h1>

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Noms
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Postnoms
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Prenoms
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    {
                        users.map((user) => {
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.firstName}
                                    </th>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.lastName}
                                    </th>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.middleName}
                                    </th>
                                </tr>

                            </tbody>
                        })
                    }
                </table>


            </div>
        </div>

    )
}

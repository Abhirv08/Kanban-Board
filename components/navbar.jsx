"use client";
import { addUserInfoToTickets } from '@/constants';
import { useBoundStore } from '@/store';
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [show, setShow] = useState(false);
    const setGrouping = useBoundStore(state => state.setGrouping);
    const setTickets = useBoundStore(state => state.setTickets);
    const setUsers = useBoundStore(state => state.setUsers);
    const setOrdering = useBoundStore(state => state.setOrdering);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers");
            const data = await response.json();
            setTickets(addUserInfoToTickets(data.tickets, data.users));
            setUsers(data.users);
        }

        fetchData();
    }, [setTickets, setUsers])

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        if (name === "grouping") {
            setGrouping(value);
        }
        if (name === "ordering") {
            setOrdering(value);
        }
    }

    return (
        <div className="relative py-2 px-4 bg-white">
            <div className="flex cursor-pointer gap-4 text-gray-700 items-center border-2 border-[#e6e7eb] shadow-[0_0_8px_0_#0000001a] w-fit p-1 rounded-md" onClick={() => setShow(!show)}>
                <div className="flex gap-2 items-center">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"></path></svg>
                    <p>Display</p>
                </div>
                <div style={{
                    transition: 'transform 0.5s ease-in-out',
                    transform: show ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                </div>
            </div>
            {<section style={{
                transition: 'opacity 0.5s ease-in-out',
                opacity: !show ? 0 : 1,
            }} className="absolute bg-white shadow-[0_0_8px_0_#0000001a] z-40 py-2 px-4 -bottom-24 rounded-md flex flex-col gap-4 ">
                <div className="flex gap-12"><span>Grouping</span>
                    <select name="grouping" id="grouping" onClick={handleSelectChange} className='w-24 focus:outline-none border-2 border-gray-300 p-0.5 rounded-md'>
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className="flex gap-12"><span>Ordering</span>
                    <select name="ordering" id="ordering" onClick={handleSelectChange} className='w-24 focus:outline-none border-2 border-gray-300 p-0.5 rounded-md'>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </section>}
        </div>
    )
}

export default Navbar
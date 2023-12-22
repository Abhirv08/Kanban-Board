import { useBoundStore } from '@/store'
import React, { useEffect, useState } from 'react'
import PartByUser from './partByUser';

const DisplayByUser = () => {
    const [userGroupedData, setUserGroupedData] = useState({});

    const users = useBoundStore(state => state.users);
    const tickets = useBoundStore(state => state.tickets);

    useEffect(() => {
        function groupTicketsByUserId() {
            const groupedTickets = {};

            tickets.forEach((ticket) => {
                const userId = ticket.userId;

                if (!groupedTickets[userId]) {
                    groupedTickets[userId] = [];
                }

                groupedTickets[userId].push(ticket);
            });

            const userNamedGrouping = {};

            Object.keys(groupedTickets).forEach((userId) => {
                const user = users.find((user) => user.id === userId);
                userNamedGrouping[user.name] = groupedTickets[userId];
            })

            setUserGroupedData(userNamedGrouping);
        }

        groupTicketsByUserId();
    }, [tickets, users])

    return (
        <div className='px-4 py-6 grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {
                Object.keys(userGroupedData).map((key, index) => (
                    <PartByUser key={index} userName={key} data={userGroupedData[key]} />
                ))
            }
        </div>
    )
}

export default DisplayByUser
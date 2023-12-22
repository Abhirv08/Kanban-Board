import { useBoundStore } from '@/store'
import React, { useEffect, useState } from 'react'
import PartByPriority from './partByPriority';
import { sortByPriority, sortByTitle } from '@/constants';

const DisplayByPriority = () => {
    const [groupedData, setGroupedData] = useState({});
    const priorityLevels = ["No Priority", "Low", "Medium", "High", "Urgent"];
    const tickets = useBoundStore(state => state.tickets);
    const ordering = useBoundStore(state => state.ordering);

    function groupTicketsByPriority(TicketArr) {
        const groupedTickets = {};

        // Initialize the groupedTickets object with empty arrays for each priority level
        for (let i = 0; i < 5; i++) {
            groupedTickets[i] = [];
        }

        // Group tickets based on priority
        TicketArr.forEach((ticket) => {
            const ticketPriority = ticket.priority;

            if (groupedTickets.hasOwnProperty(ticketPriority)) {
                groupedTickets[ticketPriority].push(ticket);
            }
        });

        setGroupedData(groupedTickets);
    }

    useEffect(() => {
        if (ordering === "priority") {
            groupTicketsByPriority(sortByPriority(tickets));
        }
        if (ordering === 'title') {
            groupTicketsByPriority(sortByTitle(tickets));
        }
    }, [ordering])

    useEffect(() => {
        groupTicketsByPriority(tickets);
    }, [tickets])

    return (
        <div className='px-4 py-6 grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {priorityLevels.map((priorityLevel, index) => (
                <PartByPriority key={index} priorityLevel={priorityLevel} priorityValue={index} data={groupedData[index]} />
            ))}
        </div>
    )
}

export default DisplayByPriority
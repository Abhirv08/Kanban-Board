import React, { useEffect, useMemo, useState } from 'react'
import PartByStatus from './partByStatus';
import { useBoundStore } from '@/store';
import { sortByPriority, sortByTitle } from '@/constants';

const DisplayByStatus = () => {
    const [groupByStatus, setGroupByStatus] = useState({});
    const validStatus = useMemo(() => ["Backlog", "Todo", "In progress", "Done", "Cancelled"], []);
    const tickets = useBoundStore(state => state.tickets);
    const ordering = useBoundStore(state => state.ordering);

    const groupTicketsByStatus = (ticketsArr, validStatus) => {
        const groupedTickets = {};

        // Initialize the groupedTickets object with empty arrays for each valid status
        validStatus.forEach((status) => {
            groupedTickets[status] = [];
        });

        // Group tickets based on status
        ticketsArr.forEach((ticket) => {
            const ticketStatus = ticket.status;

            if (groupedTickets.hasOwnProperty(ticketStatus)) {
                groupedTickets[ticketStatus].push(ticket);
            }
        });

        setGroupByStatus(groupedTickets);
    };

    useEffect(() => {
        if (ordering === "priority") {
            groupTicketsByStatus(sortByPriority(tickets), validStatus);
        }
        if (ordering === 'title') {
            groupTicketsByStatus(sortByTitle(tickets), validStatus);
        }
    }, [ordering, tickets, validStatus])

    useEffect(() => {
        groupTicketsByStatus(tickets, validStatus);
    }, [tickets, validStatus])

    return (
        <div className='px-4 py-6 grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {validStatus.map((status) => (
                <PartByStatus key={status} status={status} data={groupByStatus[status]} />
            ))}
        </div>
    )
}

export default DisplayByStatus
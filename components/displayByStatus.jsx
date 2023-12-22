import React from 'react'
import PartByStatus from './partByStatus';
import { useBoundStore } from '@/store';

const DisplayByStatus = () => {
    const statuses = {
        "Backlog": [],
        "Todo": [],
        "In progress": [],
        "Done": [],
        "Cancelled": []
    }

    const tickets = useBoundStore(state => state.tickets);

    for (const ticket of tickets) {
        statuses[ticket.status].push(ticket);
    }

    return (
        <div className='px-4 py-6 grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            <PartByStatus status="Backlog" data={statuses.Backlog} />
            <PartByStatus status="Todo" data={statuses.Todo} />
            <PartByStatus status="In progress" data={statuses['In progress']} />
            <PartByStatus status="Done" data={statuses.Done} />
            <PartByStatus status="Cancelled" data={statuses.Cancelled} />
        </div>
    )
}

export default DisplayByStatus
import 'styles/main.css';
import { UndrawExperts } from 'react-undraw-illustrations';
import PageHeader from 'Components/Other/PageHeader';
import { CLIENTS_DATA } from 'Config/clients';
import { useState } from 'react';

function ClientCard({ client }) {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (

        // Use in case of additional info:
        <button onClick={toggle} className={"p-4 shadow-lg rounded-lg hover:shadow-xl transition " + (client.darkBg ? "bg-gray-700" : "bg-gray-200")}>
            <div className={"flex flex-col items-center space-y-4"}>
                <img src={client.image} className="max-w-24 h-24 object-fit" />
                <p className={"text-xl font-medium " + (client.darkBg ? "text-gray-200" : "text-gray-600")}>{client.name}</p>
                {
                    open && client.info &&
                    <p className={"text-lg font-medium " + (client.darkBg ? "text-white" : "text-black")}>{client.info}</p>
                }
            </div>
        </button>

        // Use in case of links:
        // <a target="_blank" /*href={client.link}*/ className={"p-4 shadow-lg rounded-lg hover:shadow-xl transition " + (client.darkBg ? "bg-gray-700" : "bg-gray-200")} >
        //     <div className={"flex flex-col items-center space-y-4"}>
        //         <img src={client.image} className="max-w-24 h-24 object-fit" />
        //         <p className={"text-xl font-medium " + (client.darkBg ? "text-gray-200" : "text-gray-600")}>{client.name}</p>
        //     </div>
        // </a>
    );
}

export default function OurClients() {

    const data = Object.values(CLIENTS_DATA).map((client, index) => <ClientCard client={client} key={index} />);

    return (
        <div className="page-padding">
            <PageHeader title="Our Clients" undrawComponent={UndrawExperts} />
            <p className="info-text">
                Successfully running the operations of more than 400 organizations
                worldwide. Generating profit each year from its establishment. Below
                you can review some of our major clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {data}
            </div>
        </div>
    );
}

import 'styles/main.css';
import { UndrawExperts } from 'react-undraw-illustrations';
import PageHeader from 'Components/Other/PageHeader';
import { CLIENTS_DATA } from 'Config/clients';

function ClientCard({ client }) {
    return (
        <a target="_blank" href={client.link} className={"p-4 shadow-lg rounded-lg hover:shadow-2xl transition " + (client.darkBg ? "bg-gray-700" : "bg-gray-200")} >
            <div className={"flex flex-col items-center space-y-4"}>
                <img src={client.image} className="max-w-24 h-24 object-fit" />
                <p className={"text-xl font-medium " + (client.darkBg ? "text-gray-200" : "text-gray-600")}>{client.name}</p>
            </div>
        </a>
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
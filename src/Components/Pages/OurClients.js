import "styles/main.css";
import PageHeader from "Components/Other/PageHeader";
import { CLIENTS_DATA } from "Config/clients";
import Dialog from "@material-ui/core/Dialog";
import { createModal } from "react-modal-promise";
import ModalFactory from "react-modal-promise";

const ClientModal = createModal(({ isOpen, onResolve, client }) => (
	<Dialog open={isOpen} onClose={onResolve}>
		<div className="flex flex-col p-8 space-y-4">
			<div className="flex flex-row justify-between items-center">
				<p className="gradient-title">
					{client.longName || client.name}
				</p>
				<button className="text-2xl" onClick={onResolve}>
					×
				</button>
			</div>
			<p className="info-text">{client.info}</p>
		</div>
	</Dialog>
));

function ClientCard({ client }) {
	const showModal = async () => {
		if (client.info) {
			await ClientModal({ client: client });
		}
	};

	return (
		// Use in case of additional info:
		<button
			onClick={showModal}
			className={
				"p-4 shadow-lg rounded-lg hover:shadow-xl transition " +
				(client.darkBg ? "bg-gray-700" : "bg-gray-200")
			}
		>
			<div className={"flex flex-col items-center space-y-4"}>
				<img src={client.image} className="max-w-24 h-24 object-fit" />
				<p
					className={
						"text-xl font-medium " +
						(client.darkBg ? "text-gray-200" : "text-gray-600")
					}
				>
					{client.name}
				</p>
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
	const data = Object.values(CLIENTS_DATA).map((client, index) => (
		<ClientCard client={client} key={index} />
	));

	return (
		<div className="page-padding">
			<PageHeader title="Our Clients" undraw="experts" />
			<p className="info-text">
				Successfully running the operations of more than 400
				organizations worldwide. Generating profit each year from its
				establishment. Below you can review some of our major clients.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
				{data}
			</div>

			<ModalFactory />
		</div>
	);
}

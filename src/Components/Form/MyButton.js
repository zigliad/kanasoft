import "styles/main.css";

export default function MyButton({ title, onClick, className = "" }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={
				"bg-ks-purple p-3 text-white texl-lg font-bold rounded-lg \
                        shadow-lg hover:shadow-xl transition duration-200 focus:outline-none focus:border-0" +
				" " +
				className
			}
		>
			{title}
		</button>
	);
}

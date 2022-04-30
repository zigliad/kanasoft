import { COMPANY_NAME } from "Config/config";
import React from "react";

export default function Footer() {
	return (
		<>
			<footer className="relative bg-gray-200 dark:bg-gray-600 py-16">
				<div className="flex flex-wrap items-center md:justify-between justify-center">
					<div className="w-full md:w-4/12 px-4 mx-auto text-center">
						<div className="text-sm text-gray-600 dark:text-gray-200 font-semibold py-1">
							Copyright © {new Date().getFullYear()}
							{" - "}
							{COMPANY_NAME}
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

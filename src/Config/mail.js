// const SERVICE_ID = 'service_gmail'
// const TEMPLATE_ID = 't_cannasoft_contact'
// const USER_ID = 'user_0JEmGfhbt6kwUzyWrRyP7'

const SERVICE_ID = "service_cannasoft_smtp";
const TEMPLATE_ID = "t_cannasoft_contact";
const USER_ID = "user_FcVMECwyFTkIkA6LYCRC2";

const REGEX = {
	fullname: /^[a-zA-Z ]+$/,
	mail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export { SERVICE_ID, TEMPLATE_ID, USER_ID, REGEX };

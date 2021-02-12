import 'styles/main.css';

export default function MyTextField({ label, placehodler, value, setValue, containerClassName="", inputClassName="" }) {

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <label className={"block " + containerClassName}>
            <span className="text-gray-700 dark:text-white">{label}</span>
            <input className={`form-input p-4 mt-2 block w-64 rounded-lg shadow-md
                              focus:shadow-lg focus:ring-2 focus:ring-ks-purple
                              dark:bg-gray-700 font-bold transition duration-200 ` + inputClassName}
                placeholder={placehodler}
                onChange={onChange}
                value={value}
            />
        </label>
    );
}

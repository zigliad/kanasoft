import 'styles/main.css';

export default function GradientView(props) {

    const colors = props.colors ?? " from-my-purple to-my-gradient-purple"
    const rotate = props.rotate ?? " rotate-2"

    return (
        <div className="flex flex-col justify-center h-96 relative">
            <div className="bg-gray-200 rounded-3xl shadow-xl transform">
                <div className={`h-72 rounded-3xl transform ${rotate} bg-gradient-to-r` + colors}>
                </div>
            </div>

            {props.children}
        </div>

    );
}

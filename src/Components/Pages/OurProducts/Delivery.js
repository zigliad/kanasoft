import GradientView from 'Components/Other/GradientView';
import 'styles/main.css';

export default function Delivery() {
    return (
        <GradientView>
            <div className="h-96 w-4/5 lg:w-3/5 absolute lg:left-12 self-center lg:self-auto self-end float-right shadow-xl bg-white rounded-3xl p-8 md:p-12 overflow-auto">
                <p className="font-bold text-4xl">Delivery</p>
                <p className="font-medium text-lg text-gray-400 mt-2">
                    Tailwind CSS is the only framework that I\'ve seen scale on large teams. It’s easy to customize, adapts Tailwind CSS is the only framework that I\'ve seen scale on large teams. It’s easy to customize, adapts to any design and the build size is tiny.
                </p>
            </div>
        </GradientView>
    );
}

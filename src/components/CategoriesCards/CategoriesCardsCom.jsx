import { Link } from "react-router-dom";
import { AcademicCapIcon, HeartIcon, HomeIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline';

const categories = [
    { name: 'Medical', icon: <HeartIcon className="h-6 w-6 text-red-500" />, path: "/department/medical" },
    { name: 'Education', icon: <AcademicCapIcon className="h-6 w-6 text-blue-500" />, path: "/department/education" },
    { name: 'Meat', icon: <PlusIcon className="h-6 w-6 text-yellow-500" />, path: "/department/meat" },
    { name: 'Food', icon: <HomeIcon className="h-6 w-6 text-green-500" />, path: "/department/food" },
    { name: 'Shelter', icon: <UserIcon className="h-6 w-6 text-purple-500" />, path: "/department/shelter" },
];



export default function CategoryCardComp() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-6 p-6">
            {categories.map((category) => (
                <Link to={category.path} key={category.name}>
                    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50 cursor-pointer">
                        <div className="mb-4 p-3 bg-gray-100 rounded-full">
                            {category.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}


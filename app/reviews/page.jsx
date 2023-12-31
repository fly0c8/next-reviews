import Link from "next/link";
import Heading from "@/components/Heading";
export default function ReviewsPage() {
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className="flex flex-col gap-3">
                <li className="bg-white border w-80 shadow hover:shadow-xl">
                    <Link href="/reviews/hollow-knight">
                        <img src="/images/hollow-knight.jpg" alt="" width="320" height="180" className="rounded-t mb-2" />
                        <h2 className="font-semibold font-orbitron py-1 text-center">Hollow Knight</h2>
                    </Link>
                </li>
                <li className="bg-white border w-80 shadow hover:shadow-xl">
                    <Link href="/reviews/stardew-valley">
                        <img src="/images/stardew-valley.jpg" alt="" width="320" height="180" className="rounded-t mb-2" />
                        <h2 className="font-semibold font-orbitron py-1 text-center">Stardew Valley</h2>
                    </Link>
                </li>
            </ul>
        </>
    );
}

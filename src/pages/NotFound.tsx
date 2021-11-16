import { NotFoundCard } from "@/components/NotFoundCard";
import Link from "@mui/material/Link";

function NotFound() {
    return (
        <Link
            href="/"
            underline="none"
        >
            <NotFoundCard />
        </Link>
    );
}

export { NotFound };

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-ivory">
      <div className="max-w-md text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          404 Error
        </span>
        <h1 className="heading-hero text-3xl sm:text-4xl mt-2 text-charcoal">
          Page Not Found
        </h1>
        <p className="text-body mt-3 text-sm">
          The page you are looking for does not exist or has been moved. Return to Swasth Jeevan Wellness Center home page.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2 text-sm !py-3 !px-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}


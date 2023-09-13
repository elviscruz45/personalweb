import type { NextPage } from "next";
import Link from "next/link";
import { BlogList } from "../components/blogs";
import { PortFolioList } from "@/components/portfolios";
import { BaseLayout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Newest Blogs
            <Link legacyBehavior href="/blogs">
              <a className="text-sm ml-1 text-indigo-600">(See All)</a>
            </Link>
          </h2>

          {/* Blog List Starts */}
          <BlogList />
          {/* Blog List Ends */}

          <br></br>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Portfolios
            <Link legacyBehavior href="/portfolios">
              <a className="text-sm ml-1 text-indigo-600">(See All)</a>
            </Link>
          </h2>

          {/* Portfolio List Starts */}
          <PortFolioList />

          {/* Portfolio List Ends */}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
